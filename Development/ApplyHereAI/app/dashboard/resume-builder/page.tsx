"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Button,
  Divider,
  Breadcrumbs,
  BreadcrumbItem,
  Chip,
} from "@heroui/react";
import { FaPlus, FaTrash, FaDownload, FaSave } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { toast, Toaster } from "sonner";

interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
  }>;
  skills: string[];
}

export default function ResumeBuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) {
      setResumeData(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    toast.success("Resume saved successfully!");
  };

  const handleExportPDF = () => {
    const element = document.getElementById("resume-preview");
    if (element) {
      const opt = {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().set(opt).from(element).save();
    }
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: Date.now().toString(),
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (id: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now().toString(),
          degree: "",
          school: "",
          location: "",
          graduationDate: "",
        },
      ],
    });
  };

  const removeEducation = (id: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  return (
    <div>
      <Toaster position="top-center" richColors />
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Resume Builder</BreadcrumbItem>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Resume Builder</h1>
        <p className="text-gray-600 text-lg">
          Create a professional resume with live preview
        </p>
      </motion.div>

      <div className="flex gap-4 mb-6">
        <Button color="primary" startContent={<FaSave />} onPress={handleSave}>
          Save Resume
        </Button>
        <Button
          color="success"
          variant="flat"
          startContent={<FaDownload />}
          onPress={handleExportPDF}
        >
          Export PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="space-y-6">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card>
              <CardHeader className="pb-0 pt-6 px-6">
                <h2 className="text-2xl font-bold">Personal Information</h2>
              </CardHeader>
              <CardBody className="p-6 space-y-4">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  value={resumeData.personalInfo.name}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      personalInfo: { ...resumeData.personalInfo, name: e.target.value },
                    })
                  }
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={resumeData.personalInfo.email}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      personalInfo: { ...resumeData.personalInfo, email: e.target.value },
                    })
                  }
                />
                <Input
                  label="Phone"
                  placeholder="+1 (555) 123-4567"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      personalInfo: { ...resumeData.personalInfo, phone: e.target.value },
                    })
                  }
                />
                <Input
                  label="Location"
                  placeholder="San Francisco, CA"
                  value={resumeData.personalInfo.location}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        location: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  label="LinkedIn"
                  placeholder="linkedin.com/in/johndoe"
                  value={resumeData.personalInfo.linkedin}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        linkedin: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  label="Website"
                  placeholder="johndoe.com"
                  value={resumeData.personalInfo.website}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        website: e.target.value,
                      },
                    })
                  }
                />
              </CardBody>
            </Card>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader className="pb-0 pt-6 px-6">
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </CardHeader>
              <CardBody className="p-6">
                <Textarea
                  placeholder="Write a brief summary of your professional background..."
                  minRows={4}
                  value={resumeData.summary}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, summary: e.target.value })
                  }
                />
              </CardBody>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-0 pt-6 px-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Experience</h2>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  startContent={<FaPlus />}
                  onPress={addExperience}
                >
                  Add
                </Button>
              </CardHeader>
              <CardBody className="p-6 space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">Experience {index + 1}</h3>
                      <Button
                        size="sm"
                        color="danger"
                        variant="light"
                        isIconOnly
                        onPress={() => removeExperience(exp.id)}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                    <Input
                      label="Job Title"
                      value={exp.title}
                      onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                    />
                    <Input
                      label="Company"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                    />
                    <Input
                      label="Location"
                      value={exp.location}
                      onChange={(e) =>
                        updateExperience(exp.id, "location", e.target.value)
                      }
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Start Date"
                        type="month"
                        value={exp.startDate}
                        onChange={(e) =>
                          updateExperience(exp.id, "startDate", e.target.value)
                        }
                      />
                      <Input
                        label="End Date"
                        type="month"
                        value={exp.endDate}
                        onChange={(e) =>
                          updateExperience(exp.id, "endDate", e.target.value)
                        }
                      />
                    </div>
                    <Textarea
                      label="Description"
                      minRows={3}
                      value={exp.description}
                      onChange={(e) =>
                        updateExperience(exp.id, "description", e.target.value)
                      }
                    />
                  </div>
                ))}
                {resumeData.experience.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No experience added yet. Click &quot;Add&quot; to get started.
                  </p>
                )}
              </CardBody>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-0 pt-6 px-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Education</h2>
                <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  startContent={<FaPlus />}
                  onPress={addEducation}
                >
                  Add
                </Button>
              </CardHeader>
              <CardBody className="p-6 space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={edu.id} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">Education {index + 1}</h3>
                      <Button
                        size="sm"
                        color="danger"
                        variant="light"
                        isIconOnly
                        onPress={() => removeEducation(edu.id)}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                    <Input
                      label="Degree"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                    />
                    <Input
                      label="School"
                      value={edu.school}
                      onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                    />
                    <Input
                      label="Location"
                      value={edu.location}
                      onChange={(e) =>
                        updateEducation(edu.id, "location", e.target.value)
                      }
                    />
                    <Input
                      label="Graduation Date"
                      type="month"
                      value={edu.graduationDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "graduationDate", e.target.value)
                      }
                    />
                  </div>
                ))}
                {resumeData.education.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No education added yet. Click &quot;Add&quot; to get started.
                  </p>
                )}
              </CardBody>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-0 pt-6 px-6">
                <h2 className="text-2xl font-bold">Skills</h2>
              </CardHeader>
              <CardBody className="p-6">
                <div className="flex gap-2 mb-4">
                  <Input
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button color="primary" onPress={addSkill}>
                    <FaPlus />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      onClose={() => removeSkill(index)}
                      variant="flat"
                      color="primary"
                      >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Preview Section */}
        <div className="sticky top-24 h-fit">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card>
              <CardHeader className="pb-0 pt-6 px-6">
                <h2 className="text-2xl font-bold">Preview</h2>
              </CardHeader>
              <CardBody className="p-6">
                <div
                  id="resume-preview"
                  className="bg-white p-8 shadow-sm border border-gray-200 min-h-[842px]"
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {resumeData.personalInfo.name || "Your Name"}
                    </h1>
                    <div className="text-sm text-gray-600 space-y-1">
                      {resumeData.personalInfo.email && (
                        <p>{resumeData.personalInfo.email}</p>
                      )}
                      {resumeData.personalInfo.phone && (
                        <p>{resumeData.personalInfo.phone}</p>
                      )}
                      {resumeData.personalInfo.location && (
                        <p>{resumeData.personalInfo.location}</p>
                      )}
                      {resumeData.personalInfo.linkedin && (
                        <p>{resumeData.personalInfo.linkedin}</p>
                      )}
                      {resumeData.personalInfo.website && (
                        <p>{resumeData.personalInfo.website}</p>
                      )}
                    </div>
                  </div>

                  <Divider className="my-4" />

                  {/* Summary */}
                  {resumeData.summary && (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                          PROFESSIONAL SUMMARY
                        </h2>
                        <p className="text-sm text-gray-700">{resumeData.summary}</p>
                      </div>
                      <Divider className="my-4" />
                    </>
                  )}

                  {/* Experience */}
                  {resumeData.experience.length > 0 && (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">EXPERIENCE</h2>
                        {resumeData.experience.map((exp) => (
                          <div key={exp.id} className="mb-4">
                            <h3 className="font-bold text-gray-900">{exp.title}</h3>
                            <p className="text-sm text-gray-700 italic">
                              {exp.company} | {exp.location}
                            </p>
                            <p className="text-xs text-gray-600 mb-2">
                              {exp.startDate} - {exp.endDate || "Present"}
                            </p>
                            <p className="text-sm text-gray-700">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                      <Divider className="my-4" />
                    </>
                  )}

                  {/* Education */}
                  {resumeData.education.length > 0 && (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">EDUCATION</h2>
                        {resumeData.education.map((edu) => (
                          <div key={edu.id} className="mb-3">
                            <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                            <p className="text-sm text-gray-700 italic">
                              {edu.school} | {edu.location}
                            </p>
                            <p className="text-xs text-gray-600">{edu.graduationDate}</p>
                          </div>
                        ))}
                      </div>
                      <Divider className="my-4" />
                    </>
                  )}

                  {/* Skills */}
                  {resumeData.skills.length > 0 && (
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">SKILLS</h2>
                      <p className="text-sm text-gray-700">
                        {resumeData.skills.join(" • ")}
                      </p>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

