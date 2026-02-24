# AI-Powered Portfolio Website

## 📌 Overview
This project is a personal portfolio website enhanced with an **AI-powered chat assistant** that allows users to interact with my resume and receive accurate, contextual responses.

The goal of this project is to demonstrate:
- Thoughtful **UI/UX design**
- Clean **frontend–backend architecture**
- Practical **AI integration**
- Ability to follow a **specified tech stack**

This assignment was developed as part of the internship selection process.

---

## 🚀 Features
- Modern, responsive **portfolio website**
- **AI chat assistant** embedded in the UI
- Resume-aware responses (no hardcoded answers)
- Backend-supported AI interaction
- Chat history persistence (database)
- Clean, scalable project structure

---

## 🧱 Tech Stack

### Frontend
- **React**
- **TypeScript**
- CSS (custom styling)

### Backend
- **Python**
- **FastAPI** (lightweight & high-performance)

### Database
- **SQLite**
  - Stores chat queries and responses
  - Lightweight and sufficient for this scope

### AI Chat Engine
- **OpenRouter**
- Free LLM model (e.g. `mistralai/mistral-7b-instruct:free`)

---

## 🧠 AI Chat Architecture


User Question
↓
React Chat UI
↓
FastAPI Backend
↓
Resume Context + Question
↓
OpenRouter LLM
↓
AI Response (Resume-Grounded)
↓
Stored in Database


### AI Constraints
- The AI is **strictly instructed** to answer using resume content only
- If information is not present, the AI responds with:
  > "This information is not available in the resume."

This ensures **accuracy and reliability**.

---

## 📂 Project Structure


portfolio-ai/
│
├── frontend/ # React + TypeScript
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.tsx
│ │ │ ├── Hero.tsx
│ │ │ ├── Skills.tsx
│ │ │ ├── Projects.tsx
│ │ │ ├── Contact.tsx
│ │ │ └── AIChat.tsx
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ └── api.ts
│ └── index.html
│
├── backend/
│ ├── main.py # FastAPI app
│ ├── openrouter_client.py
│ ├── resume.txt
│ ├── database.db
│ └── requirements.txt
│
├── README.md
└── .gitignore


---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Create a .env file:

OPENROUTER_API_KEY=your_openrouter_api_key

Backend runs at:

http://localhost:8000
2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173
💬 Example AI Questions

"What projects have you worked on?"

"What are your technical skills?"

"Tell me about your internship experience"

"Do you have experience in machine learning?"

🌍 Deployment (Bonus)

Frontend: GitHub Pages / Netlify

Backend: Render / Railway / Cloudflare Tunnel

Public GitHub repository included for evaluation

🎯 Design Decisions

React + TypeScript for maintainability and type safety

FastAPI for simplicity and performance

OpenRouter to access free LLMs without vendor lock-in

SQLite for lightweight persistence

Modular components for easy future scaling

🔮 Future Improvements

Conversation memory across sessions

Resume upload (PDF parsing)

Voice-based AI interaction

Authentication & personalization

Analytics dashboard for chat insights

📝 Submission Details

Assignment submitted via mandatory Google Form

Public GitHub repository included

Hosted version available (bonus consideration)

👤 Author

Pritam Das
B.Tech Computer Science & Engineering
Aspiring Software Engineer & Cybersecurity Enthusiast

GitHub: https://github.com/itsPritamDas

LinkedIn: https://www.linkedin.com/in/pritam-das-0a52722b0/

⭐ Thank you for reviewing my assignment!
