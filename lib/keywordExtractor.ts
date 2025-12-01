import { KeywordMatch, ComparisonResult } from "@/types";

// Common words to filter out (stop words)
const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "has",
  "he",
  "in",
  "is",
  "it",
  "its",
  "of",
  "on",
  "that",
  "the",
  "to",
  "was",
  "will",
  "with",
  "we",
  "you",
  "your",
  "our",
  "their",
  "this",
  "these",
  "those",
]);

/**
 * Extract keywords from text
 */
export function extractKeywords(text: string): string[] {
  // Convert to lowercase and split into words
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ") // Remove punctuation
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));

  // Count frequency
  const frequency: Record<string, number> = {};
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 50) // Top 50 keywords
    .map(([word]) => word);
}

/**
 * Extract technical skills and keywords
 */
export function extractTechnicalKeywords(text: string): string[] {
  const technicalPatterns = [
    // Programming languages
    /\b(javascript|typescript|python|java|c\+\+|c#|ruby|go|rust|swift|kotlin|php)\b/gi,
    // Frameworks
    /\b(react|angular|vue|next\.js|express|django|flask|spring|rails|laravel)\b/gi,
    // Tools & Technologies
    /\b(git|docker|kubernetes|aws|azure|gcp|jenkins|terraform|ansible)\b/gi,
    // Databases
    /\b(mongodb|postgresql|mysql|redis|elasticsearch|dynamodb)\b/gi,
    // Methodologies
    /\b(agile|scrum|ci\/cd|tdd|devops|microservices|rest|graphql)\b/gi,
  ];

  const matches = new Set<string>();
  technicalPatterns.forEach((pattern) => {
    const found = text.match(pattern);
    if (found) {
      found.forEach((match) => matches.add(match.toLowerCase()));
    }
  });

  return Array.from(matches);
}

/**
 * Compare resume text with job description
 */
export function compareResumeToJob(
  resumeText: string,
  jobDescriptionText: string
): ComparisonResult {
  // Extract keywords from both texts
  const resumeKeywords = new Set([
    ...extractKeywords(resumeText),
    ...extractTechnicalKeywords(resumeText),
  ]);
  const jobKeywords = new Set([
    ...extractKeywords(jobDescriptionText),
    ...extractTechnicalKeywords(jobDescriptionText),
  ]);

  // Find matching and missing keywords
  const matchingKeywords: string[] = [];
  const missingKeywords: string[] = [];

  jobKeywords.forEach((keyword) => {
    if (resumeKeywords.has(keyword)) {
      matchingKeywords.push(keyword);
    } else {
      missingKeywords.push(keyword);
    }
  });

  // Calculate match percentage
  const totalJobKeywords = jobKeywords.size;
  const matchPercentage =
    totalJobKeywords > 0
      ? Math.round((matchingKeywords.length / totalJobKeywords) * 100)
      : 0;

  // Generate suggestions
  const suggestions = generateSuggestions(missingKeywords, matchPercentage);

  return {
    matchPercentage,
    matchingKeywords,
    missingKeywords,
    suggestions,
  };
}

/**
 * Generate suggestions based on comparison results
 */
function generateSuggestions(
  missingKeywords: string[],
  matchPercentage: number
): string[] {
  const suggestions: string[] = [];

  if (matchPercentage < 50) {
    suggestions.push(
      "Your resume has significant gaps compared to the job description. Consider tailoring your resume more closely to this position."
    );
  }

  if (missingKeywords.length > 0) {
    const topMissing = missingKeywords.slice(0, 5);
    suggestions.push(
      `Consider incorporating these key terms: ${topMissing.join(", ")}`
    );
  }

  if (matchPercentage >= 70) {
    suggestions.push(
      "Your resume aligns well with the job description. Consider highlighting your relevant achievements more prominently."
    );
  }

  if (missingKeywords.some((kw) => kw.includes("year") || kw.includes("experience"))) {
    suggestions.push(
      "Make sure to clearly state your years of experience in relevant areas."
    );
  }

  return suggestions;
}

/**
 * Highlight text with matched keywords
 */
export function highlightKeywords(
  text: string,
  keywords: string[],
  highlightClass: string = "bg-yellow-200"
): string {
  let highlightedText = text;

  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      `<span class="${highlightClass}">$&</span>`
    );
  });

  return highlightedText;
}

