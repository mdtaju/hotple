"use client";
import { useTheme } from "next-themes";
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === 'system' ? systemTheme : theme;

  // theme changing handler
  function changeToLightHandler() {
    if (theme === "dark") {
      setTheme("light");
    }
  }

  // theme changing handler
  function changeToDarkHandler() {
    if (theme === "light") {
      setTheme("dark");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button onClick={changeToLightHandler}>
        <LuSunMedium />
      </button>
      <button onClick={changeToDarkHandler}>
        <IoMoonOutline />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
