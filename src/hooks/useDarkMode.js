import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const colorTheme = theme === "dark" ? "light" : "dark";

  localStorage.setItem("theme", colorTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  return [colorTheme, setTheme];
}
