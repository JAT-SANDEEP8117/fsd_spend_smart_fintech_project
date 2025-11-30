# Spend Smart - Quick Setup Guide

## Required Libraries

### Frontend (client/) - Dependencies
- `react` (^19.2.0) - React framework
- `react-dom` (^19.2.0) - React DOM renderer
- `react-router-dom` (^7.9.6) - Routing
- `axios` (^1.13.2) - HTTP client
- `react-hook-form` (^7.53.2) - Form validation
- `react-icons` (^5.5.0) - Icons
- `react-toastify` (^11.0.5) - Toast notifications
- `recharts` (^3.5.0) - Charts
- `@react-pdf/renderer` (^4.3.1) - PDF generation
- `tailwindcss` (^4.1.17) - CSS framework
- `@tailwindcss/vite` (^4.1.17) - Tailwind Vite plugin

**Install all:**
```bash
cd client
npm install
```

### Backend (server/) - Dependencies
- `json-server` (^1.0.0-beta.3) - Mock REST API
- `json-server-auth` (^2.1.0) - Auth middleware

**Install all:**
```bash
cd server
npm install
```

---

## How to Run the Project

### Step 1: Install Dependencies

**Terminal 1 - Install Frontend:**
```bash
cd client
npm install
```

**Terminal 2 - Install Backend:**
```bash
cd server
npm install
```

### Step 2: Start the Servers

**Terminal 1 - Start JSON Server:**
```bash
cd server
npx json-server --watch db.json --port 5000
```

**Terminal 2 - Start React App:**
```bash
cd client
npm run dev
```

### Step 3: Access the Application

- **Frontend:** http://localhost:5173 (or port shown in terminal)
- **Backend API:** http://localhost:5000

---

## Quick Start (All Commands)

```bash
# Install dependencies
cd client && npm install
cd ../server && npm install

# Start JSON Server (Terminal 1)
cd server
npx json-server --watch db.json --port 5000

# Start React App (Terminal 2)
cd client
npm run dev
```

---

## Test Credentials

**Your Account:**
- Email: `jatsandeep275@gmail.com`
- Password: `JatS8117`

**Dummy Users:**
- Email: `user2@example.com` | Password: `Password123!`
- Email: `user3@example.com` | Password: `StrongPass!23`
- Email: `dummy1@example.com` | Password: `Dummy123!@#`

---

## Project Structure

```
fsd_spend_xx/
├── client/          # React Frontend
│   └── npm install  # Install frontend dependencies
└── server/          # JSON Server Backend
    └── npm install  # Install backend dependencies
```

---

**Note:** Make sure both servers are running simultaneously for the application to work properly.

