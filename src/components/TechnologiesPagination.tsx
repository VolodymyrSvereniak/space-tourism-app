"use client";
import Link from "next/link";
import { CurrentTechnology } from "@/types/interfaces";
import { usePathname } from "next/navigation";

export default function TechnologiesPagination({
  technologyData,
}: {
  technologyData: CurrentTechnology[];
}) {
  const pathname = usePathname();

  const setCurrentTechnology = (technology: string): string | undefined => {
    if (pathname.includes(technology.toLowerCase())) {
      return "bg-white text-black";
    }
  };

  return (
    <nav>
      <ul className="flex flex-col gap-6 items-center justify-center">
        {technologyData.map((mechanism, index) => (
          <li className="flex w-[80px] h-[80px]" key={mechanism.name}>
            <Link
              href={`/technology/${mechanism.name.toLowerCase()}`}
              className={`${
                setCurrentTechnology(mechanism.name) || "hover:border-white"
              } flex items-center justify-center w-[80px] h-[80px] font-bellefair text-4xl border-2 border-gray-700 rounded-full`}
            >
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
