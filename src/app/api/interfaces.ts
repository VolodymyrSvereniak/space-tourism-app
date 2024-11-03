export interface Destination {
  destination: Array<{
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  }>;
}

export interface Crew {
  crew: Array<{
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  }>;
}

export interface Technology {
  technology: Array<{
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  }>;
}

export interface SpaceJourneyData {
  destinationKey: Destination;
  crewKey: Crew;
  technologyKey: Technology;
}

export type SpaceJourneyEntities = Destination & Crew & Technology;
