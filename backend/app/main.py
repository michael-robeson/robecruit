import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

cors_origin = os.environ.get("CORS_ORIGIN", "http://localhost:5173").strip()
if not cors_origin:
    raise ValueError("CORS_ORIGIN must not be empty")

app = FastAPI(title="Robecruit API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[cors_origin],
    allow_methods=["GET"],
)


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}
