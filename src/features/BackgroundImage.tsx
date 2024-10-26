"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import home from "@/assets/home/background-home-desktop.jpg";
import destination from "@/assets/destination/background-destination-desktop.jpg";
import crew from "@/assets/crew/background-crew-desktop.jpg";
import technology from "@/assets/technology/background-technology-desktop.jpg";

// import homeMobile from "@/assets/home/background-home-mobile.jpg";
// import destinationMobile from "@/assets/destination/background-destination-mobile.jpg";

interface BackgroundImages {
  [key: string]: string;
}

const deskTopBackgrounds: BackgroundImages = {
  "/": home.src,
  "/crew": crew.src,
  "/destination": destination.src,
  "/technology": technology.src,
};

// const mobileBackgrounds: BackgroundImages = {
//   "/": homeMobile.src,
//   "/destination": destinationMobile.src,
// };

export default function BackgroundImage() {
  const pathname = usePathname();

  return (
    <>
      <Image
        src={deskTopBackgrounds[pathname] || home.src}
        alt=""
        fill
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw"
        style={{
          objectFit: "cover",
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
          zIndex: "-1",
          transition: "image 0.5s ease-in-out",
        }}
      />
    </>
  );
}
