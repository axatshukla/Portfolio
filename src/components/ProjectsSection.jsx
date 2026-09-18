import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard3D from './ProjectCard3D';

export default function ProjectsSection({ projects, onSelectProject }) {
  return (
    <div className="w-full">
      {/* Full-width Top Header Bar */}
      <SectionHeader title="Projects" />

      {/* Main Body Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-32 space-y-8">
        {/* 3-Column Projects Grid with 3D Holographic Parallax Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((proj) => (
            <ProjectCard3D
              key={proj.id}
              proj={proj}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
