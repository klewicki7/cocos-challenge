# Cocos Trading Platform API

A modern, high-performance trading platform API built with Node.js, TypeScript, and Prisma ORM. This platform provides a robust backend for managing financial instruments, market data, and order execution.

## 🌟 Features

- **Real-time Market Data**: Track and manage market data for various financial instruments
- **Order Management**: Complete order lifecycle management with support for different order types
- **Portfolio Management**: Track user portfolios and positions
- **RESTful API**: Well-documented API endpoints with Swagger/OpenAPI
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Database Integration**: PostgreSQL with Prisma ORM for reliable data persistence
- **Docker Support**: Easy local development setup with containerized database
- **API Documentation**: Interactive API documentation with Swagger UI

## 🏗️ Architecture

The project follows a clean, modular, and layered architecture:

```
src/
├── controllers/     # Handle HTTP requests and responses for each resource
├── entities/        # Domain entities and type definitions
├── repositories/    # Data access layer for database operations
├── routes/          # API route definitions and endpoint registration
├── schemas/         # Request and response validation schemas (Zod)
├── services/        # Business logic and application services
├── utils/           # Shared utilities, helpers, and constants
├── generated/       # Auto-generated code (e.g., Prisma client)
└── index.ts         # Application entry point
```

- `controllers/`: Contains controllers for each resource (e.g., orders, instruments, portfolio).
- `entities/`: Defines core business entities and types.
- `repositories/`: Implements data access logic for each entity, using Prisma ORM.
- `routes/`: Registers API endpoints and connects them to controllers.
- `schemas/`: Defines Zod schemas for validating incoming requests and outgoing responses.
- `services/`: Contains business logic and orchestrates operations between repositories and controllers.
- `utils/`: Provides shared utility functions, constants, and helpers used across the codebase.
- `generated/`: Contains auto-generated code, such as the Prisma client and related files.
- `index.ts`: The main entry point that initializes and starts the application.

### Key Technologies

- **Runtime**: Node.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **API Documentation**: Swagger/OpenAPI
- **Container**: Docker
- **Validation**: Zod
- **HTTP Server**: Express

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker & Docker Compose
- PostgreSQL (if not using Docker)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/klewicki7/cocos-challenge.git
   cd cocos-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the database with Docker (If you cannot access the remote database connection)**
   ```bash
   npm run docker:start
   # or
   ./start-docker.sh
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the API documentation**
   ```
   http://localhost:3000/api/docs
   ```

## 📚 API Documentation

The API provides the following main endpoints:

- `/api/instruments`: Financial instruments management
- `/api/portfolio`: Portfolio and positions tracking
- `/api/orders`: Order management and execution
- `/api/docs`: Swagger UI documentation

For detailed API documentation, visit the Swagger UI endpoint after starting the server.

## 💾 Database Schema

### Key Entities

- **Users**: Platform users with account information
- **Instruments**: Financial instruments (stocks, currencies, etc.)
- **Orders**: Trading orders with execution details
- **MarketData**: Price and trading information for instruments

## 🛠️ Available Scripts

- `npm run dev`: Start development server with hot-reload
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint errors
- `npm run typecheck`: Check TypeScript types
- `npm run docker:start`: Start database container
- `npm run test`: Run tests
- `npm run start:local`: Start Docker and connect to local database

## 🔧 Development

### Code Style

The project follows strict TypeScript guidelines:
- Strict type checking enabled
- ESLint configuration for consistent code style
- Prettier for code formatting


## 🐳 Docker Support

The project includes Docker support for easy database setup:

```bash
# Start database container
docker-compose up -d

# Stop and remove containers
docker-compose down

# Remove volumes with database data
docker-compose down -v
```

### Database Initialization

The database is automatically initialized using:
- Schema defined in `prisma/schema.prisma`
- Initial data from `database.sql`
- Environment variables from `.env`

## 🔒 Environment Variables

Required environment variables:

```env
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_PORT=

DATABASE_URL="postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}?schema=public"
```

## 🙏 Acknowledgments

- Built with Node.js and TypeScript
- Uses Prisma as the ORM
- PostgreSQL for data storage
- Express for the web server
- Swagger UI for API documentation
