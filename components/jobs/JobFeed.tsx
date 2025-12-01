"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JobAlert } from "@/types";
import { IoLocationOutline, IoCashOutline, IoTimeOutline, IoBookmark } from "react-icons/io5";
import { format } from "date-fns";

interface JobFeedProps {
  jobs: JobAlert[];
  onJobClick: (job: JobAlert) => void;
  onSaveJob: (job: JobAlert) => void;
}

export function JobFeed({ jobs, onJobClick, onSaveJob }: JobFeedProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card
            hover
            padding="lg"
            onClick={() => onJobClick(job)}
            className="cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Title and Company */}
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {job.company}
                  </p>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <IoLocationOutline size={16} />
                    <span>{job.location}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-1">
                      <IoCashOutline size={16} />
                      <span>{job.salary}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <IoTimeOutline size={16} />
                    <span>
                      {format(new Date(job.postedDate), "MMM d, yyyy")}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                    {job.jobType}
                  </span>
                  {job.remote && (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                      Remote
                    </span>
                  )}
                  {job.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {job.tags.length > 3 && (
                    <span className="text-xs text-slate-500 px-2 py-1">
                      +{job.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSaveJob(job);
                  }}
                  className="flex items-center gap-2"
                >
                  <IoBookmark size={16} />
                  Save
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

