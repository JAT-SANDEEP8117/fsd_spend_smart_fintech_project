// Utility function to calculate totals for income, expense, and balance
const calculateTotals = (transactions = []) => {
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else if (t.type === "expense") {
      totalExpense += t.amount;
    }
  });

  const balance = totalIncome - totalExpense;

  return { totalIncome, totalExpense, balance };
};

export default calculateTotals;
