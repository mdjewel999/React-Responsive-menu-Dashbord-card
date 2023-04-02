import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "John", phy: 75, che: 80, math: 90 },
    { id: 2, name: "Sarah", phy: 85, che: 70, math: 95 },
    { id: 3, name: "David", phy: 95, che: 85, math: 80 },
    { id: 4, name: "Emma", phy: 70, che: 90, math: 85 },
    { id: 5, name: "Michael", phy: 80, che: 75, math: 90 },
    { id: 6, name: "Rachel", phy: 90, che: 80, math: 75 },
    { id: 7, name: "Jacob", phy: 75, che: 85, math: 80 },
    { id: 8, name: "Emily", phy: 85, che: 90, math: 70 },
    { id: 9, name: "Daniel", phy: 95, che: 80, math: 85 },
    { id: 10, name: "Olivia", phy: 70, che: 75, math: 90 },
    { id: 11, name: "William", phy: 80, che: 90, math: 75 },
    { id: 12, name: "Sophia", phy: 90, che: 85, math: 80 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <Line stroke="#82ca9d" dataKey="phy"></Line>
        <Line stroke="#82ca9d" dataKey="math"></Line>
        <Line stroke="#8884d8" dataKey="che"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Dashboard;
