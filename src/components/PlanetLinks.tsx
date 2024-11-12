"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SpaceJourneyEntities } from "@/types/interfaces";

interface PlanetLinksProps {
  planetData: SpaceJourneyEntities;
}

export default function PlanetLinks({ planetData }: PlanetLinksProps) {
  const pathname = usePathname();

  const setBorder = (planetName: string): string | undefined => {
    if (pathname.includes(planetName.toLowerCase())) {
      return "border-b-4";
    }
  };

  return (
    <ul className="flex gap-8 font-barlowCondensed ">
      {planetData.destination.map((d) => (
        <li className=" pb-2 justify-center" key={d.name}>
          <Link
            className={`text-lg pb-2 tracking-[2px] uppercase ${
              setBorder(d.name) ||
              "hover:border-b-4 hover:border-white/50 transition-all"
            }`}
            href={`/destination/${d.name.toLowerCase()}`}
          >
            {d.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
