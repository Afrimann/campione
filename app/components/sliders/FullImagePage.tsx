'use client'

import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import styles from './fullimage.module.css'
import { EventImages } from '@/constants'

export default function FullImagePage() {
  const router = useRouter()
  const { imageId } = useParams() // Get image index from URL
  const currentIndex = parseInt(imageId as string, 10)

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % EventImages.length
    router.push(`/event/${nextIndex}`)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + EventImages.length) % EventImages.length
    router.push(`/event/${prevIndex}`)
  }

  return (
    <div className={styles.fullScreen}>
      <button className={styles.navButton} onClick={prevImage}>
        {'<'}
      </button>

      <div>
      <Image
        src={EventImages[currentIndex].src}
        alt={EventImages[currentIndex].alt}
        width={EventImages[currentIndex].width}
        height={600}
        className={styles.fullImage}
      />
      </div>

      <button className={styles.navButton} onClick={nextImage}>
        {'>'}
      </button>
    </div>
  )
}
