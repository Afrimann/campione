import styles from './mobilenav.module.css'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
interface Props {
  closeMobileNav: () => void
}
// mobile navigation bar. To show when hamburger is clicked
export default function MobileNav ({ closeMobileNav }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className={styles.mobilenav}
    >
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
          <Link href='/' onClick={closeMobileNav}>
            <li>Home</li>
          </Link>
          <Link href='/menu/' onClick={closeMobileNav}>
            <li>Menu</li>
          </Link>
          <Link href='/info/' onClick={closeMobileNav}>
            <li>Info</li>
          </Link>
          <Link href='/about/' onClick={closeMobileNav}>
            <li>About</li>
          </Link>
          <Link href='/event/' onClick={closeMobileNav}>
            <li>Events</li>
          </Link>
        </ul>
      </nav>
    </motion.div>
  )
}
