"use client";
import NavigationProvider from "@/providers/navigation-provider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const router = useRouter();
  return (
    <NextUIProvider>
      <ThemeProvider
        defaultTheme="purple"
        attribute="class"
        themes={["orange", "purple"]}
      >
        <NavigationProvider>{children}</NavigationProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
