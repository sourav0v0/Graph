import React, { useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  ReferenceLine,
  ComposedChart,
} from "recharts";
import { graphData } from "../constants";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#4b40ee",
          border: "1px solid #ccc",
          color: "#fff",
          borderRadius: "4px",
          padding: "0 2px",
        }}
      >
        <p>{`$${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Graph = () => {
  const [hoveredX, setHoveredX] = useState(null);

  const handleMouseMove = (e) => {
    const { activePayload, chartX } = e;
    if (activePayload && activePayload.length > 0) {
      const dataIndex = activePayload[0].index;
      setHoveredX(chartX);
    }
  };

  const handleMouseLeave = () => {
    setHoveredX(null);
  };

  return (
    <div
      style={{
        marginLeft: "-55px",
        width: "100%",
        height: 400,
        position: "relative",
      }}
    >
      <ResponsiveContainer>
        <ComposedChart
          data={graphData}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6f58f4" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal={false} vertical />
          <XAxis axisLine={{ stroke: "#d0d0d0" }} stroke="#d0d0d0" />
          <YAxis axisLine={{ stroke: "#d0d0d0" }} stroke="#d0d0d0" />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Area
            type="linear"
            dataKey="price"
            stroke="#4B40EE"
            fill="url(#gradient)"
          />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />
          <Bar dataKey="barValue1" barSize={2} fill="#413ea0" />

          {hoveredX !== null && (
            <ReferenceLine
              x={hoveredX}
              stroke="red"
              strokeDasharray="3 3"
              label="Hovered"
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
