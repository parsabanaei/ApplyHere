"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { InterviewTip } from "@/types";
import {
  IoShirtOutline,
  IoChatbubbleEllipses,
  IoClipboardOutline,
  IoMailOutline,
} from "react-icons/io5";

interface TipsCardProps {
  tip: InterviewTip;
}

const categoryIcons = {
  appearance: <IoShirtOutline size={24} />,
  communication: <IoChatbubbleEllipses size={24} />,
  preparation: <IoClipboardOutline size={24} />,
  "follow-up": <IoMailOutline size={24} />,
};

const categoryColors = {
  appearance: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  communication: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  preparation: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  "follow-up": "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
};

export function TipsCard({ tip }: TipsCardProps) {
  return (
    <Card padding="lg" hover>
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg ${categoryColors[tip.category]}`}
        >
          {categoryIcons[tip.category]}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            {tip.title}
          </h3>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-300">
              {tip.description}
            </p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

