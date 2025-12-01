/**
 * Extract text from PDF and TXT files with OCR support for scanned documents
 */

import { getPDFJS } from "./pdfjsLoader";

export const extractTextFromFile = async (
  file: File,
  onProgress?: (progress: number, status: string) => void
): Promise<string> => {
  const fileType = file.type;
  const fileName = file.name.toLowerCase();

  // Handle TXT files
  if (fileType === "text/plain" || fileName.endsWith(".txt")) {
    onProgress?.(100, "Reading text file...");
    return await file.text();
  }

  // Handle PDF files
  if (fileType === "application/pdf" || fileName.endsWith(".pdf")) {
    return await extractTextFromPDF(file, onProgress);
  }

  throw new Error("Unsupported file type. Please upload a .txt or .pdf file.");
};

/**
 * Extract text from PDF using PDF.js with fallback to OCR for scanned documents
 */
const extractTextFromPDF = async (
  file: File,
  onProgress?: (progress: number, status: string) => void
): Promise<string> => {
  try {
    onProgress?.(10, "Loading PDF...");
    
    // First, try standard text extraction with PDF.js
    const textFromPDF = await extractTextWithPDFJS(file, onProgress);
    
    // If we got meaningful text, return it
    if (textFromPDF && textFromPDF.length > 100) {
      onProgress?.(100, "Text extracted successfully!");
      return textFromPDF;
    }
    
    // If little or no text found, it's likely a scanned PDF - use OCR
    console.log("PDF appears to be scanned or image-based. Falling back to OCR...");
    onProgress?.(30, "Detected scanned PDF, using OCR...");
    
    const textFromOCR = await extractTextWithOCR(file, onProgress);
    return textFromOCR;
    
  } catch (error) {
    console.error("PDF text extraction error:", error);
    
    const errorMessage = error instanceof Error ? error.message.toLowerCase() : "";
    
    // Check if it's the Object.defineProperty error - means PDF.js failed to load
    if (errorMessage.includes("defineproperty") || errorMessage.includes("initialize pdf processor")) {
      throw new Error(
        "PDF processor initialization failed. Please refresh the page and try again. If the issue persists, try copying and pasting the text manually."
      );
    }
    
    // If PDF.js fails for other reasons, try OCR as fallback
    try {
      onProgress?.(30, "Trying alternative method...");
      console.log("Attempting OCR fallback after PDF.js failure...");
      const textFromOCR = await extractTextWithOCR(file, onProgress);
      return textFromOCR;
    } catch (ocrError) {
      console.error("OCR extraction error:", ocrError);
      
      throw new Error(
        "Unable to extract text from this PDF. Please try: 1) Refreshing the page, 2) Using a different browser, or 3) Copying the text manually."
      );
    }
  }
};

/**
 * Extract text using PDF.js (for text-based PDFs)
 */
const extractTextWithPDFJS = async (
  file: File,
  onProgress?: (progress: number, status: string) => void
): Promise<string> => {
  try {
    // Get PDF.js instance (cached or initialize)
    const pdfjsLib = await getPDFJS();
    
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    onProgress?.(20, `Processing ${pdf.numPages} pages...`);
    
    let fullText = "";
    
    // Extract text from each page
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      // Combine text items with proper spacing
      const pageText = textContent.items
        .map((item: any) => {
          if ("str" in item) {
            return item.str;
          }
          return "";
        })
        .join(" ");
      
      fullText += pageText + "\n\n";
      
      // Update progress
      const progress = 20 + (pageNum / pdf.numPages) * 30;
      onProgress?.(progress, `Extracted page ${pageNum}/${pdf.numPages}...`);
    }
    
    // Clean up the extracted text
    const cleanText = fullText
      .replace(/\s+/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    
    return cleanText;
  } catch (error) {
    console.error("PDF.js extraction error:", error);
    // Return empty string to trigger OCR fallback
    return "";
  }
};

/**
 * Extract text using OCR (Tesseract.js) for scanned/image-based PDFs
 */
const extractTextWithOCR = async (
  file: File,
  onProgress?: (progress: number, status: string) => void
): Promise<string> => {
  try {
    // Dynamically import Tesseract
    const Tesseract = await import("tesseract.js");
    
    onProgress?.(40, "Initializing OCR engine...");
    
    // Convert PDF to images
    const images = await convertPDFToImages(file, onProgress);
    
    if (images.length === 0) {
      throw new Error("Could not convert PDF pages to images");
    }
    
    onProgress?.(60, `Running OCR on ${images.length} pages...`);
    
    let fullText = "";
    
    // Process each page with OCR
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      
      onProgress?.(
        60 + (i / images.length) * 30,
        `OCR processing page ${i + 1}/${images.length}...`
      );
      
      const result = await Tesseract.recognize(image, "eng", {
        logger: (m: any) => {
          if (m.status === "recognizing text") {
            const pageProgress = 60 + ((i + m.progress) / images.length) * 30;
            onProgress?.(pageProgress, `OCR page ${i + 1}/${images.length}... ${Math.round(m.progress * 100)}%`);
          }
        },
      });
      
      fullText += result.data.text + "\n\n";
    }
    
    const cleanText = fullText
      .replace(/\s+/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    
    if (cleanText.length < 50) {
      throw new Error("OCR could not extract meaningful text from the PDF");
    }
    
    onProgress?.(100, "OCR completed successfully!");
    return cleanText;
    
  } catch (error) {
    console.error("OCR error:", error);
    throw new Error("OCR processing failed. The PDF might contain unreadable or corrupted images.");
  }
};

/**
 * Convert PDF pages to images for OCR processing
 */
const convertPDFToImages = async (
  file: File,
  onProgress?: (progress: number, status: string) => void
): Promise<string[]> => {
  try {
    // Get PDF.js instance (cached or initialize)
    const pdfjsLib = await getPDFJS();
    
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    const images: string[] = [];
    
    onProgress?.(50, "Converting PDF to images...");
    
    // Convert each page to image
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      
      // Set scale for better OCR accuracy (higher = better quality but slower)
      const scale = 2.0;
      const viewport = page.getViewport({ scale });
      
      // Create canvas
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      
      if (!context) {
        throw new Error("Could not create canvas context");
      }
      
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      // Render PDF page to canvas
      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;
      
      // Convert canvas to data URL
      const imageDataUrl = canvas.toDataURL("image/png");
      images.push(imageDataUrl);
      
      onProgress?.(
        50 + (pageNum / pdf.numPages) * 10,
        `Converted page ${pageNum}/${pdf.numPages} to image...`
      );
    }
    
    return images;
  } catch (error) {
    console.error("PDF to image conversion error:", error);
    throw new Error("Failed to convert PDF pages to images for OCR");
  }
};

/**
 * Validate file size (max 5MB by default)
 */
export const validateFileSize = (file: File, maxSizeMB: number = 5): boolean => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
};

/**
 * Get human-readable file size
 */
export const getFileSizeInMB = (file: File): string => {
  const sizeInMB = file.size / (1024 * 1024);
  return sizeInMB.toFixed(2);
};

/**
 * Validate file type
 */
export const validateFileType = (file: File): boolean => {
  const validTypes = ["text/plain", "application/pdf"];
  const validExtensions = [".txt", ".pdf"];
  
  return (
    validTypes.includes(file.type) ||
    validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))
  );
};
