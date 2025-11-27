import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = {
  income: "#3b82f6",     // blue
  expense: "#ef4444",    // red
  savings: "#10b981",    // green
};

const IncomeExpenseSavingsChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        No data available
      </div>
    );
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
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
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

export default IncomeExpenseSavingsChart;
