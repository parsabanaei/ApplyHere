"use client";

import { motion } from "framer-motion";
import { 
  Button, 
  Card, 
  CardBody,
  Link,
  Divider,
  Chip,
  Avatar
} from "@heroui/react";
import { useRouter } from "next/navigation";
import {
  FaRocket,
  FaFileAlt,
  FaChartLine,
  FaUserTie,
  FaBuilding,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";
import { ThemeToggle } from "./components/ThemeToggle";
import FloatingLines from "./components/FloatingLines";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: <FaFileAlt />,
      title: "Smart Resume Builder",
      description: "Create professional resumes with AI-powered content generation and side-by-side previews.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaChartLine />,
      title: "Resume Comparator",
      description: "Match your resume against job descriptions with intelligent keyword highlighting.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUserTie />,
      title: "Interview Prep",
      description: "Organized dashboards with common questions, tips, and company research tools.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaCheckCircle />,
      title: "Application Tracker",
      description: "Kanban-style board to manage your applications across different stages.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <FaBuilding />,
      title: "Company Insights",
      description: "Research companies with profiles, culture summaries, and recent updates.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaBell />,
      title: "Job Alerts",
      description: "Personalized job recommendations delivered right to your dashboard.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "ApplyHere.ai transformed my job search. I landed 3 interviews in the first week!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "The resume comparator helped me tailor my applications perfectly. Highly recommended!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      content: "Finally, a tool that makes job applications organized and stress-free.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="min-h-screen relative overflow-hidden bg-[#0a0a0f]">
        {/* Floating Lines Background */}
        <div className="absolute inset-0 z-0">
          <FloatingLines 
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[5, 3, 2]}
            lineDistance={[5, 8, 6]}
            bendRadius={3.0}
            bendStrength={-0.8}
            interactive={true}
            parallax={true}
            linesGradient={['#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF']}
            animationSpeed={0.5}
            mixBlendMode="screen"
          />
        </div>

        {/* Floating Navigation Bar */}
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/10 rounded-full px-6 py-3 shadow-2xl">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <FaRocket className="text-xl text-white" />
                  <span className="text-lg font-bold text-white">ApplyHere.ai</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <ThemeToggle />
                <Button
                  size="sm"
                  className="bg-white text-gray-900 font-medium hover:bg-white/90"
                  onPress={() => router.push("/auth")}
                >
                  Login
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto text-center relative z-10 pt-40 pb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Your Smart Job
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Application Assistant
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Streamline your job application journey with AI-powered automation, personalized resumes, and intelligent tracking—all in one place.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-white text-gray-900 font-semibold hover:bg-white/90 rounded-full px-8"
                onPress={() => router.push("/auth")}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                className="backdrop-blur-md bg-white/10 text-white border border-white/20 font-semibold hover:bg-white/20 rounded-full px-8"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Chip color="primary" variant="flat" size="lg" className="mb-4">
              Features
            </Chip>
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to simplify and accelerate your job search process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:scale-105" isPressable>
                  <CardBody className="p-6">
                    <div className={`mb-4 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                      <div className="text-white text-2xl">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Chip color="secondary" variant="flat" size="lg" className="mb-4">
              Interface
            </Chip>
            <h2 className="text-4xl font-bold mb-4">
              Beautiful, Intuitive Interface
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A modern, professional dashboard designed for efficiency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 p-8">
              <CardBody>
                <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                  <p className="text-2xl font-semibold text-white">Dashboard Preview</p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Chip color="success" variant="flat" size="lg" className="mb-4">
              Testimonials
            </Chip>
            <h2 className="text-4xl font-bold mb-4">
              Loved by Job Seekers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See what our users have to say about their experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardBody className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                    <Divider className="my-4" />
                    <div className="flex items-center gap-3">
                      <Avatar 
                        src={testimonial.avatar}
                        name={testimonial.name}
                        className="w-12 h-12"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have streamlined their application process
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 font-semibold hover:bg-gray-100"
              onPress={() => router.push("/auth")}
            >
              Start Your Journey Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <FaRocket className="text-3xl text-blue-500" />
              <span className="text-2xl font-bold">ApplyHere.ai</span>
            </div>
            <p className="text-gray-400 text-center max-w-md">
              Your smart companion for navigating the job application journey
            </p>
            <Divider className="w-full max-w-md" />
            <div className="flex gap-4">
              <Link href="#" color="foreground" size="sm">About</Link>
              <Link href="#" color="foreground" size="sm">Features</Link>
              <Link href="#" color="foreground" size="sm">Pricing</Link>
              <Link href="#" color="foreground" size="sm">Contact</Link>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 ApplyHere.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}


// TODO: Review UI spacing here – note added by Rasha
