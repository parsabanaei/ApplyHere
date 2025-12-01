"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import {
  IoBriefcase,
  IoChatbubbles,
  IoCheckmarkCircle,
  IoDocument,
} from "react-icons/io5";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  color: string;
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  return (
    <Card hover padding="lg">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={<IoBriefcase size={24} className="text-indigo-600 dark:text-indigo-400" />}
        label="Total Applications"
        value={12}
        color="bg-indigo-50 dark:bg-indigo-900/30"
      />
      <StatCard
        icon={<IoChatbubbles size={24} className="text-green-600 dark:text-green-400" />}
        label="Interviews"
        value={5}
        color="bg-green-50 dark:bg-green-900/30"
      />
      <StatCard
        icon={<IoCheckmarkCircle size={24} className="text-blue-600 dark:text-blue-400" />}
        label="Offers"
        value={2}
        color="bg-blue-50 dark:bg-blue-900/30"
      />
      <StatCard
        icon={<IoDocument size={24} className="text-purple-600 dark:text-purple-400" />}
        label="Resumes"
        value={3}
        color="bg-purple-50 dark:bg-purple-900/30"
      />
    </div>
  );
}

