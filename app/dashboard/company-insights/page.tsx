"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CompanyCard } from "@/components/insights/CompanyCard";
import { Input } from "@/components/ui/Input";
import { mockCompanyInsights } from "@/lib/mockData";
import { IoSearch } from "react-icons/io5";

export default function CompanyInsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const industries = ["all", ...new Set(mockCompanyInsights.map((c) => c.industry))];

  const filteredCompanies = mockCompanyInsights.filter((company) => {
    const matchesSearch =
      company.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry =
      selectedIndustry === "all" || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Company Insights
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Research companies with curated insights on culture, news, and more
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            placeholder="Search companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry === "all"
                    ? "All Industries"
                    : industry}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-slate-600 dark:text-slate-400">
        Showing {filteredCompanies.length} compan
        {filteredCompanies.length === 1 ? "y" : "ies"}
      </div>

      {/* Company Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <CompanyCard company={company} />
          </motion.div>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-soft p-12 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            No companies found matching your criteria
          </p>
        </div>
      )}
    </motion.div>
  );
}

