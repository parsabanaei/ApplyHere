"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useRouter } from "next/navigation";

export function Header() {
  const { theme, toggleTheme } = useThemeContext();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ApplyHere.ai
            </h1>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a
              href="#features"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Pricing
            </a>
          </motion.nav>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/auth/login")}
            >
              Log In
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => router.push("/auth/register")}
            >
              Sign Up
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

