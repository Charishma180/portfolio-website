'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'JavaScript'],
  },
  {
    category: 'Data Science',
    skills: [
      'Data Analysis',
      'Data Visualization',
      'Machine Learning',
      'Artificial Intelligence',
      'Pandas',
      'NumPy',
      'Power BI',
      'Excel',
    ],
  },
  {
    category: 'Web Development',
    skills: [
      'HTML',
      'CSS',
      'React (Basic)',
      'Next.js (Basic)',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter Notebook',
    ],
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      id="skills"
      className="py-24 px-6 sm:px-8 lg:px-8 bg-black/30"
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
          <p className="text-primary text-lg font-medium tracking-wider uppercase mb-3">
            Technical Proficiency
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-8">
            A growing technical skill set built through academics, internships,
            personal projects, and continuous hands-on learning in Data Science,
            AI, and modern web technologies.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="glass rounded-2xl p-7 border border-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-primary text-xl font-semibold mb-5">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}