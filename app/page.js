import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/meals">meals</Link>
          </li>
          <li>
            <Link href="/meals/share">share</Link>
          </li>
          <li>
            <Link href="/community">community</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
