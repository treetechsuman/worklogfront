import React, { useState, useEffect } from "react";

function Theme() {
  // Theme state
  const [theme, setTheme] = useState("light");

  // Load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme; // Apply saved theme to <body>
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
    document.body.className = newTheme; // Apply new theme to <body>
  };

  return (
   
      <a onClick={toggleTheme} href="#">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </a>
    
  );
}

export default Theme;
