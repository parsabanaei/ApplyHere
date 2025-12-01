"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const recentActivity = [
    {
      action: "Applied to Software Engineer position",
      company: "TechCorp",
      time: "2 hours ago",
    },
    {
      action: "Interview scheduled",
      company: "StartupXYZ",
      time: "1 day ago",
    },
    {
      action: "Resume updated",
      company: "",
      time: "2 days ago",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Stats */}
      <StatsCards />

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <div className="flex-1">
                    <p className="text-slate-900 dark:text-white font-medium">
                      {activity.action}
                    </p>
                    {activity.company && (
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {activity.company}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2"
                onClick={() => router.push("/dashboard/resume-builder")}
              >
                <span className="text-2xl">📝</span>
                <span>Build Resume</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2"
                onClick={() => router.push("/dashboard/tracker")}
              >
                <span className="text-2xl">📊</span>
                <span>Track Apps</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2"
                onClick={() => router.push("/dashboard/interview-prep")}
              >
                <span className="text-2xl">💼</span>
                <span>Prep Interview</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2"
                onClick={() => router.push("/dashboard/job-alerts")}
              >
                <span className="text-2xl">🔔</span>
                <span>Browse Jobs</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips */}
      <Card padding="lg">
        <CardHeader>
          <CardTitle>Tips for Success</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                Tailor your resume for each position using the Resume Comparator
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                Follow up within 24 hours after interviews
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span className="text-slate-700 dark:text-slate-300">
                Keep your application tracker updated to stay organized
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

