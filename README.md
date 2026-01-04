# Portfolio Monorepo

A Turborepo monorepo containing a Next.js portfolio website with AI chatbot integration.

## Structure

```
portfolio/
├── apps/
│   └── web/              # Next.js portfolio website with AI chatbot
├── packages/             # Shared packages (for future use)
├── turbo.json           # Turborepo configuration
└── package.json         # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key (for chatbot functionality)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Create `apps/web/.env.local` file:

```bash
OPEN_ROUTER_API_KEY=your_OPEN_ROUTER_API_KEY_here
```

See [apps/web/ENV_SETUP.md](apps/web/ENV_SETUP.md) for detailed instructions.

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

Build the app for production:

```bash
npm run build
```

## Features

### Web App (apps/web)

Next.js portfolio website with:

- Modern UI with dark mode support
- AI chatbot powered by OpenAI
- Responsive design
- Stateless chat (no conversation memory)

**Development:** `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint all apps
- `npm run clean` - Clean all apps
- `npm run dev:web` - Start web app only

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project to Vercel
3. Set the `OPEN_ROUTER_API_KEY` environment variable in Vercel project settings
4. Deploy!

See [apps/web/ENV_SETUP.md](apps/web/ENV_SETUP.md) for environment variable configuration.
