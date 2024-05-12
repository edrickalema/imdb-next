"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-500 transition-colors duration-300 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
