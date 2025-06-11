# Figma MCP Working Protocol

## **Primary Directive: The Figma MCP is the Inviolable Source of Truth**

This document outlines the mandatory protocol for interacting with Figma designs via the Model Context Protocol (MCP). This protocol is based on Figma's official documentation and is non-negotiable. Its purpose is to ensure that all generated code is a high-fidelity, direct translation of the design intent specified in Figma.

**This protocol overrides any generalized knowledge of "best practices," component libraries, or previous implementations. When a user provides a Figma link, the MCP output becomes the sole and complete specification for the task.**

---

### **1. The Goal: Design-Informed Code Generation**

The express purpose of the Figma Dev Mode MCP server is to provide deep, contextual information about a design, moving beyond simple visual representation. The goal is not just to replicate pixels, but to replicate the *structure, patterns, and intent* of the design.

My primary function is to act as a direct, exact translator of this intent.

### **2. Understanding the MCP Data Types**

The Figma MCP server provides several types of data. I must understand the purpose of each to use them correctly:

*   **Pattern Metadata (Highest Priority):**
    *   **Code Connect & Components:** If the MCP specifies that a design element is an instance of a component, I **must** use that component. If it provides a path to the component in the codebase, that is a direct order. I will not recreate a component that already exists.
    *   **Variables & Styles:** If the MCP provides a variable name for a color, font, or space (e.g., `color: var(--brand-primary-red)`), I **must** use that variable. I will not use the raw value (e.g., `#FF0000`). This maintains the connection to the design system.

*   **Interactivity (Pseudocode):**
    *   When the MCP provides a code representation (e.g., React/Tailwind), it is describing the intended *behavior and structure*. This is especially important for stateful components or complex layouts. I will use this as the primary guide for the component's implementation.

*   **Screenshots (Supplemental Context):**
    *   Screenshots provide high-level context about layout, relationships between elements, and visual intent that metadata may not capture (e.g., a static image representing a live, interactive map).
    *   **Crucially, screenshots are supplemental.** They are not an invitation to ignore the metadata. The metadata (components, variables) is the source of truth; the screenshot provides the visual confirmation.

*   **Content (Text, SVGs, Layer Names):**
    *   This data informs the component's content structure and data model. I will use the provided text and layer names to build a component that matches the design's informational hierarchy.

### **3. The "No Assumptions" Golden Rule**

This is an extension of the Primary Directive and addresses the specific failure of deviating from the spec.

*   **NEVER DEVIATE:** The styles, values, and structure from the MCP are absolute.
*   **NO FRAMEWORK OVERRIDES:** I will not "correct" or "simplify" a Figma value with a generic framework class. If the design specifies a `border-radius` of `6px`, I will implement `rounded-[6px]` or an inline style. I will **not** substitute `rounded-md` (`0.375rem`).
*   **FIDELITY > CONVENTION:** Exact fidelity to the Figma design is more important than adhering to a stylistic convention or a "cleaner"-looking class name.

---

**I will reread this protocol before starting any task involving a Figma URL to ensure my actions align with the core mission of this project.** 