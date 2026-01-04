# Environment Variables

This project requires the following environment variables to be set:

## Required Variables

### `OPEN_ROUTER_API_KEY`

Your OpenAI API key for the chatbot functionality.

**How to get it:**

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (you won't be able to see it again!)

**Local Development:**
Create a `.env.local` file in `apps/web/` directory:

```bash
OPEN_ROUTER_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

**Vercel Deployment:**

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add `OPEN_ROUTER_API_KEY` with your API key value
4. Make sure it's available for all environments (Production, Preview, Development)

## Security Notes

- ⚠️ **Never commit `.env.local` to git** - it's already in `.gitignore`
- 🔒 Keep your API keys secret and secure
- 💰 Monitor your OpenAI API usage to avoid unexpected charges
