import { useEffect, useState } from "react";

const Button = () => {
  const storedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(() => {
    // const storedTheme = localStorage.getItem('theme');
    return (
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const handleSystemThemeChange = (e) => {
    const newTheme = e.matches ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  // Listen for changes in the system preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <div className="App">
      <h1>With System Preference</h1>
      <button
        className="border px-4 py-1 rounded font-bold bg-[#e6f7ff] text-[#087ea4] "
        onClick={toggleTheme}
      >
        {theme === "light" ? "Turn Dark" : "Turn Light"}
      </button>
    </div>
  );
};

export default Button;

