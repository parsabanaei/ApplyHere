"use client";

import React from "react";
import { JobApplication, ApplicationStatus } from "@/types";
import { JobCard } from "./JobCard";
import { IoAdd } from "react-icons/io5";

interface KanbanColumnProps {
  title: string;
  status: ApplicationStatus;
  applications: JobApplication[];
  onEdit: (application: JobApplication) => void;
  onDelete: (id: string) => void;
  onAddJob: (status: ApplicationStatus) => void;
}

const statusBadgeColors = {
  wishlist: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300",
  applied: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  interviewing:
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  offer: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  rejected: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
  accepted:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
};

export function KanbanColumn({
  title,
  status,
  applications,
  onEdit,
  onDelete,
  onAddJob,
}: KanbanColumnProps) {
  return (
    <div className="flex-shrink-0 w-80">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
        {/* Column Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusBadgeColors[status]}`}
            >
              {applications.length}
            </span>
          </div>
          <button
            onClick={() => onAddJob(status)}
            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
            title="Add job"
          >
            <IoAdd size={20} className="text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Applications */}
        <div className="space-y-3 min-h-[200px]">
          {applications.map((application) => (
            <JobCard
              key={application.id}
              application={application}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
          {applications.length === 0 && (
            <div className="text-center py-8 text-slate-400 dark:text-slate-600 text-sm">
              No applications yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

