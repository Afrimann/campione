'use client'
import styles from './header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
interface Props {
  setShowMenuList: Dispatch<SetStateAction<boolean>>
}

export default function MenuDropDown ({ setShowMenuList }: Props) {
  const router = useRouter()
  const redirect = (route: string) => {
    router.push(route)
  }
  const closeMenu = (route: string) => {
    setShowMenuList(false)
    redirect(route)
  }
  return (
    <div className={styles.menu_dropdown} onClick={() => setShowMenuList(false)}>
      <ul>
        <li onClick={() => {closeMenu('/menu/dinner')}}>
          <Link href='/dinner' className={styles.menuList}>
            Dinner
          </Link>
        </li>
        <li onClick={() => {closeMenu('/menu/brunch')}}>
          <Link href='/brunch' className={styles.menuList}>
            BRUNCH
          </Link>
        </li>
        <li onClick={() => {closeMenu('/menu/take-out')}}>
          <Link href='/take-out' className={styles.menuList}>
            TAKE-OUT
          </Link>
        </li>
        <li onClick={() => {closeMenu('/menu/family-style')}}>
          <Link href='/family-style' className={styles.menuList}>
            FAMILY
          </Link>
        </li>
        <li onClick={() => {closeMenu('/menu/wine')}}>
          <Link href='/wine' className={styles.menuList}>
            WINE
          </Link>
        </li>
      </ul>
    </div>
  )
}
