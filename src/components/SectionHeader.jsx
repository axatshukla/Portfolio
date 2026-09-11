import React from 'react';

export default function SectionHeader({ title }) {
  return (
    <div className="w-full bg-[var(--accent-color)] text-white py-10 sm:py-14 px-4 shadow-sm border-b border-slate-700/30">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <h1
          key={title}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-white animate-heading select-none will-change-transform"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
