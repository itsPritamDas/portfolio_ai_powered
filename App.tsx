import { useState } from "react";
import "./index.css";

type Message = {
  role: "user" | "ai";
  text: string;
};

type ChatResponse = {
  answer: string;
};

const BACKEND_URL = "http://127.0.0.1:8000/chat";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question }
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });

      if (!res.ok) {
        throw new Error("Backend error");
      }

      const data: ChatResponse = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.answer }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I couldn't connect to the server. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="hero">
        <h1>Pritam Das</h1>
        <p>Full Stack Developer · AI & Cybersecurity Enthusiast</p>
      </header>

      <section className="chat-section">
        <h2>Ask My Resume</h2>

        <div className="chat-box">
          {messages.length === 0 && (
            <div className="hint">
              Try asking:
              <br />• What projects have you worked on?
              <br />• What are your technical skills?
              <br />• Tell me about your internship experience
            </div>
          )}

          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.text}
            </div>
          ))}

          {loading && <div className="message ai">Typing…</div>}
        </div>

        <div className="input-row">
          <input
            placeholder="Ask something about my resume…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} disabled={loading}>
            Send
          </button>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Pritam Das · AI Portfolio
      </footer>
    </div>
  );
}