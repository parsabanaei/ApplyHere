"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { DualTextPanel } from "@/components/comparator/DualTextPanel";
import { compareResumeToJob } from "@/lib/keywordExtractor";
import { ComparisonResult } from "@/types";
import { IoGitCompare } from "react-icons/io5";

export default function ResumeComparatorPage() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescText, setJobDescText] = useState("");
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [isComparing, setIsComparing] = useState(false);

  const handleCompare = () => {
    if (!resumeText.trim() || !jobDescText.trim()) {
      alert("Please paste both your resume and job description");
      return;
    }

    setIsComparing(true);
    
    // Simulate processing time
    setTimeout(() => {
      const result = compareResumeToJob(resumeText, jobDescText);
      setComparisonResult(result);
      setIsComparing(false);
    }, 500);
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 70) return "text-green-600 dark:text-green-400";
    if (percentage >= 50) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getMatchBg = (percentage: number) => {
    if (percentage >= 70) return "bg-green-100 dark:bg-green-900/30";
    if (percentage >= 50) return "bg-yellow-100 dark:bg-yellow-900/30";
    return "bg-red-100 dark:bg-red-900/30";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Resume vs Job Description Comparator
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Compare your resume against job descriptions to identify missing
              keywords and improve your match rate
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={handleCompare}
            isLoading={isComparing}
            disabled={!resumeText.trim() || !jobDescText.trim()}
            className="flex items-center gap-2"
          >
            <IoGitCompare size={20} />
            Compare
          </Button>
        </div>
      </div>

      {/* Comparison Result */}
      {comparisonResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Match Percentage */}
            <Card padding="lg" className={getMatchBg(comparisonResult.matchPercentage)}>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Match Percentage
                </p>
                <p
                  className={`text-5xl font-bold ${getMatchColor(
                    comparisonResult.matchPercentage
                  )}`}
                >
                  {comparisonResult.matchPercentage}%
                </p>
              </div>
            </Card>

            {/* Matching Keywords */}
            <Card padding="lg" className="bg-green-50 dark:bg-green-900/20">
              <div className="text-center">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Matching Keywords
                </p>
                <p className="text-5xl font-bold text-green-600 dark:text-green-400">
                  {comparisonResult.matchingKeywords.length}
                </p>
              </div>
            </Card>

            {/* Missing Keywords */}
            <Card padding="lg" className="bg-orange-50 dark:bg-orange-900/20">
              <div className="text-center">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  Missing Keywords
                </p>
                <p className="text-5xl font-bold text-orange-600 dark:text-orange-400">
                  {comparisonResult.missingKeywords.length}
                </p>
              </div>
            </Card>
          </div>

          {/* Suggestions */}
          {comparisonResult.suggestions.length > 0 && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-4">
                💡 Suggestions for Improvement
              </h3>
              <ul className="space-y-2">
                {comparisonResult.suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-blue-800 dark:text-blue-300"
                  >
                    <span className="mt-1">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {/* Dual Text Panel */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <DualTextPanel
          resumeText={resumeText}
          jobDescText={jobDescText}
          onResumeChange={setResumeText}
          onJobDescChange={setJobDescText}
          matchingKeywords={comparisonResult?.matchingKeywords || []}
          missingKeywords={comparisonResult?.missingKeywords || []}
        />
      </div>
    </motion.div>
  );
}

