"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same size to prevent layout shift
    return (
      <Switch
        isDisabled
        className="opacity-0"
        aria-label="Loading theme toggle"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onValueChange={(checked) => setTheme(checked ? "dark" : "light")}
      size="lg"
      color="primary"
      startContent={<FaSun />}
      endContent={<FaMoon />}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    />
  );
}

