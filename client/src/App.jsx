// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";   // ✅ Correct import
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="ml-60 flex-1 min-h-screen bg-gray-100 dark:bg-gray-800">
          <Navbar />

          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/insights" element={<AIInsights />} /> {/* ✅ Fixed */}
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
