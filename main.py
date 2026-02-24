from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from chat import ask_resume

app = FastAPI(title="Pritam Das – AI Portfolio")

# CORS (important for frontend-backend connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # fine for demo/portfolio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open("data/resume.txt", encoding="utf-8") as f:
    resume_text = f.read()

class ChatRequest(BaseModel):
    question: str

@app.post("/chat")
def chat_with_resume(data: ChatRequest):
    answer = ask_resume(data.question, resume_text)
    return {"answer": answer}