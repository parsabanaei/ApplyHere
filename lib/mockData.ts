import {
  JobApplication,
  InterviewQuestion,
  InterviewTip,
  Template,
  CompanyInsight,
  JobAlert,
} from "@/types";

// Mock Job Applications
export const mockApplications: JobApplication[] = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp",
    status: "interviewing",
    dateApplied: new Date("2024-11-15"),
    salary: "$120k - $150k",
    location: "San Francisco, CA",
    notes: "Initial interview scheduled for next week",
    tags: ["React", "TypeScript", "Remote"],
  },
  {
    id: "2",
    jobTitle: "Full Stack Engineer",
    company: "StartupXYZ",
    status: "applied",
    dateApplied: new Date("2024-11-20"),
    salary: "$100k - $130k",
    location: "New York, NY",
    tags: ["Node.js", "React", "AWS"],
  },
  {
    id: "3",
    jobTitle: "Software Engineer",
    company: "BigTech Inc",
    status: "wishlist",
    dateApplied: new Date("2024-11-25"),
    location: "Remote",
    tags: ["Python", "Machine Learning"],
  },
];

// Mock Interview Questions
export const mockInterviewQuestions: InterviewQuestion[] = [
  {
    id: "1",
    question: "Tell me about yourself",
    category: "general",
    sampleAnswer:
      "Focus on your professional background, key achievements, and what you're looking for in your next role.",
    reviewed: false,
  },
  {
    id: "2",
    question: "Describe a challenging project you've worked on",
    category: "behavioral",
    sampleAnswer:
      "Use the STAR method: Situation, Task, Action, Result. Be specific about your contributions.",
    reviewed: false,
  },
  {
    id: "3",
    question: "How do you handle tight deadlines?",
    category: "situational",
    sampleAnswer:
      "Discuss prioritization, communication, and time management strategies.",
    reviewed: false,
  },
  {
    id: "4",
    question: "Explain the difference between var, let, and const",
    category: "technical",
    sampleAnswer:
      "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
    reviewed: false,
  },
];

// Mock Interview Tips
export const mockInterviewTips: InterviewTip[] = [
  {
    id: "1",
    title: "Dress Professionally",
    description:
      "Dress one level above the company's dress code. When in doubt, business casual is safe.",
    category: "appearance",
  },
  {
    id: "2",
    title: "Arrive 10-15 Minutes Early",
    description:
      "Being punctual shows respect for the interviewer's time and reduces stress.",
    category: "preparation",
  },
  {
    id: "3",
    title: "Maintain Eye Contact",
    description:
      "Good eye contact demonstrates confidence and engagement in the conversation.",
    category: "communication",
  },
  {
    id: "4",
    title: "Send a Thank You Email Within 24 Hours",
    description:
      "Express gratitude and reiterate your interest in the position.",
    category: "follow-up",
  },
];

// Mock Templates
export const mockTemplates: Template[] = [
  {
    id: "1",
    type: "thank-you",
    title: "Post-Interview Thank You",
    content: `Dear [INTERVIEWER_NAME],

Thank you for taking the time to meet with me today to discuss the [POSITION] role at [COMPANY]. I enjoyed learning more about the team and the exciting projects you're working on.

Our conversation reinforced my enthusiasm for this opportunity, particularly [SPECIFIC_TOPIC_DISCUSSED]. I'm confident that my experience in [RELEVANT_SKILL] would allow me to contribute effectively to your team.

Please don't hesitate to reach out if you need any additional information. I look forward to hearing from you regarding the next steps.

Best regards,
[YOUR_NAME]`,
    placeholders: [
      "INTERVIEWER_NAME",
      "POSITION",
      "COMPANY",
      "SPECIFIC_TOPIC_DISCUSSED",
      "RELEVANT_SKILL",
      "YOUR_NAME",
    ],
    customizable: true,
  },
  {
    id: "2",
    type: "follow-up",
    title: "Follow-Up After Application",
    content: `Dear [HIRING_MANAGER_NAME],

I hope this email finds you well. I recently applied for the [POSITION] position at [COMPANY] and wanted to follow up on my application.

I'm very excited about the opportunity to join your team and contribute my [X] years of experience in [FIELD/SKILL]. I believe my background in [SPECIFIC_EXPERIENCE] aligns well with the requirements outlined in the job description.

I would welcome the opportunity to discuss how my skills and experience could benefit [COMPANY]. Please let me know if you need any additional information from me.

Thank you for your consideration.

Best regards,
[YOUR_NAME]`,
    placeholders: [
      "HIRING_MANAGER_NAME",
      "POSITION",
      "COMPANY",
      "X",
      "FIELD/SKILL",
      "SPECIFIC_EXPERIENCE",
      "YOUR_NAME",
    ],
    customizable: true,
  },
  {
    id: "3",
    type: "networking",
    title: "Networking Introduction",
    content: `Hi [CONTACT_NAME],

I hope you're doing well. My name is [YOUR_NAME], and I'm a [YOUR_TITLE] with a background in [YOUR_FIELD]. I came across your profile while researching [COMPANY/INDUSTRY] and was impressed by your work in [SPECIFIC_AREA].

I'm currently exploring opportunities in [TARGET_AREA] and would love to connect with professionals like yourself to learn more about the field. Would you be open to a brief call or coffee chat in the coming weeks?

I'd be happy to work around your schedule. Thank you for considering my request.

Best regards,
[YOUR_NAME]`,
    placeholders: [
      "CONTACT_NAME",
      "YOUR_NAME",
      "YOUR_TITLE",
      "YOUR_FIELD",
      "COMPANY/INDUSTRY",
      "SPECIFIC_AREA",
      "TARGET_AREA",
    ],
    customizable: true,
  },
];

// Mock Company Insights
export const mockCompanyInsights: CompanyInsight[] = [
  {
    id: "1",
    companyName: "TechCorp",
    industry: "Technology",
    description:
      "Leading enterprise software solutions provider specializing in cloud infrastructure.",
    culture:
      "Fast-paced, innovative environment with focus on work-life balance and professional development.",
    recentNews:
      "Recently launched new AI-powered analytics platform, raised $50M Series C funding.",
    employees: "1,000-5,000",
    founded: "2010",
    headquarters: "San Francisco, CA",
  },
  {
    id: "2",
    companyName: "StartupXYZ",
    industry: "FinTech",
    description:
      "Disrupting the financial services industry with innovative mobile-first solutions.",
    culture:
      "Startup culture with flat hierarchy, emphasis on ownership and rapid iteration.",
    recentNews: "Expanded to European markets, reached 1M active users milestone.",
    employees: "50-200",
    founded: "2018",
    headquarters: "New York, NY",
  },
  {
    id: "3",
    companyName: "BigTech Inc",
    industry: "Technology",
    description:
      "Global technology leader in cloud computing, AI, and enterprise solutions.",
    culture:
      "Data-driven culture with strong emphasis on innovation, collaboration, and diversity.",
    recentNews:
      "Announced major sustainability initiative, launched new quantum computing research lab.",
    employees: "50,000+",
    founded: "1995",
    headquarters: "Seattle, WA",
  },
];

// Mock Job Alerts
export const mockJobAlerts: JobAlert[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "InnovateTech",
    location: "San Francisco, CA",
    salary: "$150k - $200k",
    postedDate: new Date("2024-11-28"),
    jobType: "full-time",
    remote: true,
    description:
      "We're looking for an experienced software engineer to join our platform team. You'll work on building scalable microservices and contribute to architectural decisions.",
    requirements: [
      "5+ years of software development experience",
      "Strong knowledge of React and Node.js",
      "Experience with AWS or GCP",
      "Excellent communication skills",
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Remote-first culture",
    ],
    tags: ["React", "Node.js", "AWS", "Remote"],
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "DesignStudio",
    location: "Los Angeles, CA",
    salary: "$100k - $130k",
    postedDate: new Date("2024-11-27"),
    jobType: "full-time",
    remote: false,
    description:
      "Join our creative team to build beautiful, responsive web applications for our clients in the entertainment industry.",
    requirements: [
      "3+ years of frontend development",
      "Expert in React and TypeScript",
      "Strong design sensibility",
      "Portfolio of previous work",
    ],
    tags: ["React", "TypeScript", "CSS", "Design"],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "HealthTech Solutions",
    location: "Boston, MA",
    salary: "$120k - $160k",
    postedDate: new Date("2024-11-26"),
    jobType: "full-time",
    remote: true,
    description:
      "Help us revolutionize healthcare technology by building secure, HIPAA-compliant applications.",
    requirements: [
      "4+ years full stack experience",
      "Knowledge of healthcare compliance",
      "Experience with Python and React",
      "Strong problem-solving skills",
    ],
    benefits: ["Health insurance", "401k matching", "Professional development budget"],
    tags: ["Python", "React", "Healthcare", "Remote"],
  },
];

