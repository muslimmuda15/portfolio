import { NextRequest, NextResponse } from "next/server";

// Force Node.js runtime for OpenAI SDK compatibility
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { message } = body;

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
    // OpenRouter API keys start with 'sk-or-v1-'
    const openai = new OpenAI({
      apiKey: process.env.OPEN_ROUTER_API_KEY,
      baseURL: process.env.OPEN_ROUTER_BASE_URL,
    });

    // Call OpenAI API (stateless - no conversation history)
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant for Rachmad AF's portfolio website. You can answer questions about the portfolio, projects, skills, and provide general assistance. Be friendly, concise, and professional.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Extract response
    const aiResponse =
      completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't generate a response.";

    // Return response
    return NextResponse.json({
      response: aiResponse,
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
