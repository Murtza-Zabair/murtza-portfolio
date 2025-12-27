'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../lib/animations'
import PageTransition from '../components/PageTransition'
import AnimatedButton from '../components/AnimatedButton'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { icon: Github, link: 'https://github.com/murtzazabair', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com/in/murtzazabair', label: 'LinkedIn' },
    { icon: Mail, link: 'mailto:murtza@example.com', label: 'Email' }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>

          <motion.form
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="space-y-6 mb-12"
          >
            <motion.div variants={fadeInUp}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                required
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <AnimatedButton type="submit">
                <span className="flex items-center gap-2">
                  Send Message <Send size={18} />
                </span>
              </AnimatedButton>
            </motion.div>
          </motion.form>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={label}
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
