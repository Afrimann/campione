'use client'
import { motion } from 'framer-motion'
import styles from '../menu/menu.module.css'
export default function MenuContent () {
  return (
    <div className={styles.menu_content}>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        viewport={{once: true}}
      >
        our menu
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{once: true}}
      >
        At Campione, we take the Italian ethos of honoring the ingredient to
        heart and work intimately with local farmers, artisans, and purveyors in
        order to assure the finest quality products find a home in our kitchen.
        Our core menu features local proteins, pastas and seasonal vegetable
        dishes, along with fresh baked-goods, Roman-Style pizzas and sandwiches
        for brunch. An ever changing variety of seasonal specials complement
        these staples, keeping the dining experience vibrant and dynamic.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{once: true}}
      >
        We believe eating well should not be reserved solely for special
        occasions, but that real food from real ingredients is an integral part
        of daily life.{' '}
      </motion.p>
    </div>
  )
}
