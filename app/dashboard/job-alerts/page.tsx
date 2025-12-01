"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { JobFeed } from "@/components/jobs/JobFeed";
import { JobDetailModal } from "@/components/jobs/JobDetailModal";
import { Input } from "@/components/ui/Input";
import { JobAlert, JobApplication } from "@/types";
import { mockJobAlerts } from "@/lib/mockData";
import { STORAGE_KEYS, saveToStorage, getFromStorage } from "@/lib/storage";
import { IoFilter } from "react-icons/io5";

export default function JobAlertsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<JobAlert | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobTypeFilter, setJobTypeFilter] = useState<string>("all");
  const [remoteFilter, setRemoteFilter] = useState<string>("all");

  const handleJobClick = (job: JobAlert) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleSaveJob = (job: JobAlert) => {
    // Save to application tracker
    const applications = getFromStorage<JobApplication[]>(
      STORAGE_KEYS.APPLICATIONS,
      []
    );

    const newApplication: JobApplication = {
      id: crypto.randomUUID(),
      jobTitle: job.title,
      company: job.company,
      status: "wishlist",
      dateApplied: new Date(),
      location: job.location,
      salary: job.salary,
      tags: job.tags,
    };

    const updatedApplications = [...applications, newApplication];
    saveToStorage(STORAGE_KEYS.APPLICATIONS, updatedApplications);
    alert(`Saved ${job.title} to your application tracker!`);
  };

  const filteredJobs = mockJobAlerts.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesJobType =
      jobTypeFilter === "all" || job.jobType === jobTypeFilter;

    const matchesRemote =
      remoteFilter === "all" ||
      (remoteFilter === "remote" && job.remote) ||
      (remoteFilter === "onsite" && !job.remote);

    return matchesSearch && matchesJobType && matchesRemote;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Job Alerts
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Browse curated job listings and save opportunities to your tracker
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            <option value="all">All Job Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>

          <select
            value={remoteFilter}
            onChange={(e) => setRemoteFilter(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          >
            <option value="all">All Locations</option>
            <option value="remote">Remote Only</option>
            <option value="onsite">On-site Only</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Job Feed */}
      {filteredJobs.length > 0 ? (
        <JobFeed
          jobs={filteredJobs}
          onJobClick={handleJobClick}
          onSaveJob={handleSaveJob}
        />
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-12 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            No jobs found matching your criteria
          </p>
        </div>
      )}

      {/* Job Detail Modal */}
      <JobDetailModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setTimeout(() => setSelectedJob(null), 200);
        }}
        onSaveToTracker={handleSaveJob}
      />
    </motion.div>
  );
}

