// src/pages/Profile.jsx

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUser, FaEnvelope, FaWallet } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">Please login to view your profile</p>
      </div>
    );
  }

  return (
    <div className="text-gray-900 dark:text-white animate-fadeIn max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Your account information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <FaUser className="text-white text-4xl" />
          </div>
        </div>

        <div className="space-y-6">
          {/* Username */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FaUser className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Username</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{user.username}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <FaEnvelope className="text-green-600 dark:text-green-400 text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

