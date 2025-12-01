/**
 * PDF.js initialization with proper browser-only loading
 * This uses a different approach to avoid Object.defineProperty errors
 */

// Use require instead of import for better compatibility
export const getPDFJS = async (): Promise<any> => {
  // Ensure we're in browser environment
  if (typeof window === "undefined") {
    throw new Error("PDF.js requires browser environment");
  }

  try {
    // Use dynamic import with a catch for the global object issue
    const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
    
    // Configure worker
    if (!pdfjs.GlobalWorkerOptions.workerSrc) {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;
    }
    
    return pdfjs;
  } catch (error) {
    console.error("Failed to load PDF.js:", error);
    throw new Error("Failed to initialize PDF processor. Please refresh the page and try again.");
  }
};
