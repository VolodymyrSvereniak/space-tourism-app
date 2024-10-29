import Image from "next/image";
import Logo from "@/assets/shared/logo.svg";
import HeaderNavigation from "./HeaderNavigation";

export default async function Page() {
  return (
    <header className="-gap-32 flex h-36 flex-row items-center justify-between pt-10">
      <div>
        <Image
          className="ml-16 mx-auto"
          src={Logo}
          alt="logo"
          width={48}
          height={48}
        />
      </div>
      <nav className="flex justify-center gap-2 text-white w-1/2 h-24 backdrop-blur-md bg-blured custom-before-line">
        <HeaderNavigation />
      </nav>
    </header>
  );
}
