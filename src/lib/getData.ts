import { SpaceJourneyEntities } from "@/interfaces/interfaces";

export default async function getData(
  entity: string
): Promise<SpaceJourneyEntities> {
  const response = await fetch(`http://localhost:3000/api/${entity}`, {
    cache: "force-cache"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch planet data");
  }

  return response.json();
}
