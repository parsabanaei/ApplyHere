"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  IoHome,
  IoDocumentText,
  IoGitCompare,
  IoChatbubbles,
  IoDocuments,
  IoBriefcase,
  IoBusinessOutline,
  IoNotifications,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

const menuItems = [
  { icon: <IoHome size={20} />, label: "Dashboard", href: "/dashboard" },
  {
    icon: <IoDocumentText size={20} />,
    label: "Resume Builder",
    href: "/dashboard/resume-builder",
  },
  {
    icon: <IoGitCompare size={20} />,
    label: "Resume Comparator",
    href: "/dashboard/resume-comparator",
  },
  {
    icon: <IoChatbubbles size={20} />,
    label: "Interview Prep",
    href: "/dashboard/interview-prep",
  },
  {
    icon: <IoDocuments size={20} />,
    label: "Templates",
    href: "/dashboard/templates",
  },
  {
    icon: <IoBriefcase size={20} />,
    label: "Job Tracker",
    href: "/dashboard/tracker",
  },
  {
    icon: <IoBusinessOutline size={20} />,
    label: "Company Insights",
    href: "/dashboard/company-insights",
  },
  {
    icon: <IoNotifications size={20} />,
    label: "Job Alerts",
    href: "/dashboard/job-alerts",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? "80px" : "256px" }}
      className="bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 h-screen sticky top-0 flex flex-col"
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            ApplyHere.ai
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 p-1"
        >
          {isCollapsed ? (
            <IoChevronForward size={20} />
          ) : (
            <IoChevronBack size={20} />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  {item.icon}
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.aside>
  );
}

