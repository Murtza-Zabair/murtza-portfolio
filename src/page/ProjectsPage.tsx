'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Layers, Sparkles } from 'lucide-react';
const projects = [
  {
    title: 'Reaction Simulator',
    description:
      'Advanced chemical reaction simulation tool built with 3D visualization capabilities. Features interactive molecular models, real-time reaction kinetics, and educational modules for chemistry students.',
    tech: ['NestJS', 'ReactJS', 'Three.js', 'Blender'],
    image: '/Projects/reaction-simulation.png',
    category: 'FYP',
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com/yourusername/reaction-simulator',
    live: 'https://reaction-simulator.demo.com',
  },
  {
    title: 'StaffWatcher-App',
    description:
      'Comprehensive employee monitoring and productivity tracking SaaS platform. Includes time tracking, activity monitoring, screenshot capture, and detailed analytics dashboards for remote teams.',
    tech: ['NestJS', 'ReactJS', 'MongoDB'],
    image: '/Projects/staffwatcher-app.png',
    category: 'SaaS App',
    gradient: 'from-blue-500 to-indigo-500',
    github: 'https://github.com/yourusername/staffwatcher-app',
    live: 'https://staffwatcher-app.demo.com',
  },
  {
    title: 'SunFun Malta System',
    description:
      'Complete travel and tourism management system for Malta-based tour operator. Features online booking, tour management, customer CRM, payment integration, and automated email notifications.',
    tech: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Blade'],
    image: '/Projects/sunfun-malta.png',
    category: 'Web App',
    gradient: 'from-yellow-500 to-orange-500',
    github: 'https://github.com/yourusername/sunfun-malta',
    live: 'https://sunfunmalta.demo.com',
  },
  {
    title: 'IPTV Gamma',
    description:
      'Full-featured IPTV streaming application with live TV channels, VOD content, EPG integration, parental controls, and multi-device support. Optimized for smart TVs and mobile devices.',
    tech: ['React Native', 'Node.js', 'Redux', 'TizenOS'],
    image: '/Projects/gamma-iptv-cover.webp',
    category: 'TV App',
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/yourusername/iptv-gamma',
    live: 'https://play.google.com/store/apps/details?id=com.gamma.iptv.player',
  },
  {
    title: 'Nads Collection',
    description:
      'Modern e-commerce platform for fashion retail with advanced product filtering, wishlist functionality, secure checkout, inventory management, and customer review system.',
    tech: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'React.js'],
    image: '/Projects/nads.png',
    category: 'Ecommerce Store',
    gradient: 'from-pink-500 to-rose-500',
    github: 'https://github.com/yourusername/nads-collection',
    live: 'https://nadscollection.demo.com',
  },
  {
    title: 'Chauffex',
    description:
      'Premium chauffeur service booking platform with real-time vehicle tracking, automated dispatch system, fare calculator, and elegant user interface with smooth animations.',
    tech: ['Next.js', 'Framer Motion', 'Node.js', 'PostgreSQL'],
    image: '/Projects/chauffex.png',
    category: 'Website',
    gradient: 'from-slate-500 to-gray-500',
    github: 'https://github.com/yourusername/chauffex',
    live: 'https://chauffex.demo.com',
  },
  {
    title: 'StaffWatcher Website',
    description:
      'Marketing and landing website for StaffWatcher SaaS platform. Features interactive demos, pricing calculator, customer testimonials, and conversion-optimized design.',
    tech: ['SvelteKit', 'Node.js', 'MongoDB', 'TailwindCSS'],
    image: '/Projects/staffwatcher-website.png',
    category: 'Website',
    gradient: 'from-emerald-500 to-teal-500',
    github: 'https://github.com/yourusername/staffwatcher-website',
    live: 'https://staffwatcher.demo.com',
  },
  {
    title: 'TyroSoft Portfolio',
    description:
      'Professional portfolio website showcasing software development services. Features animated hero sections, project galleries, service offerings, and integrated contact forms with modern UI/UX.',
    tech: ['Next.js', 'Node.js', 'Framer Motion', 'TailwindCSS'],
    image: '/Projects/tyro-soft.png',
    category: 'Website',
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/yourusername/tyrosoft-portfolio',
    live: 'https://tyrosoft.demo.com',
  },
  {
    title: 'Village Zone App',
    description:
      'Community-focused e-commerce marketplace connecting local vendors with customers. Features vendor dashboards, order management, delivery tracking, and integrated payment gateway.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Alpine.js'],
    image: '/Projects/village-zone.png',
    category: 'Ecommerce Store',
    gradient: 'from-green-500 to-lime-500',
    github: 'https://github.com/yourusername/village-zone',
    live: 'https://villagezone.demo.com',
  },
  {
    title: 'Evotex',
    description:
      'Dynamic content management system for corporate websites with drag-and-drop page builder, SEO optimization tools, multi-language support, and role-based access control.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Next.js', 'TailwindCSS'],
    image: '/Projects/evotex.png',
    category: 'CMS Website',
    gradient: 'from-violet-500 to-purple-500',
    github: 'https://github.com/yourusername/evotex',
    live: 'https://evotex.demo.com',
  },
];


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Portfolio Showcase</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-slate-300 to-blue-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in modern web development, creative
            problem-solving, and cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative group h-full">
                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
                />

                {/* Card */}
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-slate-600 transition-all duration-300">
                  {/* Image Section */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-6xl">${project.title.charAt(
                          0
                        )}</div>`;
                      }}
                    />

                    {/* Overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        hoveredProject === project.title ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-full text-xs font-medium`}
                      >
                        <Layers className="w-3 h-3" />
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-4 flex-grow leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-500/10 to-slate-500/10 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Want to see more?</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              These are just a few highlights. Check out my GitHub for more projects and
              contributions.
            </p>
            <a
              href="https://github.com/Murtza-Zabair"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Github size={20} />
                  View GitHub Profile
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
