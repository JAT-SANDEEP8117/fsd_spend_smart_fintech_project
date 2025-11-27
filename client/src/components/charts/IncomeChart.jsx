// src/components/charts/IncomeChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import chartColors from "./chartColors";

const IncomeChart = ({ data }) => {
  const incomeData = data.filter(t => t.type === "income");

  const grouped = {};
  incomeData.forEach(t => {
    grouped[t.category] = (grouped[t.category] || 0) + t.amount;
  });

  const formatted = Object.entries(grouped).map(([name, value]) => ({
    name,
    value,
    color: chartColors[name] || "#AAAAAA",
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

export default IncomeChart;
