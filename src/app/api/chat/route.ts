import { NextRequest, NextResponse } from "next/server";
import { PROFILE } from "../../../data/profile";
import { chatTools } from "./tools";
import { Skills } from "@/data/skills";
import { Projects } from "@/data/projects";
import { ContactInfo } from "@/data/contacts";

// Force Node.js runtime for OpenAI SDK compatibility
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { message, section } = body;

    // Validate message
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.OPEN_ROUTER_API_KEY) {
      return NextResponse.json(
        {
          error:
            "OpenAI API key not configured. Please set OPEN_ROUTER_API_KEY environment variable.",
        },
        { status: 500 }
      );
    }

    // Dynamically import OpenAI to avoid build-time issues
    const { default: OpenAI } = await import("openai");

    // Initialize OpenAI client with OpenRouter base URL
    const openai = new OpenAI({
      apiKey: process.env.OPEN_ROUTER_API_KEY,
      baseURL: process.env.OPEN_ROUTER_BASE_URL,
    });

    let aiResponse = "";
    let aiSection = section;

    if (section === "prompt") {
      const messages = [
        {
          role: "system",
          content: `You are a helpful AI assistant for ${PROFILE.name}'s portfolio website. You have access to tools to get profile information and the current time. Always use the get_profile tool to answer questions about the owner.`,
        },
        {
          role: "user",
          content: message,
        },
      ];

      const maxTurns = 5;
      let turnCount = 0;

      while (turnCount < maxTurns) {
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          messages: messages as any,
          tools: chatTools,
          tool_choice: "auto",
          temperature: 0.7,
          max_tokens: 500,
        });

        const responseMessage = completion.choices[0].message;

        // Add assistant message to history
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        messages.push(responseMessage as any);

        if (responseMessage.tool_calls) {
          // Handle tool calls
          for (const toolCall of responseMessage.tool_calls) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const functionName = (toolCall as any).function.name;
            // const functionArgs = JSON.parse(
            //   (toolCall as any).function.arguments
            // );
            let functionResult = "";

            if (functionName === "get_profile") {
              functionResult = JSON.stringify(PROFILE);
              aiSection = "me";
            } else if (functionName === "get_skills") {
              functionResult = JSON.stringify(Skills);
              aiSection = "skills";
            } else if (functionName === "get_projects") {
              functionResult = JSON.stringify(Projects);
              aiSection = "projects";
            } else if (functionName === "get_contacts") {
              functionResult = JSON.stringify(ContactInfo);
              aiSection = "contacts";
            } else if (functionName === "get_current_time") {
              functionResult = new Date().toLocaleString();
            }

            /**
             * Message is chat list
             */
            messages.push({
              tool_call_id: toolCall.id,
              role: "tool",
              name: functionName,
              content: functionResult,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any);
          }
          // Continue loop to get final response
          turnCount++;
        } else {
          // No tool calls, we have the final response
          aiResponse =
            responseMessage.content ||
            "I'm sorry, I couldn't generate a response.";
          break;
        }
      }

      if (!aiResponse && turnCount >= maxTurns) {
        aiResponse =
          "I apologize, but I'm having trouble processing your request right now (too many steps).";
      }
    } else {
      aiResponse = "AI chat is only available in the 'Prompt' section.";
    }

    // Return response
    return NextResponse.json({
      response: aiResponse,
      type: aiSection,
    });
  } catch (error: unknown) {
    console.error("Chat API Error:", error);

    // Handle specific OpenAI errors
    if (error && typeof error === "object" && "status" in error) {
      if (error.status === 401) {
        return NextResponse.json(
          { error: "Invalid OpenAI API key" },
          { status: 500 }
        );
      }

      if (error.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 }
        );
      }
    }

    // Generic error response
    return NextResponse.json(
      { error: "Failed to generate AI response. Please try again." },
      { status: 500 }
    );
  }
}
