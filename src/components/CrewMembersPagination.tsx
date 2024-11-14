"use client";
import Link from "next/link";
import { CrewMember } from "@/types/interfaces";

export default function CrewMembersPagination({
  crewData,
}: {
  crewData: CrewMember[];
}) {
  return (
    <nav>
      <ul className="flex items-end gap-5">
        {crewData.map((crewMember) => (
          <li className="w-[15px] h-[15px]" key={crewMember.role}>
            <Link
              href={`/crew/${crewMember.role.toLowerCase()}`}
              className="block border-8 w-full h-full border-gray-700 rounded-full hover:border-white/50"
            ></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
