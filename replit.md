# Digital Marketing Agency Website

## Overview

This is a modern, full-stack web application for a digital marketing agency called "Oblivent". The project showcases the agency's services, portfolio, and blog content through a visually appealing, responsive website built with React and TypeScript. The application features a professional design with gradient themes, animations, and comprehensive business functionality including contact forms and newsletter subscriptions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **API Pattern**: RESTful API design with JSON responses
- **Data Validation**: Zod schemas for request/response validation
- **Storage**: Memory-based storage with interface for future database integration
- **Development**: Hot module replacement and middleware for development logging

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Schema**: Three main entities:
  - Users (id, username, password) for potential admin functionality
  - Contacts (contact form submissions with project details and status tracking)
  - Newsletter Subscriptions (email management with active/inactive status)
- **Migration**: Drizzle Kit for schema migrations and database management

### Design System
- **Typography**: Custom font stack with Poppins and Inter fonts
- **Color Palette**: Brand colors including Electric Violet, Sky Blue, and Neon Lime with dark/light theme support
- **Components**: Consistent spacing using CSS custom properties and Tailwind utilities
- **Animations**: Custom CSS animations for floating elements, gradients, and transitions

### Development Tools
- **Type Checking**: Strict TypeScript configuration with path mapping
- **Code Quality**: ESLint and Prettier integration (implied through project structure)
- **Development**: Vite dev server with HMR and Replit-specific plugins for cloud development

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library providing consistent iconography
- **Class Variance Authority**: Utility for creating component variants

### Data and Forms
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library
- **Date-fns**: Modern date utility library

### Development and Build
- **Vite**: Next-generation frontend build tool
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Database and ORM
- **Drizzle ORM**: Lightweight TypeScript ORM for type-safe database operations
- **Drizzle Kit**: CLI companion for migrations and schema management
- **@neondatabase/serverless**: Serverless PostgreSQL driver (ready for Neon database integration)

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Enhanced development experience in Replit environment

### Additional Utilities
- **clsx & tailwind-merge**: Conditional className utilities
- **Embla Carousel**: Carousel/slider functionality for portfolio and testimonials
- **React Intersection Observer**: Scroll-based animations and lazy loading