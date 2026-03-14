# Cofounder.im Blog Post Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a blog post about cofounder.im on alexfilatov.com, framed as a problem/vision piece about idea paralysis and information overload.

**Architecture:** MDX blog post with inline screenshots. Copy 5 screenshots to public images directory, create one MDX file following existing conventions.

**Tech Stack:** MDX, Next.js, Once UI (standard markdown image syntax auto-converts to styled Media components)

**Spec:** `docs/superpowers/specs/2026-03-14-cofounder-blog-post-design.md`

---

## Chunk 1: Setup and Content

### Task 1: Copy and rename screenshots

**Files:**
- Create: `public/images/blog/cofounder-im/cover.png`
- Create: `public/images/blog/cofounder-im/ai-agents.png`
- Create: `public/images/blog/cofounder-im/analytics.png`
- Create: `public/images/blog/cofounder-im/startup-mode.png`
- Create: `public/images/blog/cofounder-im/openclaw.png`

- [ ] **Step 1: Create image directory and copy screenshots**

```bash
mkdir -p public/images/blog/cofounder-im
cp "project_screenshots/Screenshot 2026-03-14 at 12.14.31.png" public/images/blog/cofounder-im/cover.png
cp "project_screenshots/Screenshot 2026-03-14 at 12.17.35.png" public/images/blog/cofounder-im/ai-agents.png
cp "project_screenshots/Screenshot 2026-03-14 at 12.14.53.png" public/images/blog/cofounder-im/analytics.png
cp "project_screenshots/Screenshot 2026-03-14 at 12.18.21.png" public/images/blog/cofounder-im/startup-mode.png
cp "project_screenshots/Screenshot 2026-03-14 at 12.14.39.png" public/images/blog/cofounder-im/openclaw.png
```

- [ ] **Step 2: Verify all 5 images copied**

Run: `ls -la public/images/blog/cofounder-im/`
Expected: 5 PNG files (cover.png, ai-agents.png, analytics.png, startup-mode.png, openclaw.png)

### Task 2: Write the blog post MDX

**Files:**
- Create: `src/app/blog/posts/cofounder-im.mdx`

Reference for tone/style: `src/app/blog/posts/how-i-built-this-website.mdx`
Reference for spec: `docs/superpowers/specs/2026-03-14-cofounder-blog-post-design.md`

- [ ] **Step 3: Create the MDX file**

Write `src/app/blog/posts/cofounder-im.mdx` with:

```mdx
---
title: "The Graveyard of Unbuilt Ideas (And How to Escape It)"
publishedAt: "2026-03-14"
summary: "Most startup ideas don't die because they're bad. They die because their founders got stuck. Here's how to break free from idea paralysis."
image: "/images/blog/cofounder-im/cover.png"
---

## Section 1: Hook
- Open with the relatable feeling of having an idea but getting stuck
- "The graveyard of unbuilt ideas isn't full of bad concepts — it's full of good ones"
- 2-3 paragraphs, conversational tone

## Section 2: The Two Killers
### Idea Paralysis
- You have an idea but can't figure out if it's worth pursuing
- Overthinking until the excitement fades

### Information Overload
- Google "how to validate a startup idea" → 500 blog posts, 200 YouTube videos
- More confused than before you started

## Section 3: What Founders Actually Need
- Not more content — a structured path: validate → plan → build
- Like having a co-founder who's done this before

## Section 4: Introducing cofounder.im
- Brief personal context (I built this to solve the problem above)
- Show the workflow with screenshots:

1. Describe your idea in plain text:
![cofounder.im homepage with startup idea input form](/images/blog/cofounder-im/cover.png)

2. 20+ AI agents analyze simultaneously:
![List of 20+ specialized AI agents for startup validation](/images/blog/cofounder-im/ai-agents.png)

3. Social proof: 550 projects, 58 industries, 4,500+ reports:
![Platform analytics showing 550 projects across 58 industries](/images/blog/cofounder-im/analytics.png)

## Section 5: From Idea to Company
- Startup Mode: team composition, equity, cap table, legal, roadmap
![Startup Mode with team composition, equity, and roadmap management](/images/blog/cofounder-im/startup-mode.png)

## Section 6: From Validation to Code
- OpenClaw integration: validated spec → AI coding agents via MCP server
![OpenClaw integration connecting validated specs to AI coding agents](/images/blog/cofounder-im/openclaw.png)

## Section 7: CTA
- Direct: "Describe your idea at cofounder.im" with link
- Mention 100 free welcome credits
```

Note: The section markers above are structural guidance. The actual MDX should be written as flowing prose with markdown headings, following the conversational tone of `how-i-built-this-website.mdx`. Do NOT include "Section N:" labels in the final output.

### Task 3: Verify the post renders

- [ ] **Step 4: Run the dev server and check**

Run: `npm run dev`
Then verify in browser: `http://localhost:3000/blog/cofounder-im`

Expected: Post renders with title, cover image on blog listing, all 5 inline images visible and enlargeable.

- [ ] **Step 5: Run lint**

Run: `npm run lint`
Expected: No errors related to the new post.

### Task 4: Commit

- [ ] **Step 6: Stage and commit**

```bash
git add public/images/blog/cofounder-im/ src/app/blog/posts/cofounder-im.mdx
git commit -m "Add blog post: The Graveyard of Unbuilt Ideas"
```

Wait for user approval before committing.
