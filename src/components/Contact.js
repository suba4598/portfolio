import React from "react";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>
        I am always open to discussing <strong>new projects</strong>, <strong>opportunities in the tech world</strong>, <strong>partnerships</strong>, and more so <strong>mentorship</strong>.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSftMvK6eXfJEykbmqL0gFAi3V7PGyKj6wbJ7wi7RZol0k3dPg/viewform?embedded=true"
        width="100%"
        height="824"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ borderRadius: 12, border: "none", boxShadow: "0 2px 16px rgba(60,60,120,0.10)", background: "#f5f5f8" }}
        title="Contact Form"
      >
        Loading…
      </iframe>
    </section>
  );
}
