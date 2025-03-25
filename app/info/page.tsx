'use client'
import { motion } from 'framer-motion'
import styles from './info.module.css'
import Image from 'next/image'

export default function Info () {
  return (
    <div className={styles.info}>
      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        className={styles.head}
      >
        INFO
      </motion.h2>

      {/* info content */}
      <div className={styles.infoWrapper}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: 0.2 }}
          className={styles.infoImage}
        >
          <Image
            src='/food3.jpg'
            alt='Food image'
            width={400}
            height={500}
            className={styles.image}
          />
        </motion.div>
        <div className={styles.infoContent}>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
            >
              hours
            </motion.h2>
            <div>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span>Dinner: Wednesday - Monday</span>
                <span>Brunch: Saturday & Sunday</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span>Seatings from 5 - 9pm</span>
                <span>Seatings from 10am - 1:45pm</span>
              </motion.p>
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
            >
              address
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>101 MAIN ST. LIVINGSTON, MONTANA 59047</span>
              <p>Call us at (407)-333-2427</p>
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
            >
              reservation
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>Call or stop by for Dinner Reservations.</p>
              <p>*Groups of 7 or more, please consult our</p>
              <span>family style menu</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
