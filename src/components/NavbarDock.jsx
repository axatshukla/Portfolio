import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Home, Briefcase, Code, Wrench, Zap } from 'lucide-react';

function DockItem({ item, isActive, mouseX, onNavigate }) {
  const itemRef = useRef(null);
  const [distance, setDistance] = useState(Infinity);
  const [isHovered, setIsHovered] = useState(false);

  // Measure proximity on mouse movement
  useEffect(() => {
    if (mouseX === null || !itemRef.current) {
      setDistance(Infinity);
      return;
    }

    const rect = itemRef.current.getBoundingClientRect();
    const itemCenterX = rect.left + rect.width / 2;
    const dist = Math.abs(mouseX - itemCenterX);
    setDistance(dist);
  }, [mouseX]);

  // Springy magnification physics constants
  const maxDistance = 150; // Influence radius in px
  const baseSize = 46; // Base size in px
  const maxMagnification = 1.52; // Peak magnification multiplier (~70px)

  let scale = 1;
  if (distance < maxDistance) {
    const normalized = distance / maxDistance;
    // Cosine smoothing curve
    const cosineFactor = Math.cos(normalized * (Math.PI / 2));
    scale = 1 + (maxMagnification - 1) * Math.pow(cosineFactor, 1.75);
  }

  const currentSize = Math.round(baseSize * scale);
  const iconSize = Math.round(21 + (scale - 1) * 11);
  const Icon = item.icon;

  return (
    <div
      ref={itemRef}
      className="relative flex flex-col items-center justify-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Springy Tooltip */}
      <div
        className={`absolute -top-12 pointer-events-none transition-all duration-200 ease-out z-50 ${
          isHovered
            ? 'opacity-100 -translate-y-1.5 scale-100'
            : 'opacity-0 translate-y-1 scale-90'
        }`}
      >
        <div className="px-3 py-1 bg-white text-[var(--text-primary)] text-xs font-bold tracking-tight rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.16)] border border-[var(--border-color)] whitespace-nowrap flex items-center justify-center">
          <span>{item.label}</span>
        </div>
        {/* Tooltip bottom pointer */}
        <div className="w-2 h-2 bg-white border-r border-b border-[var(--border-color)] rotate-45 mx-auto -mt-1 shadow-sm" />
      </div>

      {/* Interactive Magnified Icon Button */}
      <button
        onClick={() => onNavigate(item.id)}
        style={{
          width: `${currentSize}px`,
          height: `${currentSize}px`,
        }}
        className={`relative rounded-full flex flex-col items-center justify-center origin-bottom cursor-pointer select-none transition-all duration-150 active:scale-90 active:translate-y-1 ${
          isActive
            ? 'bg-[var(--tag-bg)] text-[var(--accent-color)] shadow-sm'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.04]'
        }`}
        aria-label={item.label}
      >
        <Icon
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
          }}
          className={`transition-all duration-150 ${
            isActive ? 'stroke-[2.4] text-[var(--accent-color)]' : 'stroke-[1.9]'
          }`}
        />

        {/* macOS-style Bottom Active Dot */}
        {isActive && (
          <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] transition-transform duration-200" />
        )}
      </button>
    </div>
  );
}

export default function NavbarDock({ activeSection, onNavigate }) {
  const [mouseX, setMouseX] = useState(null);
  const dockRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'connect', label: 'Connect', icon: Zap },
  ];

  const handleMouseMove = useCallback((e) => {
    setMouseX(e.clientX);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
  }, []);

  return (
    <aside
      className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      aria-label="Navigation Menu"
    >
      <nav
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="pointer-events-auto flex items-end gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 bg-white/75 backdrop-blur-2xl rounded-full border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-200 h-[68px]"
      >
        {navItems.map((item) => (
          <DockItem
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            mouseX={mouseX}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </aside>
  );
}
