import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    // Here you would typically make an API call to your backend
    // For demo purposes, we'll use mock data
    if (email === "demo@example.com" && password === "password") {
      const userData = {
        id: "1",
        email: email,
        name: "Demo Client",
        albums: [
          {
            id: "1",
            title: "Wedding Day",
            date: "2023-10-15",
            photos: [
              { id: "1", url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a" },
              { id: "2", url: "https://images.unsplash.com/photo-1583939003579-730e3918a45b" }
            ]
          }
        ]
      };
      setCurrentUser(userData);
      return true;
    }
    throw new Error("Invalid credentials");
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}