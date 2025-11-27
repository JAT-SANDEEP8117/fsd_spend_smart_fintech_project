// src/pages/About.jsx

import { FaGithub, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <div className="text-gray-900 dark:text-white px-6 py-10">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        About This Project
      </h1>

      {/* Card */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">

        {/* Developer Section */}
        <div className="flex items-center gap-4 mb-6">
          <FaUser className="text-5xl text-blue-600 dark:text-blue-400" />
          <div>
            <h2 className="text-2xl font-semibold">JAT SANDEEP</h2>
            <p className="text-gray-600 dark:text-gray-300">
              B.Tech CSE | Full Stack Developer | SRM University
            </p>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
          <strong>Spend Smart</strong> is a modern personal finance tracker
          built using React, Tailwind CSS, and Context API.  
          It helps users track their income, expenses, monthly analytics,
          and spending patterns with clean UI and visual charts.
        </p>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300 leading-7">
            <li>Add, edit, and delete transactions</li>
            <li>Dashboard with income, expenses & balance</li>
            <li>Analytics with interactive charts</li>
            <li>AI Insights (Coming Soon)</li>
            <li>PDF export (Upcoming Feature)</li>
            <li>Dark & Light theme support</li>
          </ul>
        </div>

        {/* GitHub Section */}
        <div className="flex items-center gap-3 mt-6">
          <FaGithub className="text-3xl" />
          <a
            href="https://github.com/JAT-SANDEEP8117"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline text-lg"
          >
            GitHub Profile
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
