# Storybook Best Practices & Core Concepts

This document summarizes our understanding of Storybook based on its official documentation. It serves as a shared knowledge base for our project.

## 1. What is Storybook?

Storybook is a "frontend workshop" for building UI components and pages in isolation. The key benefits for our project are:
- **Development in Isolation:** We can build and perfect components like `Header` or `FilterControls` without needing to run the entire application.
- **Visualizing States:** It helps us see and test every state of a component (e.g., a disabled button, a dropdown in an open state) easily.
- **Documentation:** It automatically generates documentation for our components, making our library easier to use and maintain.

## 2. Core Concepts for Our Workflow

### Stories
A **story** captures a single rendered state of a UI component.

- **Component Story Format (CSF):** We use this format. A story file (e.g., `Header.stories.tsx`) exports a `default` metadata object and one or more named exports, where each named export is a story.
- **Args:** These are the inputs (props) to our components. By editing `args` in a story, we can dynamically change the component in the Storybook UI, which is incredibly powerful for testing.
- **Hierarchy:** The `title` field in the story's `meta` object dictates its location in the Storybook sidebar. We are using the format `'BF Elfuencer/ComponentName'` to keep our library organized, as established.

### Docs
Storybook automatically creates documentation pages for our components.

- **`@storybook/addon-docs`:** We have this addon installed. It powers the "Docs" tab for each component, which provides an auto-generated props table (`ArgsTable`) and code snippets. This is why good prop naming and typing is important.

### Testing
Stories are the foundation for our testing strategy.

- **`@storybook/addon-a11y`:** We have this addon installed. It provides an "Accessibility" tab in the Storybook UI, which runs automated checks to catch accessibility issues early.
- **Interaction Tests (`play` function):** For the future, we can write "play" functions to simulate user interactions like clicking buttons or typing in fields, and then assert that the UI reacts correctly.
- **Visual Tests:** Storybook is the source of truth for visual regression testing. Tools like Chromatic (which we also have installed via `@chromatic-com/storybook`) can take snapshots of our stories and alert us if a code change causes an unintended visual change.

### Addons
Addons extend Storybook's functionality. Our current setup in `.storybook/main.ts` includes:
- `@storybook/addon-docs`: For automatic documentation.
- `@storybook/addon-onboarding`: For the initial Storybook welcome page.
- `@storybook/addon-a11y`: For accessibility testing.
- `@chromatic-com/storybook`: For visual regression testing integration with Chromatic.

---

By adhering to these concepts from the official [Storybook Documentation](https://storybook.js.org/docs), we can build a robust, well-documented, and easily testable component library for the "BF elfuencer" project. 