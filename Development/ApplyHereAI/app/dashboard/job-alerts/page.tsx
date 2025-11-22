"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import {
  FaBell,
  FaBriefcase,
  FaMapMarkerAlt,
  FaDollarSign,
  FaClock,
  FaBookmark,
  FaExternalLinkAlt,
  FaFilter,
} from "react-icons/fa";

interface JobAlert {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isNew: boolean;
  matchScore: number;
}

export default function JobAlertsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSelectedJob] = useState<JobAlert | null>(null);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string>("all");

  const jobs: JobAlert[] = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      posted: "2 hours ago",
      isNew: true,
      matchScore: 95,
      description:
        "We're looking for a Senior Software Engineer to join our Cloud Platform team. You'll work on building scalable infrastructure that powers millions of applications worldwide.",
      requirements: [
        "5+ years of software development experience",
        "Strong proficiency in Go, Python, or Java",
        "Experience with distributed systems",
        "Knowledge of cloud platforms (GCP, AWS, or Azure)",
        "BS in Computer Science or related field",
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Learning and development budget",
        "Free meals and snacks",
      ],
    },
    {
      id: "2",
      title: "Frontend Developer",
      company: "Meta",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $180k",
      posted: "5 hours ago",
      isNew: true,
      matchScore: 88,
      description:
        "Join our team building the next generation of social experiences. Work with React, GraphQL, and cutting-edge web technologies.",
      requirements: [
        "3+ years of frontend development experience",
        "Expert knowledge of React and TypeScript",
        "Experience with state management (Redux, Recoil)",
        "Strong CSS and responsive design skills",
        "Portfolio of production applications",
      ],
      benefits: [
        "Remote-first culture",
        "Top-tier compensation",
        "Health and wellness programs",
        "Professional development",
        "Equity package",
      ],
    },
    {
      id: "3",
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$140k - $190k",
      posted: "1 day ago",
      isNew: false,
      matchScore: 82,
      description:
        "Help build and maintain AWS infrastructure at scale. Work with cutting-edge automation and orchestration tools.",
      requirements: [
        "4+ years of DevOps or SRE experience",
        "Strong knowledge of AWS services",
        "Experience with Kubernetes and Docker",
        "Proficiency in Python or Go",
        "CI/CD pipeline expertise",
      ],
      benefits: [
        "AWS certifications sponsored",
        "Career development programs",
        "Comprehensive benefits",
        "Stock options",
        "Relocation assistance",
      ],
    },
    {
      id: "4",
      title: "Product Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "1 day ago",
      isNew: false,
      matchScore: 75,
      description:
        "Design beautiful, intuitive experiences for millions of users. Work closely with engineering and product teams.",
      requirements: [
        "3+ years of product design experience",
        "Strong portfolio demonstrating UX/UI skills",
        "Proficiency in Figma and design tools",
        "Understanding of iOS and macOS design guidelines",
        "Excellent communication skills",
      ],
      benefits: [
        "Product discounts",
        "Design tools and resources",
        "Health and wellness",
        "Creative environment",
        "Stock purchase plan",
      ],
    },
    {
      id: "5",
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      posted: "2 days ago",
      isNew: false,
      matchScore: 90,
      description:
        "Use data to drive decisions about content, recommendations, and user experience. Work with petabytes of data.",
      requirements: [
        "PhD or MS in Statistics, CS, or related field",
        "5+ years of data science experience",
        "Expert in Python, R, and SQL",
        "Experience with machine learning frameworks",
        "Strong statistical analysis skills",
      ],
      benefits: [
        "Unlimited vacation",
        "Top compensation",
        "Freedom and responsibility",
        "Learning budget",
        "Health benefits",
      ],
    },
    {
      id: "6",
      title: "Full Stack Engineer",
      company: "Stripe",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140k - $190k",
      posted: "3 days ago",
      isNew: false,
      matchScore: 85,
      description:
        "Build the financial infrastructure of the internet. Work on payments, billing, and financial products.",
      requirements: [
        "4+ years of full stack development",
        "Experience with Ruby, Python, or Node.js",
        "Strong understanding of APIs and databases",
        "Security-conscious mindset",
        "BS in Computer Science or equivalent",
      ],
      benefits: [
        "Competitive salary and equity",
        "Health insurance",
        "Commuter benefits",
        "Professional development",
        "Flexible PTO",
      ],
    },
    {
      id: "7",
      title: "Machine Learning Engineer",
      company: "OpenAI",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$160k - $220k",
      posted: "3 days ago",
      isNew: false,
      matchScore: 92,
      description:
        "Work on cutting-edge AI research and deployment. Build systems that push the boundaries of what's possible.",
      requirements: [
        "MS or PhD in ML, CS, or related field",
        "Strong publication record",
        "Experience with PyTorch or TensorFlow",
        "Deep understanding of neural networks",
        "Python programming expertise",
      ],
      benefits: [
        "Equity in a leading AI company",
        "Research opportunities",
        "Top-tier compensation",
        "Healthcare and wellness",
        "Collaborative environment",
      ],
    },
    {
      id: "8",
      title: "Mobile Developer (iOS)",
      company: "Airbnb",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      posted: "4 days ago",
      isNew: false,
      matchScore: 78,
      description:
        "Build world-class mobile experiences for millions of travelers. Work with SwiftUI and modern iOS frameworks.",
      requirements: [
        "4+ years of iOS development",
        "Expert in Swift and SwiftUI",
        "Experience shipping apps to App Store",
        "Strong understanding of iOS SDK",
        "Passion for great UX",
      ],
      benefits: [
        "Remote flexibility",
        "Travel credits",
        "Health insurance",
        "Learning stipend",
        "Equity compensation",
      ],
    },
  ];

  const filteredJobs =
    filterType === "all"
      ? jobs
      : filterType === "new"
      ? jobs.filter((job) => job.isNew)
      : jobs.filter((job) => savedJobs.includes(job.id));

  const handleOpenJob = (job: JobAlert) => {
    setSelectedJob(job);
    onOpen();
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return "success";
    if (score >= 80) return "primary";
    if (score >= 70) return "warning";
    return "default";
  };

  return (
    <div>
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Job Alerts</BreadcrumbItem>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Job Alerts</h1>
        <p className="text-gray-600 text-lg">
          Personalized job recommendations based on your profile and preferences
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <Card>
          <CardBody className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                <FaBell className="text-white text-xl" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{jobs.length}</p>
                <p className="text-sm text-gray-600">New Opportunities</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                <FaBookmark className="text-white text-xl" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{savedJobs.length}</p>
                <p className="text-sm text-gray-600">Saved Jobs</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {jobs.filter((j) => j.matchScore >= 80).length}
                </p>
                <p className="text-sm text-gray-600">High Matches</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-4 mb-6 flex-wrap"
      >
        <Button
          color={filterType === "all" ? "primary" : "default"}
          variant={filterType === "all" ? "solid" : "flat"}
          onPress={() => setFilterType("all")}
        >
          All Jobs
        </Button>
        <Button
          color={filterType === "new" ? "primary" : "default"}
          variant={filterType === "new" ? "solid" : "flat"}
          onPress={() => setFilterType("new")}
          startContent={<FaBell />}
        >
          New
        </Button>
        <Button
          color={filterType === "saved" ? "primary" : "default"}
          variant={filterType === "saved" ? "solid" : "flat"}
          onPress={() => setFilterType("saved")}
          startContent={<FaBookmark />}
        >
          Saved
        </Button>
      </motion.div>

      {/* Job Feed */}
      <div className="space-y-4">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600"
                        onClick={() => handleOpenJob(job)}
                      >
                        {job.title}
                      </h3>
                      {job.isNew && (
                        <Chip size="sm" color="success" variant="flat">
                          New
                        </Chip>
                      )}
                      <Chip
                        size="sm"
                        color={getMatchColor(job.matchScore)}
                        variant="flat"
                      >
                        {job.matchScore}% Match
                      </Chip>
                    </div>
                    <p className="text-lg text-gray-700 mb-3">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBriefcase />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaDollarSign />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 line-clamp-2 mb-4">
                      {job.description}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        color="primary"
                        size="sm"
                        onPress={() => handleOpenJob(job)}
                      >
                        View Details
                      </Button>
                      <Button
                        color={savedJobs.includes(job.id) ? "success" : "default"}
                        variant="flat"
                        size="sm"
                        startContent={<FaBookmark />}
                        onPress={() => toggleSaveJob(job.id)}
                      >
                        {savedJobs.includes(job.id) ? "Saved" : "Save"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FaBell className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No job alerts found</p>
        </motion.div>
      )}

      {/* Job Details Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                <div className="flex items-start justify-between w-full">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">{selectedJob?.title}</h2>
                    <p className="text-lg text-gray-700">{selectedJob?.company}</p>
                  </div>
                  <Chip
                    size="lg"
                    color={getMatchColor(selectedJob?.matchScore || 0)}
                  >
                    {selectedJob?.matchScore}% Match
                  </Chip>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Chip size="sm" variant="flat" startContent={<FaMapMarkerAlt />}>
                    {selectedJob?.location}
                  </Chip>
                  <Chip size="sm" variant="flat" startContent={<FaBriefcase />}>
                    {selectedJob?.type}
                  </Chip>
                  <Chip size="sm" variant="flat" startContent={<FaDollarSign />}>
                    {selectedJob?.salary}
                  </Chip>
                  <Chip size="sm" variant="flat" startContent={<FaClock />}>
                    {selectedJob?.posted}
                  </Chip>
                </div>
              </ModalHeader>
              <ModalBody>
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    About the Role
                  </h3>
                  <p className="text-gray-700">{selectedJob?.description}</p>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob?.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Benefits & Perks
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedJob?.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex gap-2">
                <Button
                  color={savedJobs.includes(selectedJob?.id || "") ? "success" : "default"}
                  variant="flat"
                  startContent={<FaBookmark />}
                  onPress={() => selectedJob && toggleSaveJob(selectedJob.id)}
                >
                  {savedJobs.includes(selectedJob?.id || "") ? "Saved" : "Save Job"}
                </Button>
                <Button
                  color="primary"
                  startContent={<FaExternalLinkAlt />}
                  onPress={onClose}
                >
                  Apply Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

