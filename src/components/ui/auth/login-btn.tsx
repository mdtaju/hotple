"use client";
import { useEffect, useState } from "react";
import AuthWindow from "./auth-window";
import { useTheme } from "next-themes";

export default function LoginBtn() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { theme } = useTheme();
  const [backDropColor, setBackDropColor] = useState(
    "rgba(255, 255, 255, 0.4)"
  );

  useEffect(() => {
    if (theme !== "light") {
      setBackDropColor("rgba(0, 0, 0, 0.2)");
    } else {
      setBackDropColor("rgba(0, 0, 0, 0.4)");
    }
  }, [theme]);

  useEffect(() => {
    setDialogOpen(true);
  }, []);

  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        className="sidebar_login_button">
        로그인
      </button>
      <AuthWindow
        open={dialogOpen}
        setOpen={setDialogOpen}
        backDropColor={backDropColor}
      />
    </>
  );
}
