"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Breadcrumbs,
  BreadcrumbItem,
  Avatar,
} from "@heroui/react";
import { FaBuilding, FaSearch, FaMapMarkerAlt, FaUsers, FaStar } from "react-icons/fa";
import { Building2, Globe, Briefcase, Users, Zap, Cloud, ShoppingBag, Smartphone } from "lucide-react";

interface Company {
  id: string;
  name: string;
  logo: string;
  logoColor: string;
  logoIcon: string;
  industry: string;
  size: string;
  location: string;
  rating: number;
  culture: string;
  description: string;
  recentUpdates: string[];
  benefits: string[];
  techStack: string[];
}

export default function CompaniesPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const companies: Company[] = [
    {
      id: "1",
      name: "Google",
      logo: "G",
      logoColor: "from-blue-500 to-blue-600",
      logoIcon: "search",
      industry: "Technology",
      size: "10,000+ employees",
      location: "Mountain View, CA",
      rating: 4.5,
      culture: "Innovative, collaborative, and fast-paced environment focused on solving big problems",
      description:
        "Google is a global technology leader specializing in Internet-related services and products, including online advertising technologies, search engines, cloud computing, software, and hardware.",
      recentUpdates: [
        "Launched new AI-powered search features",
        "Expanded cloud infrastructure in Asia",
        "Announced sustainability initiatives for 2025",
        "Opened new office in Austin, Texas",
      ],
      benefits: [
        "Comprehensive health insurance",
        "Free meals and snacks",
        "On-site fitness centers",
        "Generous parental leave",
        "Learning and development programs",
        "Stock options (RSUs)",
      ],
      techStack: [
        "Go",
        "Python",
        "Java",
        "C++",
        "Kubernetes",
        "TensorFlow",
        "BigQuery",
      ],
    },
    {
      id: "2",
      name: "Meta",
      logo: "M",
      logoColor: "from-blue-600 to-indigo-600",
      logoIcon: "globe",
      industry: "Social Media",
      size: "10,000+ employees",
      location: "Menlo Park, CA",
      rating: 4.2,
      culture: "Bold, innovative culture that values moving fast and building impactful products",
      description:
        "Meta builds technologies that help people connect, find communities, and grow businesses. The company is focused on building the metaverse and advancing social technology.",
      recentUpdates: [
        "Released new VR headset for enterprise",
        "Expanded AI research division",
        "Launched Threads platform globally",
        "Announced Reality Labs innovations",
      ],
      benefits: [
        "Competitive salary packages",
        "Health and wellness programs",
        "Remote work flexibility",
        "Education reimbursement",
        "Family support programs",
        "Equity compensation",
      ],
      techStack: [
        "React",
        "Python",
        "Hack",
        "GraphQL",
        "PyTorch",
        "Cassandra",
        "MySQL",
      ],
    },
    {
      id: "3",
      name: "Amazon",
      logo: "A",
      logoColor: "from-orange-500 to-yellow-500",
      logoIcon: "shopping",
      industry: "E-commerce & Cloud",
      size: "10,000+ employees",
      location: "Seattle, WA",
      rating: 4.0,
      culture: "Customer-obsessed culture with leadership principles guiding every decision",
      description:
        "Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      recentUpdates: [
        "AWS expanded services portfolio",
        "Opened new fulfillment centers",
        "Launched Prime Video live sports",
        "Announced drone delivery expansion",
      ],
      benefits: [
        "Comprehensive benefits from day one",
        "Career Choice program",
        "Employee discount",
        "Parental leave",
        "401(k) matching",
        "RSUs",
      ],
      techStack: [
        "Java",
        "Python",
        "AWS",
        "DynamoDB",
        "Lambda",
        "S3",
        "EC2",
      ],
    },
    {
      id: "4",
      name: "Apple",
      logo: "A",
      logoColor: "from-gray-700 to-gray-900",
      logoIcon: "smartphone",
      industry: "Technology",
      size: "10,000+ employees",
      location: "Cupertino, CA",
      rating: 4.3,
      culture: "Creative and innovative environment focused on design excellence and quality",
      description:
        "Apple designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
      recentUpdates: [
        "Launched Vision Pro mixed reality headset",
        "Expanded services revenue",
        "Announced new chip architecture",
        "Opened new retail locations globally",
      ],
      benefits: [
        "Product discounts",
        "Comprehensive healthcare",
        "Fitness centers",
        "Tuition reimbursement",
        "Employee stock purchase plan",
        "Wellness programs",
      ],
      techStack: [
        "Swift",
        "Objective-C",
        "Metal",
        "WebKit",
        "CloudKit",
        "Core ML",
      ],
    },
    {
      id: "5",
      name: "Microsoft",
      logo: "M",
      logoColor: "from-blue-500 to-cyan-500",
      logoIcon: "briefcase",
      industry: "Technology",
      size: "10,000+ employees",
      location: "Redmond, WA",
      rating: 4.4,
      culture: "Growth mindset culture that values diversity, inclusion, and continuous learning",
      description:
        "Microsoft develops, licenses, and supports software, services, devices, and solutions worldwide.",
      recentUpdates: [
        "Azure AI capabilities expanded",
        "GitHub Copilot improvements",
        "Xbox Game Pass growth",
        "Sustainability commitments accelerated",
      ],
      benefits: [
        "Comprehensive health coverage",
        "Generous vacation time",
        "Tuition reimbursement",
        "Adoption assistance",
        "Commuter benefits",
        "Stock awards",
      ],
      techStack: [
        "C#",
        ".NET",
        "TypeScript",
        "Azure",
        "SQL Server",
        "Power BI",
      ],
    },
    {
      id: "6",
      name: "Netflix",
      logo: "N",
      logoColor: "from-red-600 to-red-700",
      logoIcon: "zap",
      industry: "Streaming",
      size: "1,000-10,000 employees",
      location: "Los Gatos, CA",
      rating: 4.1,
      culture: "Freedom and responsibility culture with high performance expectations",
      description:
        "Netflix is the world's leading streaming entertainment service with over 200 million paid memberships.",
      recentUpdates: [
        "Launched ad-supported tier",
        "Expanded gaming offerings",
        "Cracked down on password sharing",
        "Announced new content partnerships",
      ],
      benefits: [
        "Unlimited vacation policy",
        "Competitive compensation",
        "Flexible work arrangements",
        "Parental leave",
        "Health insurance",
        "Stock options",
      ],
      techStack: [
        "Java",
        "Node.js",
        "Python",
        "React",
        "AWS",
        "Cassandra",
        "Kafka",
      ],
    },
  ];

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenCompany = (company: Company) => {
    setSelectedCompany(company);
    onOpen();
  };

  return (
    <div>
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Company Insights</BreadcrumbItem>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Company Insights
        </h1>
        <p className="text-gray-600 text-lg">
          Research companies with profiles, culture summaries, and recent updates
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <Input
          placeholder="Search companies by name or industry..."
          startContent={<FaSearch className="text-gray-400" />}
          size="lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            onClick={() => handleOpenCompany(company)}
            className="cursor-pointer"
          >
            <Card className="hover:shadow-xl transition-shadow h-full">
              <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                <div className="flex items-center gap-3 mb-4 w-full">
                  <Avatar
                    name={company.logo}
                    classNames={{
                      base: `bg-gradient-to-br ${company.logoColor}`,
                      name: "text-white font-bold text-xl"
                    }}
                    size="lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">
                      {company.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <FaStar className="text-yellow-500" />
                      <span>{company.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Chip size="sm" color="primary" variant="flat">
                    {company.industry}
                  </Chip>
                  <Chip size="sm" variant="flat" startContent={<FaUsers />}>
                    {company.size}
                  </Chip>
                </div>
              </CardHeader>
              <CardBody className="px-6 pb-6">
                <div className="flex items-start gap-2 text-sm text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>{company.location}</span>
                </div>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {company.description}
                </p>
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="mt-4 w-full"
                >
                  View Details
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FaBuilding className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            No companies found matching your search
          </p>
        </motion.div>
      )}

      {/* Company Details Modal */}
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
                <div className="flex items-center gap-3">
                  <Avatar
                    name={selectedCompany?.logo}
                    classNames={{
                      base: `bg-gradient-to-br ${selectedCompany?.logoColor}`,
                      name: "text-white font-bold text-2xl"
                    }}
                    size="lg"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{selectedCompany?.name}</h2>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <FaStar className="text-yellow-500" />
                      <span>{selectedCompany?.rating} rating</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Chip size="sm" color="primary">
                    {selectedCompany?.industry}
                  </Chip>
                  <Chip size="sm" variant="flat">
                    {selectedCompany?.size}
                  </Chip>
                  <Chip
                    size="sm"
                    variant="flat"
                    startContent={<FaMapMarkerAlt />}
                  >
                    {selectedCompany?.location}
                  </Chip>
                </div>
              </ModalHeader>
              <ModalBody>
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    About
                  </h3>
                  <p className="text-gray-700">{selectedCompany?.description}</p>
                </div>

                {/* Culture */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Company Culture
                  </h3>
                  <Card className="bg-blue-50">
                    <CardBody className="p-4">
                      <p className="text-gray-700">{selectedCompany?.culture}</p>
                    </CardBody>
                  </Card>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompany?.techStack.map((tech, index) => (
                      <Chip key={index} color="secondary" variant="flat">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Benefits & Perks
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedCompany?.benefits.map((benefit, index) => (
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

                {/* Recent Updates */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Recent Updates
                  </h3>
                  <div className="space-y-3">
                    {selectedCompany?.recentUpdates.map((update, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <p className="text-sm text-gray-700">{update}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add to Watchlist
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

