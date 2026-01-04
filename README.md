# Portfolio Monorepo

A Turborepo monorepo containing a Next.js portfolio website and a Python AI backend.

## Structure

```
portfolio/
├── apps/
│   ├── web/              # Next.js portfolio website
│   └── ai-backend/       # Python FastAPI AI application
├── packages/             # Shared packages (for future use)
├── turbo.json           # Turborepo configuration
└── package.json         # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up Python backend:

```bash
cd apps/ai-backend
python3 -m venv venv
source venv/bin/activate  # On Linux/Mac
# or venv\Scripts\activate on Windows
pip install -r requirements.txt
cd ../..
```

### Development

Run all apps concurrently:

```bash
npm run dev
```

Or run apps individually:

**Web app only:**

```bash
npm run dev:web
# or
cd apps/web && npm run dev
```

**AI backend only:**

```bash
npm run dev:ai
# or
cd apps/ai-backend && source venv/bin/activate && uvicorn main:app --reload --port 8000
```

### Build

Build all apps:

```bash
npm run build
```

## Apps

### Web (apps/web)

Next.js portfolio website with:

- Modern UI with dark mode support
- AI chat integration
- Responsive design

**Development:** `http://localhost:3000`

### AI Backend (apps/ai-backend)

Python FastAPI backend providing:

- AI chat endpoints
- Conversation management
- OpenAI integration (optional)

**Development:** `http://localhost:8000`
**API Docs:** `http://localhost:8000/docs`

## Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps
- `npm run lint` - Lint all apps
- `npm run clean` - Clean all apps
