"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Resume } from "@/types";
import { ResumeEditorAdvanced } from "@/components/resume/ResumeEditorAdvanced";
import { ResumePreviewStyled } from "@/components/resume/ResumePreviewStyled";
import { CoverLetterPreview } from "@/components/resume/CoverLetterPreview";
import { ExportButton } from "@/components/resume/ExportButton";
import { TemplateSelector } from "@/components/resume/TemplateSelector";
import { ResumeTemplate } from "@/types/resume-templates";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { STORAGE_KEYS, saveToStorage, getFromStorage } from "@/lib/storage";
import { IoSave } from "react-icons/io5";

const initialResume: Resume = {
  id: "1",
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    linkedin: "",
    website: "",
    github: "",
    portfolio: "",
    brandingStatement: "",
    summary: "",
  },
  coreCompetencies: [],
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  awards: [],
  volunteer: [],
  publications: [],
  presentations: [],
  memberships: [],
  languages: [],
  technicalProficiencies: {
    programming: [],
    software: [],
    systems: [],
    tools: [],
  },
  interests: [],
  updatedAt: new Date(),
};

export default function ResumeBuilderPage() {
  const [resume, setResume] = useState<Resume>(initialResume);
  const [isSaved, setIsSaved] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>("modern");

  useEffect(() => {
    const savedResume = getFromStorage<Resume>(STORAGE_KEYS.RESUME, initialResume);
    // Ensure all new fields exist for backward compatibility
    const completeResume: Resume = {
      ...initialResume,
      ...savedResume,
      personalInfo: {
        ...initialResume.personalInfo,
        ...savedResume.personalInfo,
      },
      certifications: savedResume.certifications || [],
      awards: savedResume.awards || [],
      volunteer: savedResume.volunteer || [],
      publications: savedResume.publications || [],
      presentations: savedResume.presentations || [],
      memberships: savedResume.memberships || [],
      languages: savedResume.languages || [],
      coreCompetencies: savedResume.coreCompetencies || [],
      interests: savedResume.interests || [],
      technicalProficiencies: savedResume.technicalProficiencies || {
        programming: [],
        software: [],
        systems: [],
        tools: [],
      },
    };
    setResume(completeResume);
  }, []);

  const handleResumeChange = (updatedResume: Resume) => {
    setResume(updatedResume);
    setIsSaved(false);
  };

  const handleSave = () => {
    const updatedResume = { ...resume, updatedAt: new Date() };
    saveToStorage(STORAGE_KEYS.RESUME, updatedResume);
    setResume(updatedResume);
    setIsSaved(true);
  };

  const previewTabs = [
    {
      id: "resume",
      label: "Resume",
      content: <ResumePreviewStyled resume={resume} template={selectedTemplate} />,
    },
    {
      id: "cover-letter",
      label: "Cover Letter",
      content: <CoverLetterPreview resume={resume} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col"
    >
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Resume & Cover Letter Builder
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Create a professional resume and auto-generate a cover letter
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant={isSaved ? "outline" : "primary"}
              onClick={handleSave}
              className="flex items-center gap-2"
            >
              <IoSave size={20} />
              {isSaved ? "Saved" : "Save"}
            </Button>
          </div>
        </div>
      </div>

      {/* Template Selector */}
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        onSelectTemplate={setSelectedTemplate}
      />

      {/* Split Panel */}
      <div className="grid lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Editor Panel */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft overflow-hidden flex flex-col">
          <div className="border-b border-slate-200 dark:border-slate-700 p-4 flex-shrink-0">
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Editor
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ResumeEditorAdvanced resume={resume} onChange={handleResumeChange} />
          </div>
        </div>

        {/* Preview Panel */}
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg shadow-soft overflow-hidden flex flex-col">
          <div className="border-b border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-800 flex-shrink-0">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Preview
              </h2>
              <ExportButton type="resume" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 min-h-0">
            <Tabs tabs={previewTabs} defaultTab="resume" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

