// src/features/pdf/PDFGenerator.jsx
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "2 solid #3b82f6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1f2937",
  },
  summaryBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f3f4f6",
    borderRadius: 5,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  table: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1 solid #e5e7eb",
    paddingVertical: 8,
  },
  tableHeader: {
    backgroundColor: "#f9fafb",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 5,
  },
  tableCellDate: {
    flex: 1.2,
    paddingHorizontal: 5,
  },
  tableCellAmount: {
    flex: 1,
    paddingHorizontal: 5,
    textAlign: "right",
  },
  income: {
    color: "#10b981",
  },
  expense: {
    color: "#ef4444",
  },
  footer: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: "1 solid #e5e7eb",
    fontSize: 10,
    color: "#6b7280",
    textAlign: "center",
  },
  chartNote: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#fef3c7",
    borderRadius: 5,
    fontSize: 10,
    color: "#92400e",
  },
});

// PDF Document Component
const PDFDocument = ({ transactions, filterType, filterCategory, reportType, selectedMonth, totals }) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format month name for monthly reports
  const monthName = selectedMonth 
    ? new Date(selectedMonth + "-01").toLocaleDateString("en-US", { year: "numeric", month: "long" })
    : "";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Spend Smart - Transaction Report</Text>
          <Text style={styles.subtitle}>Generated on {currentDate}</Text>
          {reportType === "monthly" && monthName && (
            <Text style={styles.subtitle}>Monthly Report: {monthName}</Text>
          )}
          {(filterType !== "all" || filterCategory !== "all") && (
            <Text style={styles.subtitle}>
              Filters: {filterType !== "all" ? filterType : ""}{" "}
              {filterCategory !== "all" ? `| ${filterCategory}` : ""}
            </Text>
          )}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <View style={styles.summaryBox}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total Income</Text>
              <Text style={[styles.summaryValue, styles.income]}>
                Rs. {totals.income.toLocaleString('en-IN')}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total Expense</Text>
              <Text style={[styles.summaryValue, styles.expense]}>
                Rs. {totals.expense.toLocaleString('en-IN')}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Savings</Text>
              <Text
                style={[
                  styles.summaryValue,
                  totals.balance >= 0 ? styles.income : styles.expense,
                ]}
              >
                Rs. {totals.balance.toLocaleString('en-IN')}
              </Text>
            </View>
          </View>
        </View>

        {/* Category Breakdown */}
        {Object.keys(totals).length > 0 && totals.expense > 0 && (() => {
          const categoryData = {};
          transactions.forEach((t) => {
            if (t.type === "expense") {
              categoryData[t.category] = (categoryData[t.category] || 0) + t.amount;
            }
          });
          
          return Object.keys(categoryData).length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Expense by Category</Text>
              {Object.entries(categoryData)
                .sort((a, b) => b[1] - a[1])
                .map(([category, amount]) => (
                  <View key={category} style={{ marginBottom: 5 }}>
                    <Text>
                      {category}: Rs. {amount.toLocaleString('en-IN')} (
                      {((amount / totals.expense) * 100).toFixed(1)}%)
                    </Text>
                  </View>
                ))}
            </View>
          ) : null;
        })()}

        {/* Transactions Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transactions ({transactions.length})</Text>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCellDate}>Date</Text>
              <Text style={styles.tableCell}>Category</Text>
              <Text style={styles.tableCell}>Type</Text>
              <Text style={styles.tableCellAmount}>Amount</Text>
            </View>

            {/* Table Rows */}
            {transactions.map((tx, index) => (
              <View key={tx.id || index} style={styles.tableRow}>
                <Text style={styles.tableCellDate}>{tx.date}</Text>
                <Text style={styles.tableCell}>{tx.category}</Text>
                <Text style={styles.tableCell}>{tx.type}</Text>
                <Text
                  style={[
                    styles.tableCellAmount,
                    tx.type === "income" ? styles.income : styles.expense,
                  ]}
                >
                  {tx.type === "income" ? "+" : "-"} Rs. {tx.amount.toLocaleString('en-IN')}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Spend Smart - Personal Finance Tracker</Text>
          <Text>This is an auto-generated report. For detailed analytics, visit the web app.</Text>
        </View>
      </Page>
    </Document>
  );
};

// PDF Generator Class
class PDFGenerator {
  static async generatePDF({ transactions, filterType, filterCategory, reportType, selectedMonth, totals }) {
    try {
      const doc = (
        <PDFDocument
          transactions={transactions}
          filterType={filterType}
          filterCategory={filterCategory}
          reportType={reportType}
          selectedMonth={selectedMonth}
          totals={totals}
        />
      );

      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      
      // Generate filename
      const date = new Date().toISOString().split("T")[0];
      let filename = `spend-smart-report-${date}`;
      if (reportType === "monthly" && selectedMonth) {
        filename += `-${selectedMonth}`;
      }
      if (filterType !== "all") filename += `-${filterType}`;
      if (filterCategory !== "all") filename += `-${filterCategory}`;
      filename += ".pdf";

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw error;
    }
  }
}

export default PDFGenerator;

