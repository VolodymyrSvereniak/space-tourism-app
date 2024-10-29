"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeadNavigation() {
  const pathname = usePathname();

  return (
    <div className="flex gap-12 ">
      <Link
        rel="preload"
        className={` flex items-center justify-center h-full relative ${
          pathname === "/" ? "border-b-4" : "hover-header-link"
        }`}
        href={"/"}
      >
        {pathname === "/" ? "00 Menu" : "00 Home"}
      </Link>
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative ${
          pathname === "/destination" ? "border-b-4" : "hover-header-link"
        }`}
        href={"/destination"}
      >
        {pathname === "/destination" ? "01 Menu" : "01 Destination"}
      </Link>
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative ${
          pathname === "/crew" ? "border-b-4" : "hover-header-link"
        }`}
        href={"/crew"}
      >
        {pathname === "/crew" ? "02 Menu" : "02 Crew"}
      </Link>
      <Link
        rel="preload"
        className={`flex items-center justify-center h-full relative ${
          pathname === "/technology" ? "border-b-4" : "hover-header-link"
        }`}
        href={"/technology"}
      >
        {pathname === "/technology" ? "03 Menu" : "03 Technology"}
      </Link>
    </div>
  );
}
