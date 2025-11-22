"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button, Avatar, Divider, Listbox, ListboxItem, User, Badge, Tooltip } from "@heroui/react";
import {
  FaHome,
  FaFileAlt,
  FaChartLine,
  FaUserTie,
  FaEnvelope,
  FaCheckCircle,
  FaBuilding,
  FaBell,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ThemeToggle } from "../components/ThemeToggle";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/auth");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const navItems = [
    { icon: <FaHome />, label: "Overview", path: "/dashboard" },
    { icon: <FaFileAlt />, label: "Resume Builder", path: "/dashboard/resume-builder" },
    { icon: <FaChartLine />, label: "Resume Comparator", path: "/dashboard/comparator" },
    { icon: <FaUserTie />, label: "Interview Prep", path: "/dashboard/interview-prep" },
    { icon: <FaEnvelope />, label: "Templates", path: "/dashboard/templates" },
    { icon: <FaCheckCircle />, label: "Application Tracker", path: "/dashboard/tracker" },
    { icon: <FaBuilding />, label: "Company Insights", path: "/dashboard/companies" },
    { icon: <FaBell />, label: "Job Alerts", path: "/dashboard/job-alerts", badge: 8 },
  ];

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-0 -translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <FaCheckCircle className="text-2xl text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">ApplyHere.ai</h1>
          </div>
          <User
            name={user?.name || "User"}
            description="Job Seeker"
            avatarProps={{
              src: undefined,
              name: user?.name || "User",
              className: "bg-gradient-to-br from-blue-500 to-purple-500"
            }}
          />
        </div>

        <nav className="p-4">
          <Listbox
            aria-label="Navigation"
            onAction={(key) => router.push(key as string)}
            classNames={{
              base: "p-0 gap-0",
              list: "gap-1",
            }}
          >
            {navItems.map((item) => (
              <ListboxItem
                key={item.path}
                startContent={<span className="text-xl">{item.icon}</span>}
                endContent={
                  item.badge ? (
                    <Badge content={item.badge} color="danger" size="sm">
                      <span></span>
                    </Badge>
                  ) : null
                }
                className={`rounded-lg mb-1 ${
                  pathname === item.path
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </ListboxItem>
            ))}
          </Listbox>

          <Divider className="my-4" />

          <Button
            fullWidth
            variant="light"
            color="danger"
            startContent={<FaSignOutAlt />}
            onPress={handleLogout}
            className="justify-start"
          >
            Logout
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <Tooltip content={sidebarOpen ? "Close sidebar" : "Open sidebar"}>
              <Button
                isIconOnly
                variant="light"
                onPress={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <FaTimes /> : <FaBars />}
              </Button>
            </Tooltip>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Badge content={notifications} color="danger" size="sm">
                <Button
                  isIconOnly
                  variant="light"
                  onPress={() => router.push("/dashboard/job-alerts")}
                >
                  <FaBell className="text-xl" />
                </Button>
              </Badge>
              <User
                name={user?.name || "User"}
                description="View profile"
                avatarProps={{
                  src: undefined,
                  name: user?.name || "User",
                  size: "sm",
                  className: "bg-gradient-to-br from-blue-500 to-purple-500 cursor-pointer"
                }}
                classNames={{
                  base: "cursor-pointer"
                }}
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

