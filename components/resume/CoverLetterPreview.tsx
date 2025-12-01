"use client";

import React from "react";
import { Resume } from "@/types";

interface CoverLetterPreviewProps {
  resume: Resume;
  companyName?: string;
  position?: string;
}

export function CoverLetterPreview({
  resume,
  companyName = "[Company Name]",
  position = "[Position]",
}: CoverLetterPreviewProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Generate cover letter content based on resume
  const generateCoverLetterContent = () => {
    const skills = resume.skills.slice(0, 3).join(", ");
    const latestExperience = resume.experience[0];

    return `I am writing to express my strong interest in the ${position} position at ${companyName}. With my background in ${skills}${
      latestExperience
        ? ` and my experience as a ${latestExperience.title} at ${latestExperience.company}`
        : ""
    }, I am confident that I would be a valuable addition to your team.

${
  latestExperience
    ? `In my current role at ${latestExperience.company}, I have ${
        latestExperience.description || "developed valuable skills and experience"
      }. This experience has equipped me with the skills necessary to excel in this position.`
    : ""
}

I am particularly drawn to ${companyName} because of your innovative approach and commitment to excellence. I am excited about the opportunity to contribute to your team and help drive success in this role.

I would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for considering my application.

Sincerely,
${resume.personalInfo.fullName || "Your Name"}`;
  };

  return (
    <div
      id="cover-letter-preview"
      className="bg-white p-8 shadow-medium w-full max-w-[8.5in] mx-auto"
      style={{ 
        maxWidth: "8.5in",
        width: "8.5in",
        boxSizing: "border-box",
        wordBreak: "break-word",
        overflowWrap: "anywhere"
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-1 break-words">
          {resume.personalInfo.fullName || "Your Name"}
        </h2>
        <div className="text-xs text-slate-600 space-y-0.5">
          {resume.personalInfo.email && <div className="break-all">{resume.personalInfo.email}</div>}
          {resume.personalInfo.phone && <div>{resume.personalInfo.phone}</div>}
          {resume.personalInfo.city && resume.personalInfo.state && (
            <div>{resume.personalInfo.city}, {resume.personalInfo.state}</div>
          )}
        </div>
      </div>

      {/* Date */}
      <div className="mb-4 text-xs text-slate-700">{currentDate}</div>

      {/* Recipient */}
      <div className="mb-4 text-xs text-slate-700">
        <div>Hiring Manager</div>
        <div className="break-words">{companyName}</div>
      </div>

      {/* Salutation */}
      <div className="mb-4 text-xs text-slate-700">Dear Hiring Manager,</div>

      {/* Body */}
      <div className="mb-4 text-xs text-slate-700 whitespace-pre-line leading-relaxed" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
        {generateCoverLetterContent()}
      </div>
    </div>
  );
}
