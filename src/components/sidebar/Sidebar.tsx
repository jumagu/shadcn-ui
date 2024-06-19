"use client";

import { useContext } from "react";

import Link from "next/link";

import clsx from "clsx";

import { UiContext } from "@/contexts/UiContext";

const links = [
  { name: "accordion", href: "accordion" },
  { name: "alert", href: "alert" },
  { name: "button", href: "button" },
];
export const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UiContext);

  return (
    <>
      <aside
        id="sidebar"
        className={clsx(
          "fixed z-20 h-full top-0 left-0 pt-16 flex flex-shrink-0 flex-col w-64 max-w-[calc(100vw-48px)] lg:translate-x-0 transition-all duration-300",
          { "-translate-x-full": !isSidebarOpen }
        )}
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 borderR border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {links.map((link) => (
                  <li key={link.href} onClick={() => setIsSidebarOpen(false)}>
                    <Link
                      href={link.href}
                      className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>

      <div
        id="sidebarBackdrop"
        className={clsx(
          "fixed inset-0 lg:backdrop-filter-none lg:bg-transparent transition-all duration-500",
          {
            "bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm z-10": isSidebarOpen,
          }
        )}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
};
