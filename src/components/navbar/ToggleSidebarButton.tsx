"use client";

import { useContext } from "react";

import { UiContext } from "@/contexts/UiContext";

import { CrossIcon, MenuIcon } from "../icons";

export const ToggleSidebarButton = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UiContext);

  return (
    <button
      id="toggleSidebarMobile"
      aria-expanded="true"
      aria-controls="sidebar"
      className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded dark:text-gray-300 dark:hover:bg-[#1E1E1E] dark:focus:bg-[#1E1E1E] dark:focus:ring-gray-800"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      {isSidebarOpen ? <CrossIcon /> : <MenuIcon />}
    </button>
  );
};
