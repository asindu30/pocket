# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Pocket Heist** is a Next.js 16 web application starter project. It's a demo app for the Claude Code Masterclass featuring a heist management interface with public (login/signup/preview) and authenticated dashboard sections.

## Common Commands

### Development
- `npm run dev` - Start development server on `http://localhost:3000`

### Testing
- `npm test` - Run all tests with Vitest
- `npm test -- tests/components/Navbar.test.tsx` - Run a specific test file
- `npm test -- --watch` - Run tests in watch mode

### Linting & Building
- `npm run lint` - Run ESLint on the codebase
- `npm run build` - Build for production (outputs to `.next/`)
- `npm run start` - Start production server (requires `npm run build` first)

## Architecture & Structure

### Routing & Layout (Next.js App Router with Route Groups)
The app uses Next.js App Router with two main route groups:

- **`app/(public)/`** - Unauthenticated pages
  - `page.tsx` - Home/landing page
  - `login/page.tsx` - Login form
  - `signup/page.tsx` - Signup form
  - `preview/page.tsx` - Feature preview
  - Uses `(public)/layout.tsx` wrapper

- **`app/(dashboard)/`** - Authenticated pages
  - `heists/page.tsx` - List all heists
  - `heists/create/page.tsx` - Create new heist
  - `heists/[id]/page.tsx` - View individual heist
  - Uses `(dashboard)/layout.tsx` which includes the `Navbar` component

- **Root layout** at `app/layout.tsx` wraps all pages and imports global styles

### Components

Components use a modular structure with:
- `components/{ComponentName}/index.ts` - Exports the component
- `components/{ComponentName}/{Component}.tsx` - Component implementation
- `components/{ComponentName}/{Component}.module.css` - Component-scoped styles

Current components:
- `Navbar` - Main navigation header
- `Footer` - Footer component
- `Skeleton` - Loading skeleton UI
- `Avatar` - User avatar component

### Testing

- **Location**: `tests/` directory mirrors component structure
- **Framework**: Vitest (configured in `vitest.config.mts`)
- **Setup**: Uses `@testing-library/react` for component testing with `jsdom` environment
- **Test utilities**: Testing Library `render()` and `screen` queries; Vitest globals (`describe`, `it`, `expect`)
- **Setup file**: `vitest.setup.ts` imports Testing Library matchers

Example test pattern (from `tests/components/Navbar.test.tsx`):
```typescript
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Navbar from "@/components/Navbar"

describe("Navbar", () => {
  it("renders expected elements", () => {
    render(<Navbar />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
  })
})
```

### Styling

- **Framework**: Tailwind CSS 4 with PostCSS
- **Component styles**: Use CSS modules (`ComponentName.module.css`) for component-scoped styling
- **Global styles**: `app/globals.css` for application-wide styles

### TypeScript & Import Paths

- **Path alias**: `@/*` resolves to project root (configured in `tsconfig.json`)
- All internal imports use `@/` prefix (e.g., `@/components/Navbar`, `@/app/layout`)
- Strict mode enabled - all type annotations required

## Key Dependencies

- **next**: 16.0.7 - React meta-framework
- **react**: 19.2.0 - UI library
- **tailwindcss**: 4 - Utility-first CSS
- **vitest**: 4.0.15 - Unit test framework
- **@testing-library/react**: 16.3.0 - Component testing utilities
- **lucide-react**: 0.556.0 - Icon library

## Development Tips

- Run `npm run dev` and keep it running during development
- Use `npm test -- --watch` for TDD workflow
- Component files exported from `index.ts` allow cleaner import paths
- Use Testing Library queries (getByRole, getByText, etc.) for accessible test patterns
- ESLint will catch issues automatically; use VS Code ESLint extension for real-time feedback
