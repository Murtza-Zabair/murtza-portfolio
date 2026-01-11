'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about-me', icon: User },
  { name: 'My Work', path: '/my-work', icon: Briefcase },
  { name: 'Contact', path: '/contact-me', icon: Mail },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setPathname(window.location.pathname);
    const handleRouteChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    const interval = setInterval(() => {
      if (window.location.pathname !== pathname) {
        setPathname(window.location.pathname);
      }
    }, 100);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      clearInterval(interval);
    };
  }, [pathname]);

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="group relative">
            <div className="absolute -inset-2 bg-linear-to-r from-blue-500 to-slate-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500" />
            <div className="relative text-2xl font-bold">
              <span className="bg-linear-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                MZ
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <a key={item.path} href={item.path} className="group relative">
                  <div
                    className={`absolute -inset-2 bg-linear-to-r from-blue-500 to-slate-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500`}
                  />

                  <div
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-linear-to-r from-blue-600/20 to-slate-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </div>

                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-blue-400 to-slate-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="group relative px-6 py-2.5 bg-linear-to-r from-blue-600 to-slate-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 space-y-2">
            {navItems.map((item, i) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-linear-to-r from-blue-600/20 to-slate-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${i * 50}ms` : '0ms',
                  }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}

            <button className="w-full mt-4 px-6 py-3 bg-linear-to-r from-blue-600 to-slate-600 rounded-lg font-semibold text-white">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
