"use client";

import { useState, useEffect } from "react";
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
  Input,
  Textarea,
  Select,
  SelectItem,
  useDisclosure,
  Chip,
  Tooltip,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaPlus, FaEdit, FaTrash, FaBriefcase } from "react-icons/fa";
import { toast, Toaster } from "sonner";

interface Application {
  id: string;
  company: string;
  position: string;
  status: string;
  appliedDate: string;
  salary: string;
  notes: string;
  contactPerson: string;
  contactEmail: string;
}

const statuses = [
  { key: "applied", label: "Applied", color: "bg-blue-500" },
  { key: "interviewing", label: "Interviewing", color: "bg-yellow-500" },
  { key: "offer", label: "Offer", color: "bg-green-500" },
  { key: "rejected", label: "Rejected", color: "bg-red-500" },
];

const ApplicationCard = ({
  application,
  onEdit,
  onDelete,
}: {
  application: Application;
  onEdit: (app: Application) => void;
  onDelete: (id: string) => void;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "application",
    item: { id: application.id, status: application.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-3 cursor-move hover:shadow-md transition-shadow ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h4 className="font-bold">{application.company}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{application.position}</p>
        </div>
        <div className="flex gap-2">
          <Tooltip content="Edit application">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={() => onEdit(application)}
            >
              <FaEdit className="text-blue-500" />
            </Button>
          </Tooltip>
          <Tooltip content="Delete application" color="danger">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={() => onDelete(application.id)}
            >
              <FaTrash className="text-red-500" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
        <p>Applied: {application.appliedDate}</p>
        {application.salary && <p>Salary: {application.salary}</p>}
        {application.contactPerson && <p>Contact: {application.contactPerson}</p>}
      </div>
    </div>
  );
};

const StatusColumn = ({
  status,
  applications,
  onDrop,
  onEdit,
  onDelete,
}: {
  status: { key: string; label: string; color: string };
  applications: Application[];
  onDrop: (id: string, newStatus: string) => void;
  onEdit: (app: Application) => void;
  onDelete: (id: string) => void;
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "application",
    drop: (item: { id: string; status: string }) => {
      if (item.status !== status.key) {
        onDrop(item.id, status.key);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex-1 min-w-[280px] ${isOver ? "bg-gray-100" : ""} rounded-lg p-4 transition-colors`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
        <h3 className="font-bold text-gray-900">{status.label}</h3>
        <Chip size="sm" variant="flat">
          {applications.length}
        </Chip>
      </div>
      <div className="space-y-3">
        {applications.map((app) => (
          <ApplicationCard
            key={app.id}
            application={app}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
        {applications.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            No applications
          </div>
        )}
      </div>
    </div>
  );
};

function TrackerContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [applications, setApplications] = useState<Application[]>([]);
  const [editingApp, setEditingApp] = useState<Application | null>(null);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "applied",
    appliedDate: new Date().toISOString().split("T")[0],
    salary: "",
    notes: "",
    contactPerson: "",
    contactEmail: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("applications");
    if (saved) {
      setApplications(JSON.parse(saved));
    } else {
      // Demo data
      setApplications([
        {
          id: "1",
          company: "Google",
          position: "Software Engineer",
          status: "interviewing",
          appliedDate: "2025-01-15",
          salary: "$150k - $180k",
          notes: "Phone screen completed",
          contactPerson: "Jane Doe",
          contactEmail: "jane@google.com",
        },
        {
          id: "2",
          company: "Meta",
          position: "Frontend Developer",
          status: "applied",
          appliedDate: "2025-01-20",
          salary: "$140k - $170k",
          notes: "",
          contactPerson: "",
          contactEmail: "",
        },
        {
          id: "3",
          company: "Amazon",
          position: "Full Stack Engineer",
          status: "offer",
          appliedDate: "2025-01-10",
          salary: "$160k - $190k",
          notes: "Offer received!",
          contactPerson: "John Smith",
          contactEmail: "john@amazon.com",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  const handleOpenAdd = () => {
    setEditingApp(null);
    setFormData({
      company: "",
      position: "",
      status: "applied",
      appliedDate: new Date().toISOString().split("T")[0],
      salary: "",
      notes: "",
      contactPerson: "",
      contactEmail: "",
    });
    onOpen();
  };

  const handleOpenEdit = (app: Application) => {
    setEditingApp(app);
    setFormData(app);
    onOpen();
  };

  const handleSave = () => {
    if (editingApp) {
      setApplications(
        applications.map((app) =>
          app.id === editingApp.id ? { ...formData, id: app.id } : app
        )
      );
    } else {
      setApplications([
        ...applications,
        { ...formData, id: Date.now().toString() },
      ]);
    }
    onClose();
  };

  const handleDelete = (id: string) => {
    toast.error("Delete application?", {
      action: {
        label: "Delete",
        onClick: () => {
          setApplications(applications.filter((app) => app.id !== id));
          toast.success("Application deleted");
        },
      },
    });
  };

  const handleDrop = (id: string, newStatus: string) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const getApplicationsByStatus = (statusKey: string) =>
    applications.filter((app) => app.status === statusKey);

  return (
    <div>
      <Toaster position="top-center" richColors />
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Application Tracker</BreadcrumbItem>
      </Breadcrumbs>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Application Tracker
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your job applications with a Kanban-style board
          </p>
        </div>
        <Button
          color="primary"
          startContent={<FaPlus />}
          onPress={handleOpenAdd}
          size="lg"
        >
          Add Application
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        {statuses.map((status, index) => (
          <Card key={status.key}>
            <CardBody className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${status.color}`}></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {getApplicationsByStatus(status.key).length}
                  </p>
                  <p className="text-sm text-gray-600">{status.label}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </motion.div>

      {/* Kanban Board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardBody className="p-6">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {statuses.map((status) => (
                <StatusColumn
                  key={status.key}
                  status={status}
                  applications={getApplicationsByStatus(status.key)}
                  onDrop={handleDrop}
                  onEdit={handleOpenEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Add/Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-2xl font-bold">
                  {editingApp ? "Edit Application" : "Add New Application"}
                </h2>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <Input
                    label="Company Name"
                    placeholder="Google"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    isRequired
                  />
                  <Input
                    label="Position"
                    placeholder="Software Engineer"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    isRequired
                  />
                  <Select
                    label="Status"
                    selectedKeys={[formData.status]}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    {statuses.map((status) => (
                      <SelectItem key={status.key} value={status.key}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    label="Applied Date"
                    type="date"
                    value={formData.appliedDate}
                    onChange={(e) =>
                      setFormData({ ...formData, appliedDate: e.target.value })
                    }
                  />
                  <Input
                    label="Salary Range"
                    placeholder="$100k - $120k"
                    value={formData.salary}
                    onChange={(e) =>
                      setFormData({ ...formData, salary: e.target.value })
                    }
                  />
                  <Input
                    label="Contact Person"
                    placeholder="Jane Doe"
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({ ...formData, contactPerson: e.target.value })
                    }
                  />
                  <Input
                    label="Contact Email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.contactEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, contactEmail: e.target.value })
                    }
                  />
                  <Textarea
                    label="Notes"
                    placeholder="Add any notes about this application..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    minRows={3}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={handleSave}
                  isDisabled={!formData.company || !formData.position}
                >
                  {editingApp ? "Update" : "Add"} Application
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default function TrackerPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <TrackerContent />
    </DndProvider>
  );
}

