import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      {/* Sidebar is fixed, so layout must start after it */}
      <Sidebar />

<div className="ml-60 flex-1 min-h-screen bg-gray-100 dark:bg-gray-800">
        <Navbar />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
