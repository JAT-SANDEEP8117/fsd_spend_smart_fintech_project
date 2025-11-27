// src/components/charts/CategoryChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import chartColors from "./chartColors";

const CategoryChart = ({ data }) => {
  if (!data) return null;

  const formatted = Object.entries(data).map(([name, value]) => ({
    name,
    value,
    color: chartColors[name] || "#AAAAAA", // fallback color
  }));

  return (
    <PieChart width={400} height={350}>
      <Pie
        data={formatted}
        cx="50%"
        cy="50%"
        outerRadius={120}
        label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
        dataKey="value"
      >
        {formatted.map((entry, i) => (
          <Cell key={i} fill={entry.color} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CategoryChart;
