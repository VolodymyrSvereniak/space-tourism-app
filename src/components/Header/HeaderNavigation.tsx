"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeadNavigation() {
  const pathname = usePathname();

  return (
    <>
      <Link
        rel="preload"
        className={`link ${pathname === "/" ? "active" : ""}`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        rel="preload"
        className={`link ${pathname === "/destination" ? "active" : ""}`}
        href={"/destination"}
      >
        Destination
      </Link>
      <Link
        rel="preload"
        className={`link ${pathname === "/crew" ? "active" : ""}`}
        href={"/crew"}
      >
        Crew
      </Link>
      <Link
        rel="preload"
        className={`link ${pathname === "/technology" ? "active" : ""}`}
        href={"/technology"}
      >
        Technology
      </Link>
    </>
  );
}
