"use client";

import { createContext } from "react";

interface UiContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UiContext = createContext<UiContextType>({} as UiContextType);
