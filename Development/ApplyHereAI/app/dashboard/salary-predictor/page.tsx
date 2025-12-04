"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Slider,
  Chip,
  Breadcrumbs,
  BreadcrumbItem,
} from "@heroui/react";
import { FaDollarSign, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SalaryPredictorPage() {
  const router = useRouter();

  const [title, setTitle] = useState("Software Engineer");
  const [location, setLocation] = useState("California");
  const [experience, setExperience] = useState(2); // years
  const [result, setResult] = useState<string | null>(null);

  const predict = () => {
    let base = 70000;

    const t = title.toLowerCase();
    const loc = location.toLowerCase();

    if (t.includes("senior")) base += 40000;
    else if (t.includes("staff") || t.includes("lead")) base += 50000;
    else if (t.includes("intern")) base -= 25000;
    else if (t.includes("junior")) base -= 10000;

    if (t.includes("data")) base += 15000;
    if (t.includes("ai") || t.includes("ml")) base += 20000;

    if (
      loc.includes("california") ||
      loc.includes("san francisco") ||
      loc.includes("bay")
    ) {
      base += 25000;
    } else if (loc.includes("new york")) {
      base += 20000;
    } else if (loc.includes("remote")) {
      base -= 5000;
    }

    base += experience * 2500;

    const low = Math.max(40000, Math.round(base * 0.9));
    const high = Math.round(base * 1.15);

    setResult(
      `Estimated range: $${low.toLocaleString()} – $${high.toLocaleString()} / year`
    );
  };

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs className="mb-4">
          <BreadcrumbItem onPress={() => router.push("/dashboard")}>
            Dashboard
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent>Salary Predictor</BreadcrumbItem>
        </Breadcrumbs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <FaDollarSign className="text-emerald-500" />
            Salary Predictor
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Get a quick estimated salary range based on your target role,
            location, and experience. This is a rough guideline to help
            with negotiations and expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="px-6 pt-6 pb-2 flex items-center gap-2">
              <FaBriefcase className="text-blue-500" />
              <h2 className="font-semibold">Inputs</h2>
            </CardHeader>
            <CardBody className="px-6 pb-6 space-y-4">
              <Input
                label="Target Role"
                labelPlacement="outside"
                placeholder="e.g. Software Engineer, Data Scientist"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                label="Location"
                labelPlacement="outside"
                placeholder="e.g. California, New York, Remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                startContent={<FaMapMarkerAlt className="text-gray-400" />}
              />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Years of experience
                  </span>
                  <Chip size="sm" variant="flat" color="primary">
                    {experience} yrs
                  </Chip>
                </div>
                <Slider
                  aria-label="Experience"
                  minValue={0}
                  maxValue={15}
                  step={1}
                  value={experience}
                  onChange={(v) => setExperience(v as number)}
                />
              </div>

              <Button color="primary" className="mt-2" onPress={predict}>
                Predict salary
              </Button>
            </CardBody>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
            <CardHeader className="px-6 pt-6 pb-2">
              <h2 className="font-semibold">Estimated Range</h2>
            </CardHeader>
            <CardBody className="px-6 pb-6 space-y-4">
              {result ? (
                <>
                  <p className="text-lg font-semibold">{result}</p>
                  <p className="text-sm text-emerald-50">
                    This is a rough estimate based on common ranges for
                    similar roles. Actual offers depend on company,
                    interview performance, and negotiation.
                  </p>
                </>
              ) : (
                <p className="text-sm text-emerald-50">
                  Fill out the fields on the left and click{" "}
                  <span className="font-semibold">Predict salary</span> to see
                  a range.
                </p>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}


// new file: added by Rasha