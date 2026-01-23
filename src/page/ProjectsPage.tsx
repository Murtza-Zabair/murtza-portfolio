'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Layers, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../lib/data';



export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<any>(null);
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
            <span className="bg-linear-to-r from-blue-400 via-slate-300 to-blue-300 bg-clip-text text-transparent">
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
                  className={`absolute -inset-0.5 bg-linear-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
                />

                {/* Card */}
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-slate-600 transition-all duration-300">
                  {/* Image Section */}
                  <div
                    className={`relative h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e: any) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-6xl">${project.title.charAt(
                          0
                        )}</div>`;
                      }}
                    />

                    {/* Overlay on hover */}
                    {/* <div
                      className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        hoveredProject === project.title ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </Link>
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col grow">
                    {/* Category badge */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 bg-linear-to-r ${project.gradient} bg-opacity-10 rounded-full text-xs font-medium`}
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
                    <p className="text-slate-400 mb-4 grow leading-relaxed text-sm">
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
          <div className="inline-block p-8 bg-linear-to-br from-blue-500/10 to-slate-500/10 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Want to see more?</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              These are just a few highlights. Check out my GitHub for more projects and
              contributions.
            </p>
            <Link
              href="https://github.com/Murtza-Zabair"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              <button className="relative px-8 py-4 bg-linear-to-r from-blue-600 to-slate-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Github size={20} />
                  View GitHub Profile
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
