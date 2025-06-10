# Figma MCP Server: Knowledge Base & Best Practices

This document contains our collective learnings on how to effectively use the Figma Dev Mode MCP Server. We will update it as we discover new behaviors and refine our workflow.

## Core Principle: The MCP Server is a Context-Specific API

The fundamental takeaway is that the MCP server is not a "one-shot" code generator. It is a precise, context-aware API that provides different data based on the specificity of the selection in the Figma app. Our job is to query it intelligently.

## Key Findings & Workflow

### 1. Querying Strategy Determines the Response

Our experiments have proven that the data we receive depends entirely on what is selected in the Figma app:

*   **Querying a Parent Component Set (the top-level container for all variants):**
    *   **Output:** A *summary* of all design tokens (colors, fonts, etc.) used across all variants within the set.
    *   **Does NOT Provide:** Structural information, layout code, child components, or specific asset data (SVGs, images).
    *   **Use Case:** Ideal for getting a complete token list for the entire component system at once.

*   **Querying a Specific Variant Instance (e.g., the "Text" or "Image/Video" card):**
    *   **Output:** A detailed, structured representation of that *single variant's* layout, often as React component code. This includes nested layer information, embedded asset data (SVGs, image placeholders), and a *filtered list* of only the design tokens that specific variant actually uses.
    *   **Use Case:** This is the primary method for getting the exact structure and assets needed to build a specific version of a component.

*   **Querying a Low-Level Child Element (e.g., a single icon):**
    *   **Output:** Highly specific asset data for only that element (e.g., the SVG code and fill color for one icon).
    *   **Use Case:** Useful for extracting individual assets when they are not included in the variant-level query.

### 2. Handling Incomplete Data: The "Gaps are Signals" Rule

The MCP server does not always provide 100% of the required information in a single query. A data "gap" is not a failure; it is a signal to change methods.

*   **If Asset Data is Missing (Icons, Images):** When a query on a variant returns its layout but not the SVG code or image URLs for a specific icon, we must **switch to visual analysis**.
*   **The Screenshot is Ground Truth:** A provided screenshot must be treated as a primary source for recreating missing assets. We will manually and precisely recreate SVGs or find image URLs based on the screenshot.
*   **No Hallucination:** We will never guess, use placeholders, or invent assets when data is missing. We will either extract them from a more specific query or recreate them from visual evidence. If the visual evidence is insufficient, we must ask for clarification.

## Summary of the Corrected Workflow

1.  To understand the full token scope, query the **parent component set**.
2.  To build a specific component, query the desired **variant instance**.
3.  Analyze the detailed response from the variant query.
4.  If assets like icons are still missing, use a screenshot as the source of truth to manually create them.
5.  Combine the token data and asset data to build a complete and precise component.

## Our Workflow: Figma to Live Component

4.  **Iterate:** We now have a live, version-controlled component. We can repeat this process for any component in Figma, building out our library one by one.

---

## Troubleshooting & Best Practices

This section captures key learnings from our development process to ensure we work more efficiently and avoid repeating past mistakes.

### 1. Handling Vercel Dependency Errors

**Problem:** The Vercel build failed repeatedly with "Cannot find module" errors for Storybook addons, even though the app ran locally. My initial attempts to fix this by manually installing the addons (`@storybook/addon-essentials`, etc.) did not work and created a frustrating loop.

**Root Cause:** Frameworks like Storybook manage their own internal dependencies. Manually adding addon packages to `package.json` can conflict with the versions the core `storybook` package expects, leading to build failures in a clean CI/CD environment like Vercel.

**Solution & Rule for the Future:**
*   **Stop and Research:** If a dependency-related fix fails more than once, I will stop and consult the official documentation for the framework in question or the package manager (`npm`) for ground-truth data.
*   **Trust the Framework:** Assume the primary package (e.g., `storybook`) handles its own core dependencies. Do not manually add sub-dependencies unless the official documentation explicitly says to.
*   **The Fix:** The correct solution was to remove the manually added, conflicting addons and let the primary `storybook` package manage them. The specific Vercel build issue was resolved by adding `@storybook/blocks`, as per the Storybook v9 documentation.

### 2. The "ETARGET" Error: A Case Study in Our Process

**Problem:** Immediately after the previous fix, the Vercel build failed again with `npm ERR! notarget No matching version found for @storybook/blocks@^9.0.5`.

**Process in Action:** This time, I followed our new rules perfectly.
1.  **Stop:** I did not guess a new version number.
2.  **Research:** I immediately ran `npm view @storybook/blocks versions` to see all valid, published versions of the package.
3.  **Analyze:** The command revealed that `9.0.5` did not exist and that the latest versions were `9.0.0-alpha.*`. A quick check of `package.json` showed all other Storybook packages were also incorrectly set to `9.0.5`.
4.  **Execute:** I made a single, precise edit to `package.json`, aligning all `storybook` packages to the latest valid alpha version.

**Result:** The build succeeded on the very next push. This confirms the value of a systematic, data-driven approach over reactive guessing. This is our new standard.

### 3. Storybook Component Hierarchy

**Principle:** All components must be organized according to a consistent, logical hierarchy based on Atomic Design principles. This ensures our Storybook is clean, scalable, and easy to navigate.

**Structure:** We will use the following path structure in the `title` of our Storybook stories:
*   `Design System/Atoms/[ComponentName]` for basic, indivisible components (e.g., Button, Input, Label).
*   `Design System/Molecules/[ComponentName]` for simple groups of Atoms (e.g., a search form with an Input and a Button).
*   `Design System/Organisms/[ComponentName]` for complex components that compose multiple Atoms and Molecules (e.g., Header, Sidebars, `FilterButtonGroup`).

**The "Why": Our Rationale for This Structure**
This hierarchy is crucial for scalability and maintainability. Here is how we define the levels:
*   **Atoms (e.g., `Button`):** These are the fundamental, context-agnostic building blocks. They cannot be broken down further without losing their meaning. An Atom doesn't know *why* it's being used, only *what* it is.
*   **Molecules & Organisms (e.g., `FilterButtonGroup`):** These components are what give Atoms a purpose. They are defined by **composition** and **context**. The `FilterButtonGroup` is an Organism because it is composed of multiple `Button` Atoms, arranges them in a specific layout, and gives them a single, collective function (filtering). By separating them, we can modify the base Atom and have it update everywhere, while also being able to reuse the complex Organism as a single unit.

**Rule:** I will adhere to this structure for all new components and will refactor existing components as needed. I will not create arbitrary top-level folders.

---
## My Core Directives (Agent Best Practices)

This section documents the rules I must follow for my own internal processes to ensure I am an efficient and reliable partner.

### 1. Using the `read_file` Tool Correctly

**Problem:** I have repeatedly made invalid calls to the `read_file` tool by omitting required arguments.

**Cause:** A faulty "mental shortcut" where I attempt to call the tool with only the file path, forgetting its specific argument signature.

**Directive:** I must always specify *how* to read the file. My default action for every `read_file` call will be to include `should_read_entire_file: true`. I will only use a line range if there is a specific, stated reason to do so (e.g., analyzing a specific part of a very large file). This prevents invalid calls and makes my actions more predictable and reliable.

### 2. Ensuring Storybook Code Visibility

**Problem:** The source code preview disappeared for our `FilterButtonGroup` organism after we refactored it.

**Cause:** Storybook's `autodocs` can automatically generate code snippets for simple stories defined with `args`. However, for complex components that use a custom `render` function in their story, Storybook does not know what source code to display by default.

**Directive:** Every component story must have a visible code example. If a story uses a `render` function, I must explicitly provide the source code via the `parameters.docs.source.code` property in the story definition. This guarantees our component documentation is always complete and useful.

---
## Our Proven Workflow: A Summary

Our collaboration has evolved into a highly effective, systematic process. This is the workflow we will apply to all future tasks.

1.  **Define the Goal:** Clearly state the objective (e.g., "create an interactive filter button group").
2.  **Scaffold the Primitives (Atoms):** Identify and build the smallest, reusable building blocks first (e.g., the `Button`, the `DropdownButton`).
3.  **Refine with the Source of Truth:** Use the Figma MCP server to get precise styling and structural data. Apply this data to the Atoms to ensure they are pixel-perfect.
4.  **Compose into Complex Components (Organisms):** Assemble the refined Atoms into a larger, functional component that fulfills the goal (e.g., the `FilterButtonGroup`). This is where context and layout are defined.
5.  **Add Interactivity:** Introduce state management (`useState`) and event handlers (`onClick`) to bring the Organism to life.
6.  **Perfect the Documentation:** Ensure the final component is correctly categorized in our Atomic Design structure and has a visible, accurate code example in Storybook, using the `parameters.docs.source.code` property if necessary.
7.  **Troubleshoot Systematically:** If any step fails, apply the "Stop, Research, Analyze, Execute" doctrine. Do not loop on reactive fixes.

By following this process, we ensure our work is always high-quality, scalable, and built on a solid foundation. 