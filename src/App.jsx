import React, { useState, useEffect } from 'react';
import NavbarDock from './components/NavbarDock';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ConnectSection from './components/ConnectSection';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

import {
  personalInfo,
  experiences,
  projects,
  skillCategories,
} from './data/portfolioData';

export default function App() {
  const getInitialSection = () => {
    const hash = window.location.hash.replace('#', '');
    const validSections = ['home', 'experience', 'projects', 'skills', 'connect'];
    return validSections.includes(hash) ? hash : 'home';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2800);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    showToast(`Copied ${email} to clipboard!`);
  };

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validSections = ['home', 'experience', 'projects', 'skills', 'connect'];
      if (validSections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--accent-color)] selection:text-white flex flex-col justify-between">
      {/* Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Main Container */}
      <main className="w-full flex-1">
        <div key={activeSection} className="view-enter w-full">
          {activeSection === 'home' && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-32">
              <HeroSection
                personalInfo={personalInfo}
                onViewResume={() => setResumeOpen(true)}
                onCopyEmail={handleCopyEmail}
              />
            </div>
          )}

          {activeSection === 'experience' && (
            <ExperienceSection experiences={experiences} />
          )}

          {activeSection === 'projects' && (
            <ProjectsSection
              projects={projects}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          )}

          {activeSection === 'skills' && (
            <SkillsSection skillCategories={skillCategories} />
          )}

          {activeSection === 'connect' && (
            <ConnectSection
              personalInfo={personalInfo}
              onCopyEmail={handleCopyEmail}
            />
          )}
        </div>
      </main>

      {/* Floating Bottom Navigation Dock */}
      <NavbarDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        personalInfo={personalInfo}
        experiences={experiences}
        skillCategories={skillCategories}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
