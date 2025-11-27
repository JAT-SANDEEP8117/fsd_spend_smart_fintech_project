import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

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

  const chartData = Object.values(months);

  return (
    <LineChart width={800} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#00C49F" strokeWidth={3} />
      <Line type="monotone" dataKey="expense" stroke="#FF4444" strokeWidth={3} />
    </LineChart>
  );
};

export default LineChartComponent;
