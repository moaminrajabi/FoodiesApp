import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImage} alt="logo" priority />
          NextLevel food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals"> Browser Meals </Link>
            </li>
            <li>
              <Link href="/community"> Browser Meals </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}