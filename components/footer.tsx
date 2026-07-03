'use client'

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-lg text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >

          {/* NAME */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-5">
              Charishma Pillapalem
            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 leading-7">
              Computer Science student passionate about Data Science,
              Artificial Intelligence, Machine Learning and Full Stack Development.
              <br /><br />
              Turning ideas into intelligent solutions through code and creativity.
            </p>
          </motion.div>

          {/* SOCIAL LINKS (NO ICON LIBRARY - PURE EMOJIS SAFE) */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mt-10 text-2xl"
          >
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:scale-125 transition"
            >
              🐙
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:scale-125 transition"
            >
              💼
            </a>

            <a
              href="mailto:test@gmail.com"
              className="hover:scale-125 transition"
            >
              ✉️
            </a>
          </motion.div>

          {/* BACK TO TOP */}
          <motion.div variants={itemVariants} className="mt-10">
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              ⬆️ Back to Top
            </a>
          </motion.div>

          {/* COPYRIGHT */}
          <motion.p
            variants={itemVariants}
            className="mt-10 text-sm text-gray-500"
          >
            © {currentYear} Charishma Pillapalem. All rights reserved.
          </motion.p>

        </motion.div>

      </div>
    </footer>
  )
}