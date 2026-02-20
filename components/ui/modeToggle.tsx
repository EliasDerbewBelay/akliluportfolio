"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "./button";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={handleToggle}>
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </Button>
  );
}
