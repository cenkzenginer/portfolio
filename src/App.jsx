import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden"
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px",
          borderBottom: "1px solid #1e293b",
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(10px)",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box"
        }}
      >
        <h2 style={{ margin: 0 }}>Cenk Zenginer</h2>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap"
          }}
        >
          <a
            href="#experience"
            style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
          >
            Experience
          </a>
          <a
            href="#projects"
            style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: "120px 24px 40px",
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <img
          src="/vesikalık-ai.png"
          alt="Cenk profile"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "4px solid #334155",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
          }}
        />
        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.2",
            marginBottom: "16px",
            background: "linear-gradient(90deg, #7c3aed, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Hello, I am Cenk{" "}
          <span style={{ WebkitTextFillColor: "initial" }}>👋</span>
        </h1>

        <h2
          style={{
            marginBottom: "20px",
            color: "#e2e8f0"
          }}
        >
          Computer Engineer
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 20px",
            lineHeight: "1.6",
            color: "#94a3b8",
            fontSize: "18px"
          }}
        >
          Passionate about building scalable backend systems, AI-powered
          applications, and data-driven solutions.
        </p>
      </section>

      {/* BUTTONS */}
      <div
        style={{
          marginTop: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          width: "100%",
          boxSizing: "border-box",
          padding: "0 24px"
        }}
      >
        <a
          href="https://github.com/cenkzenginer"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "10px 18px",
            background: "#1e293b",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/cenk-zenginer-b6961a226/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "10px 18px",
            background: "#1e293b",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="/cenk-zenginer-CV-engl .pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "10px 22px",
            background: "linear-gradient(90deg, #7c3aed, #a855f7)",
            borderRadius: "10px",
            fontWeight: "bold"
          }}
        >
          View CV
        </a>
      </div>

      {/* EXPERIENCE */}
      <section
        id="experience"
        style={{
          padding: "60px 24px",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "40px",
            color: "white"
          }}
        >
          Experience
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            boxSizing: "border-box"
          }}
        >
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: "#1e293b",
              borderRadius: "18px",
              overflow: "hidden",
              transition: "0.3s ease",
              border: "1px solid #334155",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box"
            }}
          >
            <img
              src="/ford_logo.png"
              alt="Ford Otosan"
              style={{
                width: "100%",
                height: "140px",
                objectFit: "contain",
                background: "white",
                padding: "20px",
                display: "block"
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3 style={{ marginTop: 0, color: "white" }}>Ford Otosan</h3>

              <p
                style={{
                  margin: "0 0 10px",
                  color: "#a78bfa",
                  fontWeight: "600"
                }}
              >
                Autonomous Driving Systems Engineering Intern
              </p>

              <p
                style={{
                  margin: 0,
                  lineHeight: "1.7",
                  color: "#cbd5e1"
                }}
              >
                Developed a Python-based tool on Linux to process LiDAR and
                radar data in real time with modular validation and logging.
              </p>
            </div>
          </div>

          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: "#1e293b",
              borderRadius: "18px",
              overflow: "hidden",
              transition: "0.3s ease",
              border: "1px solid #334155",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box"
            }}
          >
            <img
              src="/C-Prot_Logo.png"
              alt="C-Prot"
              style={{
                width: "100%",
                height: "140px",
                objectFit: "contain",
                background: "white",
                padding: "20px",
                display: "block"
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3 style={{ marginTop: 0, marginBottom: "10px", color: "white" }}>
                C-Prot Cyber Security Systems
              </h3>

              <p
                style={{
                  margin: "0 0 10px",
                  color: "#a78bfa",
                  fontWeight: "600"
                }}
              >
                Cyber Security Engineering Intern
              </p>

              <p
                style={{
                  margin: 0,
                  lineHeight: "1.7",
                  color: "#cbd5e1"
                }}
              >
                Developed a C++ application to detect and monitor USB and
                Bluetooth devices, and implemented a modular timestamped logging
                system with per-device log files for tracking and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          padding: "60px 24px",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "40px",
            color: "white"
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            boxSizing: "border-box"
          }}
        >
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: "#1e293b",
              borderRadius: "18px",
              overflow: "hidden",
              transition: "0.3s ease",
              border: "1px solid #334155",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box"
            }}
          >
            <img
              src="/surplus-food-UI.png"
              alt="AI Powered Food Redistribution Platform"
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                background: "#0f172a",
                display: "block"
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3 style={{ marginTop: 0, color: "white" }}>
                AI Food Redistribution Platform
              </h3>

              <p style={{ lineHeight: "1.7", color: "#cbd5e1" }}>
                An AI-powered platform designed to reduce food waste using
                demand prediction and dynamic pricing logic based on expiry
                dates, inventory levels, and historical restaurant data.
              </p>

              <a
                href="https://github.com/cenkzenginer"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#a78bfa",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                View Project →
              </a>
            </div>
          </div>

          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: "#1e293b",
              borderRadius: "18px",
              overflow: "hidden",
              transition: "0.3s ease",
              border: "1px solid #334155",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box"
            }}
          >
            <img
              src="/StartUpProjectFoto.png"
              alt="ATO - Animal Tracking Operations"
              style={{
                width: "100%",
                height: "190px",
                background: "#0f172a",
                objectFit: "cover",
                display: "block"
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3 style={{ marginTop: 0, color: "white" }}>
                Animal Tracking Operations
              </h3>

              <p style={{ lineHeight: "1.7", color: "#cbd5e1" }}>
                Developed a YOLO-based cow tracking system for barn entry and exit detection, supported by real-time environmental monitoring with STM32 sensors.
                Built as part of a startup initiative to explore smart farming solutions; the project is not currently active.
              </p>

              <a
                href="https://github.com/cenkzenginer"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#a78bfa",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                View Project →
              </a>
            </div>
          </div>

          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: "#1e293b",
              borderRadius: "18px",
              overflow: "hidden",
              transition: "0.3s ease",
              border: "1px solid #334155",
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box"
            }}
          >
            <img
              src="/Security-Management-App-UI.jpeg"
              alt="Security Training Management Application"
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                background: "#0f172a",
                display: "block"
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3 style={{ marginTop: 0, color: "white" }}>
                Security Training Management Application
              </h3>

              <p style={{ lineHeight: "1.7", color: "#cbd5e1" }}>
                Built a cross-platform student management system using Electron,
                JavaScript, and MariaDB with document tracking, payment
                management, and PDF receipt generation.
              </p>

              <a
                href="https://github.com/cenkzenginer"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#a78bfa",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "60px 24px",
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Contact Me
        </h2>

        <p style={{ marginBottom: "20px", color: "#cbd5f5" }}>
          Feel free to reach out for opportunities or collaborations.
        </p>

        <p style={{ fontSize: "18px" }}>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:cenkzenginerrr@gmail.com"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            cenkzenginerrr@gmail.com
          </a>
        </p>
      </section>
    <div
      style={{
      textAlign: "center",
      padding: "20px",
      color: "#94a3b8",
      fontSize: "14px"
  }}
>
      Cenk Zenginer • © 2026
  </div>
    </div>
  );
}

export default App;