"use client";

import { useEffect, useState } from "react";

import { UiContext } from "@/contexts/UiContext";

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <UiContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </UiContext.Provider>
  );
};
