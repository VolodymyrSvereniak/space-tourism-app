"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getPath } from "@/utils/getPath";
import { useState } from "react";

export default function HeadNavigation() {
  const [mobileIsOpen, setMobileIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const currentPath = getPath(pathname);

  const setBorder = (path: string) => {
    return pathname.includes(path) && currentPath;
  };

  const toggleMobileMenu = () => {
    setMobileIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`${
          mobileIsOpen
            ? "max-sm:block max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:w-[70%] max-sm:h-full max-sm:z-10 max-sm:pt-40"
            : "max-sm:hidden"
        } flex justify-center gap-2 text-white w-extended h-24 backdrop-blur-md bg-blured custom-before-line max-lg:w-full max-lg:h-full`}
      >
        <div className="flex gap-12 font-barlowCondensed max-sm:flex-col max-sm:gap-8 max-sm:pl-10">
          <Link
            rel="preload"
            className={`flex items-center justify-center h-full relative tracking-widest max-sm:justify-start cursor-default ${
              pathname === "/"
                ? "border-b-4 max-sm:border-r-4 max-sm:border-b-0"
                : "hover-header-link"
            }`}
            href={"/"}
          >
            <b className="mr-3 font-bold">00</b> HOME
          </Link>
          <Link
            rel="preload"
            className={`flex items-center justify-center h-full relative tracking-widest max-sm:justify-start cursor-default ${
              setBorder("destination")
                ? "border-b-4 max-sm:border-r-4 max-sm:border-b-0"
                : "hover-header-link"
            }`}
            href={"/destination/moon"}
          >
            <span className="mr-3 font-bold">01</span> DESTINATION
          </Link>
          <Link
            rel="preload"
            className={`flex items-center justify-center h-full relative tracking-widest max-sm:justify-start cursor-default ${
              setBorder("crew")
                ? "border-b-4 max-sm:border-r-4 max-sm:border-b-0"
                : "hover-header-link"
            }`}
            href={"/crew/commander"}
          >
            <span className="mr-3 font-bold">02</span> CREW
          </Link>
          <Link
            rel="preload"
            className={`flex items-center justify-center h-full relative tracking-widest max-sm:justify-start cursor-default ${
              setBorder("technology")
                ? "border-b-4 max-sm:border-r-4 max-sm:border-b-0"
                : "hover-header-link"
            }`}
            href={"/technology/launch-vehicle"}
          >
            <span className="mr-3 font-bold">03</span> TECHNOLOGY
          </Link>
        </div>
      </nav>
      <button
        className={`${
          mobileIsOpen && "text-7xl"
        } hidden max-sm:inline-block text-5xl mr-10 text-white max-sm:z-10 cursor-default`}
        onClick={toggleMobileMenu}
      >
        {mobileIsOpen ? "\u00D7" : "\u2630"}
      </button>
    </>
  );
}
