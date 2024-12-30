import React from "react";

export default function GraphHeaders() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
      className="graph-nav"
    >
      <div className="left flex">
        <div className="flex center">
          <img src="./fullscreen.svg" /> <span>FullScreen</span>
        </div>
        <div className="flex center">
          <img src="./addIcon.svg" /> <span>Compare</span>
        </div>
      </div>
      <div className="right">
        {["1d", "3d", "1w", "1m", "6m", "1y", "max"].map((timeframe) => (
          <button
            key={timeframe}
            style={{
              margin: "0 5px",
              padding: "8px 15px",
              borderRadius: "4px",
              backgroundColor: timeframe === "1w" ? "#4B40EE" : "white",
              color: timeframe === "1w" ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {timeframe}
          </button>
        ))}
      </div>
    </div>
  );
}
