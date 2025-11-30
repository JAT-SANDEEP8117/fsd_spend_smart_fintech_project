// src/context/AuthContext.jsx

import { createContext, useState, useEffect } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error("Error parsing saved user:", err);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await api.get("/users");
      const users = response.data;
      
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        // Remove password before storing
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        // Trigger custom event for TransactionContext to refresh
        window.dispatchEvent(new Event("userChanged"));
        toast.success("Login successful!");
        return true;
      } else {
        toast.error("User doesn't exist. Please create an account.");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
      return false;
    }
  };

  // Register function
  const register = async (username, email, password) => {
    try {
      // Check if username already exists
      const usersResponse = await api.get("/users");
      const users = usersResponse.data;
      
      if (users.some((u) => u.username === username)) {
        toast.error("Username already exists. Please choose another.");
        return false;
      }

      if (users.some((u) => u.email === email)) {
        toast.error("Email already exists. Please use another email.");
        return false;
      }

      // Create new user (no transactions array needed - transactions are separate)
      const newUser = {
        username,
        email,
        password,
      };

      const response = await api.post("/users", newUser);
      const { password: _, ...userWithoutPassword } = response.data;
      
      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      // Trigger custom event for TransactionContext to refresh
      window.dispatchEvent(new Event("userChanged"));
      toast.success("Account created successfully!");
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to create account. Please try again.");
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // Trigger custom event for TransactionContext to refresh
    window.dispatchEvent(new Event("userChanged"));
    toast.info("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

