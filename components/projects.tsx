'use client'

import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Amarism – Educational Platform',
    description:
      'A modern educational platform developed to showcase Amarism initiatives, learning resources, and programs. Designed with a clean, responsive interface focused on accessibility and user experience.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/Charishma180',
    live: '#',
    initials: 'AM',
  },
  {
    id: 2,
    title: 'College Document Management System',
    description:
      'A secure document management system built to simplify academic document handling with role-based access, organized records, and an intuitive user interface.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Charishma180',
    live: '#',
    initials: 'CDMS',
  },
  {
    id: 3,
    title: 'CineBook',
    description:
      'A movie discovery application developed as a Data Science project, providing an engaging interface for exploring movies while applying data-driven concepts.',
    tags: ['React', 'JavaScript', 'Python'],
    github: 'https://github.com/Charishma180',
    live: '#',
    initials: 'CB',
  },
]

export function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-8 lg:px-8 bg-black/30"
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
            Featured Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Selected Projects
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-8">
            A collection of projects that reflect my learning journey in Data
            Science, Artificial Intelligence, and modern web development through
            practical, real-world applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300 group"
            >
              {/* Project Banner */}
              <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">

                <div className="absolute w-44 h-44 rounded-full bg-primary/10 blur-3xl" />

                <span className="text-5xl font-bold text-primary/70 tracking-widest z-10">
                  {project.initials}
                </span>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-foreground/70 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 rounded-full text-sm bg-primary/10 border border-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                                <div className="flex items-center justify-between pt-5 border-t border-primary/10">

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-all"
                  >
                    <Code size={18} />
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-all"
                  >
                    Live Preview
                    <ExternalLink size={18} />
                  </motion.a>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com/Charishma180"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            View More on GitHub
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}