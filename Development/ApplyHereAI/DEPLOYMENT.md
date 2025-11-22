# Deployment Guide

## Quick Deploy Options

### Vercel (Recommended)

**Method 1: CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link project and deploy
```

**Method 2: GitHub Integration**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Next.js configuration
6. Click "Deploy"

**Environment Variables (if needed):**
- No environment variables required for basic deployment
- All data stored in browser Local Storage

---

### Netlify

**Method 1: CLI**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

**Method 2: GitHub Integration**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect to GitHub
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

---

### Docker

**Dockerfile** (already created):
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Build and Run:**
```bash
# Build image
docker build -t applyhereai .

# Run container
docker run -p 3000:3000 applyhereai

# Access at http://localhost:3000
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

---

### AWS (EC2)

1. **Launch EC2 Instance**
   - Ubuntu 22.04 LTS
   - t2.micro (free tier eligible)
   - Open port 3000 in security group

2. **SSH into instance:**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```

3. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone and deploy:**
   ```bash
   git clone <your-repo-url>
   cd ApplyHereAI
   npm install
   npm run build
   npm start
   ```

5. **Use PM2 for process management:**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "applyhereai" -- start
   pm2 startup
   pm2 save
   ```

---

### Render

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - Name: applyhereai
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. Click "Create Web Service"

---

### Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway auto-detects Next.js
6. Click "Deploy"

---

### DigitalOcean App Platform

1. Go to DigitalOcean
2. Create new app
3. Connect GitHub repository
4. Configure:
   - Type: Web Service
   - Build Command: `npm run build`
   - Run Command: `npm start`
5. Click "Launch App"

---

## Custom Domain Setup

### Vercel
1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as instructed

### Netlify
1. Go to site settings
2. Click "Domain management"
3. Add custom domain
4. Follow DNS configuration steps

### Other Platforms
- Similar process: add domain in platform settings
- Update DNS A/CNAME records to point to platform

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # If adding images, use Next.js Image component
   import Image from 'next/image'
   ```

2. **Enable Compression**
   - Vercel/Netlify: automatic
   - Custom server: add compression middleware

3. **Analyze Bundle**
   ```bash
   npm run build
   # Check .next/analyze output
   ```

### After Deployment

1. **Monitor Performance**
   - Use Vercel Analytics (free)
   - Or Google Analytics
   - Or Plausible Analytics

2. **Enable Caching**
   - Static assets: cached automatically
   - API routes: add cache headers if added

3. **CDN Benefits**
   - Vercel/Netlify provide global CDN
   - Assets served from nearest location

---

## Environment-Specific Configuration

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

### Staging (if needed)
1. Create separate branch
2. Deploy to separate Vercel/Netlify project
3. Test before promoting to production

---

## Monitoring & Analytics

### Built-in Next.js Analytics
```typescript
// In app/layout.tsx (if using Vercel)
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Error Tracking (optional)
- Sentry: for error monitoring
- LogRocket: for session replay
- Bugsnag: for error reporting

---

## Backup & Data

Since this app uses Local Storage:
- No database backups needed
- Users can export their data
- Consider adding data export feature if needed

---

## Security Considerations

1. **Headers** (already configured by hosting platforms):
   - X-Frame-Options
   - X-Content-Type-Options
   - X-XSS-Protection

2. **HTTPS**: Automatic on all modern platforms

3. **Content Security Policy**: Add if needed

---

## Rollback Strategy

### Vercel/Netlify
- Every deployment is immutable
- Easy rollback to previous version in dashboard
- Keep previous deployments active

### Docker
- Tag images with version numbers
- Keep previous images available
- Quick rollback by switching tags

### Manual Servers
- Keep backup of previous build
- Use Git tags for version control
- Document rollback procedure

---

## CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
      - run: npm ci
      - run: npm run build
      - run: npm test (if you add tests)
      # Add deployment step for your platform
```

---

## Cost Estimates

- **Vercel**: Free tier sufficient for demo
- **Netlify**: Free tier sufficient
- **Railway**: ~$5/month
- **DigitalOcean**: ~$5/month
- **AWS EC2**: Free tier for 12 months, then ~$10/month

---

## Post-Deployment Checklist

- [ ] Application loads correctly
- [ ] All pages accessible
- [ ] Responsive on mobile/tablet
- [ ] Local Storage working
- [ ] Drag & drop functional
- [ ] PDF export works
- [ ] Animations smooth
- [ ] No console errors
- [ ] Custom domain configured (if applicable)
- [ ] Analytics installed (optional)
- [ ] Performance acceptable (Lighthouse score)

---

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review build logs
3. Test locally first
4. Open issue on GitHub

---

**Your app is ready to deploy! Choose your platform and follow the steps above. 🚀**

