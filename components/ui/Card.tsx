"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  onClick,
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const CardComponent = hover || onClick ? motion.div : "div";
  const motionProps = hover || onClick
    ? {
        whileHover: { y: -4, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)" },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <CardComponent
      className={`bg-white dark:bg-slate-800 rounded-lg shadow-soft border border-slate-200 dark:border-slate-700 ${
        paddingClasses[padding]
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </CardComponent>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-slate-900 dark:text-slate-100 ${className}`}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`text-slate-600 dark:text-slate-300 ${className}`}>
      {children}
    </div>
  );
}

