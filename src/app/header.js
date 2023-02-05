import Link from "next/link";

export default function Header() {
  return (
    <>
      <div>
        <p>Truth Bomb Social</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

