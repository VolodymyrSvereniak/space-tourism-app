import Image from "next/image";
import Logo from "@/assets/shared/logo.svg";
import HeaderNavigation from "./HeaderNavigation";

export default function Page() {
  return (
    <header className='h-32 flex flex-row items-center justify-between -gap-32 pt-10'>
      <Image src={Logo} alt="logo" width={48} height={48} />    
      <nav>
        <HeaderNavigation />
      </nav>
    </header>
  );
}
