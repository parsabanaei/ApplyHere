# ApplyHere.ai 🚀

> Your AI Powered Job Application Assistant

ApplyHere.ai is a comprehensive, frontend only Next.js 15 application designed to streamline the job search process with intelligent resume building, application tracking, and interview preparation tools.

## 🌟 Features

- **Smart Resume & Cover Letter Builder** - Create ATS friendly resumes with multiple professional templates
- **Resume vs Job Description Comparator** - Compare your resume against job descriptions with keyword matching
- **Interview Preparation Dashboard** - Access common questions, tips, and company research tools
- **Application Tracker** - Kanban-style board to manage your job applications
- **Follow Up & Thank-You Templates** - Pre written, customizable templates
- **Company Insights** - Research tools for target companies
- **Job Alert Feed** - Mock job listings with filtering and search

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: NextUI
- **Animations**: Framer Motion
- **State Management**: React Context + LocalStorage
- **TypeScript**: Full type safety
- **PDF Export**: html2pdf.js

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:parsabanaei/ApplyHere.git
cd ApplyHere

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📦 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/parsabanaei/ApplyHere)

### Manual Deployment

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Environment Variables

No environment variables are required! This is a 100% frontend application using LocalStorage for data persistence.

## 📁 Project Structure

```
ApplyHere/
├── app/                      # Next.js App Router pages
│   ├── auth/                # Authentication pages
│   ├── dashboard/           # Dashboard pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/              # React components
│   ├── landing/            # Landing page components
│   ├── dashboard/          # Dashboard components
│   ├── resume/             # Resume builder components
│   ├── comparator/         # Resume comparator components
│   ├── tracker/            # Application tracker components
│   └── ui/                 # Reusable UI components
├── contexts/               # React contexts
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## 🎨 Design System

- **Color Palette**: Enterprise-level slate and indigo
- **Typography**: Inter font family
- **Light & Dark Mode**: Full theme support
- **Responsive**: Mobile first design

## ✨ Key Features Details

### Resume Builder

- ATS-friendly formatting
- Multiple professional templates
- Auto-generated cover letters
- PDF export functionality
- Real-time preview

### Resume Comparator

- Keyword extraction and matching
- Visual highlighting of matches/misses
- Match percentage calculation
- TXT file upload support

### Application Tracker

- Kanban board interface
- Drag-and-drop functionality
- Status tracking (Wishlist → Accepted)
- Notes and date tracking

### Interview Prep

- Common interview questions with sample answers
- Appearance and behavior tips
- Company research tools
- Category-based organization

## 🔒 Privacy & Data

- **100% Client-Side**: All data stored in browser LocalStorage
- **No Backend**: No server, no database, no data collection
- **Private**: Your data never leaves your browser
- **Portable**: Export your data anytime

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

This is a class project for CPSC 349 - Web Front-End Engineering at CSUF.

## 📄 License

Educational project - Fall 2025

## 👨‍💻 Author

**Parsa Banaei & Rasha Boura**

- GitHub: [@parsabanaei](https://github.com/parsabanaei)

- GitHub: [@rashaboura](https://github.com/rashaboura)

## 🙏 Acknowledgments

- CSUF CPSC 349 Web Front-End Engineering
- Fall 2025

---

**Made with ❤️ for job seekers everywhere**
