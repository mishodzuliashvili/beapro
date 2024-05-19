"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/button";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-4">
      <Button
        variant="flat"
        className="bg-[#6b41ed] text-white"
        onClick={() => setTheme("purple")}
      >
        Purple
      </Button>
      <Button
        className="bg-[#FF6500] text-white"
        variant="flat"
        onClick={() => setTheme("orange")}
      >
        Orange
      </Button>
    </div>
  );
}
