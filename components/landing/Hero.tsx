"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Less Hassle,{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                More Interviews
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              ApplyHere.ai helps you create tailored resumes and cover letters
              fast with AI, fill out application forms in one click, and
              automatically organize your job search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="primary"
                onClick={() => router.push("/auth/register")}
              >
                Sign Up for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/auth/login")}
              >
                Log In
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-strong p-8 border border-slate-200 dark:border-slate-700">
              {/* Realistic Resume Preview */}
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center pb-4 border-b-2 border-slate-800 dark:border-slate-600">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    Alex Rivera
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Software Engineer | San Francisco, CA
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    alex.rivera@email.com • (555) 123-4567
                  </p>
                </div>

                {/* Professional Summary */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                      Professional Summary
                    </h4>
                    <div className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded text-xs font-semibold">
                      AI Generated
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    Results-driven software engineer with 5+ years building scalable web applications. 
                    Specialized in React, Node.js, and cloud technologies.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-3 border-b border-slate-300 dark:border-slate-600 pb-1">
                    Experience
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="text-xs font-semibold text-slate-900 dark:text-white">
                            Senior Software Engineer
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            TechCorp Inc.
                          </p>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-500">
                          2021 - Present
                        </span>
                      </div>
                      <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 ml-3">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Led development of microservices architecture</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Improved app performance by 40%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-2 border-b border-slate-300 dark:border-slate-600 pb-1">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "TypeScript", "Node.js", "AWS", "Docker"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold shadow-medium"
            >
              AI-Powered ✨
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-3 py-2 rounded-full text-xs font-semibold shadow-medium"
            >
              ATS-Friendly ✓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

