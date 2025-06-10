# Cursor Reference Documentation

*Comprehensive guide based on official Cursor documentation and changelog*

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Core Features](#core-features)
4. [Context Management](#context-management)
5. [Model Context Protocol (MCP)](#model-context-protocol-mcp)
6. [Advanced Features](#advanced-features)
7. [Configuration & Settings](#configuration--settings)
8. [Keyboard Shortcuts](#keyboard-shortcuts)
9. [Version History](#version-history)
10. [Best Practices](#best-practices)
11. [Troubleshooting](#troubleshooting)

## Overview

### What is Cursor?

Cursor is an AI-powered code editor used by millions of engineers, built on top of VS Code but optimized for AI pair programming. It's powered by custom models that generate more code than almost any LLMs in the world.

**Key Benefits:**
- AI-first design for coding workflow
- Intelligent code completion and generation
- Context-aware suggestions
- Seamless VS Code compatibility
- Advanced debugging and error handling
- Team collaboration features

### Core Philosophy

Cursor is designed as an IDE optimized for pair-programming with AI, focusing on:
- **Speed**: Fast, intelligent suggestions
- **Context**: Understanding your entire codebase
- **Integration**: Seamless workflow integration
- **Intelligence**: Advanced AI models for code generation

## Installation & Setup

### Installation

**Download Options:**
- [Official Website](https://www.cursor.com)
- Available for macOS, Windows, and Linux
- One-click VS Code extension and settings import

**System Requirements:**
- Modern operating system (macOS 10.15+, Windows 10+, Ubuntu 18.04+)
- Internet connection for AI features
- Recommended: 8GB+ RAM for optimal performance

### First Time Setup

1. **Import VS Code Settings**: Cursor offers one-click import of VS Code extensions and settings
2. **Configure AI Models**: Choose your preferred AI model and plan
3. **Set Up Context**: Configure codebase indexing and rules
4. **Customize Keyboard Shortcuts**: Adapt to your workflow

## Core Features

### Tab (Code Completion)

**Overview:**
Tab is Cursor's intelligent code completion system, powered by state-of-the-art models that predict your next series of edits.

**Key Features:**
- **Multi-line edits**: Suggests multiple edits at once
- **Smart rewrites**: Fixes typing mistakes automatically
- **Cursor prediction**: Predicts your next cursor position
- **Context-aware**: Considers recent changes and codebase structure
- **Cross-file awareness**: Understands relationships between files

**Usage:**
- Always-on when enabled
- Press `Tab` to accept suggestions
- `Ctrl/Cmd + →` to accept word-by-word
- `Esc` to dismiss suggestions

### Chat

**Overview:**
Interactive AI assistant that can see your codebase and provide contextual help.

**Core Capabilities:**
- **Codebase awareness**: Sees current file and cursor position
- **Context references**: Add code blocks with `Ctrl/Cmd+Shift+L`
- **Instant apply**: Apply suggestions directly to codebase
- **Multi-modal**: Supports text, images, and web search
- **Memory**: Remembers facts from conversations (beta)

**Chat Modes:**
1. **Normal Chat**: Standard conversational AI
2. **Agent Mode**: Proactive coding partner with tool access
3. **Ask Mode**: Quick questions and explanations

**@ Symbols for Context:**
- `@Files`: Reference specific files
- `@Folders`: Include entire directories
- `@Code`: Reference code snippets
- `@Docs`: Include documentation
- `@Git`: Access Git history
- `@Web`: Search the internet
- `@Codebase`: Query entire codebase
- `@Definitions`: Find function/class definitions
- `@Link`: Include web pages or PDFs
- `@Lint Errors`: Show current linting issues
- `@Recent Changes`: Recent Git commits
- `@Cursor Rules`: Include your custom rules
- `@Notepads`: Reference saved notes

### Inline Edit (Cmd/Ctrl + K)

**Overview:**
Quick inline code editing and generation without leaving your current context.

**Use Cases:**
- **Edit existing code**: Select code, press `Cmd/Ctrl+K`, describe changes
- **Generate new code**: Press `Cmd/Ctrl+K` without selection
- **Refactor**: Quickly modify code structure
- **Fix bugs**: Describe the issue for instant fixes

**Advanced Options:**
- `Cmd/Ctrl+Shift+Enter`: Full file edit mode
- `Cmd/Ctrl+L`: Send to agent for complex changes
- **Terminal Cmd/Ctrl+K**: Natural language terminal commands

### Agent (Composer)

**Overview:**
Your AI pair programmer for complex, multi-file code changes with automatic error handling and tool access.

**Capabilities:**
- **End-to-end task completion**: Handles complex workflows
- **Multi-file editing**: Makes changes across multiple files
- **Error handling**: Automatically detects and fixes issues
- **Tool integration**: Access to MCP tools and external services
- **Context management**: Intelligently manages relevant code context

**Agent Modes:**
- **Normal**: Balanced performance and capability
- **Max Mode**: Full model capabilities with token-based pricing

**Background Agent:**
- Run agents in parallel on remote environments
- Handle larger tasks while you continue working
- Monitor progress and provide feedback
- Available to all users as of version 1.0

## Context Management

### Codebase Indexing

**Overview:**
Cursor automatically analyzes and indexes your codebase for intelligent suggestions.

**Features:**
- **Automatic analysis**: Real-time indexing of code changes
- **Semantic understanding**: Grasps code relationships and patterns
- **Cross-file awareness**: Understands dependencies and imports
- **Custom retrieval**: Uses specialized models for context finding

**Configuration:**
- Enable in Settings → Features → Codebase Indexing
- Automatic indexing for new repositories
- Respects `.gitignore` settings
- Custom ignore patterns

### Rules for AI

**Overview:**
Customize AI behavior with global and project-specific rules.

**Types of Rules:**

1. **Global Rules**: Set in Cursor Settings → General → Rules for AI
2. **Project Rules**: Create `.cursorrules` file in project root

**Example Global Rules:**
```markdown
1. Bug Fixes:
   - Analyze problems thoroughly before suggesting fixes
   - Provide precise, targeted solutions
   - Explain the root cause of the bug

2. Code Style:
   - Use TypeScript for all new code
   - Prefer functional programming patterns
   - Write descriptive variable names
   - Include JSDoc comments for functions

3. Framework Preferences:
   - Use React with hooks, avoid class components
   - Prefer Tailwind CSS for styling
   - Use Next.js App Router patterns
```

**Example .cursorrules:**
```markdown
You are an expert in TypeScript, Node.js, Next.js App Router, React, and Tailwind.

Code Style and Structure:
- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs

TypeScript Usage:
- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use maps instead
- Use functional components with TypeScript interfaces

Performance Optimization:
- Minimize 'use client', 'useEffect', and 'setState'
- Favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
```

### Managing Context

**Best Practices:**
1. **Be specific**: Use precise @ symbols for relevant context
2. **Optimize size**: Include only necessary files and code
3. **Update regularly**: Keep rules and documentation current
4. **Use hierarchical**: Start broad, then narrow context as needed

### Ignore Files

**Configuration:**
Create `.cursorignore` files to exclude specific files or directories from AI context.

**Example:**
```
node_modules/
*.log
.env
dist/
coverage/
```

## Model Context Protocol (MCP)

### What is MCP?

MCP is an open protocol that allows Cursor to connect to external tools and data sources, extending the Agent's capabilities.

**Benefits:**
- **External integrations**: Connect to databases, APIs, and services
- **Tool extensibility**: Add custom functionality to Cursor
- **Data access**: Include external documentation and resources
- **Workflow automation**: Automate complex development tasks

### MCP Architecture

**Transport Types:**

| Transport | Environment | Deployment | Users | Input | Auth |
|-----------|-------------|------------|-------|-------|------|
| **stdio** | Local | Cursor managed | Single | Shell command | Manual |
| **SSE** | Local/Remote | User managed | Multiple | SSE endpoint URL | OAuth |
| **HTTP** | Local/Remote | User managed | Multiple | HTTP endpoint URL | OAuth |

### Installation

**One-Click Installation:**
- Browse curated MCP tools at [docs.cursor.com/tools](https://docs.cursor.com/tools)
- Install with OAuth authentication
- Automatic configuration

**Manual Configuration:**

**Project Configuration** (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token"
      }
    },
    "filesystem": {
      "command": "npx", 
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "env": {
        "ALLOWED_DIRECTORIES": "/path/to/project"
      }
    }
  }
}
```

**Global Configuration** (`~/.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "web-search": {
      "command": "npx",
      "args": ["-y", "mcp-server-web-search"],
      "env": {
        "API_KEY": "your-search-api-key"
      }
    }
  }
}
```

### Using MCP Tools

**Automatic Usage:**
- Agent automatically selects relevant tools
- Tools appear in "Available Tools" list
- Context-aware tool selection

**Manual Usage:**
- Reference tools by name in prompts
- Request specific tool usage explicitly
- Enable/disable tools from settings

**Tool Approval:**
- Default: Request approval for each tool use
- **Yolo Mode**: Auto-approve tool execution
- Expandable tool call details and responses

### Popular MCP Servers

**Development Tools:**
- **GitHub**: Repository management, PR creation, issue tracking
- **Filesystem**: Local file operations and management
- **Terminal**: Command execution and system interaction
- **Database**: SQL query execution and schema access

**Productivity Tools:**
- **Notion**: Document and database access
- **Google Drive**: File access and collaboration
- **Slack**: Team communication integration
- **Trello/Todoist**: Task management

**AI & Analysis:**
- **Web Search**: Real-time internet information
- **Browser Automation**: Web scraping and testing
- **Code Analysis**: Advanced code quality tools
- **Documentation**: API and framework documentation

## Advanced Features

### BugBot

**Overview:**
Automated code review for Pull Requests with bug detection and fix suggestions.

**Features:**
- **Automatic PR review**: Scans for potential bugs and issues
- **GitHub integration**: Comments directly on PRs
- **Fix suggestions**: "Fix in Cursor" button for immediate resolution
- **Continuous monitoring**: Reviews all new PRs automatically

**Setup:**
1. Install BugBot from GitHub App marketplace
2. Configure repository access
3. Enable automatic reviews in repository settings

### Memories (Beta)

**Overview:**
Cursor remembers facts from conversations and references them in future sessions.

**Features:**
- **Project-level storage**: Memories tied to specific projects
- **Individual context**: Personal memories per user
- **Smart recall**: Automatic fact retrieval in relevant contexts
- **Management interface**: View and edit memories from Settings

**Configuration:**
- Enable in Settings → Rules → Memories
- Automatic fact extraction from conversations
- Manual memory management interface

### Notepads (Beta)

**Overview:**
Built-in note-taking system integrated with AI context.

**Features:**
- **Project notes**: Notes specific to current project
- **AI integration**: Reference notes with `@Notepads`
- **Persistent storage**: Notes saved across sessions
- **Search and organization**: Find and organize notes efficiently

### Visual Responses

**Capabilities:**
- **Mermaid diagrams**: Generate and render diagrams in chat
- **Markdown tables**: Create formatted tables inline
- **Image analysis**: Upload and analyze images for context
- **Code visualization**: Visual representation of code structure

## Configuration & Settings

### Models & Pricing

**Available Models:**
- **Claude 3.5 Sonnet**: Premium reasoning and coding
- **GPT-4**: Advanced language understanding
- **Gemini 2.5 Flash**: Fast, efficient responses
- **Custom models**: Support for API keys

**Pricing Plans:**
- **Hobby**: Free tier with limitations
- **Pro**: Enhanced features and higher limits
- **Business**: Team features and analytics
- **Enterprise**: Custom solutions and SSO

**Max Mode:**
- Token-based pricing for premium models
- Full model capabilities and context
- Advanced tool use and reasoning
- Available for all top-tier models

### Privacy & Security

**Privacy Settings:**
- **Privacy Mode**: Disable data storage on Cursor servers
- **Local processing**: Keep sensitive code private
- **Team controls**: Admin-managed privacy settings
- **SOC 2 Certified**: Enterprise-grade security

**Data Handling:**
- **Encryption**: All data encrypted in transit and at rest
- **No training**: Code not used for model training (with privacy mode)
- **Retention policies**: Configurable data retention settings

### Custom API Keys

**Supported Providers:**
- OpenAI
- Anthropic
- Google (Gemini)
- Azure OpenAI
- Custom endpoints

## Keyboard Shortcuts

### Essential Shortcuts

**Core Features:**
- `Cmd/Ctrl + K`: Inline edit
- `Cmd/Ctrl + L`: Open chat with current selection
- `Cmd/Ctrl + Shift + L`: Add selection to chat context
- `Cmd/Ctrl + Enter`: Chat with codebase
- `Cmd/Ctrl + E`: Open Background Agent (if enabled)
- `Tab`: Accept completion
- `Esc`: Dismiss suggestions

**Navigation:**
- `Cmd/Ctrl + P`: Quick file open
- `Cmd/Ctrl + Shift + P`: Command palette
- `Cmd/Ctrl + B`: Toggle sidebar
- `Cmd/Ctrl + J`: Toggle terminal

**Chat & Agent:**
- `Cmd/Ctrl + Shift + I`: New chat
- `Cmd/Ctrl + /`: Quick question on selection
- `@`: Trigger context symbols
- `Enter`: Send message
- `Shift + Enter`: New line in chat

**Advanced:**
- `Cmd/Ctrl + Shift + K`: Delete line
- `Alt + Up/Down`: Move line up/down
- `Cmd/Ctrl + D`: Select next occurrence
- `Cmd/Ctrl + F`: Find in file
- `Cmd/Ctrl + Shift + F`: Find in workspace

## Version History

### Major Milestones

**v1.0 (June 2025) - Current:**
- BugBot for automated code review
- Background Agent for all users
- Jupyter Notebook support
- Memories (beta feature)
- One-click MCP installation with OAuth
- Richer chat responses with visualizations
- Enhanced settings and dashboard

**v0.50 (May 2025):**
- Unified request-based pricing
- Max Mode for all top models
- New Tab model with multi-file suggestions
- Background Agent (early preview)
- Full folder contents context support
- Refreshed Inline Edit UI
- Fast edits for long files

**v0.2.0 (April 2023):**
- Transition from Codemirror to VS Code fork
- Focus on AI pair-programming features
- Foundation for modern Cursor architecture

### Recent Updates

**v1.0.1:**
- Background Agent fixes and improvements
- Enhanced tool call handling
- Performance optimizations

**Key Features Added:**
- Parallel tool calls for faster responses
- Collapsible tool calls in chat
- Network diagnostics in settings
- PDF parsing for @Link and web search
- Enterprise user restrictions
- Team admin privacy controls
- Admin API for usage metrics

## Best Practices

### Code Quality

1. **Use Clear Rules**: Define coding standards in `.cursorrules`
2. **Consistent Style**: Establish and maintain consistent formatting
3. **Documentation**: Include comments and documentation requirements
4. **Testing**: Specify testing frameworks and patterns
5. **Security**: Include security best practices in rules

### Context Management

1. **Be Specific**: Use precise @ symbols rather than broad context
2. **Layer Context**: Start with broad context, then narrow as needed
3. **Update Regularly**: Keep rules and documentation current
4. **Optimize Performance**: Balance context richness with speed
5. **Use Hierarchies**: Organize context in logical hierarchies

### Team Collaboration

1. **Shared Rules**: Use consistent `.cursorrules` across team
2. **MCP Standards**: Standardize MCP tool usage and configuration
3. **Code Reviews**: Leverage BugBot for automated review assistance
4. **Documentation**: Maintain shared knowledge in Notepads
5. **Privacy Settings**: Configure appropriate privacy levels for team

### Performance Optimization

1. **Selective Indexing**: Use `.cursorignore` for irrelevant files
2. **Context Efficiency**: Include only necessary context in queries
3. **Model Selection**: Choose appropriate models for task complexity
4. **Background Processing**: Use Background Agent for long-running tasks
5. **Memory Management**: Regular cleanup of Memories and Notepads

### Security Best Practices

1. **Environment Variables**: Use env vars for sensitive data in MCP
2. **Privacy Mode**: Enable for sensitive codebases
3. **Access Controls**: Configure team access appropriately
4. **API Key Management**: Secure storage of custom API keys
5. **Regular Audits**: Monitor usage and access patterns

## Troubleshooting

### Common Issues

**Installation & Setup:**
- **Extension conflicts**: Disable conflicting VS Code extensions
- **Performance issues**: Check system requirements and available memory
- **Authentication**: Verify account settings and subscription status

**AI Features:**
- **Slow responses**: Check internet connection and server status
- **Poor suggestions**: Review and update `.cursorrules`
- **Context issues**: Verify codebase indexing is enabled and current

**MCP Integration:**
- **Tool not working**: Check MCP server configuration and logs
- **Authentication errors**: Verify API keys and OAuth settings
- **Connection issues**: Test network connectivity and server endpoints

### Getting Help

**Support Channels:**
- **Documentation**: [docs.cursor.com](https://docs.cursor.com)
- **Community Forum**: [forum.cursor.com](https://forum.cursor.com)
- **Support Email**: [hi@cursor.com](mailto:hi@cursor.com)
- **Discord**: Cursor community Discord
- **GitHub**: Issue tracking and feature requests

**Diagnostic Information:**
- **Request ID**: Available in settings for support requests
- **Version Info**: Help → About Cursor
- **System Info**: Available in Command Palette
- **Network Diagnostics**: Settings → Advanced → Network

**Self-Help Resources:**
- **FAQ**: Common questions and solutions
- **Troubleshooting Guide**: Step-by-step problem resolution
- **Community Knowledge**: Forum discussions and solutions
- **Video Tutorials**: Official and community-created content

---

*Last updated: Based on Cursor v1.0 documentation and changelog*

**Additional Resources:**
- [Official Website](https://www.cursor.com)
- [Documentation](https://docs.cursor.com)
- [Community Forum](https://forum.cursor.com)
- [Changelog](https://www.cursor.com/changelog)
- [MCP Tools](https://docs.cursor.com/tools)
