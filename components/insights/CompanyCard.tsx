"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { CompanyInsight } from "@/types";
import { Modal } from "@/components/ui/Modal";
import {
  IoBusinessOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoGlobeOutline,
} from "react-icons/io5";

interface CompanyCardProps {
  company: CompanyInsight;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card hover padding="lg" onClick={() => setIsModalOpen(true)}>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
              {company.companyName.charAt(0)}
            </div>
            <div className="flex-1">
              <CardTitle className="mb-2">{company.companyName}</CardTitle>
              <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                {company.industry}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
            {company.description}
          </p>
          
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {company.employees && (
              <div className="flex items-center gap-2">
                <IoPeopleOutline size={16} />
                <span>{company.employees} employees</span>
              </div>
            )}
            {company.founded && (
              <div className="flex items-center gap-2">
                <IoCalendarOutline size={16} />
                <span>Founded {company.founded}</span>
              </div>
            )}
            {company.headquarters && (
              <div className="flex items-center gap-2">
                <IoBusinessOutline size={16} />
                <span>{company.headquarters}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={company.companyName}
        size="lg"
      >
        <div className="space-y-6">
          {/* Company Info */}
          <div>
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
              {company.industry}
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              {company.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {company.employees && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  Employees
                </p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {company.employees}
                </p>
              </div>
            )}
            {company.founded && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  Founded
                </p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {company.founded}
                </p>
              </div>
            )}
            {company.headquarters && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  Headquarters
                </p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {company.headquarters}
                </p>
              </div>
            )}
            {company.website && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  Website
                </p>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <IoGlobeOutline size={20} />
                  Visit
                </a>
              </div>
            )}
          </div>

          {/* Culture */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Company Culture
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              {company.culture}
            </p>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Recent News
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              {company.recentNews}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

