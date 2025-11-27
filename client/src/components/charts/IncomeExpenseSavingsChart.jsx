import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const COLORS = {
  income: "#0088FE",     // blue
  expense: "#FF4B55",    // red
  savings: "#00C49F",    // green
};

const IncomeExpenseSavingsChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-400">No data available.</p>;
  }

  // Calculate totals
  const totalIncome = data
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = data
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  let savings = totalIncome - totalExpense;
  if (savings < 0) savings = 0; // Prevent negative slice

  const chartData = [
    { name: "Income", value: totalIncome, color: COLORS.income },
    { name: "Expenses", value: totalExpense, color: COLORS.expense },
    { name: "Savings", value: savings, color: COLORS.savings },
  ];

  return (
    <PieChart width={350} height={350}>
      <Pie
        data={chartData}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={120}
        label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
      >
        {chartData.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default IncomeExpenseSavingsChart;
