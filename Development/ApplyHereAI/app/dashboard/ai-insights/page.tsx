"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Chip,
  Progress,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import { FaBrain, FaRobot, FaChartPie, FaMagic } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AIInsightsPage() {
  const router = useRouter();

  const insights = [
    {
      title: "Resume Strength Score",
      description:
        "Analyzes your uploaded resume and gives you a strength score based on keyword match and clarity.",
      score: 78,
      icon: <FaChartPie className="text-pink-400 text-xl" />,
    },
    {
      title: "Role Match Analysis",
      description:
        "AI evaluates how closely your experience matches your target job titles and responsibilities.",
      score: 64,
      icon: <FaMagic className="text-blue-400 text-xl" />,
    },
    {
      title: "Skill Confidence Projection",
      description:
        "Estimates which technical or communication skills you need to practice more.",
      score: 52,
      icon: <FaBrain className="text-yellow-400 text-xl" />,
    },
    {
      title: "Interview Readiness",
      description:
        "Measures your prep level based on mock interviews, sample responses, and behavior patterns.",
      score: 41,
      icon: <FaRobot className="text-green-400 text-xl" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-8 text-foreground">
      <div className="max-w-6xl mx-auto mb-4">
        <Breadcrumbs size="sm" variant="solid">
          <BreadcrumbItem onPress={() => router.push("/dashboard")}>
            Dashboard
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent>AI Insights</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          AI Insights
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-xl mb-8">
          Explore AI-generated insights based on your resume, skills, and job
          search patterns. This page gives a snapshot of your overall readiness.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((item) => (
            <Card
              key={item.title}
              className="bg-slate-900/70 border border-slate-800 shadow-lg"
            >
              <CardHeader className="flex items-center gap-3">
                {item.icon}
                <div>
                  <h2 className="font-semibold text-white">{item.title}</h2>
                  <p className="text-xs text-white/60">{item.description}</p>
                </div>
              </CardHeader>
              <CardBody>
                <Progress
                  value={item.score}
                  showValueLabel={true}
                  className="max-w-full"
                />
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            variant="flat"
            color="primary"
            onPress={() => router.push("/dashboard")}
          >
            Back to Dashboard
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
