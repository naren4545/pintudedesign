"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaHashtag,
  FaBell,
  FaUser,
  FaSignOutAlt,
  FaNewspaper,
  FaCog,
} from "react-icons/fa";

import { usePathname } from "next/navigation";

// SidebarItem component with proper TypeScript props
interface SidebarItemProps {
  label: string;
  linkTo: string;
  onclick: () => void; // Corrected from 'linlTo'
}

const SidebarItem = ({ label, linkTo, onclick }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === linkTo;
  const style = isActive ? " bg-gray-200 text-black" : "";

  return (
    <Link href={linkTo} onClick={onclick}>
      <div
        className={
          "flex items-center space-x-3 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg p-3" +
          style
        }
      >
        <span>{label}</span>
      </div>
    </Link>
  );
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  lg:hidden">
      <div className={`lg:hidden p-2  z-30 right-4 top-[50px] transform -translate-y-1/2 ${isOpen ?"fixed right-4 z-30 px-4":"absolute"}`}>
        <button
          onClick={toggleSidebar}
          aria-label="Close menu"
          className="text-black hover:text-white focus:outline-none focus:text-white"
        >
          {isOpen ? (
""          ) : (
            <FaBars className="w-6 h-6 text-black" />
          )}
        </button>
      </div>
      <div
        className={+isOpen ? "bg-[#00000050] absolute w-full h-full  " : ""}
      ></div>
      <div
        className={`${
          isOpen ? "translate-x-[0]" : " translate-x-[100%]"
        } lg:translate-x-0 px-4 bg-white right-0 hamburger transition-transform transform  fixed  w-64 h-full min-h-screen z-10 md:z-auto top-0 shadow-lg`}
      >
        <div className="p-4">
          <div className="text-right pt-3">
            <div>
            <button
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-3"
            >
              {isOpen ?             <FaTimes className="w-8 h-8 text-black pr-3" />
: <FaBars className="w-6 h-6 text-black" />}

            </button>
            </div>
          </div>
          <nav className="pt-2">
            <SidebarItem onclick={toggleSidebar} label="Home" linkTo="" />
            <SidebarItem
              onclick={toggleSidebar}
              label="About Us"
              linkTo="#about"
            />
            <SidebarItem
              onclick={toggleSidebar}
              label="How It Works"
              linkTo="#howitwork"
            />

            <SidebarItem
              onclick={toggleSidebar}
              label="Pricing"
              linkTo="#pricing"
            />
            <SidebarItem onclick={toggleSidebar} label="FAQ" linkTo="#faq" />

            <div className="pt-5">
              {" "}
              <a
                href="tel:+91 82373 58619"
                className=" mt-5 text-xl bg-[#13A8DA] text-white px-6 py-4 rounded-[41px] hover:bg-gray-100 transition-colors"
              >
                Business Login
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
