// import Image from 'next/image'
import MenuContent from '../components/MenuContent'
import MenuSlider from '../components/sliders/MenuSlider'
import styles from './menu.module.css'
import Link from 'next/link'

//the default menu page
export default function Menu () {
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu}>
        <div>
          <MenuContent />
        </div>
        <div className={styles.gridbtns}>
          <div className={styles.upper}>
            <button><Link href='/menu/dinner'>dinner</Link></button>
            <button><Link href='/menu/take-out'>take out</Link></button>
            <button><Link href='/menu/brunch'>brunch</Link></button>
            <button><Link href='/menu/family-style'>family style</Link></button>
          </div>
          <div className={styles.lower}>
            {' '}
            <button><Link href='/menu/wine'>wine</Link></button>
          </div>
        </div>

        <div className={styles.menu_slider}>
          <MenuSlider />
        </div>
      </div>
    </div>
  )
}
