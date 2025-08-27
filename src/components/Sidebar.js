import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src={require("../assets/profile.jpeg")}
        alt="Subash Manoharan"
        className="profile-img"
      />
      <h2>Subash Manoharan</h2>
      <h4>React Native Application Developer</h4>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/yourlinkedin/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="mailto:suba4598@gmail.com" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg"
            alt="Gmail"
          />
        </a>
        <a href="https://wa.me/918825477045" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
            alt="WhatsApp"
          />
        </a>
      </div>
      <div className="sidebar-details">
        <div>📱 +91 88254 77045</div>
        <div>✉️ suba4598@gmail.com</div>
        <div>📍 Chennai, Tamil Nadu</div>
      </div>
      <a
        className="resume-btn"
        href="/Subash_Manoharan_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        download="Subash_Manoharan_Resume.pdf"
      >
        Download Resume
      </a>
    </aside>
  );
}
