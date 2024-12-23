import React from "react";
import { useTheme } from "./ThemeContext"; // Import the custom hook to access theme

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Get the current theme and toggle function from context

  return (
    <a onClick={toggleTheme} href="#">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </a>
  );
};

export default ThemeToggle;
