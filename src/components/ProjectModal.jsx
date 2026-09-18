import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-[var(--border-color)] max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] font-bold">
              {project.category}
            </span>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Image */}
          <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-900 border border-[var(--border-color)]/60">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase mb-1">
              Overview
            </h3>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase mb-2">
              Key Features & Architectural Highlights
            </h3>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              {(project.highlights || [
                "Responsive, modern UX built with crisp typography and clean interaction states.",
                "High-performance backend API routes with asynchronous validation and database indexes.",
                "Thoroughly documented codebase with CI/CD integration and unit test coverage."
              ]).map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase mb-2">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/50 flex justify-end gap-3">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>View Source Code</span>
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Live App</span>
          </a>
        </div>
      </div>
    </div>
  );
}
