"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/Input";
import { CompanyResearch } from "@/types";

interface ResearchCardProps {
  research: CompanyResearch;
  onChange: (research: CompanyResearch) => void;
}

export function ResearchCard({ research, onChange }: ResearchCardProps) {
  return (
    <Card padding="lg">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
            {research.company}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Company Research Notes
          </p>
        </div>

        <Textarea
          label="Notes"
          value={research.notes}
          onChange={(e) => onChange({ ...research, notes: e.target.value })}
          placeholder="Add your research notes about the company..."
          rows={4}
        />

        <Textarea
          label="Culture Observations"
          value={research.culture || ""}
          onChange={(e) => onChange({ ...research, culture: e.target.value })}
          placeholder="What have you learned about the company culture?"
          rows={3}
        />

        <Textarea
          label="Questions to Ask"
          value={research.questions?.join("\n") || ""}
          onChange={(e) =>
            onChange({
              ...research,
              questions: e.target.value.split("\n").filter(Boolean),
            })
          }
          placeholder="List questions you want to ask the interviewer (one per line)..."
          rows={4}
        />
      </div>
    </Card>
  );
}

