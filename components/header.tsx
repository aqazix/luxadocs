import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <ul aria-label="Getting Started">
              <li className="title">Getting Started</li>
              <hr />
              <li>
                <Link href={"/"}>Welcome</Link>
              </li>
              <li>
                <Link href={"/installation"}>Installation</Link>
              </li>
              <li>
                <Link href={"/principles"}>Principles</Link>
              </li>
              <li>
                <Link href={"/design"}>Design</Link>
              </li>
              <li>
                <Link href={"/support"}>Support</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul aria-label="Layout">
              <li className="title">Layout</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
