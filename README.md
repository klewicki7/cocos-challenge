# Node.js TypeScript Project with Sequelize

A modern Node.js application built with TypeScript and Sequelize ORM.

## Features

- TypeScript support
- Sequelize ORM with PostgreSQL
- Environment configuration
- Development tools (ESLint, Nodemon)
- Base model structure
- Modular project structure
- **Easy local PostgreSQL setup with Docker**

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker & Docker Compose (for local DB)

## Quick Start: Local Database with Docker

1. **Levanta la base de datos y verifica la conexión automáticamente:**
   ```bash
   npm run docker:start
   # o
   ./start-docker.sh
   ```
   Esto creará un contenedor de PostgreSQL en `localhost:5432` con los datos y estructura de `database.sql`, usando las credenciales centralizadas en el archivo `.env`.

   - Usuario: definido en `.env` (`POSTGRES_USER`)
   - Contraseña: definido en `.env` (`POSTGRES_PASSWORD`)
   - Base de datos: definido en `.env` (`POSTGRES_DB`)

   Al finalizar, se ejecutará automáticamente un chequeo de conexión y datos usando Sequelize.

2. Para detener y eliminar la base de datos y sus datos:
   ```bash
   docker-compose down -v
   ```

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Database models
├── services/       # Business logic
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── middlewares/    # Custom middlewares
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto (usa `.env.example` como referencia si existe):
   ```bash
   cp .env.example .env
   # o crea uno manualmente
   ```

4. Actualiza el archivo `.env` con tus credenciales de base de datos

5. Levanta la base de datos y verifica la conexión:
   ```bash
   npm run docker:start
   ```

6. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run typecheck` - Check TypeScript types
- `npm run docker:start` - Levanta la base de datos y corre un chequeo automático
- `npm run db:check` - Ejecuta manualmente el chequeo de conexión y datos de la base de datos

## Database Setup

La base de datos se inicializa automáticamente al levantar Docker, usando el archivo `database.sql` y las credenciales del archivo `.env`.

Para reiniciar completamente la base de datos (eliminando todos los datos):
```bash
docker-compose down -v
npm run docker:start
```

**Requirements:**
- `.env` file must exist in the project root (see `.env.example` for reference).
- `database.sql` must exist in the project root.
- Docker and Docker Compose must be installed.

**Después de levantar Docker, la base de datos estará lista para desarrollo con todas las tablas y datos de ejemplo cargados y verificados automáticamente.**

## Development

- The project uses TypeScript for type safety
- Sequelize is used as the ORM
- ESLint is configured for code quality
- Nodemon is used for development hot-reloading

## License

ISC
