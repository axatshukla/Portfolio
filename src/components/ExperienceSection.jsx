import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function ExperienceSection({ experiences }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState([]);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const viewportCenter = window.innerHeight * 0.55;

      // Calculate how far down the center of the viewport has scrolled through the container
      const scrolled = viewportCenter - containerTop;
      const progress = Math.min(Math.max(scrolled / (containerHeight || 1), 0), 1);
      setScrollProgress(progress);

      // Check which milestone nodes the progress has reached
      const active = [];
      nodeRefs.current.forEach((nodeEl, idx) => {
        if (nodeEl) {
          const nodeRect = nodeEl.getBoundingClientRect();
          if (nodeRect.top <= viewportCenter + 40) {
            active.push(idx);
          }
        }
      });
      setActiveNodes(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [experiences.length]);

  return (
    <div className="w-full">
      {/* Full-width Top Header Bar */}
      <SectionHeader title="Experience" />

      {/* Main Body Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-36">
        <div ref={containerRef} className="relative space-y-16 sm:space-y-24">
          {/* Background Timeline Static Rail (aligned with node center at left-[11px]) */}
          <div className="absolute left-[11px] top-4 bottom-0 w-[2px] bg-slate-300/80 pointer-events-none" />

          {/* Active Scroll-Driven Animated Progress Line */}
          <div
            className="absolute left-[11px] top-4 w-[2px] bg-[var(--accent-color)] pointer-events-none transition-all duration-150 ease-out shadow-[0_0_8px_rgba(27,38,59,0.3)]"
            style={{
              height: `${scrollProgress * 100}%`,
              maxHeight: '100%',
            }}
          >
            {/* Glowing progress tip */}
            <span className="absolute -bottom-1 -left-[3px] w-2 h-2 rounded-full bg-[var(--accent-color)] shadow-[0_0_10px_rgba(27,38,59,0.6)] animate-pulse" />
          </div>

          {experiences.map((exp, expIdx) => {
            const isNodeActive = activeNodes.includes(expIdx);
            const bulletsList = exp.bullets || (exp.projects ? exp.projects.flatMap(p => p.bullets) : []);

            return (
              <div
                key={exp.id || expIdx}
                className="relative flex flex-col lg:flex-row items-start gap-6 lg:gap-14 group"
              >
                {/* Left: Timeline Milestone Node + Role Title */}
                <div className="flex items-center gap-4 sm:gap-5 lg:w-80 shrink-0 pt-1">
                  {/* Timeline Milestone Node (Centered on the vertical rail) */}
                  <div
                    ref={(el) => (nodeRefs.current[expIdx] = el)}
                    className="relative z-20 flex items-center justify-center shrink-0"
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 shadow-sm ${
                        isNodeActive
                          ? 'border-[var(--accent-color)] scale-110 shadow-md'
                          : 'border-slate-400 group-hover:border-slate-600'
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isNodeActive
                            ? 'bg-[var(--accent-color)] scale-100'
                            : 'bg-slate-700 scale-90'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Role Title (Aligned directly next to milestone node) */}
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-normal text-[var(--text-primary)] leading-snug tracking-tight group-hover:text-[var(--accent-color)] transition-colors">
                    {exp.role}
                  </h3>
                </div>

                {/* Right: Detailed Experience Card matching reference UI */}
                <div className="flex-1 w-full pl-10 lg:pl-0">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Card Header */}
                    <div className="flex items-start gap-4 pb-4 mb-5 border-b border-slate-100">
                      {/* Company Logo Box */}
                      {exp.companyLogo && (exp.companyLogo.startsWith('/') || exp.companyLogo.startsWith('http')) ? (
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center p-2 shrink-0 shadow-2xs overflow-hidden">
                          <img
                            src={exp.companyLogo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center font-bold text-slate-700 text-xs uppercase tracking-wider shrink-0 shadow-xs">
                          {exp.companyLogo || exp.company?.slice(0, 2).toUpperCase()}
                        </div>
                      )}

                      {/* Company Info & Meta */}
                      <div className="flex-1 min-w-0">
                        {/* Company Name with building icon */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <Building2 className="w-4 h-4 text-slate-700 shrink-0" />
                          <h4 className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">
                            {exp.company}
                          </h4>
                        </div>

                        {/* Meta: Period, Location, Badge */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{exp.location}</span>
                          </div>
                          {exp.type && (
                            <span className="rounded-full border border-slate-200 px-2.5 py-0.5 text-[11px] font-mono text-slate-600 bg-slate-50/60">
                              {exp.type}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points List */}
                    <ul className="space-y-3 mb-6">
                      {bulletsList.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                          <span className="text-slate-400 font-bold text-base leading-none shrink-0 mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="border border-slate-200/90 rounded-xl px-3 py-1 text-xs font-mono text-slate-600 bg-white hover:border-slate-300 transition-colors shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

