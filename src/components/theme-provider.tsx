"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <MaterialThemeProvider
      value={{
        dialog: {
          styles: {
            base: {
              backdrop: {
                position: "fixed overscroll-y-auto overflow-auto",
              },
            },
          },
        },
      }}
    >
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </MaterialThemeProvider>
  );
}
