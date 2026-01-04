import os
import uuid
from typing import Optional, Dict, List
from datetime import datetime

class AIService:
    """
    AI Service for handling chat interactions.
    This is a simple implementation that can be extended with:
    - OpenAI API integration
    - Local LLM models
    - Custom AI logic
    """
    
    def __init__(self):
        self.conversations: Dict[str, List[Dict]] = {}
        self.openai_api_key = os.getenv("OPENAI_API_KEY")
        
    async def generate_response(self, message: str, conversation_id: Optional[str] = None) -> Dict:
        """
        Generate AI response to user message.
        
        Args:
            message: User's input message
            conversation_id: Optional conversation ID for context
            
        Returns:
            Dictionary with response and conversation_id
        """
        # Create new conversation ID if not provided
        if not conversation_id:
            conversation_id = str(uuid.uuid4())
            self.conversations[conversation_id] = []
        
        # Store user message
        self.conversations[conversation_id].append({
            "role": "user",
            "content": message,
            "timestamp": datetime.now().isoformat()
        })
        
        # Generate AI response
        # TODO: Replace with actual AI implementation (OpenAI, local LLM, etc.)
        ai_response = await self._generate_ai_response(message, conversation_id)
        
        # Store AI response
        self.conversations[conversation_id].append({
            "role": "assistant",
            "content": ai_response,
            "timestamp": datetime.now().isoformat()
        })
        
        return {
            "response": ai_response,
            "conversation_id": conversation_id
        }
    
    async def _generate_ai_response(self, message: str, conversation_id: str) -> str:
        """
        Internal method to generate AI response.
        This is a placeholder - replace with actual AI implementation.
        """
        # Simple rule-based responses for demonstration
        message_lower = message.lower()
        
        if "hello" in message_lower or "hi" in message_lower:
            return "Hello! I'm the AI assistant for this portfolio. How can I help you today?"
        
        elif "name" in message_lower:
            return "I'm an AI assistant built with Python and FastAPI. I'm here to help answer questions about this portfolio!"
        
        elif "project" in message_lower:
            return "This portfolio showcases various projects including web development, AI applications, and more. Would you like to know about a specific project?"
        
        elif "skill" in message_lower:
            return "The developer has skills in Python, JavaScript/TypeScript, React, Next.js, FastAPI, and AI/ML technologies. What would you like to know more about?"
        
        elif "contact" in message_lower:
            return "You can reach out through the contact section of this portfolio. Would you like me to guide you there?"
        
        else:
            return f"Thanks for your message: '{message}'. This is a demo AI response. In a production environment, this would be powered by OpenAI API or a local LLM model."
    
    def get_conversation_history(self, conversation_id: str) -> List[Dict]:
        """
        Retrieve conversation history by ID.
        
        Args:
            conversation_id: The conversation ID
            
        Returns:
            List of messages in the conversation
        """
        if conversation_id not in self.conversations:
            raise ValueError(f"Conversation {conversation_id} not found")
        
        return self.conversations[conversation_id]
    
    # TODO: Add OpenAI integration
    # async def _generate_openai_response(self, message: str, conversation_id: str) -> str:
    #     """Generate response using OpenAI API"""
    #     if not self.openai_api_key:
    #         raise ValueError("OpenAI API key not configured")
    #     
    #     from openai import AsyncOpenAI
    #     client = AsyncOpenAI(api_key=self.openai_api_key)
    #     
    #     # Get conversation history for context
    #     history = self.conversations.get(conversation_id, [])
    #     messages = [{"role": msg["role"], "content": msg["content"]} for msg in history]
    #     messages.append({"role": "user", "content": message})
    #     
    #     response = await client.chat.completions.create(
    #         model="gpt-3.5-turbo",
    #         messages=messages
    #     )
    #     
    #     return response.choices[0].message.content
