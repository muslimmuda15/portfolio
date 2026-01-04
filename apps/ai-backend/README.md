# Python AI Backend

A FastAPI-based AI chatbot backend for the portfolio application.

## Setup

1. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Linux/Mac
# or
venv\Scripts\activate  # On Windows
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Configure environment variables:

```bash
cp env.example .env
# Edit .env and add your API keys if needed
```

4. Run the server:

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

## API Endpoints

- `GET /health` - Health check endpoint
- `POST /api/chat` - Send a message and get AI response
- `GET /api/conversations/{conversation_id}` - Get conversation history

## Development

To extend the AI functionality:

1. Edit `ai_service.py` to add your AI logic
2. Uncomment the OpenAI integration code if using OpenAI API
3. Add your `OPENAI_API_KEY` to `.env` file
