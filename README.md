# Spend Smart

Spend Smart is a full stack personal finance management application that helps users track their income, expenses, and overall financial health. Built using React, JSON Server, and Tailwind CSS, it offers modern dashboards, analytics, PDF reports, and AI insights for better money management.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack & Libraries](#tech-stack--libraries)
- [Project Structure](#project-structure)
- [Quickstart Setup](#quickstart-setup)
- [Test Credentials](#test-credentials)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Spend Smart** allows you to:
- Register and securely log in
- Manage income and expenses by category
- Analyze your transactions with charts and dashboards
- Export custom PDF reports
- Receive AI-driven savings insights _(coming soon)_
- Enjoy a fast, responsive UI that works great on all devices

---

## Features

- **User Authentication:** Login/register, session management & protected routing
- **Transaction Management:** Add, edit, delete, sort, filter, and view personal transactions
- **Analytics Dashboard:** Visualize income and expenses using line & pie charts
- **PDF Export:** Generate and download filtered transaction reports with personalized layouts
- **AI Insights:** _[COMING SOON]_ Intelligent recommendations and savings tips (AI model integration planned for future releases)
- **Responsive UI:** Mobile-friendly with light/dark themes
- **Instant Notifications:** Powered by React Toastify

---

## Tech Stack & Libraries

### Frontend (`client/`)
- **React** 19.x
- **React Router DOM** (routing)
- **Axios** (HTTP/API requests)
- **React Hook Form** (form validation)
- **React Icons** (icons, FontAwesome + more)
- **React Toastify** (toast notifications)
- **Recharts** (charts and analytics)
- **@react-pdf/renderer** (PDF generation)
- **Tailwind CSS** (utility-first CSS)
- **Vite** (build tool)
- **ESLint** (linting/code quality)

### Backend (`server/`)
- **JSON Server** (mock REST API)
- **json-server-auth** (authentication middleware, not used but installed)
- **Node.js** runtime

---

## Project Structure

```
fsd_spend_smart_fintech_project/
├── client/          # React Frontend (components, context, pages, features)
│   ├── src/
│   │   ├── components/         # Reusable UI (charts, sidebar, navbar)
│   │   ├── context/            # Auth, theme, transaction context
│   │   ├── features/           # PDF & transactions modules
│   │   ├── pages/              # Route pages (Login, Register, Home, etc.)
│   │   └── utils/              # Utilities
│   ├── package.json
│   └── vite.config.js
└── server/          # Mock Backend (JSON Server)
    ├── db.json      # Mock database (users + transactions)
    └── package.json
```

---

## Quickstart Setup

**Prerequisites:** Node.js (v16+), npm

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd fsd_spend_smart_fintech_project
```

### 2. Install Dependencies

**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd ../server
npm install
```

### 3. Run the Project

**Start Backend (JSON Server):**
```bash
cd server
npx json-server --watch db.json --port 5000
```

**Start Frontend (React App):**
```bash
cd ../client
npm run dev
```

### 4. Access the App

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000](http://localhost:5000)

> **Note:** Both React and JSON Server must be running for the application to function.

---

## Test Credentials

Use these to log in quickly during development/testing:

- Email: `user2@example.com`       | Password: `Password123!`
- Email: `user3@example.com`       | Password: `StrongPass!23`
- Email: `dummy1@example.com`      | Password: `Dummy123!@#`

---

## API Endpoints

### Users
- `GET /users` - Get all users
- `POST /users` - Register new user
- `GET /users/:id` - Get specific user

### Transactions
- `GET /transactions?userId=:id` - Get user-specific transactions
- `POST /transactions` - Add new transaction
- `PUT /transactions/:id` - Update transaction
- `DELETE /transactions/:id` - Remove transaction

---

## Contributing

Contributions are welcome!  
1. Fork the repo and create a new branch for your feature/bugfix.
2. Make changes and test thoroughly.
3. Open a pull request with a detailed description.

---

## License

This project is open-source and licensed under the MIT License.

---

**Developed by GenX - Full Stack Developers | 2025**

> **Note:** _The AI Insights page is planned for a future release. We aim to integrate intelligent recommendations and predictive analytics by connecting to an AI/ML model. Stay tuned!_
