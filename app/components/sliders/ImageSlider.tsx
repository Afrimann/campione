'use client' // Forces client-side rendering in Next.js 13+

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './imageSlider.module.css'
import { GalleryImages } from '@/constants'

export default function ImageSlider () {
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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Runs only on the client
  }, [])

  return (
    <div className={styles.gallery} ref={sliderRef}>
      <button className={styles.navButton} onClick={() => scroll('left')}>
        {'<'}
      </button>
      {GalleryImages.map((image, index) =>
        isClient ? ( // Render motion.div only on the client
          <motion.div
            key={index}
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            // whileHover={{ scale: 1.1 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={500}
              className={styles.image}
            />
          </motion.div>
        ) : (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={500}
              className={styles.image}
            />
          </div>
        )
      )}

      <button className={styles.navButton} onClick={() => scroll('right')}>
        {'>'}
      </button>
    </div>
  )
}
