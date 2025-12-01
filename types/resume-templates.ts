export type ResumeTemplate = 
  | "professional"
  | "modern"
  | "creative"
  | "minimal"
  | "executive"
  | "tech";

export interface TemplateStyle {
  id: ResumeTemplate;
  name: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  headerStyle: "centered" | "left" | "split";
  fontFamily: string;
  borderStyle: "solid" | "none" | "double";
  preview: string;
}

export const RESUME_TEMPLATES: TemplateStyle[] = [
  {
    id: "professional",
    name: "Professional",
    description: "Classic and elegant design perfect for traditional industries",
    primaryColor: "#1e293b",
    accentColor: "#475569",
    headerStyle: "centered",
    fontFamily: "serif",
    borderStyle: "solid",
    preview: "Traditional format with strong visual hierarchy",
  },
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary with a splash of color",
    primaryColor: "#4f46e5",
    accentColor: "#818cf8",
    headerStyle: "left",
    fontFamily: "sans",
    borderStyle: "solid",
    preview: "Vibrant accents with modern typography",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold and artistic for design and creative roles",
    primaryColor: "#7c3aed",
    accentColor: "#a78bfa",
    headerStyle: "split",
    fontFamily: "sans",
    borderStyle: "none",
    preview: "Unique layout with creative flair",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and clean with maximum readability",
    primaryColor: "#334155",
    accentColor: "#64748b",
    headerStyle: "left",
    fontFamily: "sans",
    borderStyle: "none",
    preview: "Minimalist design focused on content",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Sophisticated design for senior positions",
    primaryColor: "#0f172a",
    accentColor: "#1e293b",
    headerStyle: "centered",
    fontFamily: "serif",
    borderStyle: "double",
    preview: "Elegant and authoritative presentation",
  },
  {
    id: "tech",
    name: "Tech",
    description: "Modern and sleek for technology professionals",
    primaryColor: "#0ea5e9",
    accentColor: "#38bdf8",
    headerStyle: "left",
    fontFamily: "mono",
    borderStyle: "solid",
    preview: "Tech-focused with monospace accents",
  },
];

