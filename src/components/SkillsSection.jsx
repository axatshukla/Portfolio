import React from 'react';
import SkillIcon from './SkillIcon';
import SectionHeader from './SectionHeader';

export default function SkillsSection({ skillCategories }) {
  return (
    <div className="w-full">
      {/* Full-width Top Header Bar */}
      <SectionHeader title="Skills" />

      {/* Main Body Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-32 space-y-10">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-4">
            {/* Category Header with Underline */}
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] tracking-wide">
                {category.title}
              </h3>
              <div className="w-10 h-[2px] bg-[var(--accent-color)] mt-1 rounded-full" />
            </div>

            {/* Grid of Skill Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white rounded-2xl p-3 sm:p-4 border border-[var(--border-color)] shadow-sm hover:shadow-md hover:border-[var(--text-secondary)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center text-center gap-2.5 min-h-[96px] group cursor-default"
                >
                  {/* Skill Icon */}
                  <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
                    <SkillIcon iconType={skill.iconType} name={skill.name} color={skill.color} />
                  </div>
                  
                  {/* Skill Label */}
                  <span className="text-[11px] font-medium text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-color)] transition-colors line-clamp-2">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
