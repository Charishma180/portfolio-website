'use client'

import { motion } from 'framer-motion'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-8 lg:px-8 bg-black/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-lg font-medium mb-3 tracking-wider uppercase">
            Get to Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-9"
            >
             'm Charishma Pillapalem, a Computer Science student with a strong interest in Data Science, AI, and Full Stack Development. I enjoy solving real-world problems through technology and continuously learning new skills while building impactful projects.
            </motion.p>

            
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="space-y-8">
              {/* Education */}
              <div className="border-b border-primary/20 pb-6">
                <h3 className="text-primary font-semibold text-lg mb-3">
                  🎓 Education
                </h3>

                <p className="font-medium">
                  B.Tech – Computer Science & Engineering (Data Science)
                </p>

                <p className="text-foreground/70">
                  Annamacharya Institute of Technology and Sciences, Rajampet
                </p>

                <p className="text-sm text-foreground/60 mt-1">
                  2024 – 2027 • CGPA: <span className="text-primary">9.32</span>
                </p>
              </div>

              {/* Previous Education */}
              <div className="border-b border-primary/20 pb-6">
                <h3 className="text-primary font-semibold text-lg mb-3">
                  📚 Previous Education
                </h3>

                <p className="font-medium">
                  Diploma in Cloud Computing & Big Data
                </p>

                <p className="text-foreground/70">
                  St. Mary's Women's Engineering College, Guntur
                </p>

                <p className="text-sm text-foreground/60 mt-1">
                  2021 – 2024 • Percentage:
                  <span className="text-primary"> 91.5%</span>
                </p>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-primary font-semibold text-lg mb-3">
                  🚀 Interests
                </h3>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                    Artificial Intelligence
                  </span>

                  <span className="px-3 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                    Machine Learning
                  </span>

                  <span className="px-3 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                    Data Analytics
                  </span>

                  <span className="px-3 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                    Cloud Computing
                  </span>

                  <span className="px-3 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '9.32', label: 'CGPA' },
            { number: '3+', label: 'Internships' },
            { number: '2+', label: 'Projects' },
            { number: '10+', label: 'Certifications' },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-primary">
                {item.number}
              </h3>

              <p className="text-foreground/70 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}