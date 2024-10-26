import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@/assets/shared/logo.svg";
import HeaderNavigation from "./HeaderNavigation";

export default function Page() {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="logo" width={48} height={48} />    
      <nav>
        <HeaderNavigation />
      </nav>
    </header>
  );
}
