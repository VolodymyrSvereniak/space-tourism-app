const destinationPath: Record<string, string> = {
  moon: "/destination/moon",
  mars: "/destination/mars",
  europa: "/destination/europa",
  titan: "/destination/titan",
};

export const currentDestination = (pathname: string): string | undefined => {
  return Object.values(destinationPath).find((path) => path === pathname);
};
