# Permanent Working Protocol

This document is the single source of truth for all workflows, standards, and best practices in this project. All contributors and AI agents must follow these protocols without exception.

---

## 1. User Instructions & Documentation
- Treat all user-provided documentation, logs, and instructions as absolute priority.
- Analyze and follow these before consulting any external data or forming hypotheses.

## 2. Communication & Action
- Always verify understanding before acting: restate your understanding and get confirmation.
- Take one step at a time; never chain actions or make multi-step assumptions.

## 3. Figma MCP Server Workflow
- The MCP server is a context provider, not a code generator.
- Query at the correct level:
  - Parent set: all tokens
  - Variant: structure and assets for that variant
  - Child: specific asset data
- If data is missing, use the screenshot as ground truth and manually recreate assets.
- Never hallucinate or guess missing data. Ask for clarification if needed.

## 4. Storybook Usage
- Use Atomic Design for organizing components: Atoms, Molecules, Organisms.
- Always provide visible code examples in stories, especially if using custom render functions.
- Use correct addons and never guess package versions. Use `npm view` to check valid versions.
- Ensure all stories are well-typed and documented.

## 5. Cursor/AI Usage
- Use context features and @ references for files, code, docs, etc.
- Use Agent for complex, multi-file, or error-prone tasks.
- Follow all project and global rules for AI (code style, framework, etc.).
- Never abandon the MCP tool; treat all responses as data, not failures.

## 6. Error Handling & Troubleshooting
- If a tool or process fails, stop, research, analyze, and execute a data-driven fix.
- Never loop on reactive fixes or make assumptions about tool limitations.
- Switch methods if automated data is incomplete (e.g., use visual analysis for missing assets).

## 7. Deployment Protocol
- After every meaningful change:
  1. Commit and push to GitHub.
  2. Ensure Vercel deploys the latest version.
  3. Confirm deployment if needed.

---

**This protocol is permanent and must be followed for all future work. Any amendments must be explicitly documented and confirmed.** 