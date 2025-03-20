import styles from './mobilenav.module.css'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  closeMobileNav: () => void
}
// mobile navigation bar. To show when hamburger is clicked
export default function MobileNav ({ closeMobileNav }: Props) {
  return (
    <div className={styles.mobilenav}>
      <div onClick={closeMobileNav}>
        <FaTimes
          color='#ffffff'
          size={30}
          className={styles.times}
          onClick={closeMobileNav}
        />
      </div>
      <nav>
        <div className={styles.logo_container}>
          <Image
            src='/logo.avif'
            alt='Campione logo'
            width={150}
            height={50}
            className={styles.logo}
          />
        </div>

        <ul className={styles.nav_items}>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/'>
            <li>Menu</li>
          </Link>
          <Link href='/'>
            <li>Info</li>
          </Link>
          <Link href='/'>
            <li>About</li>
          </Link>
          <Link href='/'>
            <li>Events</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
