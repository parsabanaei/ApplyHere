"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Template } from "@/types";
import { IoCopy, IoCheckmark } from "react-icons/io5";

interface TemplateModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TemplateModal({
  template,
  isOpen,
  onClose,
}: TemplateModalProps) {
  const [editedContent, setEditedContent] = useState("");
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (template) {
      setEditedContent(template.content);
    }
  }, [template]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  if (!template) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={template.title} size="xl">
      <div className="space-y-6">
        {/* Template Info */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
            Placeholders
          </h4>
          <div className="flex flex-wrap gap-2">
            {template.placeholders.map((placeholder, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm font-mono"
              >
                [{placeholder}]
              </span>
            ))}
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
            Replace the bracketed placeholders with your actual information
          </p>
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Template Content
          </label>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-mono text-sm"
            rows={15}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleCopy}
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <IoCheckmark size={20} />
                Copied!
              </>
            ) : (
              <>
                <IoCopy size={20} />
                Copy to Clipboard
              </>
            )}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

