# ApplyHere.ai

A modern, production-ready Next.js web application that visually simulates a complete professional job application assistant. This platform demonstrates how automation, personalization, and clean design can simplify the job application journey while keeping the applicant fully in control.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![React](https://img.shields.io/badge/React-19.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🚀 Features

### 1. Smart Resume & Cover Letter Builder
- Interactive form-based resume creation
- Live preview with professional formatting
- Export to PDF functionality
- Data persistence using Local Storage
- Dual-panel layout for easy editing

### 2. Resume vs Job Description Comparator
- Paste and compare your resume against job descriptions
- Intelligent keyword extraction and matching
- Visual highlighting of matching/missing keywords
- Match score calculation
- Actionable insights for resume improvement

### 3. Interview Preparation Dashboard
- Curated list of common interview questions with tips
- Interactive question review tracking
- Appearance and presentation tips
- Company research checklist
- General interview best practices guide

### 4. Follow-Up & Thank-You Templates
- 8 pre-written professional email templates
- Customizable template editor
- One-click copy to clipboard
- Categories: Thank You, Follow-Up, Offer Response, Networking, Withdrawal
- Email best practices guide

### 5. Application Tracker Board
- Kanban-style board with drag-and-drop
- Four stages: Applied, Interviewing, Offer, Rejected
- Add, edit, and delete applications
- Track company, position, salary, contacts, and notes
- Visual progress statistics

### 6. Company Insights Preview
- Mock company profiles with detailed information
- Company culture summaries
- Tech stack information
- Benefits and perks overview
- Recent company updates
- Search and filter functionality

### 7. Job Alert Feed
- Personalized job recommendations
- Match score calculation
- Save jobs for later review
- Filter by new/saved jobs
- Detailed job descriptions with requirements and benefits
- One-click apply (simulated)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: HeroUI (NextUI successor)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Drag & Drop**: react-dnd with HTML5 backend
- **PDF Export**: html2pdf.js
- **State Management**: React Hooks + Local Storage
- **Theme**: next-themes for dark/light mode support

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ApplyHereAI
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
ApplyHereAI/
├── app/
│   ├── dashboard/
│   │   ├── comparator/          # Resume comparison tool
│   │   ├── companies/           # Company insights
│   │   ├── interview-prep/      # Interview preparation
│   │   ├── job-alerts/          # Job feed
│   │   ├── resume-builder/      # Resume builder
│   │   ├── templates/           # Email templates
│   │   ├── tracker/             # Application tracker
│   │   ├── layout.tsx           # Dashboard layout
│   │   └── page.tsx             # Dashboard home
│   ├── auth/
│   │   └── page.tsx             # Login/Register
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   ├── providers.tsx            # Theme & UI providers
│   └── globals.css              # Global styles
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🎨 Key Design Decisions

### 1. **No Backend Required**
- All data stored in browser Local Storage
- Perfect for demonstration and prototyping
- Easy deployment without infrastructure costs

### 2. **Modern UI/UX**
- Clean, professional design using HeroUI components
- Smooth animations with Framer Motion
- Responsive layout for all screen sizes
- Intuitive navigation and user flow

### 3. **Production-Ready Code**
- TypeScript for type safety
- Component-based architecture
- Reusable patterns and best practices
- Comprehensive error handling

### 4. **Feature-Rich Simulation**
- Realistic data and workflows
- Interactive elements throughout
- Visual feedback for user actions
- Professional templates and content

## 🔐 Authentication

The authentication is simulated for demonstration purposes:
- Any email/password combination will work
- User data stored in Local Storage
- Automatic redirect to dashboard after login
- Logout clears session data

## 📱 Pages & Routes

- `/` - Landing page with features showcase
- `/auth` - Login and registration
- `/dashboard` - Dashboard overview
- `/dashboard/resume-builder` - Resume creation tool
- `/dashboard/comparator` - Resume comparison
- `/dashboard/interview-prep` - Interview preparation
- `/dashboard/templates` - Email templates
- `/dashboard/tracker` - Application tracker
- `/dashboard/companies` - Company research
- `/dashboard/job-alerts` - Job recommendations

## 🎯 Use Cases

1. **Job Seekers**: Streamline application process
2. **Career Coaches**: Demonstrate best practices
3. **Recruiters**: Understand candidate perspective
4. **Educators**: Teach job search strategies
5. **Portfolio**: Showcase development skills

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy
```

### Docker
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Components
All components use HeroUI which is fully customizable via theme props.

### Content
Update mock data in each page component to customize:
- Job alerts
- Company profiles
- Interview questions
- Email templates

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

## 🎓 Learning Resources

This project demonstrates:
- Next.js App Router patterns
- TypeScript best practices
- Component composition
- State management with hooks
- Drag-and-drop interfaces
- PDF generation
- Responsive design
- Animation techniques
- Local Storage persistence

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

