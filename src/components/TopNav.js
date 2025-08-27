import React from "react";
import { FaHome, FaFileAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";

const tabs = [
  { name: "Home", icon: <FaHome /> },
  { name: "Resume", icon: <FaFileAlt /> },
  { name: "Work", icon: <FaBriefcase /> },
  { name: "Contact", icon: <FaEnvelope /> },
];

export default function TopNav({ activeTab, setActiveTab }) {
  return (
    <nav className="top-nav">
      {tabs.map((tab) => (
        <button
          className={`nav-btn${tab.name === activeTab ? " active" : ""}`}
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
        >
          <span className="nav-icon">{tab.icon}</span> {tab.name}
        </button>
      ))}
    </nav>
  );
}
