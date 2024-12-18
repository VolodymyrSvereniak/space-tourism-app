interface Paths {
  [key: string]: string;
}

const destinationPath: Paths = {
  moon: "/destination/moon",
  mars: "/destination/mars",
  europa: "/destination/europa",
  titan: "/destination/titan",
};

const crewPath: Paths = {
  command: "/crew/commander",
  mission: "/crew/mission-specialist",
  pilot: "/crew/pilot",
  engineer: "/crew/flight-engineer",
};

const technologyPath: Paths = {
  launch: "/technology/launch-vehicle",
  spaceport: "/technology/spaceport",
  capsule: "/technology/space-capsule",
};

const pathMatcher = (checkPath: Paths, pathname: string) => {
  return Object.values(checkPath).find((path) => path === pathname);
};

export const getPath = (pathname: string): string | undefined => {
  if (pathname.includes("destination")) {
    return pathMatcher(destinationPath, pathname);
  }

  if (pathname.includes("crew")) {
    return pathMatcher(crewPath, pathname);
  }

  if (pathname.includes("technology")) {
    return pathMatcher(technologyPath, pathname);
  }
};
