# Robecruit backend

This minimal FastAPI service uses Python 3.13 and uv. From this directory, run:

```fish
uv sync
uv run uvicorn app.main:app --reload
```

The health endpoint is available at http://127.0.0.1:8000/api/health.

`CORS_ORIGIN` specifies the allowed browser origin and defaults to
`http://localhost:5173`. To override it in Fish, for example:

```fish
set -x CORS_ORIGIN http://localhost:5173
uv run uvicorn app.main:app --reload
```

The `.env.example` file documents the setting; it is not loaded automatically.
