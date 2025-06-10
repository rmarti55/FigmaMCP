# Storybook Best Practices

This document outlines the core principles and best practices for writing and configuring stories in this project. It serves as a reference to prevent common pitfalls and ensure a robust, maintainable, and effective Storybook environment.

---

### 1. Core Philosophy: Component First, Storybook Second

- **The Component is the Priority:** A component must be intrinsically robust and well-behaved. If it needs to be responsive, it should use standard CSS (`flex-wrap`, media queries, etc.) to handle this on its own.
- **Storybook is the Workshop:** Storybook and its addons are tools to *verify* and *test* a component's behavior in a controlled environment. We do not use Storybook configuration to fix a badly built component. A responsive component should be tested using the **Viewport toolbar**, not forced into a layout with global parameters.

---

### 2. Global Configuration (`.storybook/preview.tsx`)

This file is for global setup. Its core concepts must be respected:

- **`parameters`:** Used to configure Storybook's features and addons. This is static, named metadata. The most important global parameter for our project is `layout: 'fullscreen'`, which gives our components the space they need.
- **`decorators`:** Functions that wrap a story with extra rendering, context, or harnessing. This is the correct way to provide global context (e.g., a `ThemeProvider`).
- **Critical:** A poorly written `decorator` can add extra HTML elements that interfere with `parameters` like `layout`. Keep decorators simple and purposeful.
- **File Extensions:** If a Storybook configuration file uses JSX (like a decorator with a `<div>`), it **must** have a `.tsx` extension, or the build will fail.

---

### 3. The Anatomy of a Story

A story is not just a visual preview; it is a rich testing and documentation artifact.

- **`title`:** Use the `title` property to explicitly create a deliberate sidebar hierarchy (e.g., `title: 'Design System/Organisms/FilterBar'`).
- **`args`:** The dynamic contract for a component's props. Use them to define the state of the component for a given story.
- **`argTypes`:** The configuration for `args`. **Always use this** to improve the developer experience. For a prop with a set of variants (e.g., `variant: 'default' | 'dark'`), use `argTypes` to create a `select` control in the Controls panel.
- **`play()` function:** This is for **interaction testing**. A story is incomplete if its behavior is not tested. Use `play` to script user events (`userEvent.click`, `userEvent.type`) and make assertions (`expect(...)`). This turns a story into a true functional test.
- **`tags`:** Use tags to control where and how a story is used.
  - `['!dev']`: Docs-only story. Will not appear in the sidebar.
  - `['!test']`: A visual showcase story (e.g., a grid of all variants) that should be excluded from test runs.

---

### 4. Handling Dependencies

This is a critical area. Do not try to hack dependencies. Use the correct, documented pattern for each case.

- **For Theming/Context:** Use a **Decorator** to wrap the story in the required `Provider`. This can be done globally in `preview.tsx` or at the component level.
- **For Network Requests (API Calls):** Use the **MSW (Mock Service Worker) addon**. It intercepts `fetch` requests and provides mocked data. Configure the mock handlers in `parameters.msw`.
- **For Internal Modules/Services:** Use **builder aliases** (`vite.config.ts`) or **subpath imports** (`package.json`) to swap the real module with a mock file (e.g., `api.mock.ts`). Use `storybook/test`'s `fn` utility to create spies on these mocks, which can then be asserted in a `play` block. 