import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='siteNav'>
      <div className='logoContainer'>
        <Image
          src='/truth-bomb-social_logo-white-v1.svg' 
          alt="Truth Bomb Social Logo" 
          quality={100}
          sizes={"100vw"}
          width={125} 
          height={80}
        />
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
  );
}
