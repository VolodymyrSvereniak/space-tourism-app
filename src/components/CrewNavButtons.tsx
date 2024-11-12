"use client";
import Link from "next/link";
import { CrewMember } from "@/types/interfaces";

export default function CrewNavButtons({ crewData }: { crewData: CrewMember[] }) {

  return (
    <nav className="flex gap-5">
      {crewData.map((member) => (
        <Link
          key={member.role}
          href={`/crew/${member.role.toLowerCase()}`}
          className=""
        >
          {member.name}
        </Link>
      ))}
    </nav>
  );
}
