# Oblivent - Multi-Platform Solutions

## Overview

Oblivent is a Next.js-based multi-platform digital solution that provides four distinct platforms: E-learning, Mart (e-commerce), Agency, and Software development tools. The project is built with TypeScript, Tailwind CSS, and follows a modular architecture where each platform has its own branding, navigation, and footer components while sharing common UI elements and utilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15.5.2 with App Router architecture
- **Styling**: Tailwind CSS v4 with custom theme system for different platforms
- **TypeScript**: Full TypeScript implementation with strict mode enabled
- **Font System**: Geist Sans and Geist Mono fonts from Google Fonts
- **Component Structure**: Modular components organized by platform (Navbar, Footer) and shared UI components (Button, Card, Section)

### Multi-Platform Design Pattern
- **Theme System**: CSS custom properties for platform-specific branding (E-learning: blue, Mart: green, Agency: purple, Software: gray)
- **Platform-Specific Components**: Separate navbar and footer components for each platform with appropriate branding and navigation
- **Shared UI Library**: Reusable Button, Card, and Section components with variant support
- **Routing Structure**: Organized by platform under `/platforms/{platform-name}` with dedicated pages

### Authentication Architecture
- **Placeholder Auth System**: Basic authentication utilities in `lib/auth.ts` with interfaces for User, AuthState
- **Auth Pages**: Dedicated login, signup, and forgot password pages with form-based interfaces
- **Future Integration**: Structured to integrate with Firebase Auth or similar providers

### Styling Architecture
- **Global Styles**: Dark/light mode support with CSS custom properties
- **Platform Themes**: Dedicated theme classes for each platform with primary colors and hover states
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts

### Development Setup
- **Turbopack**: Enabled for faster development and build processes
- **ESLint**: Code quality and consistency enforcement
- **Path Mapping**: `@/*` alias pointing to root directory for clean imports

## External Dependencies

### Core Dependencies
- **Next.js 15.5.2**: React framework for production-grade applications
- **React 19.1.0**: Latest React version with concurrent features
- **TypeScript**: Type safety and development experience

### Development Dependencies
- **Tailwind CSS v4**: Utility-first CSS framework with PostCSS integration
- **ESLint**: Code linting with Next.js configuration
- **@types packages**: TypeScript definitions for Node.js, React, and React DOM

### Future Integrations
- **Firebase**: Placeholder configuration in `lib/firebase.ts` for authentication and backend services
- **Payment Processing**: Stripe or similar payment processor integration structured in `lib/payments.ts`
- **Database**: Structured to integrate with database solutions for user management, content, and e-commerce data