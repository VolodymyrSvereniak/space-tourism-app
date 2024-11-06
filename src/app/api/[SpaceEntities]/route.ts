import { NextResponse } from "next/server";
import { SpaceJourneyData } from "@/interfaces/interfaces";
import Destination from "@/data/destination.json";
import Crew from "@/data/crew.json";
import Technology from "@/data/technology.json";

type SpaceJourneyKey = "destinationKey" | "crewKey" | "technologyKey";

const data: SpaceJourneyData = {
  destinationKey: Destination,
  crewKey: Crew,
  technologyKey: Technology,
} as const;

export async function GET(
  request: Request,
  {
    params: { SpaceEntities },
  }: {
    params: { SpaceEntities: SpaceJourneyKey };
  }
) {
  return await new Promise<NextResponse>((resolve) =>
    resolve(NextResponse.json(data[SpaceEntities]))
  );
}
