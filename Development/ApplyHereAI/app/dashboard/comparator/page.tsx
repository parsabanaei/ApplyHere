"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Textarea,
  Button,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
  CircularProgress,
} from "@heroui/react";
import { FaChartLine, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

interface KeywordMatch {
  keyword: string;
  inResume: boolean;
  inJobDescription: boolean;
}

export default function ComparatorPage() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [compared, setCompared] = useState(false);
  const [keywords, setKeywords] = useState<KeywordMatch[]>([]);
  const [matchScore, setMatchScore] = useState(0);

  const extractKeywords = (text: string): string[] => {
    // Simple keyword extraction - in production, this would be more sophisticated
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3);

    // Common technical keywords and skills
    const technicalTerms = [
      "javascript",
      "python",
      "react",
      "node",
      "typescript",
      "java",
      "sql",
      "aws",
      "docker",
      "kubernetes",
      "agile",
      "scrum",
      "leadership",
      "management",
      "design",
      "development",
      "engineering",
      "communication",
      "teamwork",
      "problem",
      "solving",
      "analysis",
      "data",
      "cloud",
      "api",
      "database",
      "frontend",
      "backend",
      "fullstack",
      "testing",
      "deployment",
      "ci/cd",
      "git",
      "github",
      "project",
      "experience",
      "bachelor",
      "master",
      "degree",
      "certification",
    ];

    return words.filter((word) => technicalTerms.includes(word));
  };

  const handleCompare = () => {
    const resumeKeywords = new Set(extractKeywords(resume));
    const jobKeywords = new Set(extractKeywords(jobDescription));

    const allKeywords = new Set([...resumeKeywords, ...jobKeywords]);

    const keywordMatches: KeywordMatch[] = Array.from(allKeywords).map(
      (keyword) => ({
        keyword,
        inResume: resumeKeywords.has(keyword),
        inJobDescription: jobKeywords.has(keyword),
      })
    );

    // Calculate match score
    const matchingKeywords = keywordMatches.filter(
      (km) => km.inResume && km.inJobDescription
    ).length;
    const totalJobKeywords = keywordMatches.filter(
      (km) => km.inJobDescription
    ).length;
    const score =
      totalJobKeywords > 0 ? (matchingKeywords / totalJobKeywords) * 100 : 0;

    setKeywords(keywordMatches);
    setMatchScore(Math.round(score));
    setCompared(true);
  };

  const highlightKeywords = (text: string, type: "resume" | "job") => {
    if (!compared) return text;

    let highlightedText = text;
    keywords.forEach((kw) => {
      if (type === "resume" && kw.inResume) {
        const color = kw.inJobDescription ? "bg-green-200" : "bg-gray-200";
        const regex = new RegExp(`\\b${kw.keyword}\\b`, "gi");
        highlightedText = highlightedText.replace(
          regex,
          `<span class="${color} px-1 rounded">$&</span>`
        );
      } else if (type === "job" && kw.inJobDescription) {
        const color = kw.inResume ? "bg-green-200" : "bg-yellow-200";
        const regex = new RegExp(`\\b${kw.keyword}\\b`, "gi");
        highlightedText = highlightedText.replace(
          regex,
          `<span class="${color} px-1 rounded">$&</span>`
        );
      }
    });

    return highlightedText;
  };

  const matchingKeywords = keywords.filter(
    (kw) => kw.inResume && kw.inJobDescription
  );
  const missingKeywords = keywords.filter(
    (kw) => kw.inJobDescription && !kw.inResume
  );
  const extraKeywords = keywords.filter(
    (kw) => kw.inResume && !kw.inJobDescription
  );

  return (
    <div>
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Resume Comparator</BreadcrumbItem>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Resume vs Job Description Comparator
        </h1>
        <p className="text-gray-600 text-lg">
          Compare your resume against job descriptions to identify keyword matches
        </p>
      </motion.div>

      {/* Match Score */}
      {compared && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardBody className="p-6">
              <div className="flex items-center justify-between gap-8">
                <div className="flex-1">
                  <p className="text-sm opacity-90 mb-1">Match Score</p>
                  <h2 className="text-4xl font-bold mb-4">{matchScore}%</h2>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="font-semibold">{matchingKeywords.length}</span>{" "}
                    Matching
                  </div>
                  <div>
                    <span className="font-semibold">{missingKeywords.length}</span>{" "}
                    Missing
                  </div>
                  <div>
                    <span className="font-semibold">{extraKeywords.length}</span> Extra
                  </div>
                </div>
                </div>
                <CircularProgress
                  value={matchScore}
                  size="lg"
                  color={matchScore >= 80 ? "success" : matchScore >= 60 ? "warning" : "danger"}
                  showValueLabel={true}
                  classNames={{
                    svg: "w-32 h-32 drop-shadow-md",
                    value: "text-2xl font-bold text-white",
                  }}
                  aria-label="Match score percentage"
                />
              </div>
            </CardBody>
          </Card>
        </motion.div>
      )}

      {/* Text Input Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader className="pb-0 pt-6 px-6">
              <h2 className="text-2xl font-bold">Your Resume</h2>
            </CardHeader>
            <CardBody className="p-6">
              {!compared ? (
                <Textarea
                  placeholder="Paste your resume text here..."
                  minRows={20}
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                />
              ) : (
                <div
                  className="min-h-[400px] p-4 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: highlightKeywords(resume, "resume"),
                  }}
                />
              )}
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader className="pb-0 pt-6 px-6">
              <h2 className="text-2xl font-bold">Job Description</h2>
            </CardHeader>
            <CardBody className="p-6">
              {!compared ? (
                <Textarea
                  placeholder="Paste the job description here..."
                  minRows={20}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              ) : (
                <div
                  className="min-h-[400px] p-4 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: highlightKeywords(jobDescription, "job"),
                  }}
                />
              )}
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        {!compared ? (
          <Button
            color="primary"
            size="lg"
            startContent={<FaChartLine />}
            onPress={handleCompare}
            isDisabled={!resume || !jobDescription}
          >
            Compare Documents
          </Button>
        ) : (
          <Button
            color="primary"
            variant="flat"
            size="lg"
            onPress={() => {
              setCompared(false);
              setKeywords([]);
              setMatchScore(0);
            }}
          >
            Reset Comparison
          </Button>
        )}
      </div>

      {/* Keyword Analysis */}
      {compared && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Matching Keywords */}
          <Card>
            <CardHeader className="pb-0 pt-6 px-6 flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <h2 className="text-2xl font-bold">
                Matching Keywords ({matchingKeywords.length})
              </h2>
            </CardHeader>
            <CardBody className="p-6">
              <div className="flex flex-wrap gap-2">
                {matchingKeywords.map((kw, index) => (
                  <Chip key={index} color="success" variant="flat">
                    {kw.keyword}
                  </Chip>
                ))}
                {matchingKeywords.length === 0 && (
                  <p className="text-gray-500">No matching keywords found</p>
                )}
              </div>
            </CardBody>
          </Card>

          {/* Missing Keywords */}
          <Card>
            <CardHeader className="pb-0 pt-6 px-6 flex items-center gap-2">
              <FaExclamationTriangle className="text-orange-500 text-2xl" />
              <h2 className="text-2xl font-bold">
                Missing Keywords ({missingKeywords.length})
              </h2>
            </CardHeader>
            <CardBody className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                These keywords appear in the job description but not in your resume.
                Consider adding them if they match your experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {missingKeywords.map((kw, index) => (
                  <Chip key={index} color="warning" variant="flat">
                    {kw.keyword}
                  </Chip>
                ))}
                {missingKeywords.length === 0 && (
                  <p className="text-gray-500">Great! No missing keywords</p>
                )}
              </div>
            </CardBody>
          </Card>

          {/* Extra Keywords */}
          <Card>
            <CardHeader className="pb-0 pt-6 px-6">
              <h2 className="text-2xl font-bold">
                Additional Skills in Resume ({extraKeywords.length})
              </h2>
            </CardHeader>
            <CardBody className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                These keywords appear in your resume but not in the job description.
              </p>
              <div className="flex flex-wrap gap-2">
                {extraKeywords.map((kw, index) => (
                  <Chip key={index} color="default" variant="flat">
                    {kw.keyword}
                  </Chip>
                ))}
                {extraKeywords.length === 0 && (
                  <p className="text-gray-500">No additional keywords</p>
                )}
              </div>
            </CardBody>
          </Card>

          {/* Legend */}
          <Card>
            <CardHeader className="pb-0 pt-6 px-6">
              <h2 className="text-2xl font-bold">Highlight Legend</h2>
            </CardHeader>
            <CardBody className="p-6">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="bg-green-200 px-3 py-1 rounded">Example</span>
                  <span>Keyword found in both documents (perfect match)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-200 px-3 py-1 rounded">Example</span>
                  <span>Keyword only in job description (consider adding)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-gray-200 px-3 py-1 rounded">Example</span>
                  <span>Keyword only in resume</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

