// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./context/ThemeContext";

import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AIInsights";
import About from "./pages/About";
import PDFExport from "./pages/PDFExport";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ToastContainer 
        position="top-right" 
        theme={theme === "dark" ? "dark" : "light"}
        toastClassName="dark:bg-gray-800 dark:text-white"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <div className="flex min-h-screen">
          {/* LEFT SIDEBAR - Fixed */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <div className="flex-1 ml-60 min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            <Navbar />
            
            <div className="flex-1 p-4 lg:p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/pdf" element={<PDFExport />} />
                <Route path="/insights" element={<AIInsights />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
