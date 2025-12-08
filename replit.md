# Overview

This is a full-stack portfolio website showcasing Nathan Duncan, a Robotics Engineering student. The application is built as a modern web application with an Express.js backend serving a React frontend. The site features an animated dark theme with UAV (drone) background animations, multiple sections including About, Experience, Projects, and Contact, and utilizes modern UI components from shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with React and TypeScript, utilizing modern development practices:

- **UI Framework**: React with TypeScript for type safety
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: shadcn/ui components for consistent design
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

The frontend follows a component-based architecture with clear separation of concerns:
- Components are organized in logical groups (ui, sections)
- Custom hooks handle reusable logic (smooth scrolling, mobile detection)
- Centralized styling with Tailwind and CSS custom properties

## Backend Architecture

The backend uses Express.js with TypeScript in a minimal REST API structure:

- **Framework**: Express.js for HTTP server functionality
- **Development**: Hot reload with Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Static Serving**: Serves the built React application in production

The server architecture is designed for extensibility with a clean storage abstraction that can be easily swapped from in-memory to database implementations.

## Data Storage

Currently implements an in-memory storage system with a well-defined interface:

- **Storage Pattern**: Repository pattern with IStorage interface
- **User Management**: Basic user entity with username/password fields
- **Database Ready**: Drizzle ORM configured for PostgreSQL migration
- **Schema Definition**: Shared schema definitions between client and server

The storage layer is prepared for database integration with Drizzle ORM and PostgreSQL, though currently using in-memory storage for development.

## Design System

The application implements a comprehensive design system:

- **Dark Theme**: Modern dark color palette with neon accents
- **Typography**: Poppins font family with Share Tech Mono for code elements
- **Animations**: Smooth scroll behavior and UAV background animations
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Library**: Extensive shadcn/ui component set for consistency

# External Dependencies

## Database & ORM
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database service
- **PostgreSQL**: Primary database system (via Neon)

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library
- **Lucide Icons**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

## Runtime Libraries
- **React Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **React Hook Form**: Form state management with validation
- **date-fns**: Date manipulation utilities

## Animation & Interaction
- **Embla Carousel**: Carousel/slider component functionality
- **Custom UAV Animation**: JavaScript-based drone movement animations

The application is structured for easy deployment to various platforms, with separate build configurations for client and server components. The modular architecture allows for independent scaling and maintenance of different system components.