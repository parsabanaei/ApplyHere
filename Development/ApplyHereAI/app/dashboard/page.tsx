"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Progress,
  Chip,
  Skeleton,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import {
  FaFileAlt,
  FaChartLine,
  FaUserTie,
  FaCheckCircle,
  FaDollarSign,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Applications Sent", value: "12", color: "bg-blue-500", chipColor: "primary" as const },
    { label: "Interviews Scheduled", value: "3", color: "bg-green-500", chipColor: "success" as const },
    { label: "Job Alerts", value: "8", color: "bg-orange-500", chipColor: "warning" as const },
    { label: "Resume Views", value: "45", color: "bg-purple-500", chipColor: "secondary" as const },
  ];

  const quickActions = [
    {
      icon: <FaFileAlt className="text-3xl" />,
      title: "Build Resume",
      description: "Create a new resume or edit existing one",
      path: "/dashboard/resume-builder",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Compare Resume",
      description: "Match your resume with job descriptions",
      path: "/dashboard/comparator",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Interview Prep",
      description: "Prepare for upcoming interviews",
      path: "/dashboard/interview-prep",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Track Applications",
      description: "Manage your application pipeline",
      path: "/dashboard/tracker",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "AI Insights",
      description: "View AI-powered recommendations based on your profile.",
      path: "/dashboard/ai-insights",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaDollarSign className="text-3xl" />,
      title: "Salary Predictor",
      description: "Estimate realistic salary ranges for your target role.",
      path: "/dashboard/salary-predictor",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const recentActivity = [
    { action: "Applied to Software Engineer at Google", time: "2 hours ago" },
    { action: "Updated resume for Data Scientist role", time: "5 hours ago" },
    { action: "Completed interview prep for Amazon", time: "1 day ago" },
    { action: "Received new job alert: ML Engineer", time: "2 days ago" },
  ];

  if (isLoading) {
    return (
      <div>
        <div className="mb-8">
          <Skeleton className="h-10 w-48 mb-4 rounded-lg" />
          <Skeleton className="h-6 w-96 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardBody className="p-6">
                <Skeleton className="h-12 w-12 mb-4 rounded-lg" />
                <Skeleton className="h-8 w-16 mb-2 rounded-lg" />
                <Skeleton className="h-4 w-32 rounded-lg" />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
      </Breadcrumbs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Welcome back! Here's your job search overview
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card isPressable className="hover:scale-105 transition-transform">
              <CardBody className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-lg`} />
                  <Chip size="sm" color={stat.chipColor} variant="flat">
                    New
                  </Chip>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              onClick={() => router.push(action.path)}
              className={`bg-gradient-to-br ${action.color} p-6 rounded-xl cursor-pointer hover:shadow-2xl transition-all hover:scale-105 text-white`}
            >
              <div className="flex items-start justify-between mb-4">
                {action.icon}
                <FaArrowRight className="text-xl opacity-70" />
              </div>
              <h3 className="text-xl font-bold mb-2">{action.title}</h3>
              <p className="opacity-90">{action.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <Card>
          <CardBody className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0 dark:border-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Application Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-8"
      >
        <Card>
          <CardHeader className="pb-0 pt-6 px-6">
            <h3 className="text-xl font-bold">Application Success Rate</h3>
          </CardHeader>
          <CardBody className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    Resume Views
                  </span>
                  <Chip size="sm" color="primary" variant="flat">
                    75%
                  </Chip>
                </div>
                <Progress
                  value={75}
                  color="primary"
                  showValueLabel={true}
                  className="max-w-full"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    Interview Rate
                  </span>
                  <Chip size="sm" color="success" variant="flat">
                    25%
                  </Chip>
                </div>
                <Progress
                  value={25}
                  color="success"
                  showValueLabel={true}
                  className="max-w-full"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    Response Rate
                  </span>
                  <Chip size="sm" color="warning" variant="flat">
                    60%
                  </Chip>
                </div>
                <Progress
                  value={60}
                  color="warning"
                  showValueLabel={true}
                  className="max-w-full"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
