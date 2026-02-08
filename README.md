# React practice project

## Tech stack
- PostgreSQL
- Redis
- React
- Bun JS with hot reloading for Vite
- XDebug - Disabled for now

## Setup

1. Run `docker compose up --build` to build the image and start the container
2. Run `docker exec -it php_app bun run dev` to build and run the frontend
3. Visit [Localhost](http://localhost)

## Adminer
Visit http://localhost:8080
- Server: postgres
- User: root
- Password: password
- Database: laravel
