// src/pages/AIInsights.jsx

import { FaRobot } from "react-icons/fa";

const AIInsights = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-[80vh] text-gray-900 dark:text-white px-6">
      
      {/* Icon */}
      <FaRobot className="text-7xl text-blue-500 dark:text-blue-400 mb-6 animate-bounce" />

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-3">AI Insights</h1>

      {/* Subtext */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
        This feature is currently under development.
        Soon you'll get personalized spending insights,
        smart suggestions, and AI-powered financial predictions!
      </p>

      {/* Coming Soon Badge */}
      <div className="mt-6 px-5 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full text-lg shadow-lg">
        Coming Soon
      </div>
    </div>
  );
};

export default AIInsights;
