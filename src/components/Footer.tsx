import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Murtza-Zabair', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com/in/murtza-zabair', label: 'LinkedIn' },
    { icon: Mail, link: 'mailto:murtzazabair@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-black border-t border-slate-800/50">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">© {currentYear} Murtza Zabair</p>
          </div>

          {/* Center - Tagline */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-sm">
              <span className="text-slate-500">Better Hire</span>
              <span className="text-white">Ali</span>
            </div>
            <p className="text-slate-600 text-xs mt-1">Building the future, one line at a time</p>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4 justify-center md:justify-end">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-slate-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500" />
                  <div className="relative p-2 text-slate-400 hover:text-blue-400 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
