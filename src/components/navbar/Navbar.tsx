import { ShadcnIcon } from "../icons";
import { ToggleSidebarButton } from "./ToggleSidebarButton";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
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
          <div className="flex items-center">
            {/* User Avatar */}
            <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
              JG
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
