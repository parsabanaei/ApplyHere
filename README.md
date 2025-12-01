# ApplyHere.ai - AI-Powered Job Application Assistant

A modern, full-featured Next.js web application that helps job seekers streamline their application process with AI-powered tools, resume building, application tracking, and more.

## Features

### 🎨 **Production-Grade Landing Page**
- Clean, modern hero section with animations
- Feature showcase with icons
- Testimonials section
- Professional footer with navigation

### 🔐 **Authentication System**
- Login and registration pages
- Client-side authentication using LocalStorage
- Protected dashboard routes
- Session persistence

### 📊 **Comprehensive Dashboard**
- Overview with statistics
- Recent activity feed
- Quick action shortcuts
- Collapsible sidebar navigation
- Theme toggle (Light/Dark mode)

### 📝 **Resume & Cover Letter Builder**
- Split-panel editor with live preview
- Form-based resume input
- Auto-generated cover letters
- PDF export functionality
- LocalStorage persistence

### 🔍 **Resume Comparator**
- Dual-panel text comparison
- Keyword extraction and matching
- Match percentage calculation
- Missing keyword identification
- Suggestions for improvement

### 💼 **Interview Preparation**
- Common interview questions by category
- Sample answer approaches
- Interview tips and best practices
- Company research notes
- Progress tracking

### 📧 **Letter Templates**
- Pre-written professional templates
- Thank-you letters
- Follow-up emails
- Networking introductions
- Customizable placeholders
- Copy to clipboard functionality

### 📋 **Application Tracker (Kanban Board)**
- Drag-and-drop interface (visual only, fully functional via status changes)
- Six status columns: Wishlist, Applied, Interviewing, Offer, Rejected, Accepted
- Job cards with details
- Add, edit, and delete applications
- LocalStorage persistence

### 🏢 **Company Insights**
- Research companies with detailed information
- Industry filtering
- Search functionality
- Company culture and news
- Modal detail view

### 🔔 **Job Alerts Feed**
- Browse curated job listings
- Filter by job type and location
- Search functionality
- Detailed job descriptions
- Save jobs to tracker

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: NextUI (now deprecated, but functional)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **PDF Export**: html2pdf.js
- **Date Handling**: date-fns
- **State Management**: React Context + LocalStorage

## Design System

### Color Palette

**Light Theme:**
- Primary: Slate blue (#475569, #64748b)
- Accent: Indigo (#4f46e5, #6366f1)
- Background: White, Light grays
- Text: Dark slate shades

**Dark Theme:**
- Primary: Light slate (#cbd5e1, #94a3b8)
- Accent: Light indigo (#818cf8, #a5b4fc)
- Background: Dark slate shades
- Text: Light grays

### Typography
- Font: Inter (system fallback)
- Clean, professional hierarchy
- Generous whitespace

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### First Time Setup
1. Visit the landing page
2. Click "Sign Up" to create an account
3. Enter your name, email, and password
4. You'll be automatically logged in and redirected to the dashboard

### Building Your Resume
1. Navigate to "Resume Builder" from the sidebar
2. Fill in your personal information
3. Add work experience entries
4. Add your skills (comma-separated)
5. Preview updates in real-time
6. Export as PDF when ready

### Comparing Your Resume
1. Go to "Resume Comparator"
2. Paste your resume text in the left panel
3. Paste the job description in the right panel
4. Click "Compare" to see the analysis
5. Review matching and missing keywords
6. Follow the suggestions to improve your resume

### Tracking Applications
1. Navigate to "Job Tracker"
2. Click "Add Application" or the + button on any column
3. Fill in job details
4. Applications are organized by status
5. Edit or delete as needed

### Preparing for Interviews
1. Go to "Interview Prep"
2. Browse common questions by category
3. Mark questions as reviewed
4. Read interview tips
5. Add company research notes

### Using Templates
1. Navigate to "Templates"
2. Choose a template type
3. Click "Use Template"
4. Customize the placeholders
5. Copy to clipboard when ready

### Browsing Jobs
1. Go to "Job Alerts"
2. Use filters to narrow down results
3. Click on a job to view details
4. Save interesting jobs to your tracker

## Data Persistence

All data is stored locally in your browser using LocalStorage:
- User authentication
- Resume data
- Applications
- Interview prep progress
- Custom templates

**Note:** Clearing browser data will delete all stored information.

## Project Structure

```
ApplyHereAI/
├── app/                      # Next.js App Router pages
│   ├── auth/                 # Authentication pages
│   ├── dashboard/            # Protected dashboard pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── landing/              # Landing page components
│   ├── dashboard/            # Dashboard components
│   ├── resume/               # Resume builder components
│   ├── comparator/           # Resume comparator components
│   ├── interview/            # Interview prep components
│   ├── tracker/              # Application tracker components
│   ├── templates/            # Template components
│   ├── insights/             # Company insights components
│   ├── jobs/                 # Job alerts components
│   └── ui/                   # Reusable UI components
├── contexts/                 # React contexts
│   ├── AuthContext.tsx       # Authentication state
│   └── ThemeContext.tsx      # Theme state
├── hooks/                    # Custom React hooks
│   ├── useLocalStorage.ts
│   └── useTheme.ts
├── lib/                      # Utility functions
│   ├── storage.ts            # LocalStorage utilities
│   ├── mockData.ts           # Demo data
│   ├── keywordExtractor.ts   # Resume comparison logic
│   └── pdfExport.ts          # PDF generation
├── types/                    # TypeScript type definitions
│   └── index.ts
└── tailwind.config.ts        # Tailwind configuration
```

## Key Features Explained

### Theme Switching
The app supports both light and dark themes. Click the theme toggle button in the navigation to switch between modes. Your preference is saved to LocalStorage.

### Responsive Design
The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

### Animations
Smooth animations powered by Framer Motion:
- Page transitions
- Card hover effects
- Modal animations
- Button interactions

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Known Limitations

1. **No Real Backend**: All data is client-side only
2. **No Real Authentication**: Authentication is simulated
3. **No Drag-and-Drop**: Kanban board uses status changes instead of physical dragging
4. **Static Job Data**: Job listings are mock data, not live API
5. **No Email Sending**: Templates must be copied manually

## Future Enhancements

- Real backend integration
- User authentication with JWT
- Real-time job API integration
- Actual drag-and-drop functionality
- Email integration for templates
- Resume templates with different styles
- Interview scheduling
- Salary negotiation tools

## Credits

Inspired by [Huntr.co](https://huntr.co) for UI/UX design patterns.

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

## License

This is a demonstration project for educational purposes.

---

## Getting Started with Development

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Start building!

For production build:
```bash
npm run build
npm start
```

## Contributing

This is a demonstration project, but suggestions and improvements are welcome!

---

**ApplyHere.ai** - Streamline your job search, land your dream job! 🚀

