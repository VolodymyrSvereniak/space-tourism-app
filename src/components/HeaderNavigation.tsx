"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getPath } from "@/utils/getPath";

export default function HeadNavigation() {
  const pathname = usePathname();

  const currentPath = getPath(pathname);

  const setBorder = (path: string) => {
    return pathname.includes(path) && currentPath;
  };

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
          setBorder("destination") ? "border-b-4" : "hover-header-link"
        }`}
        href={"/destination/moon"}
      >
        <span className="mr-3 font-bold">01</span> DESTINATION
      </Link>
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative tracking-widest ${
          setBorder("crew") ? "border-b-4" : "hover-header-link"
        }`}
        href={"/crew/commander"}
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
