"use client";

import React from "react";
import { Resume } from "@/types";
import { ResumeTemplate, RESUME_TEMPLATES } from "@/types/resume-templates";

interface ResumePreviewStyledProps {
  resume: Resume;
  template: ResumeTemplate;
}

export function ResumePreviewStyled({ resume, template }: ResumePreviewStyledProps) {
  const templateStyle = RESUME_TEMPLATES.find((t) => t.id === template);
  
  if (!templateStyle) {
    return <div>Template not found</div>;
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const [year, month] = dateStr.split("-");
      return `${month}/${year}`;
    } catch {
      return dateStr;
    }
  };

  const primaryColor = templateStyle.primaryColor;
  const accentColor = templateStyle.accentColor;
  const fontClass = templateStyle.fontFamily === "serif" ? "font-serif" : templateStyle.fontFamily === "mono" ? "font-mono" : "font-sans";

  return (
    <div
      id="resume-preview"
      className={`bg-white p-8 shadow-medium w-full max-w-[8.5in] mx-auto ${fontClass}`}
      style={{ 
        minHeight: "11in", 
        maxWidth: "8.5in",
        width: "8.5in",
        boxSizing: "border-box",
        wordBreak: "break-word",
        overflowWrap: "anywhere"
      }}
    >
      {/* Header - Different styles based on template */}
      {templateStyle.headerStyle === "centered" && (
        <div className="text-center pb-4 mb-4" style={{ borderBottom: templateStyle.borderStyle === "double" ? `3px double ${primaryColor}` : `2px solid ${primaryColor}` }}>
          <h1 className="text-3xl font-bold mb-2 break-words" style={{ color: primaryColor }}>
            {resume.personalInfo.fullName || "Your Name"}
          </h1>
          {resume.personalInfo.brandingStatement && (
            <p className="text-xs italic mb-2 break-words" style={{ color: accentColor }}>
              {resume.personalInfo.brandingStatement}
            </p>
          )}
          <div className="flex flex-wrap gap-2 text-xs text-slate-600 justify-center">
            {resume.personalInfo.city && resume.personalInfo.state && (
              <span>{resume.personalInfo.city}, {resume.personalInfo.state}</span>
            )}
            {resume.personalInfo.phone && (
              <>
                <span>•</span>
                <span>{resume.personalInfo.phone}</span>
              </>
            )}
            {resume.personalInfo.email && (
              <>
                <span>•</span>
                <span className="break-all">{resume.personalInfo.email}</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 justify-center mt-1">
            {resume.personalInfo.linkedin && <span className="break-all">{resume.personalInfo.linkedin}</span>}
            {resume.personalInfo.website && (
              <>
                {resume.personalInfo.linkedin && <span>•</span>}
                <span className="break-all">{resume.personalInfo.website}</span>
              </>
            )}
            {resume.personalInfo.github && (
              <>
                {(resume.personalInfo.linkedin || resume.personalInfo.website) && <span>•</span>}
                <span className="break-all">{resume.personalInfo.github}</span>
              </>
            )}
          </div>
        </div>
      )}

      {templateStyle.headerStyle === "left" && (
        <div className="pb-4 mb-4 border-l-4 pl-3" style={{ borderColor: primaryColor }}>
          <h1 className="text-3xl font-bold mb-2 break-words" style={{ color: primaryColor }}>
            {resume.personalInfo.fullName || "Your Name"}
          </h1>
          {resume.personalInfo.brandingStatement && (
            <p className="text-xs italic mb-2 break-words" style={{ color: accentColor }}>
              {resume.personalInfo.brandingStatement}
            </p>
          )}
          <div className="space-y-0.5 text-xs text-slate-600">
            {resume.personalInfo.city && resume.personalInfo.state && (
              <div>{resume.personalInfo.city}, {resume.personalInfo.state}</div>
            )}
            {resume.personalInfo.phone && <div>{resume.personalInfo.phone}</div>}
            {resume.personalInfo.email && <div className="break-all">{resume.personalInfo.email}</div>}
            <div className="flex flex-wrap gap-2 text-[10px] text-slate-500">
              {resume.personalInfo.linkedin && <span className="break-all">{resume.personalInfo.linkedin}</span>}
              {resume.personalInfo.website && <span className="break-all">{resume.personalInfo.website}</span>}
              {resume.personalInfo.github && <span className="break-all">{resume.personalInfo.github}</span>}
            </div>
          </div>
        </div>
      )}

      {templateStyle.headerStyle === "split" && (
        <div className="flex justify-between items-start pb-4 mb-4 gap-4" style={{ borderBottom: `2px solid ${accentColor}` }}>
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold mb-2 break-words" style={{ color: primaryColor }}>
              {resume.personalInfo.fullName || "Your Name"}
            </h1>
            {resume.personalInfo.brandingStatement && (
              <p className="text-xs italic break-words" style={{ color: accentColor }}>
                {resume.personalInfo.brandingStatement}
              </p>
            )}
          </div>
          <div className="text-right text-xs text-slate-600 flex-shrink-0">
            {resume.personalInfo.city && resume.personalInfo.state && (
              <div>{resume.personalInfo.city}, {resume.personalInfo.state}</div>
            )}
            {resume.personalInfo.phone && <div>{resume.personalInfo.phone}</div>}
            {resume.personalInfo.email && <div className="break-all">{resume.personalInfo.email}</div>}
            {resume.personalInfo.linkedin && <div className="text-[10px] break-all">{resume.personalInfo.linkedin}</div>}
          </div>
        </div>
      )}

      {/* Professional Summary */}
      {resume.personalInfo.summary && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Professional Summary
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed break-words overflow-wrap-anywhere" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
            {resume.personalInfo.summary}
          </p>
        </div>
      )}

      {/* Core Competencies */}
      {resume.coreCompetencies && resume.coreCompetencies.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {resume.coreCompetencies.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-full text-[10px] text-white break-words"
                style={{ backgroundColor: accentColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Professional Experience
          </h2>
          <div className="space-y-3">
            {resume.experience.map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold break-words" style={{ color: primaryColor }}>
                      {exp.title}
                    </h3>
                    <p className="text-xs text-slate-700 break-words">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-600 flex-shrink-0 whitespace-nowrap">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </span>
                </div>
                {exp.description && (
                  <p className="text-xs text-slate-700 mt-1 whitespace-pre-line leading-relaxed" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Education
          </h2>
          <div className="space-y-2">
            {resume.education.map((edu) => (
              <div key={edu.id} className="break-inside-avoid">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold break-words" style={{ color: primaryColor }}>
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-slate-700 break-words">
                      {edu.school} • {edu.city}, {edu.state}
                    </p>
                    {edu.gpa && (
                      <p className="text-[10px] text-slate-600">GPA: {edu.gpa}</p>
                    )}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <p className="text-[10px] text-slate-600 mt-1 break-words">
                        <span className="font-semibold">Coursework:</span> {edu.coursework.join(", ")}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-600 flex-shrink-0">
                    {edu.graduationYear}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded text-[10px] break-words"
                style={{ backgroundColor: `${accentColor}20`, color: primaryColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {resume.certifications && resume.certifications.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Certifications
          </h2>
          <div className="space-y-1">
            {resume.certifications.map((cert) => (
              <div key={cert.id} className="text-xs text-slate-700 break-words">
                <span className="font-semibold">{cert.name}</span> – {cert.issuingOrganization} – {cert.year}
                {cert.licenseNumber && <span className="text-[10px]"> (License: {cert.licenseNumber})</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {resume.awards && resume.awards.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Awards & Achievements
          </h2>
          <div className="space-y-1">
            {resume.awards.map((award) => (
              <div key={award.id} className="break-words">
                <p className="text-xs text-slate-700">
                  <span className="font-semibold">{award.name}</span> – {award.organization} – {award.year}
                </p>
                {award.description && (
                  <p className="text-[10px] text-slate-600" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>{award.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {resume.languages && resume.languages.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.languages.map((lang) => (
              <span key={lang.id} className="text-xs text-slate-700 whitespace-nowrap">
                {lang.language} – <span className="text-[10px] text-slate-600">{lang.proficiency}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Technical Proficiencies */}
      {resume.technicalProficiencies && (
        <>
          {(resume.technicalProficiencies.programming?.length > 0 ||
            resume.technicalProficiencies.software?.length > 0 ||
            resume.technicalProficiencies.systems?.length > 0 ||
            resume.technicalProficiencies.tools?.length > 0) && (
            <div className="mb-4">
              <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
                Technical Proficiencies
              </h2>
              <div className="space-y-1 text-[10px]">
                {resume.technicalProficiencies.programming?.length > 0 && (
                  <p className="text-slate-700 break-words">
                    <span className="font-semibold">Programming:</span> {resume.technicalProficiencies.programming.join(", ")}
                  </p>
                )}
                {resume.technicalProficiencies.software?.length > 0 && (
                  <p className="text-slate-700 break-words">
                    <span className="font-semibold">Software:</span> {resume.technicalProficiencies.software.join(", ")}
                  </p>
                )}
                {resume.technicalProficiencies.systems?.length > 0 && (
                  <p className="text-slate-700 break-words">
                    <span className="font-semibold">Systems:</span> {resume.technicalProficiencies.systems.join(", ")}
                  </p>
                )}
                {resume.technicalProficiencies.tools?.length > 0 && (
                  <p className="text-slate-700 break-words">
                    <span className="font-semibold">Tools:</span> {resume.technicalProficiencies.tools.join(", ")}
                  </p>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Interests */}
      {resume.interests && resume.interests.length > 0 && (
        <div className="mb-4">
          <h2 className="text-base font-bold mb-2 pb-1" style={{ color: primaryColor, borderBottom: `1px solid ${accentColor}` }}>
            Interests
          </h2>
          <p className="text-xs text-slate-700" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>{resume.interests.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
