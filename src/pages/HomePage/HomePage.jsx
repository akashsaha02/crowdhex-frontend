import { useState, useEffect } from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import RunningCampaigns from "../../components/RunningCampaigns/RunningCampaigns";
import Banner from "../../components/Banner/Banner";
import OurMission from "../../components/OurMission/OurMission";
import NewsletterFAQ from "../../components/NewsletterFAQ/NewsletterFAQ";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const newTheme = !isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`${isDarkMode ? "dark:bg-gray-900 dark:text-gray-100" : "bg-white text-gray-900"}`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <Banner />
      <RunningCampaigns />
      <HowItWorks />
      <OurMission />
      <NewsletterFAQ/>
    </div>
  );
};

export default HomePage;
