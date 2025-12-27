'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animations';
import PageTransition from '../components/PageTransition';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  'PostgreSQL',
  'MongoDB',
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I'm a passionate developer who loves creating elegant solutions to complex problems.
              With expertise in modern web technologies, I focus on building performant, accessible,
              and visually stunning applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.h3
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-6 text-white"
          >
            Skills
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center"
              >
                <span className="text-lg font-medium text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
