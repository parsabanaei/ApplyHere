"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Button, 
  Input, 
  Card, 
  CardBody, 
  CardHeader, 
  Tabs, 
  Tab,
  Link,
  Divider
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, FaUser, FaArrowLeft, FaRocket } from "react-icons/fa";
import { toast, Toaster } from "sonner";

export default function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = () => {
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    // Simulate login - in production, this would call an API
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email: loginData.email, name: "User" }));
      toast.success("Welcome back!");
      router.push("/dashboard");
    }, 1000);
  };

  const handleRegister = () => {
    if (!registerData.name || !registerData.email || !registerData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    if (registerData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: registerData.email, name: registerData.name })
      );
      toast.success("Account created successfully!");
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Toaster position="top-center" richColors />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Link
          href="/"
          color="foreground"
          className="mb-4 inline-flex items-center gap-2"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <Card className="w-full shadow-2xl">
          <CardHeader className="flex flex-col gap-3 pb-0 pt-6 px-6">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 text-3xl font-bold text-blue-600 mb-2"
            >
              <FaRocket />
              <span>ApplyHere.ai</span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Welcome! Please sign in to continue
            </p>
          </CardHeader>

          <CardBody className="px-6 pb-6">
            <Tabs
              fullWidth
              aria-label="Auth tabs"
              classNames={{
                tabList: "gap-2",
                cursor: "bg-blue-600",
                tab: "text-gray-700 dark:text-gray-300",
              }}
            >
              <Tab key="login" title="Login">
                <div className="flex flex-col gap-4 py-4">
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                    startContent={<FaEnvelope className="text-gray-400" />}
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    isRequired
                  />
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    startContent={<FaLock className="text-gray-400" />}
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                    isRequired
                  />
                  <Button
                    color="primary"
                    size="lg"
                    isLoading={isLoading}
                    onPress={handleLogin}
                    className="mt-2"
                  >
                    Sign In
                  </Button>
                  <Divider className="my-2" />
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Forgot your password?{" "}
                    <Link href="#" color="primary" size="sm">
                      Reset it here
                    </Link>
                  </p>
                </div>
              </Tab>

              <Tab key="register" title="Register">
                <div className="flex flex-col gap-4 py-4">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    variant="bordered"
                    startContent={<FaUser className="text-gray-400" />}
                    value={registerData.name}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, name: e.target.value })
                    }
                    isRequired
                  />
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                    startContent={<FaEnvelope className="text-gray-400" />}
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, email: e.target.value })
                    }
                    isRequired
                  />
                  <Input
                    label="Password"
                    placeholder="Create a password"
                    type="password"
                    variant="bordered"
                    startContent={<FaLock className="text-gray-400" />}
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, password: e.target.value })
                    }
                    isRequired
                  />
                  <Input
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    type="password"
                    variant="bordered"
                    startContent={<FaLock className="text-gray-400" />}
                    value={registerData.confirmPassword}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        confirmPassword: e.target.value,
                      })
                    }
                    onKeyPress={(e) => e.key === "Enter" && handleRegister()}
                    isRequired
                  />
                  <Button
                    color="primary"
                    size="lg"
                    isLoading={isLoading}
                    onPress={handleRegister}
                    className="mt-2"
                  >
                    Create Account
                  </Button>
                  <Divider className="my-2" />
                  <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                    By registering, you agree to our{" "}
                    <Link href="#" size="sm">Terms of Service</Link> and{" "}
                    <Link href="#" size="sm">Privacy Policy</Link>
                  </p>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardBody className="p-4">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                💡 <strong>Demo Mode:</strong> Any email and password will work for testing
              </p>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

