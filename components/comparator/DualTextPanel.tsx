"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/Input";
import { FiAlertCircle } from "react-icons/fi";
import { TXTUploader } from "./TXTUploader";

interface DualTextPanelProps {
  resumeText: string;
  jobDescText: string;
  onResumeChange: (text: string) => void;
  onJobDescChange: (text: string) => void;
  matchingKeywords: string[];
  missingKeywords: string[];
}

export function DualTextPanel({
  resumeText,
  jobDescText,
  onResumeChange,
  onJobDescChange,
  matchingKeywords,
  missingKeywords,
}: DualTextPanelProps) {
  const [resumeError, setResumeError] = useState<string>("");
  const [jobDescError, setJobDescError] = useState<string>("");

  const highlightText = (text: string, keywords: string[], color: string) => {
    let highlighted = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      highlighted = highlighted.replace(
        regex,
        `<mark class="${color}">$&</mark>`
      );
    });
    return highlighted;
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Resume Panel */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Your Resume
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Paste your resume content or upload a .txt file
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Maximum file size: 5 MB • For PDFs, please copy and paste the text
          </p>
        </div>

        {/* File Upload */}
        <TXTUploader
          label="Resume File"
          onTextExtracted={(text) => onResumeChange(text)}
          onError={(error) => setResumeError(error)}
        />

        {resumeError && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <FiAlertCircle className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Upload Failed</h4>
                <p className="text-sm text-red-700 dark:text-red-300">{resumeError}</p>
              </div>
            </div>
          </div>
        )}
        
        <Textarea
          value={resumeText}
          onChange={(e) => onResumeChange(e.target.value)}
          placeholder="Paste your resume text here or upload a file above..."
          rows={15}
          className="font-mono text-sm"
        />

        {matchingKeywords.length > 0 && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              ✓ Matching Keywords ({matchingKeywords.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {matchingKeywords.slice(0, 10).map((keyword, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm"
                >
                  {keyword}
                </span>
              ))}
              {matchingKeywords.length > 10 && (
                <span className="text-sm text-green-700 dark:text-green-400">
                  +{matchingKeywords.length - 10} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Job Description Panel */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            Job Description
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Paste the job description or upload a .txt file
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Maximum file size: 5 MB • For PDFs, please copy and paste the text
          </p>
        </div>

        {/* File Upload */}
        <TXTUploader
          label="Job Description File"
          onTextExtracted={(text) => onJobDescChange(text)}
          onError={(error) => setJobDescError(error)}
        />

        {jobDescError && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <FiAlertCircle className="text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" size={20} />
              <div className="flex-1">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Upload Failed</h4>
                <p className="text-sm text-red-700 dark:text-red-300">{jobDescError}</p>
              </div>
            </div>
          </div>
        )}
        
        <Textarea
          value={jobDescText}
          onChange={(e) => onJobDescChange(e.target.value)}
          placeholder="Paste job description here or upload a file above..."
          rows={15}
          className="font-mono text-sm"
        />

        {missingKeywords.length > 0 && (
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
            <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
              ⚠ Missing Keywords ({missingKeywords.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {missingKeywords.slice(0, 10).map((keyword, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-sm"
                >
                  {keyword}
                </span>
              ))}
              {missingKeywords.length > 10 && (
                <span className="text-sm text-orange-700 dark:text-orange-400">
                  +{missingKeywords.length - 10} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

