import Link from "next/link";

import logoImage from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImage.src} alt="logo" />
        NextLevel food
      </Link>

      <nav>
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
  );
}
