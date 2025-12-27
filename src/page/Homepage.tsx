'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'
import { fadeInUp, staggerContainer } from '../lib/animations'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20" />
      
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center px-6"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Murtza Zabair
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Full-Stack Developer & UI/UX Enthusiast crafting beautiful digital experiences
        </motion.p>

        <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects">
            <AnimatedButton>View My Work</AnimatedButton>
          </Link>
          <Link href="/contact">
            <AnimatedButton variant="secondary">Get In Touch</AnimatedButton>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-gray-500" size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
