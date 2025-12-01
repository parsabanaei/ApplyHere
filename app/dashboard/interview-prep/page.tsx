"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs } from "@/components/ui/Tabs";
import { QuestionCard } from "@/components/interview/QuestionCard";
import { TipsCard } from "@/components/interview/TipsCard";
import { ResearchCard } from "@/components/interview/ResearchCard";
import { InterviewQuestion, InterviewTip, CompanyResearch } from "@/types";
import {
  mockInterviewQuestions,
  mockInterviewTips,
} from "@/lib/mockData";
import { STORAGE_KEYS, saveToStorage, getFromStorage } from "@/lib/storage";
import { Input } from "@/components/ui/Input";
import { IoSearch } from "react-icons/io5";

export default function InterviewPrepPage() {
  const [questions, setQuestions] = useState<InterviewQuestion[]>(mockInterviewQuestions);
  const [tips] = useState<InterviewTip[]>(mockInterviewTips);
  const [research, setResearch] = useState<CompanyResearch[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedQuestions = getFromStorage<InterviewQuestion[]>(
      `${STORAGE_KEYS.INTERVIEW_PREP}_questions`,
      mockInterviewQuestions
    );
    const savedResearch = getFromStorage<CompanyResearch[]>(
      `${STORAGE_KEYS.INTERVIEW_PREP}_research`,
      []
    );
    setQuestions(savedQuestions);
    setResearch(savedResearch);
  }, []);

  const handleToggleReviewed = (id: string) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, reviewed: !q.reviewed } : q
    );
    setQuestions(updatedQuestions);
    saveToStorage(`${STORAGE_KEYS.INTERVIEW_PREP}_questions`, updatedQuestions);
  };

  const handleResearchChange = (updatedResearch: CompanyResearch) => {
    const updatedList = research.map((r) =>
      r.id === updatedResearch.id ? updatedResearch : r
    );
    setResearch(updatedList);
    saveToStorage(`${STORAGE_KEYS.INTERVIEW_PREP}_research`, updatedList);
  };

  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const questionsByCategory = {
    all: filteredQuestions,
    behavioral: filteredQuestions.filter((q) => q.category === "behavioral"),
    technical: filteredQuestions.filter((q) => q.category === "technical"),
    situational: filteredQuestions.filter((q) => q.category === "situational"),
    general: filteredQuestions.filter((q) => q.category === "general"),
  };

  const tabContent = [
    {
      id: "questions",
      label: "Common Questions",
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="grid gap-4">
            <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
              {Object.keys(questionsByCategory).map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-sm font-medium whitespace-nowrap"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)} (
                  {questionsByCategory[category as keyof typeof questionsByCategory].length})
                </button>
              ))}
            </div>

            {filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onToggleReviewed={handleToggleReviewed}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "tips",
      label: "Interview Tips",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <TipsCard key={tip.id} tip={tip} />
          ))}
        </div>
      ),
    },
    {
      id: "research",
      label: "Company Research",
      content: (
        <div className="space-y-6">
          {research.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                No company research notes yet
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500">
                Add research notes for companies you&apos;re interviewing with
              </p>
            </div>
          ) : (
            research.map((r) => (
              <ResearchCard
                key={r.id}
                research={r}
                onChange={handleResearchChange}
              />
            ))
          )}
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Interview Preparation
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Prepare for your interviews with common questions, tips, and company research
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Questions Reviewed
          </p>
          <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            {questions.filter((q) => q.reviewed).length} / {questions.length}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Tips Available
          </p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {tips.length}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Companies Researched
          </p>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {research.length}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <Tabs tabs={tabContent} defaultTab="questions" />
      </div>
    </motion.div>
  );
}

