'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUpRight,
} from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )

      setSuccess(true)

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setTimeout(() => setSuccess(false), 4000)
    } catch (error) {
      alert('Failed to send message.')
    }

    setLoading(false)
  }

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
    hidden: {
      opacity: 0,
      y: 20,
    },
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
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest mb-3">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>

          <p className="text-foreground/70 max-w-2xl mx-auto">
            I'm always open to internships, collaborations,
            freelance opportunities and exciting projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >

          {/* LEFT SIDE */}

          <motion.div
            variants={itemVariants}
            className="glass rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-7">

              <a
                href="mailto:charishmapillapalem@gmail.com"
                className="flex items-center gap-5 hover:text-primary transition"
              >
                <Mail size={24} className="text-primary" />

                <div>
                  <p className="text-sm text-foreground/60">
                    Email
                  </p>

                  <p>
                    charishmapillapalem@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919676516710"
                className="flex items-center gap-5 hover:text-primary transition"
              >
                <Phone size={24} className="text-primary" />

                <div>
                  <p className="text-sm text-foreground/60">
                    Phone
                  </p>

                  <p>
                    +91 9676516710
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5">

                <MapPin
                  size={24}
                  className="text-primary"
                />

                <div>
                  <p className="text-sm text-foreground/60">
                    Location
                  </p>

                  <p>
                    Rajampet, Andhra Pradesh
                  </p>

                  <p className="text-primary text-sm">
                   
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-10 border-t border-primary/10 pt-8">

              <a
                href="https://github.com/Charishma180"
                target="_blank"
                className="flex justify-between items-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 mb-4"
              >
                <div>

                  <h4 className="font-semibold">
                    GitHub
                  </h4>

                  <p className="text-sm text-foreground/60">
                    View My Projects
                  </p>

                </div>

                <ArrowUpRight className="text-primary"/>
              </a>

              <a
                href="https://www.linkedin.com/in/charishma-pillapalem-4a6668292"
                target="_blank"
                className="flex justify-between items-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 mb-6"
              >
                <div>

                  <h4 className="font-semibold">
                    LinkedIn
                  </h4>

                  <p className="text-sm text-foreground/60">
                    Let's Connect
                  </p>

                </div>

                <ArrowUpRight className="text-primary"/>
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex justify-center items-center gap-3 py-4 rounded-xl gradient-gold font-semibold"
              >
                <Download size={20}/>

                Download Resume
              </a>

            </div>

          </motion.div>
                    {/* RIGHT SIDE */}

          <motion.div
            variants={itemVariants}
            className="glass rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold mb-8">
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-primary/20 bg-transparent px-4 py-3 outline-none focus:border-primary"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-primary/20 bg-transparent px-4 py-3 outline-none focus:border-primary"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full rounded-xl border border-primary/20 bg-transparent px-4 py-3 outline-none focus:border-primary"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-primary/20 bg-transparent px-4 py-3 outline-none resize-none focus:border-primary"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl gradient-gold font-semibold hover:scale-[1.02] transition"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <div className="text-green-500 text-center font-medium mt-2">
                  ✅ Your message has been sent successfully!
                </div>
              )}

            </form>

          </motion.div>

        </motion.div>

      </div>

    </section>

  )
}