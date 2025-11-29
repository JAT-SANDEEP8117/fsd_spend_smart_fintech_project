# Spend Smart Fintech Project

Spend Smart is a modern fintech web app that empowers users to manage their finances, track transactions, set budgets, and analyze spending habits. Built with a feature-rich frontend and a flexible mock API backend, it delivers a seamless experience focused on personal finance clarity.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Transactions Dashboard](#transactions-dashboard)
- [Analytics & Visualization](#analytics--visualization)
- [Reports & Export](#reports--export)
- [Libraries & Tools Used](#libraries--tools-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

*(Add deployment link or screenshots if available)*

---

## Features

- **Dashboard Overview:** View your balance, monthly cash flow, and summary insights at a glance.
- **Transactions Dashboard:**
  - See all transactions in a sortable table (by amount, type, date, etc.)
  - Sort by high ↔ low, income/expense, and more.
  - Full CRUD: add, edit, delete, and view transaction details.
  - Instant notifications for actions using React Toastify.
- **Analytics & Visualization:**
  - **Monthly Line Chart:** See spending and income trends over time.
  - **Three Pie Charts:** Visual breakdowns for category, income vs expense, or custom splits.
- **PDF Reports:**
  - Download sorted & filtered transaction reports (e.g., only income, only expenses, monthly) as PDF.
- **Responsive & Modern UI:** Clean layout, works great on mobile and desktop.
- **Mock Backend:** All CRUD, analytics, and dashboard data powered by a JSON Server mock API.
- **Rich Icons:** All pages use crisp icons from FontAwesome (and others) powered by React Icons.
- **Real-time User Feedback:** Web notifications for all important actions.

---

## Transactions Dashboard

A dedicated dashboard for:
- Viewing all transactions
- Sorting and filtering (amount, type, date, etc.)
- Quick CRUD actions: add, edit, delete transactions
- Live in-app notifications (via Toast)

---

## Analytics & Visualization

- **Monthly Line Chart:** Track monthly cash flow changes.
- **Three Pie Charts:** Instantly understand your spending and income breakdowns.

---

## Reports & Export

- **PDF Export:** Download custom reports as PDFs; filter by date, type (income/expense), or month.
- Powered by [`@react-pdf/renderer`](https://github.com/diegomura/react-pdf).

---

## Libraries & Tools Used

### Frontend (`client/`)
- **React:** UI library
- **React Router DOM:** SPA navigation
- **Axios:** For all HTTP/API requests
- **React Icons:** Built-in icons (FontAwesome, Material, and more)
- **React Toastify:** Toast notifications for feedback
- **@react-pdf/renderer:** PDF generation for custom reports
- **Recharts:** Beautiful charts for analytics
- **Tailwind CSS** + **@tailwindcss/vite:** Utility-first CSS framework
- **Vite:** Lightning-fast build tool
- **ESLint:** Code style and quality checks

### Backend (`server/`)
- **JSON Server:** Fast and simple mock REST API for all data operations (CRUD)
- **Node.js:** Backend runtime

---

## Project Structure

```
fsd_spend_smart_fintech_project/
├── client/        # Front-end (React/Vite)
│   ├── public/    # Static assets
│   ├── src/       # Source code (components, hooks, etc.)
│   ├── package.json
│   └── ...
└── server/        # Mock backend (JSON Server)
    ├── db.json    # Mock database
    └── package.json
```

---

## Getting Started

**Prerequisites:** Node.js (v16+), npm or yarn

1. **Clone the repo:**
    ```bash
    git clone https://github.com/JAT-SANDEEP8117/fsd_spend_smart_fintech_project.git
    cd fsd_spend_smart_fintech_project
    ```
2. **Install dependencies:**
    - Client: `cd client && npm install`
    - Server: `cd ../server && npm install`
3. **Run the project:**
    - Start server: `npm start` (from server/)
    - Start client: `npm run dev` (from client/)

Client default: `http://localhost:5173`  
API default: `http://localhost:3000`

---

## Contributing

Contributions welcome!
1. Fork, branch, and commit your changes.
2. Create a pull request describing your changes.

---

## License

(Add your license here)
