import React from "react";

export default function ResumeViewer() {
  return (
    <section className="resume-viewer">
      <h2>My Resume</h2>
      <iframe
 src="/Subash_Manoharan_Resume.pdf"
  title="Subash Manoharan Resume"
  width="100%"
  height="700"
  style={{
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.10)"
  }}
/>


    </section>
  );
}
