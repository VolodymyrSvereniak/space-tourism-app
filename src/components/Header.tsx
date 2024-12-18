import Image from "next/image";
import Logo from "@public/assets/shared/logo.svg";
import HeaderNavigation from "./HeaderNavigation";

export default async function Page() {
  return (
    <header className="-gap-32 flex h-36 flex-row items-center justify-between pt-10 max-lg:p-0 max-lg:h-[96px]">
      <div>
        <Image
          className="ml-16 mx-auto max-lg:m-5"
          src={Logo}
          alt="logo"
          width={48}
          height={48}
        />
      </div>
      <HeaderNavigation />
    </header>
  );
}
