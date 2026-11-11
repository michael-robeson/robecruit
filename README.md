# Robecruit

## Local PostgreSQL

Copy `.env.example` to `.env` and adjust the development-only values if needed.
From the project root in Fish:

```fish
cp .env.example .env
docker compose up -d
docker compose ps
```

PostgreSQL 17 listens only on `127.0.0.1:5432`. Its data persists in the
`postgres_data` named volume. The credentials in `.env.example` are for local
development only. PostgreSQL applies the database, user, and password variables
when the volume is first initialized; changing them later does not update an
existing database.

Stop the service with `docker compose stop`; stopping it does not delete data.
