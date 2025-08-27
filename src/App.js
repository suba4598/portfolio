import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import About from "./components/About";
import WhatIDoGrid from "./components/WhatIDoGrid";
import ResumeViewer from "./components/ResumeViewer";
import WorkCards from "./components/WorkCards";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="layout-container">
      <Sidebar />
      <main className="main-area">
        <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Home" && (
          <>
            <About />
            <WhatIDoGrid />
          </>
        )}
        {activeTab === "Resume" && <ResumeViewer />}
        {activeTab === "Work" && <WorkCards />}
        {activeTab === "Contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;
