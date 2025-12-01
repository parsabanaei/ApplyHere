# Vercel Deployment Guide

## 🚀 Quick Deploy

Your ApplyHere.ai application is now ready for Vercel deployment!

## Method 1: One-Click Deploy (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click "Import Git Repository"
4. Select `parsabanaei/ApplyHere`
5. Click "Deploy"

That's it! Vercel will:
- Auto-detect Next.js
- Install dependencies
- Build the project
- Deploy to production

## Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd "/Users/parsabanaei/Development/CSUF/Fall 2025/CPSC 349 Web Front-End Engineering/ApplyHereAI"
vercel

# Follow the prompts
```

## What Vercel Will Do

✅ Detect Next.js 15 framework  
✅ Run `npm install`  
✅ Run `npm run build`  
✅ Deploy to global CDN  
✅ Provide HTTPS domain  
✅ Enable automatic deployments on push  

## Build Configuration

Already configured in `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## Environment Variables

**None required!** 🎉

This is a 100% frontend application. All data is stored in the browser's LocalStorage.

## Post-Deployment

After deployment, you'll get:
- Production URL: `https://apply-here-xxx.vercel.app`
- Automatic HTTPS
- Global CDN
- Instant updates on git push

## Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration steps

## Automatic Deployments

Every push to `main` branch will trigger:
- New build
- Automatic deployment
- Preview URL for testing

## Performance

Expected Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 100

## Troubleshooting

If build fails:
1. Check build logs in Vercel dashboard
2. Verify `package.json` has all dependencies
3. Ensure Next.js 15 compatibility

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Your app is production-ready and optimized for Vercel!** 🚀

