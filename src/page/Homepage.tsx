'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<any | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: any) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Pure black base layer */}
      <div className="absolute inset-0 bg-black" />

      {/* Image layer - fully bright and colored */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/hero.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0, 0, 0, 1) 0%, 
            rgba(0, 0, 0, 0.8) 40%,
            rgba(0, 0, 0, 0) 100%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0, 0, 0, 1) 0%, 
            rgba(0, 0, 0, 0.8) 40%,
            rgba(0, 0, 0, 0) 100%)`,
        }}
      />

      {/* Colored glow effect matching your image colors */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(100, 150, 200, 0.3) 0%,
            rgba(150, 180, 210, 0.15) 30%,
            rgba(80, 120, 160, 0.08) 50%,
            transparent 70%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <div
            className={`mb-6 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className=" font-bold mb-4 leading-tight">
              <span className="text-6xl md:text-7xl block text-slate-200 mb-2">Hi, I'm</span>
              <span className=" text-6xl md:text-7xl block bg-linear-to-r from-blue-400 via-slate-300 to-blue-300 bg-clip-text text-transparent">
                Murtza Zabair
              </span>
              <span className="text-4xl pt-6 italic font-normal md:text-4xl block bg-linear-to-r from-blue-400 via-slate-300 to-blue-300 bg-clip-text text-transparent">
                𝓳𝓾𝓼𝓽 𝓬𝓪𝓵𝓵 𝓶𝓮 "𝓐𝓵𝓲"
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Full-Stack Developer & Creative Technologist crafting exceptional digital experiences
            with cutting-edge technology
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex gap-4 justify-center flex-wrap mb-16 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-slate-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
              <Link href="/my-work" className="relative z-10 flex items-center gap-2">
                <Briefcase size={20} />
                View My Work
              </Link>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg font-semibold text-slate-200 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
              <Link href="/contact-me" className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </Link>
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex gap-6 justify-center transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="https://github.com/Murtza-Zabair"
              className="p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-full hover:bg-slate-700/50 hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="text-slate-300" />
            </Link>
            <Link
              href="https://linkedin.com/in/murtza-zabair"
              className="p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-full hover:bg-slate-700/50 hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-slate-300" />
            </Link>
            <Link
              href="mailto:murtzazabair@gmail.com"
              className="p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-full hover:bg-slate-700/50 hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} className="text-slate-300" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="animate-bounce">
            <ArrowDown className="text-slate-500" size={32} />
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
