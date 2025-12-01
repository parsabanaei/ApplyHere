"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { JobApplication } from "@/types";
import { IoEllipsisVertical, IoCalendar, IoLocationOutline } from "react-icons/io5";
import { format } from "date-fns";

interface JobCardProps {
  application: JobApplication;
  onEdit: (application: JobApplication) => void;
  onDelete: (id: string) => void;
}

const statusColors = {
  wishlist: "border-l-slate-400",
  applied: "border-l-blue-500",
  interviewing: "border-l-yellow-500",
  offer: "border-l-green-500",
  rejected: "border-l-red-500",
  accepted: "border-l-purple-500",
};

export function JobCard({ application, onEdit, onDelete }: JobCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`bg-white dark:bg-slate-800 rounded-lg shadow-soft border-l-4 ${
        statusColors[application.status]
      } p-4 cursor-move hover:shadow-medium transition-shadow relative`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
            {application.jobTitle}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {application.company}
          </p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded"
          >
            <IoEllipsisVertical size={20} className="text-slate-400" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-slate-700 rounded-lg shadow-strong border border-slate-200 dark:border-slate-600 py-1 z-10">
              <button
                onClick={() => {
                  onEdit(application);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  onDelete(application.id);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-600 text-red-600 dark:text-red-400"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-3">
        {application.location && (
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <IoLocationOutline size={16} />
            <span>{application.location}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <IoCalendar size={16} />
          <span>{format(new Date(application.dateApplied), "MMM d, yyyy")}</span>
        </div>
        {application.salary && (
          <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {application.salary}
          </div>
        )}
      </div>

      {/* Tags */}
      {application.tags && application.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {application.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

