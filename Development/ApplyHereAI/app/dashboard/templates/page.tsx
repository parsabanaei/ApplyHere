"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  useDisclosure,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import { FaEnvelope, FaEdit, FaCopy, FaCheckCircle } from "react-icons/fa";

interface Template {
  id: string;
  title: string;
  category: string;
  content: string;
  color: string;
}

export default function TemplatesPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [editedContent, setEditedContent] = useState("");
  const [copied, setCopied] = useState(false);

  const templates: Template[] = [
    {
      id: "1",
      title: "Post-Interview Thank You",
      category: "Thank You",
      color: "from-blue-500 to-cyan-500",
      content: `Dear [Interviewer Name],

Thank you for taking the time to meet with me [today/yesterday] to discuss the [Position Title] role at [Company Name]. I enjoyed learning more about the position and the team.

I was particularly excited to hear about [specific project or aspect discussed]. My experience with [relevant skill/experience] would allow me to contribute effectively to this initiative.

I'm very interested in this opportunity and believe my skills align well with your needs. Please don't hesitate to reach out if you need any additional information.

Thank you again for your time and consideration.

Best regards,
[Your Name]`,
    },
    {
      id: "2",
      title: "Follow-Up After No Response",
      category: "Follow-Up",
      color: "from-purple-500 to-pink-500",
      content: `Dear [Hiring Manager Name],

I hope this email finds you well. I wanted to follow up on my application for the [Position Title] position that I submitted on [Date].

I remain very interested in this opportunity and believe my [key skills/experiences] would make me a strong fit for your team. I would welcome the chance to discuss how I could contribute to [Company Name].

If there's any additional information I can provide to support my application, please let me know.

Thank you for your time and consideration.

Best regards,
[Your Name]`,
    },
    {
      id: "3",
      title: "Acceptance of Job Offer",
      category: "Offer Response",
      color: "from-green-500 to-emerald-500",
      content: `Dear [Hiring Manager Name],

I am writing to formally accept the offer for the position of [Position Title] at [Company Name]. I am excited to join the team and contribute to [specific goal or project].

As we discussed, my start date will be [Date], and the annual salary is [Salary]. I understand that [any other key terms discussed].

Please let me know if there are any documents or other information you need from me before my start date.

Thank you again for this wonderful opportunity. I look forward to working with you and the team.

Best regards,
[Your Name]`,
    },
    {
      id: "4",
      title: "Declining Job Offer (Politely)",
      category: "Offer Response",
      color: "from-orange-500 to-red-500",
      content: `Dear [Hiring Manager Name],

Thank you for offering me the position of [Position Title] at [Company Name]. I truly appreciate the time you spent interviewing me and considering my application.

After careful consideration, I have decided to pursue a different opportunity that aligns more closely with my career goals at this time. This was not an easy decision, as I was impressed by [specific positive aspect of company/role].

I hope we might have the opportunity to work together in the future. Thank you again for your understanding.

Best regards,
[Your Name]`,
    },
    {
      id: "5",
      title: "Request for More Time to Decide",
      category: "Offer Response",
      color: "from-indigo-500 to-purple-500",
      content: `Dear [Hiring Manager Name],

Thank you for extending an offer for the [Position Title] position at [Company Name]. I'm honored to have been selected and am very interested in the opportunity.

I would like to request a few additional days to make my final decision. I am currently [reason, e.g., finalizing other opportunities, discussing with family]. Would it be possible to provide my response by [specific date]?

I understand the importance of your timeline and appreciate your patience. Please let me know if this extension is possible.

Thank you for your understanding.

Best regards,
[Your Name]`,
    },
    {
      id: "6",
      title: "Second Follow-Up",
      category: "Follow-Up",
      color: "from-yellow-500 to-orange-500",
      content: `Dear [Hiring Manager Name],

I hope you're doing well. I wanted to reach out one more time regarding the [Position Title] position.

I remain very interested in joining [Company Name] and bringing my [key skills] to your team. I understand you likely have many applications to review, and I wanted to reiterate my enthusiasm for this role.

If the position has been filled or if you need any additional information from me, please let me know.

Thank you for your time and consideration.

Best regards,
[Your Name]`,
    },
    {
      id: "7",
      title: "Networking Introduction",
      category: "Networking",
      color: "from-pink-500 to-rose-500",
      content: `Dear [Contact Name],

My name is [Your Name], and I came across your profile while researching [Company Name/Industry]. I'm impressed by your work in [specific area] and would love to connect.

I'm currently [your situation, e.g., exploring opportunities in X field, transitioning to Y industry], and I would greatly appreciate any insights you might have about [specific topic].

Would you be open to a brief [coffee chat/phone call/virtual meeting] in the coming weeks? I understand you're busy, so even 15-20 minutes would be incredibly valuable.

Thank you for considering my request.

Best regards,
[Your Name]`,
    },
    {
      id: "8",
      title: "Withdrawal from Interview Process",
      category: "Withdrawal",
      color: "from-gray-500 to-slate-500",
      content: `Dear [Hiring Manager Name],

Thank you for the opportunity to interview for the [Position Title] position at [Company Name]. I have greatly enjoyed learning about your team and the role.

After careful consideration, I have decided to withdraw my application. I have accepted another opportunity that is a better fit for my career goals at this time.

I appreciate the time and effort you and your team have invested in my candidacy. I was impressed by [specific positive aspect] and hope our paths may cross again in the future.

Thank you for your understanding.

Best regards,
[Your Name]`,
    },
  ];

  const handleOpenTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setEditedContent(template.content);
    setCopied(false);
    onOpen();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = Array.from(new Set(templates.map((t) => t.category)));

  return (
    <div>
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Email Templates</BreadcrumbItem>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Email Templates
        </h1>
        <p className="text-gray-600 text-lg">
          Professional templates for follow-ups, thank-you letters, and more
        </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Chip key={index} color="primary" variant="flat">
              {category}
            </Chip>
          ))}
        </div>
      </motion.div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            onClick={() => handleOpenTemplate(template)}
            className="cursor-pointer"
          >
            <Card className="hover:shadow-xl transition-shadow">
              <CardBody className="p-0">
                <div
                  className={`bg-gradient-to-br ${template.color} p-6 text-white rounded-t-lg`}
                >
                  <FaEnvelope className="text-4xl mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <Chip size="sm" variant="flat" className="bg-white/20 text-white">
                    {template.category}
                  </Chip>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {template.content}
                  </p>
                  <Button
                    color="primary"
                    variant="flat"
                    size="sm"
                    className="mt-4"
                    startContent={<FaEdit />}
                  >
                    View & Edit
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Template Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">{selectedTemplate?.title}</h2>
                <Chip size="sm" color="primary" variant="flat">
                  {selectedTemplate?.category}
                </Chip>
              </ModalHeader>
              <ModalBody>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Edit the template below to customize it for your needs. Fields in
                    [brackets] should be replaced with your specific information.
                  </p>
                  <Textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    minRows={15}
                    className="font-mono text-sm"
                  />
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardBody className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      💡 Tips for using this template:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Replace all [bracketed] fields with your information</li>
                      <li>• Personalize the content to match your situation</li>
                      <li>• Keep it concise and professional</li>
                      <li>• Proofread carefully before sending</li>
                      <li>• Send within 24 hours when applicable</li>
                    </ul>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color={copied ? "success" : "primary"}
                  startContent={copied ? <FaCheckCircle /> : <FaCopy />}
                  onPress={handleCopy}
                >
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <Card>
          <CardHeader className="pb-0 pt-6 px-6">
            <h2 className="text-2xl font-bold">Email Best Practices</h2>
          </CardHeader>
          <CardBody className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Subject Lines</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Keep it clear and specific</li>
                  <li>• Include the position name</li>
                  <li>• Reference interview date if applicable</li>
                  <li>• Example: &quot;Thank You - [Position] Interview&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Timing</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Send thank-you emails within 24 hours</li>
                  <li>• Follow up after 1-2 weeks of no response</li>
                  <li>• Avoid weekends for initial contact</li>
                  <li>• Morning emails get better response rates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Content</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Be genuine and authentic</li>
                  <li>• Keep it brief (under 200 words)</li>
                  <li>• Reference specific conversation points</li>
                  <li>• Always proofread before sending</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}

