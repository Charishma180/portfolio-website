'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 lg:px-8 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl"
      >
        {/* Profile */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="glass p-2 rounded-full">
            <Image
              src="/profile.png"
              alt="Charishma Pillapalem"
              width={220}
              height={220}
              priority
              className="rounded-full object-cover w-44 h-44 md:w-56 md:h-56"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
            Aspiring Data Scientist
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">
            Charishma Pillapalem
          </span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl font-semibold text-primary mb-6"
        >
          Computer Science Student • AI & Machine Learning Enthusiast • Data Science Learner
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 leading-8 max-w-3xl mx-auto mb-12"
        >
         Passionate about Data Science, Machine Learning, and AI building practical solutions through continuous learning and real-world projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="gradient-gold text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex justify-center"
        >
          <ArrowDown className="text-primary" size={30} />
        </motion.div>
      </motion.div>
    </section>
  )
}