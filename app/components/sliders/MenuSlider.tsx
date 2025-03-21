'use client'
import Image from 'next/image'
import styles from './menuslider.module.css'
import { useRef } from 'react'

const images = [
  '/food.jpg',
  '/food2.jpg',
  '/food3.jpg',
  '/food.jpg',
  '/food2.jpg',
  '/food3.jpg',
  '/food2.jpg',
  '/food.jpg',
  '/food3.jpg',
  '/food2.jpg'
]

export default function MenuSlider () {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 320 // Adjust based on your image width
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.navButton} onClick={() => scroll('left')}>
        {'<'}
      </button>

      <div className={styles.imageWrapper} ref={sliderRef}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={src}
              alt={`Menu ${index + 1}`}
              width={400}
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
