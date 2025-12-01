"use client";

import React from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { IoPersonCircle, IoLogOut } from "react-icons/io5";

export function TopNav() {
  const { theme, toggleTheme } = useThemeContext();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Welcome back, {user?.name || "User"}!
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700">
            <IoPersonCircle
              size={24}
              className="text-slate-600 dark:text-slate-300"
            />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {user?.email}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <IoLogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

