import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function ExperienceSection({ experiences }) {
  return (
    <div className="w-full">
      {/* Full-width Top Header Bar */}
      <SectionHeader title="Experience" />

      {/* Main Body Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-32">
        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 space-y-12 sm:space-y-16">
          {/* Timeline connecting vertical rail */}
          <div className="absolute left-[11px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-[var(--border-color)]" />

          {experiences.map((exp, expIdx) => (
            <div key={exp.id || expIdx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              {/* Left Node & Role Label */}
              <div className="flex items-start gap-4 md:w-56 shrink-0 pt-1">
                {/* Timeline Node Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-white border-4 border-[var(--accent-color)] shadow-sm shrink-0 mt-1" />
                
                {/* Role Title on Left */}
                <div className="pr-2">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-tight">
                    {exp.role}
                  </h3>
                </div>
              </div>

              {/* Right: Detailed Experience Card */}
              <div className="flex-1 w-full bg-white rounded-3xl p-6 sm:p-8 border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all duration-200">
                {/* Card Header */}
                <div className="border-b border-[var(--border-color)]/60 pb-5 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-[var(--bg-primary)] flex items-center justify-center text-base font-bold shadow-inner">
                        {exp.companyLogo}
                      </span>
                      <span className="font-bold text-lg text-[var(--text-primary)]">
                        {exp.company}
                      </span>
                      {exp.status && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[var(--accent-color)] text-white">
                          {exp.status}
                        </span>
                      )}
                    </div>
                    
                    {exp.type && (
                      <span className="text-xs font-mono text-[var(--text-secondary)] px-2.5 py-1 rounded-full border border-[var(--border-color)]">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  {/* Sub info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Numbered Projects / Highlights */}
                <div className="space-y-6 mb-6">
                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="bg-[var(--bg-primary)]/40 rounded-2xl p-4 sm:p-5 border border-[var(--border-color)]/40">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[var(--text-secondary)]">
                          {proj.code}
                        </span>
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">
                          {proj.title}
                        </h4>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-[13px] text-[var(--text-secondary)] pl-4 list-disc">
                        {proj.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Tech Tags Bottom Row */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-color)]/50">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
