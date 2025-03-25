'use client'
import Image from 'next/image'
import styles from './header.module.css'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import MobileNav from '../mobileNav/MobileNav'
import { useState } from 'react'
import MenuDropDown from './menuDropDown'

// header for all pages
export default function Header () {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const closeMobileNav = () => setShowMobileNav(false)
  const openMobileNav = () => setShowMobileNav(true)
  const [showMenuList, setShowMenuList] = useState<boolean>(false)
  const closeMenuList = () => setShowMenuList(false)
  const openMenuList = () => setShowMenuList(true)

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
            />
          </div>
          <div className={styles.menubar} onClick={openMobileNav}>
            <FaBars color='#373d20' size={20} />
          </div>
          <div className={styles.nav_items}>
            <div>
              <Link href='/'>
                <li>Home</li>
              </Link>
            </div>
            <div className={styles.dropdown} onMouseOver={openMenuList} onClick={closeMenuList}>
              <Link href='/menu/'>
                <li>Menu</li>
              </Link>
              {showMenuList && <MenuDropDown setShowMenuList={setShowMenuList}/>}
            </div>
            <div>
              <Link href='/info/'>
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
