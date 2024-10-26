"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeadNavigation() {
  const pathname = usePathname();

  return (
    <>
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href={"/"}>
        Home
      </Link>
      <Link
        className={`link ${pathname === "/destination" ? "active" : ""}`}
        href={"/destination"}
      >
        Destination
      </Link>
      <Link
        className={`link ${pathname === "/crew" ? "active" : ""}`}
        href={"/crew"}
      >
        Crew
      </Link>
      <Link
        className={`link ${pathname === "/technology" ? "active" : ""}`}
        href={"/technology"}
      >
        Technology
      </Link>
    </>
  );
}
