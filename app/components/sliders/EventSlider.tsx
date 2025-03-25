'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './eventSlider.module.css'
import { EventImages } from '@/constants'

export default function EventSlider () {
  const sliderRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400 // Adjust based on image width
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={styles.gallery}>
      <button className={styles.navButton} onClick={() => scroll('left')}>
        {'<'}
      </button>

      <div ref={sliderRef} className={styles.imageSlider}>
        {EventImages.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => router.push(`/event/${index}`)} // Navigate to full image page
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={500}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <button className={styles.navButton} onClick={() => scroll('right')}>
        {'>'}
      </button>
    </div>
  )
}
