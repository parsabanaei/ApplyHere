"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TemplateModal } from "@/components/templates/TemplateModal";
import { Template } from "@/types";
import { mockTemplates } from "@/lib/mockData";
import {
  IoDocumentText,
  IoMail,
  IoPeople,
  IoCheckmarkCircle,
  IoCloseCircle,
} from "react-icons/io5";

const typeIcons = {
  "thank-you": <IoCheckmarkCircle size={24} />,
  "follow-up": <IoMail size={24} />,
  networking: <IoPeople size={24} />,
  acceptance: <IoCheckmarkCircle size={24} />,
  decline: <IoCloseCircle size={24} />,
};

const typeColors = {
  "thank-you": "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  "follow-up": "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  networking: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  acceptance: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  decline: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
};

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTemplateClick = (template: Template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTemplate(null), 200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Letter Templates
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Pre-written, customizable templates for professional communication
        </p>
      </div>

      {/* Template Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover padding="lg" className="h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      typeColors[template.type]
                    }`}
                  >
                    {typeIcons[template.type] || <IoDocumentText size={24} />}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">{template.title}</CardTitle>
                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                      {template.type}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {template.content.substring(0, 150)}...
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.placeholders.slice(0, 3).map((placeholder, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded"
                    >
                      {placeholder}
                    </span>
                  ))}
                  {template.placeholders.length > 3 && (
                    <span className="text-xs px-2 py-1 text-slate-500">
                      +{template.placeholders.length - 3} more
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleTemplateClick(template)}
                >
                  Use Template
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Tips for Using Templates
        </h2>
        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <span>
              Personalize each template by replacing all bracketed placeholders
              with your actual information
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <span>
              Send thank-you emails within 24 hours of your interview
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <span>
              Keep follow-up emails concise and professional
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500">✓</span>
            <span>
              Always proofread your emails before sending
            </span>
          </li>
        </ul>
      </div>

      {/* Template Modal */}
      <TemplateModal
        template={selectedTemplate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
}

