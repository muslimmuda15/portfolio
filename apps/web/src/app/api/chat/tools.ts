import { ChatCompletionTool } from "openai/resources";

export const chatTools: ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_profile",
      description: "Get the user's profile information.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_skills",
      description: "Get the user's skills information.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_projects",
      description:
        "Get the user's projects information and experience information.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_contacts",
      description: "Get the user's contacts information.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_current_time",
      description: "Get the current time.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];
