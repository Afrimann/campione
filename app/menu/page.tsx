// import Image from 'next/image'
import MenuContent from '../components/MenuContent'
import MenuSlider from '../components/sliders/MenuSlider'
import styles from './menu.module.css'
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
            <button>dinner</button>
            <button>take out</button>
            <button>brunch</button>
            <button>family style</button>
          </div>
          <div className={styles.lower}>
            {' '}
            <button>wine</button>
          </div>
        </div>

        <div className={styles.menu_slider}>
          <MenuSlider />
        </div>
      </div>
    </div>
  )
}
