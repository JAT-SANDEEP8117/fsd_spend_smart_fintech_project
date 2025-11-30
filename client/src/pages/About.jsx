// src/pages/About.jsx
import { FaGithub, FaUser, FaCode, FaPalette, FaChartPie, FaFilePdf, FaBrain, FaMoon, FaServer } from "react-icons/fa";

const About = () => {
  const features = [
    { icon: FaCode, title: "Transaction Management", desc: "Add, edit, and delete transactions with ease" },
    { icon: FaChartPie, title: "Analytics Dashboard", desc: "Interactive charts and visual insights" },
    { icon: FaFilePdf, title: "PDF Export", desc: "Export transactions with filters and charts" },
    { icon: FaBrain, title: "AI Insights", desc: "Smart financial recommendations" },
    { icon: FaMoon, title: "Dark Mode", desc: "Beautiful dark and light themes coming soon" },
    { icon: FaServer, title: "JSON Server", desc: "Persistent data storage" }
  ];

  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "Context API", color: "bg-purple-500" },
    { name: "Recharts", color: "bg-green-500" },
    { name: "React PDF", color: "bg-red-500" },
    { name: "JSON Server", color: "bg-yellow-500" }
  ];

  return (
    <div className="text-gray-900 dark:text-white animate-fadeIn min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mb-6 animate-float">
            <FaUser className="text-white text-5xl" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Spend Smart
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A modern personal finance tracker built with passion and modern web technologies
          </p>
        </div>

        {/* Developer Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700 animate-slideIn">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="p-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <FaUser className="text-white text-6xl" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">GenX</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                B.Tech Computer Science & Engineering
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                Full Stack Developer | SRM University
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/JAT-SANDEEP8117"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all transform hover:scale-105"
            >
              <FaGithub className="text-xl" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FaPalette className="text-blue-600 dark:text-blue-400" />
            Project Overview
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <strong className="text-blue-600 dark:text-blue-400">Spend Smart</strong> is a comprehensive personal finance management application designed to help users track their income, expenses, and financial health. Built with modern React technologies, it offers an intuitive interface with powerful analytics, PDF export capabilities, and AI-powered insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 animate-slideIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="text-blue-600 dark:text-blue-400 text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaCode className="text-blue-500" />
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`${tech.color} text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-110`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          <p>Built with ❤️ using React and modern web technologies</p>
          <p className="text-sm mt-2">© 2025 Spend Smart - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default About;
