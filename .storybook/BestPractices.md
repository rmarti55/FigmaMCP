# Storybook Best Practices

This document outlines the core principles and best practices for writing and configuring stories in this project. It serves as a reference to prevent common pitfalls and ensure a robust, maintainable, and effective Storybook environment.

---

### 1. The Core Philosophy: Build Components, Then Verify in the Workshop

- **The Component is the Priority:** A component must be intrinsically robust and well-behaved. If it needs to be responsive, it should use standard CSS (`flex-wrap`, media queries, etc.) on its own. **We do not fix broken components with Storybook configuration.**
- **Storybook is the Workshop:** Storybook and its addons are an interactive workshop for verifying and testing a component's states and behavior. We use the tools it provides to inspect our components under different conditions.

---

### 2. The Intended Workflow: Use the UI Tools

Instead of coding hacks, use the built-in toolbar addons to diagnose issues:

-   **For Layout & Responsiveness:** Use the **Viewport** addon to test a component at different screen sizes. Do not force a viewport in the code unless absolutely necessary for a specific story.
-   **For CSS & Alignment:** Use the **Measure & Outline** addons to visually debug spacing, alignment, and sizing issues directly in the browser.

---

### 3. Global Configuration (`.storybook/preview.tsx`)

This file is for global setup. Its core concepts must be respected:

-   **`parameters`:** Used to configure Storybook's features and addons (e.g., `parameters: { layout: 'fullscreen' }`).
-   **`decorators`:** Functions that wrap a story with extra rendering or context. This is the correct way to provide global context (e.g., a `ThemeProvider`).
-   **`globalTypes`:** Used to create custom toolbars for managing environment-level state (e.g., a theme switcher).
-   **Critical:** A poorly written `decorator` can add extra HTML that interferes with `parameters` like `layout`. Keep decorators simple and purposeful.
-   **File Extensions:** If a Storybook configuration file uses JSX (like a decorator with a `<div>`), it **must** have a `.tsx` extension, or the build will fail.

---

### 4. The Anatomy of a Powerful Story

A story is not just a visual preview; it is a rich, interactive testing and documentation artifact.

-   **`title`:** Use the `title` property to explicitly create a deliberate sidebar hierarchy (e.g., `title: 'Design System/Organisms/FilterBar'`).
-   **`args`:** The dynamic contract for a component's props. Define the component's state for a given story.
-   **`argTypes`:** **This is not optional.** Use `argTypes` to create rich, interactive controls for your `args`.
    -   For props with a set number of options (e.g., `variant: 'primary' | 'secondary'`), use `options` and `control: { type: 'radio' }` to create interactive controls. **Do not create separate stories for each variant.**
    -   For complex values like icons, use `mapping` to map a simple string arg to the complex JSX value.
-   **`play()` function:** This is for **interaction testing**. A story is incomplete if its behavior is not tested. Use `play` to script user events (`userEvent.click`, `userEvent.type`) and make assertions (`expect(...)`). This turns a story into a true functional test.
-   **`tags`:** Use tags to control where and how a story is used.
    -   `['!dev']`: A docs-only story. Will not appear in the sidebar.
    -   `['!test']`: A visual showcase story (e.g., a grid of all variants) that should be excluded from test runs.

---

### 5. Handling Dependencies & Callbacks

Do not hack dependencies. Use the correct, documented pattern for each case.

-   **For Event Handlers (e.g., `onClick`):** Assign a spy function from `storybook/test` to the prop in `args`: `{ onClick: fn() }`. This will automatically log calls in the **Actions** panel and allow for assertions in a `play` block (e.g., `expect(args.onClick).toHaveBeenCalled()`).
-   **For Theming/Context:** Use a **Decorator** to wrap the story in the required `Provider`. This can be done globally in `preview.tsx` or at the component level.
-   **For Network Requests (API Calls):** Use the **MSW (Mock Service Worker) addon**. It intercepts `fetch` requests and provides mocked data. Configure the mock handlers in `parameters.msw`.
-   **For Internal Modules/Services:** Use **builder aliases** (`vite.config.ts`) or **subpath imports** (`package.json`) to swap the real module with a mock file (e.g., `api.mock.ts`). Use `storybook/test`'s `fn` utility to create spies on these mocks, which can then be asserted in a `play` block.

---

### 6. The "Docs" vs. "Canvas" (Default) Tab

-   **They Have Different Purposes:** The "Canvas" tab (the default view of a story) is for interactive development and testing. The `layout: 'fullscreen'` parameter applies here, giving wide components the space they need.
-   **Docs Are Opinionated:** The "Docs" tab is a documentation-generation tool. It is intentionally designed with a `max-width` layout to ensure the readability of text content (descriptions, props tables, etc.).
-   **Do Not Fight The Docs Layout:** A wide component will look constrained in the Docs tab preview. This is expected behavior. **It is a waste of time to try and "fix" this.** We accept that the Docs page is for reading documentation, and the Canvas tab is for the full-fidelity interactive preview. 