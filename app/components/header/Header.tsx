'use client'
import Image from 'next/image'
import styles from './header.module.css'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import MobileNav from '../mobileNav/MobileNav'
import { useState } from 'react'

// header for all pages
export default function Header () {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const closeMobileNav = () => setShowMobileNav(false)
  const openMobileNav = () => setShowMobileNav(true)

  return (
    <>
    {showMobileNav && <MobileNav closeMobileNav={closeMobileNav} />}
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <nav>
        <div className={styles.logo}>
          <Image
            src='/logo.avif'
            alt='Campione'
            width={250}
            height={70}
            className={styles.logo_image}
            //    layout="responsive"
          />
        </div>
        <div className={styles.menubar} onClick={openMobileNav}>
          <FaBars color='#373d20' size={20} />
        </div>
        <div className={styles.nav_items}>
          <div>
            <Link href=''>
              <li>Home</li>
            </Link>
          </div>
          <div>
            <Link href=''>
              <li>Menu</li>
            </Link>
          </div>
          <div>
            <Link href=''>
              <li>Info</li>
            </Link>
          </div>
          <div>
            <Link href=''>
              <li>About</li>
            </Link>
          </div>
          <div>
            <Link href=''>
              <li>Events</li>
            </Link>
          </div>
        </div>
      </nav>
    </header>
    </>

  )
}
