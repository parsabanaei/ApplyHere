# Quick Start Guide

## Getting Started in 3 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### First Steps

1. **Landing Page**
   - Review the features and design
   - Click "Get Started" or "Login" button

2. **Authentication**
   - Use any email/password (demo mode)
   - Click "Sign In" or "Create Account"

3. **Dashboard**
   - Explore the overview with quick actions
   - Navigate using the sidebar menu

### Feature Tour

#### 1. Resume Builder (2 min)
- Click "Resume Builder" in sidebar
- Fill in your information in the forms
- Watch the live preview update
- Click "Export PDF" to download

#### 2. Resume Comparator (1 min)
- Click "Resume Comparator"
- Paste your resume text
- Paste a job description
- Click "Compare Documents"
- Review keyword matches and suggestions

#### 3. Interview Prep (2 min)
- Click "Interview Prep"
- Expand common questions
- Mark questions as reviewed
- Review appearance tips and company research

#### 4. Email Templates (1 min)
- Click "Templates"
- Browse available templates
- Click any template to view/edit
- Copy to clipboard

#### 5. Application Tracker (2 min)
- Click "Application Tracker"
- Click "Add Application"
- Fill in job details
- Drag cards between columns (Applied → Interviewing → Offer)

#### 6. Company Insights (1 min)
- Click "Company Insights"
- Browse company cards
- Click any company for detailed view
- Review culture, tech stack, and benefits

#### 7. Job Alerts (2 min)
- Click "Job Alerts"
- Browse personalized recommendations
- Save interesting jobs
- Click "View Details" for full information

## Demo Credentials

Since this is a demonstration app, authentication is simulated:
- **Email**: any@email.com (or any email)
- **Password**: any password
- All data is stored locally in your browser

## Key Features to Try

### Drag & Drop
- In Application Tracker, drag job cards between columns
- Experience smooth animations and state updates

### Live Preview
- In Resume Builder, see instant updates as you type
- Professional formatting applied automatically

### Keyword Matching
- In Comparator, see intelligent highlighting
- Green = matches, Yellow = missing keywords

### Local Storage
- All your data persists between sessions
- Try refreshing the page - data remains

### Responsive Design
- Resize your browser window
- Works great on mobile, tablet, and desktop

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel deploy
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Or specify different port
PORT=3001 npm run dev
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run build

# Fix linting issues
npm run lint
```

## Next Steps

1. Customize the theme in `tailwind.config.ts`
2. Update mock data with your own content
3. Add your branding and logo
4. Deploy to production
5. Share with others!

## Support

- Check README.md for detailed documentation
- Review component code for implementation details
- Open issues on GitHub for bugs or questions

---

**Enjoy exploring ApplyHere.ai! 🚀**

