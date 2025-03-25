'use client'
import { GalleryImages } from '@/constants'
import { useParams, useRouter } from 'next/navigation'
import styles from '../menu/menu.module.css'
import Image from 'next/image'
// import { images } from './sliders/MenuSlider'

export default function SingleMenuView () {
  const router = useRouter()
  // retrieve slug from url
  const { menuId } = useParams()
  const currentIndex = parseInt(menuId as string, 11)

  const nextMenu = () => {
    const nextIndex = (currentIndex + 1) % GalleryImages.length
    router.push(`/menu/${nextIndex}`)
  }
  const prevMenu = () => {
    const prevIndex =
      (currentIndex - 1 + GalleryImages.length) % GalleryImages.length
    router.push(`/menu/${prevIndex}`)
  }
  return (
    <div className={styles.singlemenu}>
      <button className={styles.navButton} onClick={prevMenu}>
        {'<'}
      </button>

      <div>
        <Image
          src={GalleryImages[currentIndex].src}
          alt={GalleryImages[currentIndex].alt}
          width={400}
          height={400}
          className={styles.menuImage}
        />
      </div>
      <button className={styles.navButton} onClick={nextMenu}>
        {'>'}
      </button>
    </div>
  )
}
