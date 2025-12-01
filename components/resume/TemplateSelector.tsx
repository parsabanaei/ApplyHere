"use client";

import React from "react";
import { motion } from "framer-motion";
import { ResumeTemplate, RESUME_TEMPLATES } from "@/types/resume-templates";
import { IoCheckmarkCircle } from "react-icons/io5";

interface TemplateSelectorProps {
  selectedTemplate: ResumeTemplate;
  onSelectTemplate: (template: ResumeTemplate) => void;
}

export function TemplateSelector({
  selectedTemplate,
  onSelectTemplate,
}: TemplateSelectorProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6 mb-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Choose Your Resume Template
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Select a visual style that matches your industry and personality
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {RESUME_TEMPLATES.map((template) => (
          <motion.button
            key={template.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectTemplate(template.id)}
            className={`relative p-4 rounded-lg border-2 transition-all ${
              selectedTemplate === template.id
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
            }`}
          >
            {/* Template Preview */}
            <div className="mb-3 h-24 rounded overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-2 flex flex-col gap-1">
              {/* Mock Header */}
              <div
                className="h-2 rounded"
                style={{ backgroundColor: template.primaryColor, width: "80%" }}
              ></div>
              <div
                className="h-1 rounded"
                style={{ backgroundColor: template.accentColor, width: "60%" }}
              ></div>
              {/* Mock Content Lines */}
              <div className="flex-1 space-y-1 mt-2">
                <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
              </div>
            </div>

            {/* Template Name */}
            <div className="text-center">
              <p className="font-semibold text-sm text-slate-900 dark:text-white">
                {template.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                {template.description}
              </p>
            </div>

            {/* Selected Indicator */}
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2">
                <IoCheckmarkCircle
                  size={24}
                  className="text-indigo-600 dark:text-indigo-400"
                />
              </div>
            )}

            {/* Color Dots */}
            <div className="flex justify-center gap-1 mt-2">
              <div
                className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600"
                style={{ backgroundColor: template.primaryColor }}
              ></div>
              <div
                className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600"
                style={{ backgroundColor: template.accentColor }}
              ></div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

