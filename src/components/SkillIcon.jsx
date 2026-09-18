import React from 'react';

export default function SkillIcon({ iconType, name, color = "#2b2d42" }) {
  const key = (iconType || '').toLowerCase().trim();

  switch (key) {
    // ---------------- AI / ML ----------------
    case 'python':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#3776AB" d="M11.9 2c-4.8 0-4.5 2.1-4.5 2.1l.01 2.2h4.6v.7H4.4S2 6.7 2 11.5c0 4.8 2.1 4.6 2.1 4.6h1.3v-1.8s-.1-2.1 2.1-2.1h4.5s2 0 2-2V4.1s.3-2.1-2.1-2.1zm-2.4 1.3a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z"/>
          <path fill="#FFD43B" d="M12.1 22c4.8 0 4.5-2.1 4.5-2.1l-.01-2.2H12v-.7h7.6s2.4.3 2.4-4.5c0-4.8-2.1-4.6-2.1-4.6h-1.3v1.8s.1 2.1-2.1 2.1H12s-2 0-2 2v6.1s-.3 2.1 2.1 2.1zm2.4-1.3a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"/>
        </svg>
      );

    case 'ml':
    case 'machinelearning':
    case 'machine-learning':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="6" r="2.5" fill="#6366F1" />
          <circle cx="5" cy="18" r="2.5" fill="#6366F1" />
          <circle cx="12" cy="12" r="2.5" fill="#4F46E5" />
          <circle cx="19" cy="6" r="2.5" fill="#4338CA" />
          <circle cx="19" cy="18" r="2.5" fill="#4338CA" />
          <line x1="7.5" y1="7" x2="9.5" y2="10.5" stroke="#818CF8" />
          <line x1="7.5" y1="17" x2="9.5" y2="13.5" stroke="#818CF8" />
          <line x1="14.5" y1="10.5" x2="16.5" y2="7" stroke="#818CF8" />
          <line x1="14.5" y1="13.5" x2="16.5" y2="17" stroke="#818CF8" />
          <line x1="7.5" y1="6" x2="16.5" y2="6" stroke="#C7D2FE" strokeDasharray="2 2" />
          <line x1="7.5" y1="18" x2="16.5" y2="18" stroke="#C7D2FE" strokeDasharray="2 2" />
        </svg>
      );

    case 'scikit':
    case 'scikit-learn':
    case 'sklearn':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M7 18A8 8 0 0 1 7 4" stroke="#F89939" strokeWidth="2.8" strokeLinecap="round"/>
          <path d="M17 6a8 8 0 0 1 0 14" stroke="#3499CD" strokeWidth="2.8" strokeLinecap="round"/>
          <circle cx="7" cy="11" r="3.5" fill="#F89939" />
          <circle cx="17" cy="13" r="3.5" fill="#3499CD" />
          <line x1="7" y1="11" x2="17" y2="13" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );

    case 'pandas':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <rect x="3.5" y="9" width="3.5" height="12" rx="1.75" fill="#150458" />
          <rect x="8.5" y="4" width="3.5" height="17" rx="1.75" fill="#FF9800" />
          <rect x="13.5" y="8" width="3.5" height="13" rx="1.75" fill="#E91E63" />
          <rect x="18.5" y="12" width="3.5" height="9" rx="1.75" fill="#009688" />
        </svg>
      );

    case 'numpy':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#4D77CF" opacity="0.15"/>
          <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#013243"/>
          <path d="M3 7v10l9 5V12L3 7z" fill="#4DABCF"/>
          <path d="M21 7v10l-9 5V12l9-5z" fill="#013243" opacity="0.85"/>
          <text x="6.8" y="15" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="monospace">NP</text>
        </svg>
      );

    case 'dl':
    case 'deeplearning':
    case 'deep-learning':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <line x1="4" y1="6" x2="12" y2="4" stroke="#818CF8" opacity="0.7"/>
          <line x1="4" y1="6" x2="12" y2="12" stroke="#818CF8" opacity="0.7"/>
          <line x1="4" y1="6" x2="12" y2="20" stroke="#818CF8" opacity="0.7"/>
          <line x1="4" y1="18" x2="12" y2="4" stroke="#818CF8" opacity="0.7"/>
          <line x1="4" y1="18" x2="12" y2="12" stroke="#818CF8" opacity="0.7"/>
          <line x1="4" y1="18" x2="12" y2="20" stroke="#818CF8" opacity="0.7"/>
          <line x1="12" y1="4" x2="20" y2="12" stroke="#6366F1"/>
          <line x1="12" y1="12" x2="20" y2="12" stroke="#6366F1"/>
          <line x1="12" y1="20" x2="20" y2="12" stroke="#6366F1"/>
          <circle cx="4" cy="6" r="2.5" fill="#3B82F6"/>
          <circle cx="4" cy="18" r="2.5" fill="#3B82F6"/>
          <circle cx="12" cy="4" r="2.5" fill="#6366F1"/>
          <circle cx="12" cy="12" r="2.5" fill="#6366F1"/>
          <circle cx="12" cy="20" r="2.5" fill="#6366F1"/>
          <circle cx="20" cy="12" r="3" fill="#8B5CF6"/>
        </svg>
      );

    case 'nlp':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h.01M12 9h.01M16 9h.01" strokeWidth="3" />
          <path d="M7 13h10" stroke="#10B981" strokeWidth="1.5" strokeDasharray="1 2" />
        </svg>
      );

    case 'genai':
    case 'generativeai':
    case 'generative-ai':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" fill="url(#genai-gradient)"/>
          <path d="M19 16C19 18 20 19 22 19C20 19 19 20 19 22C19 20 18 19 16 19C18 19 19 18 19 16Z" fill="#F59E0B"/>
          <defs>
            <linearGradient id="genai-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'llms':
    case 'llm':
    case 'brain':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#7C3AED" opacity="0.1"/>
          <path d="M12 4v16M4 12h16M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3.5" fill="#7C3AED"/>
          <circle cx="12" cy="4" r="1.5" fill="#A855F7"/>
          <circle cx="20" cy="12" r="1.5" fill="#A855F7"/>
          <circle cx="12" cy="20" r="1.5" fill="#A855F7"/>
          <circle cx="4" cy="12" r="1.5" fill="#A855F7"/>
        </svg>
      );

    case 'rag':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
          <rect x="3" y="3" width="8" height="10" rx="2" />
          <path d="M7 7h.01M7 10h.01" />
          <path d="M15 7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4" />
          <path d="M15 17h4a2 2 0 0 0 2-2v-2" />
          <polyline points="13 15 15 17 13 19" />
        </svg>
      );

    // ---------------- Software Engineering ----------------
    case 'java':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M6 18c4 1 8 1 12 0-1.5 2-10.5 2-12 0z" fill="#5382A1"/>
          <path d="M5 14c5 1.5 10 1.5 14 0-1 2.5-12 2.5-14 0z" fill="#E76F00"/>
          <path d="M10 2c1 1 2 2 1 3-1 1-2 1-1 2 1 1 2 2 1 3" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 1c1 1 2 2 1 3-1 1-2 1-1 2 1 1 2 2 1 3" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );

    case 'dsa':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" fill="#2563EB" />
          <circle cx="6" cy="14" r="2.5" fill="#3B82F6" />
          <circle cx="18" cy="14" r="2.5" fill="#3B82F6" />
          <circle cx="3" cy="20" r="1.5" fill="#60A5FA" />
          <circle cx="9" cy="20" r="1.5" fill="#60A5FA" />
          <circle cx="15" cy="20" r="1.5" fill="#60A5FA" />
          <circle cx="21" cy="20" r="1.5" fill="#60A5FA" />
          <line x1="10" y1="7" x2="7.5" y2="12" />
          <line x1="14" y1="7" x2="16.5" y2="12" />
          <line x1="5" y1="16" x2="3.8" y2="18.8" />
          <line x1="7" y1="16" x2="8.2" y2="18.8" />
          <line x1="17" y1="16" x2="15.8" y2="18.8" />
          <line x1="19" y1="16" x2="20.2" y2="18.8" />
        </svg>
      );

    case 'oop':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="7" rx="1.5" fill="#EEF2FF"/>
          <rect x="2" y="15" width="9" height="7" rx="1.5" fill="#EEF2FF"/>
          <rect x="13" y="15" width="9" height="7" rx="1.5" fill="#EEF2FF"/>
          <path d="M12 9v3m0 0H6.5v3m5.5-3h5.5v3" />
        </svg>
      );

    case 'sql':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#E0F2FE" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      );

    case 'api':
    case 'rest':
    case 'restapi':
    case 'restapis':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 17l3-3M17 17l-3-3M12 9V5" />
          <circle cx="12" cy="4" r="1.5" />
        </svg>
      );

    case 'git':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l3 3c.4-.1.8 0 1.1.3.6.6.6 1.5 0 2.1l-2.8 2.8c-.3.3-.7.4-1.1.3l-2.3 2.3c.1.4 0 .8-.3 1.1-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1c.3-.3.7-.4 1.1-.3l2.2-2.2v-5c-.4-.1-.8-.3-1.1-.6-.6-.6-.6-1.5 0-2.1l2.3-2.3L2.4 10.9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.6.6-1.5 0-2.1z"/>
        </svg>
      );

    // ---------------- Web Development ----------------
    case 'html5':
    case 'html':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E34F26">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.6 5.5h-8l.2 2.5h7.6l-.6 6.3-4.8 1.3-4.8-1.3-.3-3.7h2.4l.2 1.8 2.5.7 2.5-.7.3-3H6.8L6.2 5.5h11.6l-.2 2z"/>
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1572B6">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.5 5.5l-.2 2.4H8.7l.2 2.5h8.2l-.7 6.4-4.4 1.2-4.4-1.2-.3-3.6h2.4l.1 1.8 2.2.6 2.2-.6.3-2.6H6.8l-.6-6.7h11.3z"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <div className="w-8 h-8 bg-[#F7DF1E] rounded text-black font-extrabold flex items-center justify-end pr-1 pb-0.5 text-xs shadow-sm">
          JS
        </div>
      );

    case 'typescript':
    case 'ts':
      return (
        <div className="w-8 h-8 bg-[#3178C6] rounded text-white font-extrabold flex items-center justify-end pr-1 pb-0.5 text-xs shadow-sm">
          TS
        </div>
      );

    case 'react':
      return (
        <svg className="w-8 h-8 text-[#06B6D4] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case 'vue':
    case 'vuejs':
    case 'vue.js':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#42B883" d="M12 18.5L2 2h4.5l5.5 9.5L17.5 2H22L12 18.5z"/>
          <path fill="#35495E" d="M12 18.5L6.5 2h3.2l2.3 4 2.3-4h3.2L12 18.5z"/>
        </svg>
      );

    case 'nextjs':
    case 'next':
    case 'next.js':
      return (
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
          N
        </div>
      );

    case 'nodejs':
    case 'node':
    case 'node.js':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.9 8.4v7.2L12 19.7l7.1-4.1V8.4L12 4.3z"/>
        </svg>
      );

    case 'fastapi':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#059669"/>
          <path d="M13 3L6 14h5l-1 7 8-11h-5l1-7z" fill="white"/>
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );

    // ---------------- Databases ----------------
    case 'mysql':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 3C7.03 3 3 7.03 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9z" fill="#00758F" opacity="0.12"/>
          <path d="M6 14.5c2-1 4-1 6-2 2-1 3-3 3-5 0 0 1.5 2.5 4 2.5-1 1-3 1.5-4 3-1 1.5-1 3-3 4-1.5.8-3.5 0-6-2.5z" fill="#00758F"/>
          <circle cx="16" cy="9" r="1.2" fill="#F29111"/>
        </svg>
      );

    case 'mongodb':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 1.5s5 5.5 5 11.5c0 4.5-3.5 7.5-5 9.5-1.5-2-5-5-5-9.5C7 7 12 1.5 12 1.5z"/>
          <path d="M12 2v20" stroke="#ffffff" strokeWidth="0.8"/>
        </svg>
      );

    case 'supabase':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3ECF8E">
          <path d="M12.8 2.2a1.2 1.2 0 0 0-2.1.8L8.2 13h6.6l-3.6 8.8a1.2 1.2 0 0 0 2.1-.8L15.8 11H9.2l3.6-8.8z"/>
        </svg>
      );

    // ---------------- Tools & Design ----------------
    case 'github':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#181717">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );

    case 'docker':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.9 8.2h2v2h-2zm-2.8 0h2v2h-2zm-2.8 0h2v2h-2zm5.6-2.8h2v2h-2zm-2.8 0h2v2h-2zm-2.8 0h2v2h-2zm8.4 5.6h2v2h-2zm2.8 1.2c-.3-.2-1.2-.3-2-.3-.2 0-.4 0-.6.1-.2-1.2-1-2.1-2.1-2.5l-.5-.2-.3.4c-.4.5-.6 1.2-.6 1.9H2.2c-.6 0-1.1.5-1.1 1.1 0 3.3 2 6.2 5.2 7.2 1.8.6 3.8.7 5.7.3 3.4-.7 6-3.4 6.3-6.8.9-.4 2-1 2.2-1.2z"/>
        </svg>
      );

    case 'linux':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="13" rx="7" ry="8" fill="#18181B"/>
          <ellipse cx="12" cy="14" rx="4.5" ry="6" fill="#F4F4F5"/>
          <circle cx="10" cy="8" r="1" fill="#18181B"/>
          <circle cx="14" cy="8" r="1" fill="#18181B"/>
          <path d="M10.5 9.5h3l-1.5 2z" fill="#F59E0B"/>
          <ellipse cx="8" cy="20" rx="2.5" ry="1.2" fill="#F59E0B"/>
          <ellipse cx="16" cy="20" rx="2.5" ry="1.2" fill="#F59E0B"/>
        </svg>
      );

    case 'jupyter':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 4.5c4.14 0 7.5 1.48 7.5 3.3 0 1.52-2.36 2.8-5.7 3.16.22-.38.35-.82.35-1.28 0-1.46-1.19-2.65-2.65-2.65-.98 0-1.83.54-2.27 1.33C6.35 8.1 4.5 6.94 4.5 5.5 4.5 3.68 7.86 2.2 12 2.2c1.7 0 3.28.25 4.56.7-1.3-.44-2.84-.7-4.56-.7-4.14 0-7.5 1.48-7.5 3.3 0 1.43 2.12 2.65 5.16 3.08C9.4 8.2 9.2 7.72 9.2 7.22c0-1.55 1.25-2.8 2.8-2.8z" fill="#767676"/>
          <path d="M12 19.5c-4.14 0-7.5-1.48-7.5-3.3 0-1.52 2.36-2.8 5.7-3.16-.22.38-.35.82-.35 1.28 0 1.46 1.19 2.65 2.65 2.65.98 0 1.83-.54 2.27-1.33 2.88.26 4.73 1.42 4.73 2.86 0 1.82-3.36 3.3-7.5 3.3-1.7 0-3.28-.25-4.56-.7 1.3.44 2.84.7 4.56.7 4.14 0 7.5-1.48 7.5-3.3 0-1.43-2.12-2.65-5.16-3.08.26.38.46.86.46 1.36 0 1.55-1.25 2.8-2.8 2.8z" fill="#F37626"/>
          <circle cx="12" cy="7.2" r="1.3" fill="#767676"/>
          <circle cx="12" cy="16.8" r="1.3" fill="#F37626"/>
          <circle cx="17.5" cy="12" r="1.3" fill="#F37626"/>
        </svg>
      );

    case 'figma':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#F24E1E" d="M8 2h4v4H8z"/>
          <path fill="#FF7262" d="M12 2h4a4 4 0 0 1 0 8h-4V2z"/>
          <path fill="#A259FF" d="M8 6h4v4H8z"/>
          <path fill="#1ABCFE" d="M8 10h4v4H8z"/>
          <path fill="#0ACF83" d="M8 14h4v4a4 4 0 0 1-4-4z"/>
        </svg>
      );

    default:
      return (
        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
          {(name || 'SK').slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
