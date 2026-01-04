# Vercel Deployment Guide

This guide will help you deploy your portfolio chatbot to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- OpenAI API key

## Step-by-Step Deployment

### 1. Push Code to GitHub

Make sure your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Migrate to Vercel-compatible architecture"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration

### 3. Configure Environment Variables

Before deploying, add your OpenAI API key:

1. In the project setup page, find "Environment Variables" section
2. Add the following variable:
   - **Name**: `OPEN_ROUTER_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-`)
   - **Environment**: Select all (Production, Preview, Development)

### 4. Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## Post-Deployment

### Testing Your Chatbot

1. Visit your deployed site
2. Type a message in the chat input
3. Verify the AI responds correctly

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Chatbot Not Responding

- Check that `OPEN_ROUTER_API_KEY` is set in Vercel environment variables
- Verify the API key is valid and has credits
- Check function logs in Vercel dashboard

### Rate Limiting

- OpenAI has rate limits based on your plan
- Consider implementing rate limiting on your API route
- Monitor usage in OpenAI dashboard

## Environment Variables Reference

| Variable              | Description                     | Required |
| --------------------- | ------------------------------- | -------- |
| `OPEN_ROUTER_API_KEY` | Your OpenAI API key for chatbot | Yes      |

## Updating Your Deployment

Vercel automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Update chatbot"
git push origin main
```

Vercel will automatically rebuild and redeploy your site.

## Cost Considerations

- **Vercel**: Free tier includes unlimited deployments and bandwidth
- **OpenAI**: Pay-per-use based on tokens consumed
  - Monitor usage at [platform.openai.com/usage](https://platform.openai.com/usage)
  - Set usage limits to avoid unexpected charges

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- OpenAI Documentation: [platform.openai.com/docs](https://platform.openai.com/docs)
