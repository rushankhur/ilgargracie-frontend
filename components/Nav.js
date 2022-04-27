import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href="/weddings">Weddings</Link>
      <Link href="/families">
        <a className="paddingLeft">Families</a>
      </Link>
      <Link href="/couples">
        <a className="paddingLeft">Couples</a>
      </Link>
    </div>
  );
}
