"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircle } from "react-icons/io5";

type BillingPeriod = "monthly" | "quarterly" | "annually";

const pricingPlans = {
  monthly: {
    free: 0,
    pro: 40,
  },
  quarterly: {
    free: 0,
    pro: 35, // Save 12.5%
  },
  annually: {
    free: 0,
    pro: 30, // Save 25%
  },
};

const freePlanFeatures = [
  "Unlimited Base Resumes",
  "Free PDF Export",
  "2 Job Tailored Resumes",
  "2 Application Packets",
  "Access to all Resume Templates",
  "Basic Resume Job Matching",
  "Basic Resume Scoring",
  "Job Tracker",
  "Interview Preparation Tools",
  "Email Templates",
];

const proPlanFeatures = [
  "Everything in Free Plan, plus:",
  "Unlimited Job Tailored Resumes",
  "Unlimited Application Packets",
  "Unlimited AI Resume Generations",
  "AI Powered Job Tailored Resumes",
  "Unlimited AI Cover Letters",
  "Advanced Resume Job Matching",
  "Company Insights & Research",
  "Priority Support",
  "Custom Resume Templates",
];

export function Pricing() {
  const router = useRouter();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const proPrice = pricingPlans[billingPeriod].pro;
  const savings = billingPeriod === "annually" ? 25 : billingPeriod === "quarterly" ? 12.5 : 0;

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300 mb-8"
          >
            Choose the plan that&apos;s right for you
          </motion.p>

          {/* Billing Period Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1"
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("quarterly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "quarterly"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setBillingPeriod("annually")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingPeriod === "annually"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Annually
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 25%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card padding="lg" className="h-full border-2 border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Free
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Build + download a beautiful resume and streamline your job search. Always free, no hidden costs.
                </p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">
                    $0
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    /forever
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mb-6"
                onClick={() => router.push("/auth/register")}
              >
                Sign Up for Free
              </Button>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Resume Builder
                </p>
                {freePlanFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <IoCheckmarkCircle
                      className="text-slate-400 dark:text-slate-600 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card
              padding="lg"
              className="h-full border-2 border-indigo-500 dark:border-indigo-400 relative overflow-hidden"
            >
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Pro
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Level up your job search with AI-powered tools and unlimited access
                </p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">
                    ${proPrice}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 ml-2">
                    /month
                  </span>
                </div>
                {savings > 0 && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                    Save {savings}% with {billingPeriod} billing
                  </p>
                )}
              </div>

              <Button
                variant="primary"
                className="w-full mb-6 !bg-yellow-400 !text-slate-900 hover:!bg-yellow-500 dark:!bg-yellow-400 dark:!text-slate-900"
                onClick={() => router.push("/auth/register")}
              >
                Get Started
              </Button>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Resume Builder + Cover Letters
                </p>
                {proPlanFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <IoCheckmarkCircle
                      className={`mt-0.5 flex-shrink-0 ${
                        index === 0
                          ? "text-slate-700 dark:text-slate-300"
                          : "text-indigo-600 dark:text-indigo-400"
                      }`}
                      size={20}
                    />
                    <span
                      className={`text-sm ${
                        index === 0
                          ? "font-semibold text-slate-700 dark:text-slate-300"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* FAQ or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400">
            All plans include access to our core features. Upgrade anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

