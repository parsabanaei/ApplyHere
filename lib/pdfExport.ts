import html2pdf from "html2pdf.js";

export interface PdfOptions {
  filename?: string;
  margin?: number | [number, number, number, number];
  image?: { type: string; quality: number };
  html2canvas?: { scale: number; useCORS: boolean };
  jsPDF?: { unit: string; format: string; orientation: string };
}

/**
 * Export HTML element to PDF
 */
export async function exportToPdf(
  element: HTMLElement,
  options: PdfOptions = {}
): Promise<void> {
  const defaultOptions = {
    margin: [10, 10, 10, 10],
    filename: options.filename || "document.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { 
      scale: 2, 
      useCORS: true,
      letterRendering: true,
      logging: false,
      windowWidth: 816, // 8.5 inches at 96 DPI
    },
    jsPDF: { 
      unit: "mm", 
      format: "letter", 
      orientation: "portrait",
      compress: true,
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  const finalOptions = { ...defaultOptions, ...options };

  try {
    await html2pdf().set(finalOptions).from(element).save();
  } catch (error) {
    console.error("Error exporting PDF:", error);
    throw error;
  }
}

/**
 * Generate resume PDF
 */
export async function exportResumeToPdf(resumeElementId: string): Promise<void> {
  const element = document.getElementById(resumeElementId);
  if (!element) {
    throw new Error(`Element with id '${resumeElementId}' not found`);
  }

  await exportToPdf(element, {
    filename: "resume.pdf",
    margin: [10, 10, 10, 10],
  });
}

/**
 * Generate cover letter PDF
 */
export async function exportCoverLetterToPdf(
  coverLetterElementId: string
): Promise<void> {
  const element = document.getElementById(coverLetterElementId);
  if (!element) {
    throw new Error(`Element with id '${coverLetterElementId}' not found`);
  }

  await exportToPdf(element, {
    filename: "cover-letter.pdf",
    margin: [10, 10, 10, 10],
  });
}

/**
 * Print element (alternative to PDF export)
 */
export function printElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id '${elementId}' not found`);
  }

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    throw new Error("Failed to open print window");
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          @media print {
            body { margin: 0; }
          }
        </style>
      </head>
      <body>
        ${element.innerHTML}
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 250);
}

