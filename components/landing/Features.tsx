"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IoDocumentText,
  IoGitCompare,
  IoCheckmarkCircle,
  IoChatbubbles,
  IoCalendar,
  IoBriefcase,
  IoBusinessOutline,
} from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/Card";

const features = [
  {
    icon: <IoDocumentText size={32} />,
    title: "AI Resume Builder",
    description:
      "Create professional, ATS-friendly resumes with AI assistance. Auto-generate content based on your experience.",
  },
  {
    icon: <IoGitCompare size={32} />,
    title: "Resume Comparator",
    description:
      "Compare your resume against job descriptions to identify missing keywords and improve your match rate.",
  },
  {
    icon: <IoBriefcase size={32} />,
    title: "Application Tracker",
    description:
      "Keep track of all your job applications in one place with our intuitive Kanban-style board.",
  },
  {
    icon: <IoChatbubbles size={32} />,
    title: "Interview Preparation",
    description:
      "Access common interview questions, tips, and company research tools to ace your interviews.",
  },
  {
    icon: <IoDocumentText size={32} />,
    title: "Letter Templates",
    description:
      "Pre-written, customizable templates for thank-you notes, follow-ups, and networking emails.",
  },
  {
    icon: <IoBusinessOutline size={32} />,
    title: "Company Insights",
    description:
      "Research companies with curated insights on culture, recent news, and industry trends.",
  },
  {
    icon: <IoCalendar size={32} />,
    title: "Job Alerts",
    description:
      "Browse curated job listings and save opportunities directly to your application tracker.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Everything You Need to Land Your Dream Job
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            ApplyHere.ai provides a complete suite of tools to streamline your
            job search process
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover padding="lg" className="h-full">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

