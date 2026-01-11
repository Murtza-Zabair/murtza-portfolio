'use client';

import React, { useState } from 'react';
import { Code2, Database, Palette, Zap, Globe, Terminal } from 'lucide-react';
import { FaAws, FaLaravel, FaLinux, FaNode, FaPhp } from 'react-icons/fa';
import { RiJavascriptLine, RiVercelLine } from 'react-icons/ri';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiNestjs, SiSvelte } from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import Link from 'next/link';

const technologies = [
  {
    name: 'Php',
    icon: FaPhp,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'JavaScript',
    icon: RiJavascriptLine,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'TypeScript',
    icon: TbBrandTypescript,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'React.js',
    icon: FaReact,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Next.js',
    icon: TbBrandNextjs,
    color: 'from-slate-400 to-slate-600',
  },
  {
    name: 'SveleteKit',
    icon: SiSvelte,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Node.js',
    icon: FaNode,
    color: 'from-green-400 to-emerald-600',
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
    color: 'from-sky-400 to-cyan-500',
  },
  {
    name: 'Laravel',
    icon: FaLaravel,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Oracle',
    icon: GrOracle,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Linux',
    icon: FaLinux,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Vercel',
    icon: RiVercelLine,
    color: 'from-purple-400 to-pink-500',
  },
];

export default function AboutPage() {
  const [hoveredTech, setHoveredTech] = useState<any | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Right Side - Content */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-slate-300 to-blue-300 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full" />
              </div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm a{' '}
                  <span className="text-blue-400 font-semibold">
                    passionate full-stack developer
                  </span>{' '}
                  who transforms complex problems into elegant, intuitive solutions. With a keen eye
                  for design and a love for clean code, I craft digital experiences that make a
                  difference.
                </p>

                <p>
                  My journey in tech is driven by curiosity and innovation. I specialize in building
                  <span className="text-slate-200 font-semibold">
                    {' '}
                    performant, scalable applications
                  </span>{' '}
                  using cutting-edge technologies, always pushing the boundaries of what's possible
                  on the web.
                </p>

                {/* <p>
                  When I'm not coding, you'll find me exploring emerging technologies, contributing
                  to open-source projects, or sharing knowledge with the developer community. I
                  believe in
                  <span className="text-blue-400 font-semibold"> continuous learning</span> and
                  giving back.
                </p> */}
              </div>

              {/* Education */}
              <div className="relative p-6 bg-gradient-to-br from-blue-500/10 to-slate-500/10 rounded-xl border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">University of Punjab</h3>
                    <p className="text-slate-400">Bachelor's Degree in Information Technology</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    1+
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Dedication</div>
                </div>
              </div>
            </div>

            {/* Left Side - Image */}
            <div
              className={`relative transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative group">
                {/* Glowing border effect */}
                {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-slate-500 to-blue-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" /> */}

                {/* Image container */}
                <div className="relative ">
                  <img src="/ali2.png" alt="Murtza Zabair" className="w-full h-auto object-cover" />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-slate-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                Tech Arsenal
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              The powerful tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Hexagon Grid Layout */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className={`transition-all duration-700 delay-${index * 100}`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="relative group h-full">
                      {/* Glowing background */}
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
                      />

                      {/* Card */}
                      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 h-full flex flex-col items-center justify-center gap-4 group-hover:border-slate-600 transition-all duration-300 group-hover:scale-105">
                        {/* Icon */}
                        <div
                          className={`p-2 rounded-lg text-white bg-opacity-10`}
                        >
                          <Icon
                            className={`w-12 h-12 text-white ${tech.color} bg-clip-text text-transparent`}
                            style={{ filter: 'brightness(1.5)' }}
                          />
                        </div>

                        {/* Tech name */}
                        {/* <div className="text-center">
                          <h3 className="font-bold text-white text-lg mb-1">{tech.name}</h3>
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
              <Link href="/contact-me" className="relative z-10 flex items-center gap-2">
                <Code2 size={20} />
                Let's Build Something Amazing
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
