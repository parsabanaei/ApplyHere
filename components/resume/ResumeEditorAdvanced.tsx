"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Resume, Experience, Education, Certification, Award, VolunteerExperience, Publication, Presentation, ProfessionalMembership, Language } from "@/types";
import { IoAdd, IoTrash, IoChevronDown, IoChevronUp } from "react-icons/io5";

interface ResumeEditorAdvancedProps {
  resume: Resume;
  onChange: (resume: Resume) => void;
}

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  badge?: string;
}

function CollapsibleSection({ title, isOpen, onToggle, children, badge }: CollapsibleSectionProps) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          {badge && (
            <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium">
              {badge}
            </span>
          )}
        </div>
        {isOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 space-y-4 bg-white dark:bg-slate-900">
          {children}
        </div>
      )}
    </div>
  );
}

export function ResumeEditorAdvanced({ resume, onChange }: ResumeEditorAdvancedProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    personalInfo: true,
    summary: true,
    coreCompetencies: false,
    experience: false,
    education: false,
    projects: false,
    certifications: false,
    awards: false,
    volunteer: false,
    publications: false,
    presentations: false,
    memberships: false,
    languages: false,
    technicalProficiencies: false,
    interests: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Personal Info handlers
  const handlePersonalInfoChange = (field: string, value: string) => {
    onChange({
      ...resume,
      personalInfo: { ...resume.personalInfo, [field]: value },
    });
  };

  // Experience handlers
  const handleAddExperience = () => {
    const newExp: Experience = {
      id: crypto.randomUUID(),
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      achievements: [""],
    };
    onChange({ ...resume, experience: [...resume.experience, newExp] });
  };

  const handleRemoveExperience = (id: string) => {
    onChange({
      ...resume,
      experience: resume.experience.filter(e => e.id !== id),
    });
  };

  const handleExperienceChange = (id: string, field: string, value: any) => {
    onChange({
      ...resume,
      experience: resume.experience.map(e =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    });
  };

  // Education handlers
  const handleAddEducation = () => {
    const newEdu: Education = {
      id: crypto.randomUUID(),
      degree: "",
      school: "",
      city: "",
      state: "",
      graduationYear: "",
      gpa: "",
      coursework: [],
      honors: [],
    };
    onChange({ ...resume, education: [...resume.education, newEdu] });
  };

  const handleRemoveEducation = (id: string) => {
    onChange({
      ...resume,
      education: resume.education.filter(e => e.id !== id),
    });
  };

  const handleEducationChange = (id: string, field: string, value: any) => {
    onChange({
      ...resume,
      education: resume.education.map(e =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    });
  };

  // Certification handlers
  const handleAddCertification = () => {
    const newCert: Certification = {
      id: crypto.randomUUID(),
      name: "",
      issuingOrganization: "",
      year: "",
    };
    onChange({ ...resume, certifications: [...(resume.certifications || []), newCert] });
  };

  const handleRemoveCertification = (id: string) => {
    onChange({
      ...resume,
      certifications: (resume.certifications || []).filter(c => c.id !== id),
    });
  };

  const handleCertificationChange = (id: string, field: string, value: string) => {
    onChange({
      ...resume,
      certifications: (resume.certifications || []).map(c =>
        c.id === id ? { ...c, [field]: value } : c
      ),
    });
  };

  // Award handlers
  const handleAddAward = () => {
    const newAward: Award = {
      id: crypto.randomUUID(),
      name: "",
      organization: "",
      year: "",
    };
    onChange({ ...resume, awards: [...(resume.awards || []), newAward] });
  };

  const handleRemoveAward = (id: string) => {
    onChange({
      ...resume,
      awards: (resume.awards || []).filter(a => a.id !== id),
    });
  };

  const handleAwardChange = (id: string, field: string, value: string) => {
    onChange({
      ...resume,
      awards: (resume.awards || []).map(a =>
        a.id === id ? { ...a, [field]: value } : a
      ),
    });
  };

  // Language handlers
  const handleAddLanguage = () => {
    const newLang: Language = {
      id: crypto.randomUUID(),
      language: "",
      proficiency: "Professional",
    };
    onChange({ ...resume, languages: [...(resume.languages || []), newLang] });
  };

  const handleRemoveLanguage = (id: string) => {
    onChange({
      ...resume,
      languages: (resume.languages || []).filter(l => l.id !== id),
    });
  };

  const handleLanguageChange = (id: string, field: string, value: any) => {
    onChange({
      ...resume,
      languages: (resume.languages || []).map(l =>
        l.id === id ? { ...l, [field]: value } : l
      ),
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-800 space-y-4">
      {/* Personal Information */}
      <CollapsibleSection
        title="Personal Information"
        isOpen={openSections.personalInfo}
        onToggle={() => toggleSection("personalInfo")}
        badge="Required"
      >
        <Input
          label="Full Name"
          value={resume.personalInfo.fullName}
          onChange={(e) => handlePersonalInfoChange("fullName", e.target.value)}
          placeholder="John Doe"
          required
        />
        
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            value={resume.personalInfo.email}
            onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
            placeholder="john@example.com"
            required
          />
          <Input
            label="Phone"
            type="tel"
            value={resume.personalInfo.phone}
            onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
            placeholder="(555) 123-4567"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="City"
            value={resume.personalInfo.city}
            onChange={(e) => handlePersonalInfoChange("city", e.target.value)}
            placeholder="San Francisco"
            required
          />
          <Input
            label="State"
            value={resume.personalInfo.state}
            onChange={(e) => handlePersonalInfoChange("state", e.target.value)}
            placeholder="CA"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="LinkedIn URL (optional)"
            value={resume.personalInfo.linkedin || ""}
            onChange={(e) => handlePersonalInfoChange("linkedin", e.target.value)}
            placeholder="linkedin.com/in/johndoe"
          />
          <Input
            label="Portfolio/Website (optional)"
            value={resume.personalInfo.website || ""}
            onChange={(e) => handlePersonalInfoChange("website", e.target.value)}
            placeholder="johndoe.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="GitHub URL (optional)"
            value={resume.personalInfo.github || ""}
            onChange={(e) => handlePersonalInfoChange("github", e.target.value)}
            placeholder="github.com/johndoe"
          />
          <Input
            label="Portfolio (optional)"
            value={resume.personalInfo.portfolio || ""}
            onChange={(e) => handlePersonalInfoChange("portfolio", e.target.value)}
            placeholder="portfolio.com"
          />
        </div>

        <Input
          label="Personal Branding Statement (optional)"
          value={resume.personalInfo.brandingStatement || ""}
          onChange={(e) => handlePersonalInfoChange("brandingStatement", e.target.value)}
          placeholder="Innovative problem solver | Full-stack developer"
        />
      </CollapsibleSection>

      {/* Professional Summary */}
      <CollapsibleSection
        title="Professional Summary"
        isOpen={openSections.summary}
        onToggle={() => toggleSection("summary")}
        badge="Recommended"
      >
        <Textarea
          label="2-4 sentence elevator pitch with core strengths and value proposition"
          value={resume.personalInfo.summary}
          onChange={(e) => handlePersonalInfoChange("summary", e.target.value)}
          placeholder="Results-driven software engineer with 5+ years of experience building scalable web applications. Proven track record of delivering high-quality code and leading cross-functional teams. Specialized in React, Node.js, and cloud technologies with a passion for creating user-centric solutions."
          rows={5}
        />
      </CollapsibleSection>

      {/* Core Competencies */}
      <CollapsibleSection
        title="Core Competencies / Skills"
        isOpen={openSections.coreCompetencies}
        onToggle={() => toggleSection("coreCompetencies")}
      >
        <Textarea
          label="Core Competencies (comma-separated for ATS)"
          value={resume.coreCompetencies?.join(", ") || ""}
          onChange={(e) =>
            onChange({
              ...resume,
              coreCompetencies: e.target.value.split(",").map(s => s.trim()).filter(Boolean),
            })
          }
          placeholder="Full-Stack Development, Agile Methodologies, Team Leadership, Cloud Architecture, Database Design..."
          rows={3}
          helperText="List technical skills, hard skills, and soft skills. Use keywords from job descriptions."
        />
        
        <Textarea
          label="Additional Skills (comma-separated)"
          value={resume.skills.join(", ")}
          onChange={(e) =>
            onChange({
              ...resume,
              skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean),
            })
          }
          placeholder="JavaScript, React, Python, AWS, Docker, Kubernetes..."
          rows={3}
        />
      </CollapsibleSection>

      {/* Professional Experience */}
      <CollapsibleSection
        title="Professional Experience"
        isOpen={openSections.experience}
        onToggle={() => toggleSection("experience")}
        badge="Required"
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddExperience}
          className="flex items-center gap-2"
        >
          <IoAdd size={20} />
          Add Experience
        </Button>

        {resume.experience.map((exp, index) => (
          <div
            key={exp.id}
            className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Experience #{index + 1}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveExperience(exp.id)}
                className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <IoTrash size={18} />
              </Button>
            </div>

            <Input
              label="Job Title"
              value={exp.title}
              onChange={(e) => handleExperienceChange(exp.id, "title", e.target.value)}
              placeholder="Senior Software Engineer"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Company Name"
                value={exp.company}
                onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                placeholder="TechCorp Inc."
                required
              />
              <Input
                label="Location (City, State)"
                value={exp.location}
                onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                placeholder="San Francisco, CA"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Start Date"
                type="month"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                required
              />
              <Input
                label="End Date"
                type="month"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                disabled={exp.current}
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => handleExperienceChange(exp.id, "current", e.target.checked)}
                className="rounded border-slate-300 dark:border-slate-600"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                I currently work here
              </span>
            </label>

            <Textarea
              label="Key Achievements (use bullet points, start with action verbs, include metrics)"
              value={exp.description}
              onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
              placeholder="• Led development of microservices architecture, improving system scalability by 300%&#10;• Implemented CI/CD pipeline reducing deployment time by 60%&#10;• Mentored team of 5 junior developers"
              rows={5}
              helperText="Start each point with a strong action verb. Use numbers, percentages, and dollar amounts."
            />
          </div>
        ))}
      </CollapsibleSection>

      {/* Education */}
      <CollapsibleSection
        title="Education"
        isOpen={openSections.education}
        onToggle={() => toggleSection("education")}
        badge="Required"
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddEducation}
          className="flex items-center gap-2"
        >
          <IoAdd size={20} />
          Add Education
        </Button>

        {resume.education.map((edu, index) => (
          <div
            key={edu.id}
            className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Education #{index + 1}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveEducation(edu.id)}
                className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <IoTrash size={18} />
              </Button>
            </div>

            <Input
              label="Degree Title"
              value={edu.degree}
              onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
              placeholder="B.S. in Computer Science"
              required
            />

            <div className="grid md:grid-cols-3 gap-4">
              <Input
                label="University Name"
                value={edu.school}
                onChange={(e) => handleEducationChange(edu.id, "school", e.target.value)}
                placeholder="Stanford University"
                required
                className="md:col-span-2"
              />
              <Input
                label="Graduation Year"
                value={edu.graduationYear}
                onChange={(e) => handleEducationChange(edu.id, "graduationYear", e.target.value)}
                placeholder="2020"
                required
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Input
                label="City"
                value={edu.city}
                onChange={(e) => handleEducationChange(edu.id, "city", e.target.value)}
                placeholder="Palo Alto"
              />
              <Input
                label="State"
                value={edu.state}
                onChange={(e) => handleEducationChange(edu.id, "state", e.target.value)}
                placeholder="CA"
              />
              <Input
                label="GPA (optional)"
                value={edu.gpa || ""}
                onChange={(e) => handleEducationChange(edu.id, "gpa", e.target.value)}
                placeholder="3.8"
              />
            </div>

            <Textarea
              label="Relevant Coursework (comma-separated, optional)"
              value={edu.coursework?.join(", ") || ""}
              onChange={(e) =>
                handleEducationChange(
                  edu.id,
                  "coursework",
                  e.target.value.split(",").map(c => c.trim()).filter(Boolean)
                )
              }
              placeholder="Data Structures, Algorithms, Machine Learning, Database Systems..."
              rows={2}
            />

            <Textarea
              label="Honors & Awards (comma-separated, optional)"
              value={edu.honors?.join(", ") || ""}
              onChange={(e) =>
                handleEducationChange(
                  edu.id,
                  "honors",
                  e.target.value.split(",").map(h => h.trim()).filter(Boolean)
                )
              }
              placeholder="Dean's List, Summa Cum Laude, Honor Society..."
              rows={2}
            />
          </div>
        ))}
      </CollapsibleSection>

      {/* Certifications */}
      <CollapsibleSection
        title="Certifications & Licenses"
        isOpen={openSections.certifications}
        onToggle={() => toggleSection("certifications")}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddCertification}
          className="flex items-center gap-2"
        >
          <IoAdd size={20} />
          Add Certification
        </Button>

        {(resume.certifications || []).map((cert, index) => (
          <div
            key={cert.id}
            className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Certification #{index + 1}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveCertification(cert.id)}
                className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <IoTrash size={18} />
              </Button>
            </div>

            <Input
              label="Certification Name"
              value={cert.name}
              onChange={(e) => handleCertificationChange(cert.id, "name", e.target.value)}
              placeholder="AWS Certified Solutions Architect"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Issuing Organization"
                value={cert.issuingOrganization}
                onChange={(e) => handleCertificationChange(cert.id, "issuingOrganization", e.target.value)}
                placeholder="Amazon Web Services"
                required
              />
              <Input
                label="Year Obtained"
                value={cert.year}
                onChange={(e) => handleCertificationChange(cert.id, "year", e.target.value)}
                placeholder="2023"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="License Number (optional)"
                value={cert.licenseNumber || ""}
                onChange={(e) => handleCertificationChange(cert.id, "licenseNumber", e.target.value)}
                placeholder="ABC123456"
              />
              <Input
                label="Expiration Date (optional)"
                type="month"
                value={cert.expirationDate || ""}
                onChange={(e) => handleCertificationChange(cert.id, "expirationDate", e.target.value)}
              />
            </div>
          </div>
        ))}
      </CollapsibleSection>

      {/* Awards */}
      <CollapsibleSection
        title="Achievements / Awards"
        isOpen={openSections.awards}
        onToggle={() => toggleSection("awards")}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddAward}
          className="flex items-center gap-2"
        >
          <IoAdd size={20} />
          Add Award
        </Button>

        {(resume.awards || []).map((award, index) => (
          <div
            key={award.id}
            className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Award #{index + 1}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveAward(award.id)}
                className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <IoTrash size={18} />
              </Button>
            </div>

            <Input
              label="Award Name"
              value={award.name}
              onChange={(e) => handleAwardChange(award.id, "name", e.target.value)}
              placeholder="Employee of the Year"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Organization"
                value={award.organization}
                onChange={(e) => handleAwardChange(award.id, "organization", e.target.value)}
                placeholder="TechCorp Inc."
                required
              />
              <Input
                label="Year"
                value={award.year}
                onChange={(e) => handleAwardChange(award.id, "year", e.target.value)}
                placeholder="2023"
                required
              />
            </div>

            <Textarea
              label="Description (optional)"
              value={award.description || ""}
              onChange={(e) => handleAwardChange(award.id, "description", e.target.value)}
              placeholder="Brief description of the achievement..."
              rows={2}
            />
          </div>
        ))}
      </CollapsibleSection>

      {/* Languages */}
      <CollapsibleSection
        title="Languages"
        isOpen={openSections.languages}
        onToggle={() => toggleSection("languages")}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddLanguage}
          className="flex items-center gap-2"
        >
          <IoAdd size={20} />
          Add Language
        </Button>

        {(resume.languages || []).map((lang, index) => (
          <div
            key={lang.id}
            className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Language #{index + 1}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveLanguage(lang.id)}
                className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <IoTrash size={18} />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Language"
                value={lang.language}
                onChange={(e) => handleLanguageChange(lang.id, "language", e.target.value)}
                placeholder="Spanish"
                required
              />
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Proficiency Level
                </label>
                <select
                  value={lang.proficiency}
                  onChange={(e) => handleLanguageChange(lang.id, "proficiency", e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                >
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Professional">Professional</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </CollapsibleSection>

      {/* Technical Proficiencies */}
      <CollapsibleSection
        title="Technical Proficiencies"
        isOpen={openSections.technicalProficiencies}
        onToggle={() => toggleSection("technicalProficiencies")}
      >
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          Separate from general skills - helps ATS match keyword clusters
        </p>

        <Textarea
          label="Programming Languages (comma-separated)"
          value={resume.technicalProficiencies?.programming?.join(", ") || ""}
          onChange={(e) =>
            onChange({
              ...resume,
              technicalProficiencies: {
                ...resume.technicalProficiencies,
                programming: e.target.value.split(",").map(s => s.trim()).filter(Boolean),
                software: resume.technicalProficiencies?.software || [],
                systems: resume.technicalProficiencies?.systems || [],
                tools: resume.technicalProficiencies?.tools || [],
              },
            })
          }
          placeholder="JavaScript, Python, Java, C++, TypeScript..."
          rows={2}
        />

        <Textarea
          label="Software (comma-separated)"
          value={resume.technicalProficiencies?.software?.join(", ") || ""}
          onChange={(e) =>
            onChange({
              ...resume,
              technicalProficiencies: {
                programming: resume.technicalProficiencies?.programming || [],
                software: e.target.value.split(",").map(s => s.trim()).filter(Boolean),
                systems: resume.technicalProficiencies?.systems || [],
                tools: resume.technicalProficiencies?.tools || [],
              },
            })
          }
          placeholder="React, Angular, Django, Spring Boot..."
          rows={2}
        />

        <Textarea
          label="Systems (comma-separated)"
          value={resume.technicalProficiencies?.systems?.join(", ") || ""}
          onChange={(e) =>
            onChange({
              ...resume,
              technicalProficiencies: {
                programming: resume.technicalProficiencies?.programming || [],
                software: resume.technicalProficiencies?.software || [],
                systems: e.target.value.split(",").map(s => s.trim()).filter(Boolean),
                tools: resume.technicalProficiencies?.tools || [],
              },
            })
          }
          placeholder="Linux, Windows Server, AWS, Azure, Docker..."
          rows={2}
        />

        <Textarea
          label="Tools (comma-separated)"
          value={resume.technicalProficiencies?.tools?.join(", ") || ""}
          onChange={(e) =>
            onChange({
              ...resume,
              technicalProficiencies: {
                programming: resume.technicalProficiencies?.programming || [],
                software: resume.technicalProficiencies?.software || [],
                systems: resume.technicalProficiencies?.systems || [],
                tools: e.target.value.split(",").map(s => s.trim()).filter(Boolean),
              },
            })
          }
          placeholder="Git, Jenkins, Jira, Postman, VS Code..."
          rows={2}
        />
      </CollapsibleSection>

      {/* Interests */}
      <CollapsibleSection
        title="Hobbies / Interests"
        isOpen={openSections.interests}
        onToggle={() => toggleSection("interests")}
      >
        <Textarea
          label="Interests (comma-separated, optional)"
          value={resume.interests?.join(", ") || ""}
          onChange={(e) =>
            onChange({
              ...resume,
              interests: e.target.value.split(",").map(s => s.trim()).filter(Boolean),
            })
          }
          placeholder="Open Source Contribution, Tech Blogging, Photography..."
          rows={2}
          helperText="Keep professional or neutral. ATS doesn't prioritize this section."
        />
      </CollapsibleSection>

      {/* ATS Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
          💡 ATS Tips
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
          <li>✓ Use keywords from job descriptions</li>
          <li>✓ Start achievements with action verbs (Led, Developed, Increased, etc.)</li>
          <li>✓ Include metrics and numbers whenever possible</li>
          <li>✓ Avoid tables, text boxes, headers/footers</li>
          <li>✓ Use standard section headers</li>
          <li>✓ Save as PDF or .docx (check employer preference)</li>
        </ul>
      </div>
    </div>
  );
}

