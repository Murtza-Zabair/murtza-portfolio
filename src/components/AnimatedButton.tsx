'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

export default function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
}: AnimatedButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white',
    secondary: 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`px-8 py-3 rounded-lg font-medium ${variants[variant]}`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
