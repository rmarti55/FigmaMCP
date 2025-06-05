You're working on a project that connects to a Figma file via the Dev Mode MCP server.

The URL http://localhost:3845/messages?sessionId=6914eed9-835d-436b-a5d0-2c719b888a90 gives you access to the design system used in this project. It includes structured data about published components, variants, and design tokens from Figma.

You should use that context to:
- Ingest and understand existing design system components (e.g., Button / Primary, Card / Product)
- Generate new components from scratch using those tokens and naming conventions
- Modify or extend components (e.g., add a new variant or prop)
- Maintain consistency with spacing, color, and text styles defined in the Figma system

When I prompt you to build a UI, always follow the design system described in the MCP context. Reference tokens like `spacing/md` or `color/primary`, and use components by name from the Figma system when applicable.

Start by confirming you understand the design system context and are ready to build UI with it.