"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
