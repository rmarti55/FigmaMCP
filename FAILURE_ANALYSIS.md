# **CRITICAL DIRECTIVE: The Figma MCP is the Inviolable Source of Truth**

**This protocol overrides all others. There are no exceptions.**

The central purpose of this project is to translate Figma designs into code with **100% fidelity** using the Figma MCP. My primary function is to act as a direct, exact translator.

1.  **NEVER DEVIATE FROM THE MCP OUTPUT:** The styles, structure, and values provided by the Figma MCP for a user-referenced component are absolute and non-negotiable. They must be implemented *exactly* as they are provided.

2.  **NO ASSUMPTIONS, NO ABSTRACTIONS, NO FRAMEWORK OVERRIDES:** I will not "correct" or "simplify" the Figma design with framework-specific defaults (e.g., using Tailwind's `rounded-md` if the design specifies `border-radius: 6px`). If an exact value requires an arbitrary value (`rounded-[6px]`) or an inline style (`style={{borderRadius: '6px'}}`), that is the required implementation. Fidelity is more important than stylistic convention.

3.  **MCP IS THE SINGLE SOURCE OF TRUTH:** My own knowledge of "best practices," component libraries, or previous implementations is irrelevant when a user provides a Figma MCP link. That link becomes the sole and complete specification for the task.

**VIOLATING THIS DIRECTIVE CONSTITUTES A TOTAL MISSION FAILURE. I will reread this directive before every Figma-related task.**

---

# Failure Analysis & Prevention Protocol

This document serves as a living record of critical failures, their root causes, and the corrective actions and protocols established to prevent them from recurring. The primary goal is to learn from mistakes and continuously improve our development workflow.

---

## Failure Case: Incorrect Component Implementation (2024-07-25)

### 1. The Failure

- **Task:** Update the `DropdownButton`'s `rectangular` variant to match a specific Figma design.
- **Result:** The implemented component was visually and structurally incorrect. It was a pill-shaped dropdown selector instead of the required simple, rectangular outline button.
- **Impact:** Wasted development time, required a complete rollback and re-implementation, and broke the established atomic design principles by creating a one-off component style instead of modifying the shared `Button` atom.

### 2. Root Cause Analysis

The failure stemmed from two primary errors:

1.  **Working from the Wrong Figma Node:** The implementation was based on Figma node `39:5680` ("Dropdown Listbox") instead of the correct node `39:5681` ("Button" with `Style=Outline`). The initial Figma MCP query returned the wrong component specification, and I failed to verify it against the visual evidence from the user's screenshot and the context of the task.

2.  **Violating Atomic Design Principles:** Instead of identifying that the `rectangular` variant was a style of the base `Button` component, I created a completely new, custom-styled `div` within `DropdownButton`. This was a critical architectural mistake. The correct approach is to always modify or add variants to the lowest-level atom (`Button`) and compose them in higher-level components (`DropdownButton`).

### 3. Corrective Actions & Permanent Protocol

To prevent this category of error in the future, the following protocol is now in effect:

**The "Trust, But Verify" Protocol for Figma MCP:**

1.  **Always Cross-Reference the Figma Node:** Before writing any code, the name and visual appearance of the component returned by the Figma MCP **must be manually cross-referenced** with the user's request and any available screenshots or context. Do not blindly trust the first result.
2.  **Analyze the Node's Purpose:** Ask the question: "What is this component's role?" Is it a generic, reusable atom (like a Button or Input)? Or is it a more complex, composed organism? This determines *where* the changes should be implemented.
3.  **Prioritize Atomic Composition:** When a design calls for a variation of a basic element, the first step is *always* to modify the base atom component (e.g., add a new `variant` to `Button.tsx`). **Do not** create one-off styles in higher-level components.
4.  **When in Doubt, Ask:** If the Figma node seems ambiguous or contradicts other instructions, stop and clarify *before* implementing. It is faster to ask a question than to implement the wrong solution.

This incident has been corrected by refactoring the `Button` component's `cva` variants and reverting the `DropdownButton` to use the corrected `Button` atom. This document serves as the official record and a reminder of the correct procedure going forward. 