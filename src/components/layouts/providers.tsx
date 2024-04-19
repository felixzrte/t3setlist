"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ClerkProvider>{children}</ClerkProvider>
      </ThemeProvider>
    </>
  );
}
