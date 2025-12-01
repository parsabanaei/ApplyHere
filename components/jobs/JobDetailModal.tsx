"use client";

import React from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { JobAlert } from "@/types";
import {
  IoLocationOutline,
  IoCashOutline,
  IoTimeOutline,
  IoBriefcaseOutline,
  IoCheckmarkCircle,
  IoGiftOutline,
} from "react-icons/io5";
import { format } from "date-fns";

interface JobDetailModalProps {
  job: JobAlert | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveToTracker: (job: JobAlert) => void;
}

export function JobDetailModal({
  job,
  isOpen,
  onClose,
  onSaveToTracker,
}: JobDetailModalProps) {
  if (!job) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={job.title} size="xl">
      <div className="space-y-6">
        {/* Company and Basic Info */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            {job.company}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
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
              <span>Posted {format(new Date(job.postedDate), "MMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-1">
              <IoBriefcaseOutline size={16} />
              <span className="capitalize">{job.jobType}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.remote && (
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              Remote
            </span>
          )}
          {job.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Job Description */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Job Description
          </h4>
          <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">
            {job.description}
          </p>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <IoCheckmarkCircle className="text-indigo-600 dark:text-indigo-400" />
            Requirements
          </h4>
          <ul className="space-y-2">
            {job.requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              >
                <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                  •
                </span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        {job.benefits && job.benefits.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <IoGiftOutline className="text-green-600 dark:text-green-400" />
              Benefits
            </h4>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    •
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onSaveToTracker(job);
              onClose();
            }}
          >
            Save to Tracker
          </Button>
        </div>
      </div>
    </Modal>
  );
}

