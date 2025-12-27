'use client'

import { motion } from 'framer-motion'
import { scaleIn } from '../lib/animations'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group"
    >
      <div className="h-48 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center text-6xl">
        {project.image}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
