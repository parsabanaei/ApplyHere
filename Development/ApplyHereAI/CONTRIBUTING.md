# Contributing to ApplyHere.ai

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Start dev server: `npm run dev`

## Code Style

- Use TypeScript for all new code
- Follow existing code patterns and structure
- Use functional components with hooks
- Keep components focused and reusable
- Add comments for complex logic

## Component Guidelines

### File Structure
```typescript
"use client"; // If using client-side features

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Button } from "@heroui/react";

interface ComponentProps {
  // Define props
}

export default function Component({ }: ComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### Naming Conventions
- Components: PascalCase (e.g., `ResumeBuilder`)
- Files: kebab-case (e.g., `resume-builder.tsx`)
- Functions: camelCase (e.g., `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)

### Animation Patterns
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

## Adding New Features

1. Create a new page in `app/dashboard/[feature-name]/page.tsx`
2. Add route to sidebar navigation in `app/dashboard/layout.tsx`
3. Follow existing patterns for:
   - Layout and structure
   - Motion animations
   - HeroUI components
   - Local Storage integration
   - TypeScript typing

## Testing Your Changes

1. Run the dev server: `npm run dev`
2. Test all interactive features
3. Check responsive design (mobile, tablet, desktop)
4. Verify Local Storage persistence
5. Test animations and transitions
6. Check for console errors

## Submitting Changes

1. Commit your changes with clear messages:
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve bug in component"
   git commit -m "docs: update README"
   ```

2. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request with:
   - Clear title and description
   - Screenshots/videos of changes
   - List of testing performed
   - Any breaking changes noted

## Pull Request Guidelines

- Keep PRs focused on a single feature/fix
- Update documentation if needed
- Add comments for complex logic
- Ensure no linter errors
- Test thoroughly before submitting

## Code Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited

## Feature Requests

- Open an issue with the "feature request" label
- Describe the feature and use case
- Discuss implementation approach
- Wait for approval before starting work

## Bug Reports

Include in your report:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information
- Console errors if any

## Areas for Contribution

### Easy
- Fix typos in documentation
- Improve error messages
- Add new email templates
- Update mock data (companies, jobs)
- Enhance styling/animations

### Medium
- Add new interview questions
- Improve keyword extraction algorithm
- Add data export/import features
- Enhance accessibility
- Add unit tests

### Advanced
- Integrate real backend API
- Add authentication system
- Implement data analytics
- Add collaborative features
- Create mobile app version

## Questions?

Feel free to:
- Open an issue for clarification
- Ask in PR comments
- Check existing documentation

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Credited in release notes
- Acknowledged in the README

Thank you for making ApplyHere.ai better! 🙏

