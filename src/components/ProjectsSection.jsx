import React, { useState } from 'react';
import { ExternalLink, Code2, Eye } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function ProjectsSection({ projects, onSelectProject }) {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI & Tools', 'Frontend', 'Full Stack', 'Web & API'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === 'Web & API' && p.category?.includes('Web')));

  return (
    <div className="w-full">
      {/* Full-width Top Header Bar */}
      <SectionHeader title="Projects" />

      {/* Main Body Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-32 space-y-8">
        {/* Optional Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-[var(--accent-color)] text-white shadow-sm'
                  : 'bg-white text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[var(--border-color)] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-color)] transition-colors">
                  {proj.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4 min-h-[3.25rem]">
                  {proj.description}
                </p>

                {/* Project Preview Image */}
                <div 
                  onClick={() => onSelectProject(proj)}
                  className="w-full h-44 rounded-2xl overflow-hidden bg-slate-900 mb-4 cursor-pointer relative group/img border border-[var(--border-color)]/60"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>Preview Details</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="tech-tag text-[10.5px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border-color)]/40">
                <a
                  href={proj.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={proj.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
