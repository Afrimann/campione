"use client";
import styles from "../page.module.css";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay },
  }),
};

export default function HomeContent() {
  return (
    <motion.div
      className={styles.others}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h2 custom={0.25} variants={fadeUpVariant}>
        Made from scratch
      </motion.h2>
      <motion.p custom={0.35} variants={fadeUpVariant}>
        Hear more about our process and story.
      </motion.p>
      <motion.button custom={0.45} variants={fadeUpVariant}>
        Learn More
      </motion.button>
    </motion.div>
  );
}
