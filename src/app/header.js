import Link from 'next/link';

export default function Header() {
  return (
    <header className='siteNav'>
      <div className='logoContainer'>
        <p className='logo'>Truth Bomb Social</p>
      </div>
      <nav>
        <ul className='siteNav__list'>
          <li className='siteNav__item'>
            <Link href="/">Home</Link>
          </li>
          <li className='siteNav__item'>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


