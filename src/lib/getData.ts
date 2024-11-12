import { SpaceJourneyEntities } from "@/types/interfaces";

export default async function getData(
  entity: string
): Promise<SpaceJourneyEntities> {
  const response = await fetch(`https://volodymyrsvereniak-space-tourism-app.vercel.app/api/${entity}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
