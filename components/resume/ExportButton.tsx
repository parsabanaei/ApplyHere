"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { IoDownload } from "react-icons/io5";
import { exportResumeToPdf, exportCoverLetterToPdf } from "@/lib/pdfExport";

interface ExportButtonProps {
  type: "resume" | "cover-letter";
}

export function ExportButton({ type }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      if (type === "resume") {
        await exportResumeToPdf("resume-preview");
      } else {
        await exportCoverLetterToPdf("cover-letter-preview");
      }
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to export PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      variant="primary"
      onClick={handleExport}
      isLoading={isExporting}
      className="flex items-center gap-2"
    >
      <IoDownload size={20} />
      Export {type === "resume" ? "Resume" : "Cover Letter"} as PDF
    </Button>
  );
}

