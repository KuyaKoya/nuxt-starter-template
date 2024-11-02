# Nuxt Starter Template

This is a starter template for Nuxt 3 projects, it comes with the following features:

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling your application.
- [ESLint](https://eslint.org/) - A linter for your code to ensure best practices and catch errors.
- [Prettier](https://prettier.io/) - A code formatter to keep your code clean and consistent.
- [PrimeVue](https://www.primevue.org/) - A UI component library for Vue 3.
- [PrimeIcons](https://www.primefaces.org/primeicons/) - A icon library for PrimeVue.
- [Pinia Stores](https://pinia.vuejs.org/) - A state management library for Vue 3.
- [Prisma](https://www.prisma.io/) - A ORM for interacting with your PostgreSQL database.
- [Kysely](https://kysely.org/) - A type-safe database query builder.
- [Docker-compose](https://docs.docker.com/compose/) - A tool for running multiple docker containers.
- [Zod](https://zod.dev/) - A type-safe schema validation library.

This project is run using [pnpm](https://pnpm.io/) and requires Node.js version 20.15.1.

## Getting Started

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Run the development server with `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker

1. Build the docker image with `docker-compose build`
2. Run the docker container with `docker-compose up`
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Linting and Formatting

This project uses ESLint and Prettier to ensure code quality and consistency.

1. Run `pnpm lint` to check for errors.
2. Run `pnpm format` to format your code.

## Prisma

This project uses Prisma as its ORM with PostgreSQL as the database. To use Prisma, you need to create a `.env` file with the following variables:

- `POSTGRES_CONNECTION_URL` - The URL of your PostgreSQL database. Example: `DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`

You can then run `npx prisma migrate dev` to create the database schema.
