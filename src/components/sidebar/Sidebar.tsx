"use client";

import { useContext } from "react";

import Link from "next/link";

import clsx from "clsx";

import { UiContext } from "@/contexts/UiContext";

const links = [
  { name: "accordion", href: "accordion" },
  { name: "alert", href: "alert" },
  { name: "button", href: "button" },
  { name: "Alert Dialog", href: "alert-dialog" },
  { name: "Dialog", href: "dialog" },
  { name: "Badge", href: "badge" },
  { name: "Calendar", href: "calendar" },
  { name: "Avatar", href: "avatar" },
  { name: "Card", href: "card" },
  { name: "Carousel", href: "carousel" },
  { name: "Checkbox", href: "checkbox" },
  { name: "Command", href: "command" },
  { name: "Combobox", href: "combobox" },
  { name: "ContextMenu", href: "context-menu" },
  { name: "Menubar", href: "menubar" },
  { name: "Input OTP", href: "input-otp" },
  { name: "Progress", href: "progress" },
  { name: "Sheet", href: "sheet" },
  { name: "Skeleton", href: "skeleton" },
  { name: "Slider", href: "slider" },
  { name: "Sonner", href: "sonner" },
  { name: "Toast", href: "toast" },
  { name: "Tabs", href: "tabs" },
  { name: "Data Table", href: "data-table" },
  { name: "Form", href: "form" },
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
          "fixed inset-0 transition-all duration-500 lg:bg-transparent lg:backdrop-filter-none z-0 lg:z-0",
          {
            "bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm z-10":
              isSidebarOpen,
          }
        )}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
};
