import React, { useState, useRef, useCallback } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard3D({ proj, onSelectProject }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotX: 0,
    rotY: 0,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    offsetX: 0,
    offsetY: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalized coordinates (0 to 1)
    const normX = (e.clientX - rect.left) / rect.width;
    const normY = (e.clientY - rect.top) / rect.height;

    // Centered offset (-1 to 1)
    const offsetX = (normX - 0.5) * 2;
    const offsetY = (normY - 0.5) * 2;

    // Subtle, elegant physical tilt (approx 6.5° - 7°)
    const maxRot = 6.8;
    const rotX = -offsetY * maxRot;
    const rotY = offsetX * maxRot;

    setTransform({
      rotX,
      rotY,
      glareX: normX * 100,
      glareY: normY * 100,
      glareOpacity: 0.85,
      offsetX,
      offsetY,
    });
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setTransform({
      rotX: 0,
      rotY: 0,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
      offsetX: 0,
      offsetY: 0,
    });
  }, []);

  return (
    <div
      className="w-full select-none"
      style={{ perspective: '1400px' }}
    >
      <div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          transform: isHovered
            ? `rotateX(${transform.rotX}deg) rotateY(${transform.rotY}deg) scale3d(1.012, 1.012, 1.012)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered
            ? 'transform 0.12s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.25s ease-out'
            : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease',
          transformStyle: 'preserve-3d',
        }}
        className={`relative bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-[var(--border-color)] shadow-sm hover:shadow-[0_20px_50px_rgba(27,38,59,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ${
          isHovered ? 'border-slate-400' : 'border-[var(--border-color)]'
        }`}
      >
        {/* Subtle Holographic Dynamic Gradient Spectrum Reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-10"
          style={{
            opacity: transform.glareOpacity,
            background: `
              radial-gradient(
                circle 320px at ${transform.glareX}% ${transform.glareY}%,
                rgba(255, 255, 255, 0.45) 0%,
                rgba(147, 197, 253, 0.14) 25%,
                rgba(244, 114, 182, 0.12) 50%,
                rgba(253, 224, 71, 0.08) 75%,
                transparent 100%
              )
            `,
            mixBlendMode: 'color-dodge',
          }}
        />

        {/* Delicate Holographic Line Pattern */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 z-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              ${45 + transform.offsetX * 10}deg,
              rgba(99, 102, 241, 0.2) 0px,
              rgba(99, 102, 241, 0.2) 1.5px,
              transparent 1.5px,
              transparent 7px
            )`,
            transform: `translate(${transform.offsetX * -5}px, ${transform.offsetY * -5}px)`,
            transition: 'transform 0.12s ease-out',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Decorative Dot Matrix Pattern */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-0"
          style={{
            backgroundImage: `radial-gradient(rgba(27, 38, 59, 0.09) 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
            opacity: isHovered ? 0.35 : 0.08,
          }}
        />

        {/* Inner Card Content with Subtle 3D Depth */}
        <div className="relative z-20 flex flex-col justify-between h-full">
          <div>
            {/* Top Row: Title + Category Badge with subtle 3D Elevation */}
            <div
              style={{
                transform: isHovered
                  ? `translateZ(14px) translate(${transform.offsetX * 1}px, ${transform.offsetY * 1}px)`
                  : 'translateZ(0px)',
                transition: 'transform 0.12s ease-out',
              }}
              className="flex items-start justify-between gap-2 mb-2"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                {proj.title}
              </h3>
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--tag-bg)] text-[var(--text-primary)] shrink-0">
                {proj.category}
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                transform: isHovered ? 'translateZ(9px)' : 'translateZ(0px)',
                transition: 'transform 0.12s ease-out',
              }}
              className="text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-3.5 min-h-[3.25rem]"
            >
              {proj.description}
            </p>

            {/* Impact Metrics */}
            {proj.impactMetrics && (
              <div
                style={{
                  transform: isHovered ? 'translateZ(10px)' : 'translateZ(0px)',
                  transition: 'transform 0.12s ease-out',
                }}
                className="mb-3.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[10.5px] sm:text-[11px] font-semibold text-slate-700 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate">{proj.impactMetrics}</span>
              </div>
            )}

            {/* Project Preview Image with subtle depth */}
            <div
              onClick={() => onSelectProject(proj)}
              style={{
                transform: isHovered
                  ? `translateZ(12px) translate(${transform.offsetX * -1.5}px, ${transform.offsetY * -1.5}px)`
                  : 'translateZ(0px)',
                transition: 'transform 0.12s ease-out',
              }}
              className="w-full h-52 sm:h-56 lg:h-64 rounded-2xl overflow-hidden bg-slate-900 mb-5 cursor-pointer relative group/img border border-[var(--border-color)]/70 shadow-inner"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs sm:text-sm font-semibold gap-1.5 backdrop-blur-[2px]">
                <Eye className="w-4 h-4" />
                <span>Preview Details</span>
              </div>
            </div>

            {/* Tech Tags */}
            <div
              style={{
                transform: isHovered ? 'translateZ(10px)' : 'translateZ(0px)',
                transition: 'transform 0.12s ease-out',
              }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="tech-tag text-xs px-2.5 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              transform: isHovered
                ? `translateZ(16px) translate(${transform.offsetX * 0.8}px, ${transform.offsetY * 0.8}px)`
                : 'translateZ(0px)',
              transition: 'transform 0.12s ease-out',
            }}
            className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border-color)]/50"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={proj.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
            <a
              href={proj.codeLink}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
