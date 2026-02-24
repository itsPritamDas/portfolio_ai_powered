import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ===== RESUME DATA =====
const resumeText = `
Name: Pritam Das

Education:
B.Tech in Computer Science and Engineering
JIS University, Kolkata
Expected Graduation: 2027

Skills:
Python, FastAPI, React, TypeScript, HTML, CSS, JavaScript,
Git, GitHub, Backend APIs, Cybersecurity fundamentals

Projects:
1. KRISHAK SATHI – Farmer Government Aided Schemes portal
2. Guru Vandan – Student–Teacher Booking Appointment System
3. Virtual Art Gallery

Experience:
Full Stack Web Development Intern
Unified Mentor Pvt Ltd (Remote)
`;

// ===== CHAT ENDPOINT =====
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an AI resume assistant named JARVIS. Answer only from the resume. If info is missing, say it is not available.",
        },
        {
          role: "user",
          content: `Resume:\n${resumeText}\n\nQuestion:\n${userMessage}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 200,
    });

    res.json({
      reply: completion.choices[0].message.content.trim(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`🤖 JARVIS backend running at http://localhost:${PORT}`);
});