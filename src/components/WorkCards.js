import React from "react";

const workData = [
  {
    company: "Onward Technologies Limited",
    projectName: "OTLAPPS",
    tech: "React Native (iOS & Android)",
    date: "Present",
    description:
      "Designed and configured HRMS mobile applications with biometric authentication and PDF rendering.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    color: "#f46c6b",
    stats: [
      { label: "Team Size", value: 5 },
      { label: "Users", value: "5000+" },
      { label: "Sprint Completion", value: "95%+" },
    ],
  },
  {
    company: "Knackforge Soft Solutions Pvt Ltd",
    projectName: "iCLASSPRO",
    tech: "React Native (iOS & Android)",
    date: "2022-2024",
    description:
      "Maintained and enhanced iClassPro mobile app with API integrations and push notifications.",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    color: "#ffd265",
    stats: [
      { label: "Active Users", value: "50,000+" },
      { label: "Performance Gain", value: "25%" },
      { label: "Tech Used", value: "React Native" },
    ],
  },
  {
    company: "Knackforge Soft Solutions Pvt Ltd",
    projectName: "iCLASSPRO Client App",
    tech: "React JS",
    date: "2022-2024",
    description:
      "Developed scalable UI components and supported web integrations.",
    image: "https://images.pexels.com/photos/3183178/pexels-photo-3183178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400",
    color: "#66a3ff",
    stats: [
      { label: "Frontend", value: "React JS" },
      { label: "Web Users", value: "25,000+" },
      { label: "Reusable Components", value: "12+" },
    ],
  },
];

export default function WorkCards() {
  return (
    <section className="workcards-section">
      <h2 className="section-title">My Works</h2>
      <div className="cards-grid">
        {workData.map((card, idx) => (
          <div className="workcard" key={idx}>
            <img src={card.image} alt={card.projectName} className="workcard-img" />
            <div className="workcard-content">
              <p className="workcard-date" style={{ color: card.color }}>
                {card.date}
              </p>
              <h3 className="workcard-title">{card.projectName}</h3>
              <div className="workcard-company">{card.company}</div>
              <div className="workcard-tech">{card.tech}</div>
              <p className="workcard-description">{card.description}</p>
            </div>
            <div className="workcard-footer" style={{ background: card.color }}>
              {card.stats.map((stat, statIdx) => (
                <div className="footer-stat" key={statIdx}>
                  <div className="footer-value">{stat.value}</div>
                  <div className="footer-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
