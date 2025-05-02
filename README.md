# Building Products App

A modern e-commerce application built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd building-products-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to check for code issues
- `npm run lint:fix` - Fixes auto-fixable ESLint issues
- `npm run format` - Formats code using Prettier

## Project Structure

### Modules

```
src/
├── cart/         # Shopping cart related components and logic
├── compare/      # Compare products related components and logic
├── products/     # Product listing and details components
├── categories/   # Category management components
└── shared/       # Shared components and utilities
```

### Modules Structure

```
src/
├── cart/         # Shopping cart related components and logic
│   ├── components/    # Cart-specific components
│   ├── lib/          # Cart utility functions
│   ├── store/        # Cart state management
│   ├── hooks/        # Cart-specific hooks
│   ├── providers/    # Cart context providers
│   └── types.ts      # Cart-related type definitions
```

## Tech Stack

### Core Technologies
- **Next.js 15.2.4** - React framework for production
- **React 18.2.0** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### UI Components and Styling
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework
- **tailwind-merge** - For merging Tailwind classes
- **tailwindcss-animate** - For animations

### State Management and Data Handling
- **Zustand** - State management

### Additional Features
- **next-themes** - Theme management

## Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing

## Code Style

The project uses ESLint and Prettier for code formatting and linting. The configuration can be found in:
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
