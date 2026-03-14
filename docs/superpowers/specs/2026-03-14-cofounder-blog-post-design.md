# Blog Post Design: The Graveyard of Unbuilt Ideas

## Overview

A blog post for alexfilatov.com about cofounder.im, framed as a problem/vision piece targeting aspiring founders who have ideas but are stuck due to idea paralysis and information overload.

## Target Audience

Aspiring founders — people with ideas who haven't started building yet.

## Tone

Conversational and direct, matching the style of existing posts like "How I Built This Website."

## Title

"The Graveyard of Unbuilt Ideas (And How to Escape It)"

## Post Structure

### 1. Hook (2-3 paragraphs)

Open with the relatable feeling: you have an idea, it's exciting, but then... nothing happens. Not because the idea was bad, but because you got stuck. The graveyard of unbuilt ideas isn't full of bad concepts — it's full of good ones that never got past the "what now?" stage.

### 2. The Two Killers (2 sections)

**Idea Paralysis:** You have an idea but can't figure out if it's worth pursuing. Should you quit your job? Should you build an MVP first? Is the market big enough? You overthink until the excitement fades.

**Information Overload:** You google "how to validate a startup idea" and get 500 blog posts, 200 YouTube videos, 50 courses. Each says something slightly different. You're more confused than before you started.

### 3. What Founders Actually Need (1-2 paragraphs)

Not more content. A structured path: validate the idea, plan the business, build the product. Like having a co-founder who's done this before and can cut through the noise.

### 4. Introducing cofounder.im (3-4 paragraphs + screenshots)

Brief personal context — Alex built this to solve the problem described above. Then show the workflow:

- **Start simple:** Describe your idea in plain text in the input form
  - Screenshot: `homepage.png` — cofounder.im landing page with idea input form
- **AI agents analyze simultaneously:** 20+ specialized agents (Idea Validator, Market Research, Competitor Analysis, Business Model, etc.) work on your idea at the same time
  - Screenshot: `ai-agents.png` — list of 15+ specialized AI agents
- **Social proof / traction:** 550 projects validated, 58 industries, 4,500+ reports generated
  - Screenshot: `analytics.png` — platform statistics and industry breakdown

### 5. From Idea to Company (1-2 paragraphs + screenshot)

Startup Mode takes validated ideas further: define team composition with roles, manage equity and cap table, handle legal agreements, plan incorporation, build a roadmap. Everything you need to go from "validated idea" to "actual company."

- Screenshot: `startup-mode.png` — Startup Mode with team roles, equity, and roadmap tabs

### 6. From Validation to Code (1-2 paragraphs + screenshot)

OpenClaw integration bridges the gap between planning and building. Your validated spec and build specification can be sent directly to AI coding agents (Claude Code, Cursor, Windsurf, Cline, GitHub Copilot) via MCP server. From idea to working code without leaving the platform.

- Screenshot: `openclaw.png` — OpenClaw integration with MCP server and coding agent connections

### 7. CTA (1 paragraph)

Direct call-to-action: "Describe your idea at cofounder.im and see what 20+ AI agents think of it. You get 100 free welcome credits to start." Link to https://cofounder.im.

## Screenshots

Screenshots to be copied from `project_screenshots/` to `public/images/blog/cofounder-im/` with descriptive names:

| Source File | Target Name | Alt Text | Used In Section |
|---|---|---|---|
| Screenshot 2026-03-14 at 12.14.31.png | cover.png | cofounder.im homepage with startup idea input form | Section 4 (also cover) |
| Screenshot 2026-03-14 at 12.17.35.png | ai-agents.png | List of 20+ specialized AI agents for startup validation | Section 4 |
| Screenshot 2026-03-14 at 12.14.53.png | analytics.png | Platform analytics showing 550 projects across 58 industries | Section 4 |
| Screenshot 2026-03-14 at 12.18.21.png | startup-mode.png | Startup Mode with team composition, equity, and roadmap management | Section 5 |
| Screenshot 2026-03-14 at 12.14.39.png | openclaw.png | OpenClaw integration connecting validated specs to AI coding agents | Section 6 |

## MDX Frontmatter

```yaml
title: "The Graveyard of Unbuilt Ideas (And How to Escape It)"
publishedAt: "2026-03-14"
summary: "Most startup ideas don't die because they're bad. They die because their founders got stuck. Here's how to break free from idea paralysis."
image: "/images/blog/cofounder-im/cover.png"
```

## Implementation Notes

- Blog post file: `src/app/blog/posts/cofounder-im.mdx`
- Images directory: `public/images/blog/cofounder-im/`
- Follow existing MDX conventions from other posts
- Use standard markdown images for screenshots within the post body
