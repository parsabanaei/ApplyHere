"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { KanbanColumn } from "@/components/tracker/KanbanColumn";
import { AddJobModal } from "@/components/tracker/AddJobModal";
import { Button } from "@/components/ui/Button";
import { JobApplication, ApplicationStatus } from "@/types";
import { mockApplications } from "@/lib/mockData";
import { STORAGE_KEYS, saveToStorage, getFromStorage } from "@/lib/storage";
import { IoAdd, IoFilter } from "react-icons/io5";

const columns: { title: string; status: ApplicationStatus }[] = [
  { title: "Wishlist", status: "wishlist" },
  { title: "Applied", status: "applied" },
  { title: "Interviewing", status: "interviewing" },
  { title: "Offer", status: "offer" },
  { title: "Rejected", status: "rejected" },
  { title: "Accepted", status: "accepted" },
];

export default function TrackerPage() {
  const [applications, setApplications] =
    useState<JobApplication[]>(mockApplications);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] =
    useState<ApplicationStatus>("applied");

  useEffect(() => {
    const savedApplications = getFromStorage<JobApplication[]>(
      STORAGE_KEYS.APPLICATIONS,
      mockApplications
    );
    setApplications(savedApplications);
  }, []);

  const handleAddApplication = (
    newApp: Omit<JobApplication, "id">
  ) => {
    const application: JobApplication = {
      ...newApp,
      id: crypto.randomUUID(),
    };
    const updatedApps = [...applications, application];
    setApplications(updatedApps);
    saveToStorage(STORAGE_KEYS.APPLICATIONS, updatedApps);
  };

  const handleEditApplication = (application: JobApplication) => {
    // For now, just show an alert. In a full implementation, 
    // this would open an edit modal
    alert(`Edit functionality for ${application.jobTitle} - coming soon!`);
  };

  const handleDeleteApplication = (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      const updatedApps = applications.filter((app) => app.id !== id);
      setApplications(updatedApps);
      saveToStorage(STORAGE_KEYS.APPLICATIONS, updatedApps);
    }
  };

  const handleAddJob = (status: ApplicationStatus) => {
    setSelectedStatus(status);
    setIsAddModalOpen(true);
  };

  const getApplicationsByStatus = (status: ApplicationStatus) => {
    return applications.filter((app) => app.status === status);
  };

  const totalApplications = applications.length;
  const activeApplications = applications.filter(
    (app) => app.status === "applied" || app.status === "interviewing"
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Job Application Tracker
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Keep track of all your job applications in one place
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleAddJob("applied")}
            className="flex items-center gap-2"
          >
            <IoAdd size={20} />
            Add Application
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Total Applications
          </p>
          <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            {totalApplications}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Active
          </p>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {activeApplications}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Interviews
          </p>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
            {getApplicationsByStatus("interviewing").length}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            Offers
          </p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {getApplicationsByStatus("offer").length}
          </p>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4">
            {columns.map((column) => (
              <KanbanColumn
                key={column.status}
                title={column.title}
                status={column.status}
                applications={getApplicationsByStatus(column.status)}
                onEdit={handleEditApplication}
                onDelete={handleDeleteApplication}
                onAddJob={handleAddJob}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add Job Modal */}
      <AddJobModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddApplication}
        initialStatus={selectedStatus}
      />
    </motion.div>
  );
}

