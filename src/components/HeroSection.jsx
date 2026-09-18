import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Mail, ExternalLink, Download, Sparkles, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { downloadResumePDF } from '../utils/generatePdf';

function RoleRotator({ roles = ["AI Engineer", "Vibe Coder", "Student"] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="h-7 sm:h-8 flex items-center overflow-hidden animate-hero-sub">
      <span
        key={roles[index]}
        className="text-lg text-slate-300 font-normal animate-role-change"
      >
        {roles[index]}
      </span>
    </div>
  );
}

export default function HeroSection({ personalInfo, onViewResume, onCopyEmail }) {
  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    downloadResumePDF();
  };

  const roles = personalInfo.roles || ["AI Engineer", "Vibe Coder", "Student"];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-5">
      {/* 1. Dark Top Hero Card */}
      <div className="hero-pattern text-white rounded-3xl p-8 sm:p-10 shadow-[0_14px_40px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden transition-all duration-300">
        {/* Diagonal Ambient Light Ray Effect */}
        <div className="absolute -top-32 -right-16 w-[700px] h-[340px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent rotate-[-34deg] pointer-events-none blur-2xl transform" />
        
        {/* Soft Secondary Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-44 bg-sky-400/[0.07] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3 sm:space-y-4">
          <h1
            key={personalInfo.name}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white animate-hero-name select-none"
          >
            {personalInfo.name}
          </h1>
          
          {/* Rotating Role Text */}
          <RoleRotator roles={roles} />
          
          
          {/* Metadata badges row */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-mono text-slate-300/90 animate-hero-meta">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-slate-400" />
              <span>{personalInfo.statusBadge}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{personalInfo.location}</span>
            </div>
            <button
              onClick={() => onCopyEmail(personalInfo.email)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
              title="Click to copy email"
            >
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-white" />
              <span>{personalInfo.email}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Photo + About Intro Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left: Profile Photo Card */}
        <div className="md:col-span-4 bg-white rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-sm flex items-center justify-center min-h-[260px] max-h-[340px] relative group">
          <img
            src={personalInfo.avatarUrl || "/profile.png"}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right: Bio Text Card */}
        <div className="md:col-span-8 bg-white rounded-3xl p-7 sm:p-8 border border-[var(--border-color)] shadow-sm flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug mb-3">
            {personalInfo.aboutHeading}
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-[15px] leading-relaxed">
            {personalInfo.aboutDescription}
          </p>
        </div>
      </div>

      {/* 3. Three Focus / Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {personalInfo.focusAreas.map((area, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all duration-200"
          >
            <h3 className="font-mono text-xs font-bold tracking-wider text-[var(--text-primary)] uppercase mb-4">
              {area.title}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[var(--text-secondary)]">
              {area.skills.map((skill, sIdx) => (
                <li key={sIdx} className="leading-snug flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)] shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 4. Bottom Row: Resume Card + Connect Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left: Resume Card */}
        <div className="md:col-span-5 bg-white rounded-3xl p-6 border border-[var(--border-color)] shadow-sm flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs text-[var(--text-primary)] font-bold mb-4">
              {"// resume"}
            </div>
          </div>
          <div className="space-y-2.5">
            <button
              onClick={onViewResume}
              className="w-full btn-primary py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
            <button
              onClick={handleDownload}
              className="w-full btn-secondary py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Right: Connect Card */}
        <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[var(--border-color)] shadow-sm flex flex-col justify-start">
          <div className="font-mono text-sm sm:text-base text-[var(--text-primary)] font-semibold mb-6 sm:mb-8">
            {"// connect"}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3.5 font-mono text-sm sm:text-[15px] text-[var(--text-primary)]">
            {personalInfo.connectLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target={link.isEmail ? undefined : "_blank"}
                rel={link.isEmail ? undefined : "noopener noreferrer"}
                className="group inline-flex items-center gap-1.5 hover:text-[var(--accent-color)] transition-all"
              >
                {link.isEmail && (
                  <Mail className="w-4 h-4 text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors shrink-0" />
                )}
                <span className="group-hover:underline underline-offset-4">{link.label}</span>
                {link.isExternal && (
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-primary)] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
