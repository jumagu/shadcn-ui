import { ShadcnIcon } from "../icons";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { ToggleSidebarButton } from "./ToggleSidebarButton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full dark:bg-[#09090B] dark:border-[#1E1E1E]">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <ToggleSidebarButton />

            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <ShadcnIcon />
              <span className="self-center whitespace-nowrap ml-2">
                Shadcn/ui
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {/* Toggle Theme Button */}
            <ToggleThemeButton />

            {/* User Avatar */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JG</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};
