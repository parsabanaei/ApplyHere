"use client";

/**
 * Client-only TXT file uploader component
 * Simple, reliable text file uploads
 */

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FiUpload, FiX } from "react-icons/fi";

interface TXTUploaderProps {
  onTextExtracted: (text: string, fileName: string) => void;
  onError: (error: string) => void;
  label: string;
  disabled?: boolean;
}

export function TXTUploader({ onTextExtracted, onError, label, disabled }: TXTUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<{ percent: number; status: string }>({
    percent: 0,
    status: "",
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setProgress({ percent: 10, status: "Reading file..." });
    onError("");

    try {
      // Validate file type
      const fileType = file.type;
      const fileNameLower = file.name.toLowerCase();
      
      if (!fileType.includes("text") && !fileNameLower.endsWith(".txt")) {
        throw new Error("Only .txt files are supported.");
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
        throw new Error(`File size (${sizeMB} MB) exceeds 5 MB limit.`);
      }

      setProgress({ percent: 50, status: "Extracting text..." });
      const extractedText = await file.text();

      if (extractedText.length < 10) {
        throw new Error("The file appears to be empty.");
      }

      setProgress({ percent: 100, status: "Complete!" });
      setFileName(file.name);
      onTextExtracted(extractedText, file.name);

      // Clear progress after delay
      setTimeout(() => {
        setProgress({ percent: 0, status: "" });
      }, 2000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to process file.";
      onError(errorMessage);
      setFileName("");
      setProgress({ percent: 0, status: "" });
    } finally {
      setIsProcessing(false);
    }
  };

  const clearFile = () => {
    setFileName("");
    setProgress({ percent: 0, status: "" });
    onError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 items-center">
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,text/plain"
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled || isProcessing}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled || isProcessing}
          className="flex items-center gap-2"
        >
          <FiUpload />
          {isProcessing ? "Processing..." : `Upload ${label}`}
        </Button>

        {fileName && !isProcessing && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg">
            <span className="text-sm text-indigo-700 dark:text-indigo-300 truncate max-w-[200px]">
              {fileName}
            </span>
            <button
              onClick={clearFile}
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
              type="button"
            >
              <FiX />
            </button>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      {isProcessing && progress.percent > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {progress.status}
            </span>
            <span className="text-sm text-blue-600 dark:text-blue-400">
              {Math.round(progress.percent)}%
            </span>
          </div>
          <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress.percent}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

