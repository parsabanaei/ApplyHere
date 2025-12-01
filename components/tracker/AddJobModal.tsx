"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { JobApplication, ApplicationStatus } from "@/types";

interface AddJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (application: Omit<JobApplication, "id">) => void;
  initialStatus: ApplicationStatus;
}

export function AddJobModal({
  isOpen,
  onClose,
  onAdd,
  initialStatus,
}: AddJobModalProps) {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobTitle.trim() || !company.trim()) {
      alert("Job title and company are required");
      return;
    }

    const newApplication: Omit<JobApplication, "id"> = {
      jobTitle: jobTitle.trim(),
      company: company.trim(),
      status: initialStatus,
      dateApplied: new Date(),
      location: location.trim() || undefined,
      salary: salary.trim() || undefined,
      jobUrl: jobUrl.trim() || undefined,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    onAdd(newApplication);
    
    // Reset form
    setJobTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
    setJobUrl("");
    setTags("");
    
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Job Application" size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Software Engineer"
          required
        />

        <Input
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="TechCorp"
          required
        />

        <Input
          label="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="San Francisco, CA"
        />

        <Input
          label="Salary Range (optional)"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="$100k - $130k"
        />

        <Input
          label="Job URL (optional)"
          type="url"
          value={jobUrl}
          onChange={(e) => setJobUrl(e.target.value)}
          placeholder="https://..."
        />

        <Input
          label="Tags (comma-separated, optional)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="React, TypeScript, Remote"
        />

        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Add Application
          </Button>
        </div>
      </form>
    </Modal>
  );
}

