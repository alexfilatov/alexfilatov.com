# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Alex Filatov built with Next.js 16 and the Once UI design system. Uses MDX for blog posts and project pages.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run biome-write  # Format code with Biome
```

## Architecture

### Content System

All site content is configured through TypeScript files in `src/resources/`:
- `content.tsx` - Personal info, work experience, skills, page content (person, home, about, blog, work, gallery exports)
- `once-ui.config.ts` - Site configuration: baseURL, routes, fonts, theme/style settings, SEO schema, social sharing options

MDX content files:
- Blog posts: `src/app/blog/posts/*.mdx`
- Projects: `src/app/work/projects/*.mdx`

### MDX Frontmatter

Blog posts require:
```yaml
title: "Post Title"
publishedAt: "YYYY-MM-DD"
summary: "Description"
image: "/images/blog/..."  # Optional
```

Projects require:
```yaml
title: "Project Name"
publishedAt: "YYYY-MM-DD"
summary: "Description"
images: ["/images/projects/..."]
team: [{name, role, avatar, linkedIn}]
link: "https://..."  # Optional
```

### Once UI Integration

Uses `@once-ui-system/core` for all UI components. Import components from `@once-ui-system/core` (Column, Flex, Text, Row, etc.). Custom CSS can be added to `src/resources/custom.css`.

### Type Definitions

Content types are defined in `src/types/content.types.ts` - check these when modifying content structure.

### Route Configuration

Enable/disable pages in `once-ui.config.ts` via the `routes` object:
```typescript
const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": false,
};
```

### Password Protection

Protected routes configured via `protectedRoutes` in `once-ui.config.ts`. Password set via `PAGE_ACCESS_PASSWORD` environment variable.

## Environment Variables

Copy `.env.example` to `.env`:
- `PAGE_ACCESS_PASSWORD` - Password for protected routes
