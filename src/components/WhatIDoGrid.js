import React from "react";

const cards = [
  {
    emoji: "💻",
    title: "Web Development",
    desc: `Building responsive web and mobile apps with React Native, React, JS, TypeScript, and modern UI/UX.`,
  },
  {
    emoji: "📱",
    title: "App Development",
    desc: `Expert in iOS/Android mobile engineering, biometric authentication, and native module solutions.`,
  },
  {
    emoji: "🔄",
    title: "Google Firebase",
    desc: `Proficient in leveraging Google Firebase services for real-time database management, authentication, cloud functions, and seamless backend integration.`,
  },
  {
    emoji: "🎓",
    title: "Mentorship & Collaboration",
    desc: `Active open-source contributor, team mentor, and Agile participant.`,
  },
];

export default function WhatIDoGrid() {
  return (
    <div className="what-grid">
      {cards.map((card, i) => (
        <div key={i} className="what-card">
          <div className="card-title">
            <span className="card-emoji">{card.emoji}</span>
            <span>{card.title}</span>
          </div>
          <div className="card-desc">{card.desc}</div>
        </div>
      ))}
    </div>
  );
}
