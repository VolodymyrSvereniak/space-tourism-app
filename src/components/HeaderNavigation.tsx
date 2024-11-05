"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { currentDestination } from "@/utils/setPlanetsBorder";

export default function HeadNavigation() {
  const pathname = usePathname();
  const destinationPath = currentDestination(pathname);

  return (
    <div className="flex gap-12 font-barlowCondensed">
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative tracking-widest ${
          pathname === "/" ? "border-b-4" : "hover-header-link"
        }`}
        href={"/"}
      >
        <b className="mr-3 font-bold">00</b> HOME
      </Link>
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative tracking-widest ${
          pathname === destinationPath ? "border-b-4" : "hover-header-link"
        }`}
        href={"/destination"}
      >
        <span className="mr-3 font-bold">01</span> DESTINATION
      </Link>
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative tracking-widest ${
          pathname === "/crew" ? "border-b-4" : "hover-header-link"
        }`}
        href={"/crew"}
      >
        <span className="mr-3 font-bold">02</span> CREW
      </Link>
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative tracking-widest ${
          pathname === "/technology" ? "border-b-4" : "hover-header-link"
        }`}
        href={"/technology"}
      >
        <span className="mr-3 font-bold">03</span> TECHNOLOGY
      </Link>
    </div>
  );
}
