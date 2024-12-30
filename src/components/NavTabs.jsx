import React from "react";

export default function NavTabs() {
  return (
    <nav class="subTabs">
      {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map((tab) => (
        <div
          key={tab}
          className={tab === "Chart" ? "activeTab" : "deActiveTab"}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
}
