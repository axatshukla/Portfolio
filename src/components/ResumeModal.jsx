import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, GraduationCap, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { downloadResumePDF } from '../utils/generatePdf';

export default function ResumeModal({ isOpen, onClose, personalInfo, experiences, skillCategories }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    downloadResumePDF();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-[var(--border-color)] max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/50">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[var(--accent-color)]" />
            <span className="font-bold text-sm text-[var(--text-primary)]">
              Curriculum Vitae — {personalInfo.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white transition-colors"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white transition-colors"
              title="Download"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[var(--text-primary)]">
          {/* Header info */}
          <div className="border-b border-[var(--border-color)] pb-4">
            <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
            <p className="text-sm text-[var(--text-secondary)]">{personalInfo.title} • {personalInfo.statusBadge}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-xs font-mono text-[var(--text-secondary)]">
              <span>✉️ {personalInfo.email}</span>
              <span>📍 {personalInfo.location}</span>
              <a href="https://github.com/axatshukla" target="_blank" rel="noreferrer" className="hover:underline hover:text-[var(--accent-color)]">
                🔗 github.com/axatshukla
              </a>
              <a href="https://www.linkedin.com/in/akshatshuklaa/" target="_blank" rel="noreferrer" className="hover:underline hover:text-[var(--accent-color)]">
                💼 linkedin.com/in/akshatshuklaa
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2">
              Education
            </h2>
            <div className="bg-[var(--bg-primary)]/40 p-4 rounded-2xl border border-[var(--border-color)]/50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm">Bachelor of Technology in Computer Science & Engineering</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Major in AI, Systems & Web Architecture</p>
                </div>
                <span className="text-xs font-mono text-[var(--text-secondary)]">2022 – 2026</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2">
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-[var(--bg-primary)]/40 p-4 rounded-2xl border border-[var(--border-color)]/50 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-sm">{exp.role}</h3>
                      <p className="text-xs text-[var(--accent-color)] font-medium">{exp.company} • {exp.type}</p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">{exp.period}</span>
                  </div>
                  {exp.bullets ? (
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-[var(--text-secondary)]">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  ) : (
                    exp.projects?.map((p, pIdx) => (
                      <div key={pIdx} className="text-xs text-[var(--text-secondary)] pl-2">
                        <p className="font-semibold text-[var(--text-primary)]">{p.title}</p>
                        <ul className="list-disc pl-4 space-y-1 mt-1">
                          {p.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills summary */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 bg-[var(--bg-primary)]/40 rounded-xl border border-[var(--border-color)]/40">
                  <span className="font-bold block text-[11px] mb-1">{cat.title}</span>
                  <span className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="btn-secondary px-4 py-2 rounded-xl text-xs font-semibold"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="btn-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
}
