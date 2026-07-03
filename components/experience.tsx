'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Data Science Intern',
    company: 'Srivensy Technologies',
    period: 'Ongoing',
    description:
      'Currently gaining practical experience in Data Science by working on real-world datasets, data preprocessing, visualization, and machine learning concepts.',
    highlights: [
      'Working with Python for data analysis',
      'Learning data preprocessing and feature engineering',
      'Exploring machine learning workflows and model development',
    ],
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Pantech eLearning',
    period: 'May 2025 – Jul 2025',
    description:
      'Completed an internship focused on Data Science fundamentals, Python programming, data visualization, and introductory machine learning concepts.',
    highlights: [
      'Worked on data analysis using Python',
      'Performed exploratory data analysis',
      'Built mini machine learning projects',
    ],
  },
  {
    id: 3,
    title: 'Full Stack Python Intern',
    company: 'Lineysha & Thevan Software Technologies',
    period: 'Jun 2023 – Nov 2023',
    description:
      'Completed hands-on training in Full Stack Python development while building web applications and strengthening frontend and backend concepts.',
    highlights: [
      'Built responsive web pages',
      'Worked with Python programming',
      'Learned frontend and backend fundamentals',
    ],
  },
  {
    id: 4,
    title: 'Google Cloud Career Launchpad Member',
    company: 'Google Cloud',
    period: '2026',
    description:
      'Selected as a Google Cloud Career Launchpad member to strengthen cloud computing and AI skills through industry learning opportunities.',
    highlights: [
      'Learning Google Cloud fundamentals',
      'Exploring cloud technologies',
      'Participating in technical learning programs',
    ],
  },
  
]

const certifications = [
  {
    title: 'Add Your Certification',
    issuer: 'Certification Provider',
    date: 'Year',
  },
  {
    title: 'Add Your Certification',
    issuer: 'Certification Provider',
    date: 'Year',
  },
  {
    title: 'Add Your Certification',
    issuer: 'Certification Provider',
    date: 'Year',
  },
  {
    title: 'Add Your Certification',
    issuer: 'Certification Provider',
    date: 'Year',
  },
]

export function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-8 lg:px-8 bg-black/20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-lg font-medium tracking-wider uppercase mb-3">
            Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Experience & Professional Development
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-8">
            My journey of continuous learning through internships, technical
            programs, leadership opportunities, and professional certifications.
          </p>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8 border border-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-5">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {exp.title}
                  </h3>

                  <p className="text-primary font-medium mt-1">
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm text-foreground/60 mt-3 lg:mt-0">
                  {exp.period}
                </span>

              </div>

              <p className="text-foreground/70 leading-7 mb-5">
                {exp.description}
              </p>

              <ul className="space-y-3">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground/70"
                  >
                    <span className="text-primary mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

              {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-primary text-lg font-medium tracking-wider uppercase mb-3">
            Credentials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  ✓
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {cert.title}
                  </h3>

                  <p className="text-foreground/70 mt-1">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-primary mt-2">
                    {cert.date}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add More Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-foreground/60 text-sm">
            More certifications and achievements will be added as I continue my learning journey.
          </p>
        </motion.div>

      </div>
    </section>
  )
}