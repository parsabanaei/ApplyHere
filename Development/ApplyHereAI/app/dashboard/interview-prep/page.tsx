"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Accordion,
  AccordionItem,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
  Progress,
} from "@heroui/react";
import {
  FaUserTie,
  FaCheckCircle,
  FaLightbulb,
  FaBuilding,
  FaQuestionCircle,
} from "react-icons/fa";
import { 
  Shirt, 
  Lightbulb, 
  Smile, 
  Armchair, 
  Frame, 
  Monitor, 
  Coffee, 
  HelpCircle 
} from "lucide-react";

interface Question {
  id: string;
  question: string;
  category: string;
  tips: string[];
  reviewed: boolean;
}

export default function InterviewPrepPage() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      question: "Tell me about yourself",
      category: "Behavioral",
      tips: [
        "Focus on your professional background, not personal life",
        "Highlight relevant achievements and skills",
        "Keep it concise (2-3 minutes)",
        "End with why you're interested in this role",
      ],
      reviewed: false,
    },
    {
      id: "2",
      question: "What are your greatest strengths?",
      category: "Behavioral",
      tips: [
        "Choose strengths relevant to the job",
        "Provide specific examples",
        "Avoid generic answers",
        "Show how your strengths benefit the company",
      ],
      reviewed: false,
    },
    {
      id: "3",
      question: "Describe a challenging situation and how you handled it",
      category: "Behavioral",
      tips: [
        "Use the STAR method (Situation, Task, Action, Result)",
        "Choose a relevant example",
        "Focus on your actions and decision-making",
        "Highlight the positive outcome",
      ],
      reviewed: false,
    },
    {
      id: "4",
      question: "Why do you want to work here?",
      category: "Motivation",
      tips: [
        "Research the company beforehand",
        "Align your values with company culture",
        "Mention specific projects or initiatives",
        "Show genuine enthusiasm",
      ],
      reviewed: false,
    },
    {
      id: "5",
      question: "Where do you see yourself in 5 years?",
      category: "Career Goals",
      tips: [
        "Show ambition but be realistic",
        "Align goals with company growth",
        "Demonstrate commitment",
        "Focus on skill development",
      ],
      reviewed: false,
    },
    {
      id: "6",
      question: "Explain a complex technical concept to a non-technical person",
      category: "Technical",
      tips: [
        "Use analogies and metaphors",
        "Avoid jargon",
        "Break it down into simple steps",
        "Check for understanding",
      ],
      reviewed: false,
    },
    {
      id: "7",
      question: "How do you handle conflict with team members?",
      category: "Behavioral",
      tips: [
        "Emphasize communication skills",
        "Show empathy and understanding",
        "Focus on finding solutions",
        "Provide a specific example",
      ],
      reviewed: false,
    },
    {
      id: "8",
      question: "What's your biggest weakness?",
      category: "Behavioral",
      tips: [
        "Be honest but strategic",
        "Choose a real weakness",
        "Explain how you're working to improve",
        "Show self-awareness",
      ],
      reviewed: false,
    },
  ]);

  const appearanceTips = [
    { tip: "Dress appropriately for the company culture", icon: Shirt },
    { tip: "Ensure good lighting if virtual interview", icon: Lightbulb },
    { tip: "Maintain eye contact and smile", icon: Smile },
    { tip: "Body language: sit upright, don't fidget", icon: Armchair },
    { tip: "Have a clean, professional background", icon: Frame },
    { tip: "Test tech setup 30 minutes before", icon: Monitor },
    { tip: "Keep water nearby to stay hydrated", icon: Coffee },
    { tip: "Prepare questions to ask the interviewer", icon: HelpCircle },
  ];

  const companyResearchAreas = [
    {
      title: "Company Mission & Values",
      description: "Understand their core purpose and principles",
      icon: <FaBuilding />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Recent News & Updates",
      description: "Stay informed about latest developments",
      icon: <FaLightbulb />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Products & Services",
      description: "Know what the company offers",
      icon: <FaCheckCircle />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Company Culture",
      description: "Research work environment and employee reviews",
      icon: <FaUserTie />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const toggleReviewed = (id: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, reviewed: !q.reviewed } : q))
    );
  };

  const reviewedCount = questions.filter((q) => q.reviewed).length;
  const progressPercentage = (reviewedCount / questions.length) * 100;

  return (
    <div>
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Interview Preparation</BreadcrumbItem>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Interview Preparation
        </h1>
        <p className="text-gray-600 text-lg">
          Prepare for your interviews with common questions, tips, and research tools
        </p>
      </motion.div>

      {/* Progress Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
      >
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardBody className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm opacity-90 mb-1">Preparation Progress</p>
                <h2 className="text-3xl font-bold">
                  {reviewedCount} / {questions.length}
                </h2>
                <p className="text-sm opacity-90">Questions Reviewed</p>
              </div>
              <FaCheckCircle className="text-6xl opacity-50" />
            </div>
            <Progress
              value={progressPercentage}
              color="primary"
              size="md"
              className="mt-4"
              aria-label="Preparation progress"
            />
          </CardBody>
        </Card>
      </motion.div>

      {/* Common Interview Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Card>
          <CardHeader className="pb-0 pt-6 px-6 flex items-center gap-2">
            <FaQuestionCircle className="text-blue-500 text-2xl" />
            <h2 className="text-2xl font-bold">Common Interview Questions</h2>
          </CardHeader>
          <CardBody className="p-6">
            <Accordion variant="splitted">
              {questions.map((question, index) => (
                <AccordionItem
                  key={question.id}
                  aria-label={question.question}
                  title={
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">{question.question}</span>
                        {question.reviewed && (
                          <FaCheckCircle className="text-green-500" />
                        )}
                      </div>
                      <Chip size="sm" variant="flat" color="primary">
                        {question.category}
                      </Chip>
                    </div>
                  }
                >
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Tips for answering:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {question.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="sm"
                      color={question.reviewed ? "default" : "primary"}
                      variant={question.reviewed ? "flat" : "solid"}
                      onPress={() => toggleReviewed(question.id)}
                      startContent={<FaCheckCircle />}
                    >
                      {question.reviewed ? "Mark as Unreviewed" : "Mark as Reviewed"}
                    </Button>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
        </Card>
      </motion.div>

      {/* Appearance Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <Card>
          <CardHeader className="pb-0 pt-6 px-6 flex items-center gap-2">
            <FaUserTie className="text-purple-500 text-2xl" />
            <h2 className="text-2xl font-bold">Appearance & Presentation Tips</h2>
          </CardHeader>
          <CardBody className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appearanceTips.map((item, index) => {
                const IconComponent = item.icon;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-md transition-shadow"
                >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-gray-900 dark:text-gray-100">{item.tip}</span>
                </motion.div>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Company Research */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader className="pb-0 pt-6 px-6 flex items-center gap-2">
            <FaBuilding className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold">Company Research Checklist</h2>
          </CardHeader>
          <CardBody className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyResearchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`bg-gradient-to-br ${area.color} p-6 rounded-xl text-white`}
                >
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="opacity-90">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* General Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <Card>
          <CardHeader className="pb-0 pt-6 px-6 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl font-bold">General Interview Tips</h2>
          </CardHeader>
          <CardBody className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Before the Interview</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Research the company thoroughly</li>
                  <li>• Review your resume</li>
                  <li>• Prepare questions to ask</li>
                  <li>• Practice common questions</li>
                  <li>• Plan your outfit</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">During the Interview</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Arrive 10-15 minutes early</li>
                  <li>• Listen carefully</li>
                  <li>• Take your time to answer</li>
                  <li>• Show enthusiasm</li>
                  <li>• Ask thoughtful questions</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">After the Interview</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Send thank-you email within 24 hours</li>
                  <li>• Reflect on your performance</li>
                  <li>• Note any follow-up questions</li>
                  <li>• Be patient but follow up</li>
                  <li>• Continue other applications</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}

