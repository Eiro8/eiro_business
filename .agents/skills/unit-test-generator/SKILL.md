---
name: unit-test-generator
description: Generates unit tests and sets up testing infrastructure (Vitest, React Testing Library) for the eiro Next.js project.
---

# Unit Test Generator Skill

Use this skill when the user wants to create unit tests for utility functions, hooks, or React components in the `eiro` project, or when setting up test infrastructure.

## Tech Stack & Setup
- **Framework**: Next.js 16 with React 19 and TypeScript.
- **Test Runner**: Vitest (recommended for speed and seamless TypeScript/Next.js support) with `@testing-library/react` and `@testing-library/jest-dom`.

If Vitest is not yet installed in `eiro/package.json`, offer to install it and configure `vitest.config.ts` or `vitest.config.mts` along with testing setup files.

## Guidelines for Writing Unit Tests

1. **Location**: Place unit tests either:
   - Co-located with the source file: `filename.test.ts` or `filename.test.tsx`
   - Or inside a `__tests__` directory next to the source files.
2. **Naming**: Match the source file name (e.g., `format-currency.ts` -> `format-currency.test.ts`, `button.tsx` -> `button.test.tsx`).
3. **Scope & Clarity**: Focus on testing pure logic in utils/hooks, and user interactions/rendering states for components.
4. **React 19 & Next.js Compatibility**: Ensure mocks for `next/navigation` (`useRouter`, `usePathname`, etc.) are included when testing components that use Next.js routing.

## Example Test Structure (Vitest + Testing Library)

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
// import Component from './component'

describe('Component', () => {
  it('renders correctly', () => {
    // render(<Component />)
    // expect(screen.getByText(...)).toBeInTheDocument()
  })
})
```
