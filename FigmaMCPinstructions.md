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