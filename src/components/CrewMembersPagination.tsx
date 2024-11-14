"use client";
import Link from "next/link";
import { CrewMember } from "@/types/interfaces";
import { usePathname } from "next/navigation";

export default function CrewMembersPagination({
  crewData,
}: {
  crewData: CrewMember[];
}) {
  const pathname = usePathname();

  const setCurrentRole = (role: string): string | undefined => {
    if (pathname.includes(role.toLowerCase())) {
      return "border-white";
    }
  };

  return (
    <nav>
      <ul className="flex items-end gap-5">
        {crewData.map((crewMember) => (
          <li className="w-[15px] h-[15px]" key={crewMember.role}>
            <Link
              href={`/crew/${crewMember.role.toLowerCase()}`}
              className={`${
                setCurrentRole(crewMember.role) || "hover:border-white/50"
              } block border-8 w-full h-full border-gray-700 rounded-full`}
            ></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
