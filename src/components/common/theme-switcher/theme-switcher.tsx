"use client";
import { useTheme } from "next-themes";
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === 'system' ? systemTheme : theme;

  // theme changing handler
  function changeToLightHandler() {
    if (theme !== "light") {
      setTheme("light");
    }
  }

  // theme changing handler
  function changeToDarkHandler() {
    if (theme !== "dark") {
      setTheme("dark");
    }
  }

  return (
    <div className="theme_switcher_container">
      <button
        onClick={changeToLightHandler}
        className={`${theme !== "dark" ? "light_btn_active" : ""}`}>
        <LuSunMedium />
      </button>
      <button
        onClick={changeToDarkHandler}
        className={`${theme !== "light" ? "light_btn_active" : ""}`}>
        <IoMoonOutline />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
