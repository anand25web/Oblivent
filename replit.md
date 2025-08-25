# Oblivent - Digital Marketing Agency Website

## Overview

Oblivent is a modern digital marketing agency website built as a full-stack application featuring a futuristic design with electric violet, sky blue, and neon lime color scheme. The platform showcases digital marketing services including website design, social media advertising, video production, and branding solutions. The application includes both client-facing pages and backend API functionality for handling contact forms and newsletter subscriptions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing instead of React Router
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design system
- **UI Components**: Radix UI primitives providing accessible, unstyled components
- **Animations**: Framer Motion for complex animations with CSS animations for simpler effects
- **State Management**: TanStack Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Theme System**: Custom theme provider supporting dark/light mode with persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js for the web server
- **API Design**: RESTful API endpoints under `/api` prefix
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Storage**: In-memory storage implementation with interface for future database integration
- **Schema Validation**: Zod schemas for API request/response validation

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for client/server consistency
- **Tables**: Users, contacts (form submissions), and newsletter subscriptions
- **Storage Strategy**: Currently using in-memory storage with database-ready interface for easy migration

### Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript Configuration**: Strict typing with path aliases for clean imports
- **Development**: Hot module replacement and runtime error overlays for developer experience
- **Production**: Optimized builds with code splitting and asset optimization

### Deployment Configuration
- **Platform**: Configured for Vercel deployment with serverless functions
- **Static Assets**: Client build output served from `/dist` directory
- **API Routes**: Server-side routes handled by Express.js serverless function
- **Environment**: Production and development environment configurations

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Complete set of accessible UI primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component library using Radix UI and Tailwind CSS
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating component variants

### Development and Build Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Static type checking and modern JavaScript features
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

### Backend Dependencies
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **Zod**: Schema validation library for runtime type checking

### Data Fetching and Forms
- **TanStack Query**: Server state management and data synchronization
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

### Deployment and Hosting
- **Vercel**: Deployment platform with serverless function support
- **Replit**: Development environment integration for live coding