"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import blur from "@public/assets/blur.png";
import home from "@public/assets/home/background-home-desktop.jpg";
import crew from "@public/assets/crew/background-crew-desktop.jpg";
import destination from "@public/assets/destination/background-destination-desktop.jpg";
import technology from "@public/assets/technology/background-technology-desktop.jpg";

import homeTablet from "@public/assets/home/background-home-tablet.jpg";
import crewTablet from "@public/assets/crew/background-crew-tablet.jpg";
import destinationTablet from "@public/assets/destination/background-destination-tablet.jpg";
import technologyTablet from "@public/assets/technology/background-technology-tablet.jpg";

import homeMobile from "@public/assets/home/background-home-mobile.jpg";
import crewMobile from "@public/assets/crew/background-crew-mobile.jpg";
import destinationMobile from "@public/assets/destination/background-destination-mobile.jpg";
import technologyMobile from "@public/assets/technology/background-technology-mobile.jpg";

interface Images {
  [key: string]: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

const backgroundImages: Images = {
  "/": {
    desktop: home.src,
    tablet: homeTablet.src,
    mobile: homeMobile.src,
  },
  "/crew": {
    desktop: crew.src,
    tablet: crewTablet.src,
    mobile: crewMobile.src,
  },
  "/destination": {
    desktop: destination.src,
    tablet: destinationTablet.src,
    mobile: destinationMobile.src,
  },
  "/technology": {
    desktop: technology.src,
    tablet: technologyTablet.src,
    mobile: technologyMobile.src,
  },
};

export default function BackgroundImage() {
  const [screenSize, setScreenSize] = useState<StaticImageData | string>(blur);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let imageKey;

      if (screenWidth < 768) {
        imageKey = "mobile";
      } else if (screenWidth < 1024) {
        imageKey = "tablet";
      } else {
        imageKey = "desktop";
      }

      const currentBackgrounds: { [key: string]: string } =
        backgroundImages[pathname] || backgroundImages["/"];

      setScreenSize(currentBackgrounds[imageKey]);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenSize, pathname]);

  return (
    <>
      <Image
        src={screenSize}
        key={pathname}
        priority
        objectFit="cover"
        alt="Background"
        fill
        quality={100}
        sizes="100vw"
        className="-z-50 animate-fade"
      />
    </>
  );
}
