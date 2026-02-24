def ask_resume(question: str, resume_text: str) -> str:
    q = question.lower()

    if "project" in q:
        return (
            "Pritam has worked on:\n"
            "1. Farmer Government Aided Schemes (KRISHAK SATHI)\n"
            "2. Student–Teacher Booking Appointment System (Guru Vandan)\n"
            "3. Virtual Art Gallery"
        )

    if "skill" in q:
        return (
            "Pritam's skills include Python, FastAPI, React, TypeScript, "
            "HTML, CSS, JavaScript, Git, GitHub, backend APIs, "
            "and cybersecurity fundamentals."
        )

    if "intern" in q or "experience" in q:
        return (
            "Pritam worked as a Full Stack Web Development Intern at "
            "Unified Mentor Pvt Ltd, contributing to real-world web projects "
            "in a remote environment."
        )

    if "education" in q:
        return (
            "Pritam is a B.Tech Computer Science and Engineering student at "
            "JIS University, Kolkata, expected to graduate in 2027."
        )

    return "This information is not available in the resume."