// src/components/charts/CategoryChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import chartColors from "./chartColors";

const CategoryChart = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        No expense data available
      </div>
    );
  }

  const formatted = Object.entries(data).map(([name, value]) => ({
    name,
    value,
    color: chartColors[name] || "#AAAAAA", // fallback color
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
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

        <Tooltip 
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}
          className="dark:bg-gray-800 dark:border-gray-700"
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryChart;
