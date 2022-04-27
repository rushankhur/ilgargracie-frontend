import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Home page</Link>
      </div>
      <Nav />
    </header>
  );
}
