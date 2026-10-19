"use client";

import { TertiaryButton } from "@/components/ui/primary_button/Button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setMounted] = useState<boolean>()

  useEffect(() => {
    setMounted(true)
  },[])

  if (!isMounted) {
    <TertiaryButton>{" "}</TertiaryButton>
  }

  const isDark = resolvedTheme === "dark";

  return (
    <TertiaryButton
      aria-label="Alternar tema das cores"
      onClick={() =>  setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Moon /> : <Sun />}
    </TertiaryButton>
  );
}
