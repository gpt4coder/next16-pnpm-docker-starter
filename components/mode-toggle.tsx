"use client";

import { useTheme } from "next-themes";
import { DynamicIcon } from "lucide-react/dynamic";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      onClick={handleToggle}
    >
      <DynamicIcon
        name={theme === "dark" ? "sun" : "moon"}
        className="h-5 w-5 rotate-0 scale-100 transition-all"
      />
    </button>
  );
}
