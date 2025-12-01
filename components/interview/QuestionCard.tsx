"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { InterviewQuestion } from "@/types";
import { IoChevronDown, IoCheckmarkCircle } from "react-icons/io5";

interface QuestionCardProps {
  question: InterviewQuestion;
  onToggleReviewed: (id: string) => void;
}

export function QuestionCard({ question, onToggleReviewed }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColors = {
    behavioral: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    technical: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    situational: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    general: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  };

  return (
    <Card padding="lg" hover className="cursor-pointer">
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  categoryColors[question.category]
                }`}
              >
                {question.category}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleReviewed(question.id);
                }}
                className={`flex items-center gap-1 text-sm ${
                  question.reviewed
                    ? "text-green-600 dark:text-green-400"
                    : "text-slate-400 dark:text-slate-600"
                }`}
              >
                <IoCheckmarkCircle size={20} />
                {question.reviewed ? "Reviewed" : "Mark as reviewed"}
              </button>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {question.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IoChevronDown
              size={24}
              className="text-slate-400 dark:text-slate-600"
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && question.sampleAnswer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <CardContent className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Sample Answer Approach:
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                {question.sampleAnswer}
              </p>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

