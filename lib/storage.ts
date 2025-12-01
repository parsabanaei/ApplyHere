// LocalStorage utility functions

const STORAGE_KEYS = {
  USER: "applyhere_user",
  RESUME: "applyhere_resume",
  APPLICATIONS: "applyhere_applications",
  INTERVIEW_PREP: "applyhere_interview_prep",
  TEMPLATES: "applyhere_templates",
  COMPANY_INSIGHTS: "applyhere_company_insights",
  COVER_LETTERS: "applyhere_cover_letters",
} as const;

export function saveToStorage<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

export function getFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return defaultValue;
  }
}

export function removeFromStorage(key: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage:", error);
  }
}

export function clearStorage(): void {
  if (typeof window === "undefined") return;
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
}

export { STORAGE_KEYS };

