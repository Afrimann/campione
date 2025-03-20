import HomeContent from './components/Others'
import ImageSlider from './components/sliders/ImageSlider'
import styles from './page.module.css'

export default function HomePage () {
  return (
    <div className={styles.container}>
      {/* intro section */}
      <h2 className={styles.heading}>adding monday dinner service</h2>
      {/* custom carousel */}
      <div className={styles.image_container}>
        <ImageSlider />
      </div>
      
      {/* other content */}
        <HomeContent />
    </div>
  )
}
