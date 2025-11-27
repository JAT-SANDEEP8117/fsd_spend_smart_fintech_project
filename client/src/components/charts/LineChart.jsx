import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

// Format numbers for Y-axis (abbreviate large numbers)
const formatYAxis = (value) => {
  if (value >= 1000000000) {
    return `₹${(value / 1000000000).toFixed(1)}B`;
  }
  if (value >= 1000000) {
    return `₹${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `₹${(value / 1000).toFixed(1)}K`;
  }
  return `₹${value}`;
};

// Format tooltip values
const formatTooltipValue = (value) => {
  return `₹${value.toLocaleString('en-IN')}`;
};

const LineChartComponent = ({ data }) => {
  const months = {};

  data.forEach(t => {
    const month = t.date.slice(0, 7); // YYYY-MM
    if (!months[month]) {
      months[month] = { month, income: 0, expense: 0 };
    }
    if (t.type === "income") {
      months[month].income += t.amount;
    } else {
      months[month].expense += t.amount;
    }
  });

  const chartData = Object.values(months).sort((a, b) => a.month.localeCompare(b.month));

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {formatTooltipValue(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart 
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
        <XAxis 
          dataKey="month" 
          stroke="#6b7280" 
          className="dark:stroke-gray-400"
          tick={{ fill: '#6b7280' }}
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#6b7280" 
          className="dark:stroke-gray-400"
          tick={{ fill: '#6b7280' }}
          tickFormatter={formatYAxis}
          width={80}
          style={{ fontSize: '12px' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="income" 
          stroke="#10b981" 
          strokeWidth={3} 
          name="Income"
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="expense" 
          stroke="#ef4444" 
          strokeWidth={3} 
          name="Expense"
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
