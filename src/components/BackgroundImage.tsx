"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { currentDestination } from "@/utils/setPlanetsBorder";

import blur from "@public/assets/blur.png";

interface Images {
  [key: string]: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export default function BackgroundImage() {
  const [screenSize, setScreenSize] = useState<StaticImageData | string>(blur);

  const pathname = usePathname();
  const destination = currentDestination(pathname);

  useEffect(() => {
    const backgroundImages: Images = {
      "/": {
        desktop: "/assets/home/background-home-desktop.jpg",
        tablet: "/assets/home/background-home-tablet.jpg",
        mobile: "/assets/home/background-home-mobile.jpg",
      },
      "/crew": {
        desktop: "/assets/crew/background-crew-desktop.jpg",
        tablet: "/assets/crew/background-crew-tablet.jpg",
        mobile: "/assets/crew/background-crew-mobile.jpg",
      },
      [`${destination}`]: {
        desktop: "/assets/destination/background-destination-desktop.jpg",
        tablet: "/assets/destination/background-destination-tablet.jpg",
        mobile: "/assets/destination/background-destination-mobile.jpg",
      },
      "/technology": {
        desktop: "/assets/technology/background-technology-desktop.jpg",
        tablet: "/assets/technology/background-technology-tablet.jpg",
        mobile: "/assets/technology/background-technology-mobile.jpg",
      },
    };

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
  }, [setScreenSize, pathname, destination]);

  return (
    <>
      <Image
        className="-z-50 animate-fade"
        src={screenSize}
        key={pathname}
        loading="eager"
        priority
        objectFit="cover"
        alt="Background"
        fill
        quality={100}
        sizes="100vw"
      />
    </>
  );
}
