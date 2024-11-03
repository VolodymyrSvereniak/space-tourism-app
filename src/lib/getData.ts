import { SpaceJourneyEntities } from "@/app/api/interfaces";

export default async function getData(
  entity: string
): Promise<SpaceJourneyEntities> {
  const response = await fetch(`http://localhost:3000/api/${entity}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch planet data");
  }

  return response.json();
}
