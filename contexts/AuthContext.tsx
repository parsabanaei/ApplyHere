"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType, User } from "@/types";
import { STORAGE_KEYS, saveToStorage, getFromStorage, removeFromStorage } from "@/lib/storage";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = getFromStorage<User | null>(STORAGE_KEYS.USER, null);
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate authentication (client-side only)
    // In real app, this would call an API
    
    // Simple validation
    if (!email || !password) {
      return false;
    }

    // Create a mock user
    const mockUser: User = {
      id: crypto.randomUUID(),
      name: email.split("@")[0],
      email,
      createdAt: new Date(),
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    saveToStorage(STORAGE_KEYS.USER, mockUser);
    
    return true;
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    // Simulate registration (client-side only)
    
    // Simple validation
    if (!name || !email || !password) {
      return false;
    }

    // Create a mock user
    const mockUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
      createdAt: new Date(),
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    saveToStorage(STORAGE_KEYS.USER, mockUser);
    
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    removeFromStorage(STORAGE_KEYS.USER);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

