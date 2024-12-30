import React from "react";

export default function Header() {
  return (
    <header>
      <span className="price">
        63,179.71
        <sup className="priceSym">USD</sup>
      </span>
      <p
        className="profit"
        style={{ margin: "5px 0", color: "green", fontSize: "18px" }}
      >
        +2,161.42 (3.54%)
      </p>
    </header>
  );
}
