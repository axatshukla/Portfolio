import React from 'react';

export default function SkillIcon({ iconType, name, color = "#2b2d42" }) {
  // Return tailored clean SVGs for each technology
  switch (iconType) {
    case 'chain': // LangChain
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case 'graph': // LangGraph
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case 'rag': // RAG
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <rect x="3" y="3" width="8" height="10" rx="2" />
          <path d="M7 7h.01M7 10h.01" />
          <path d="M15 7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4" />
          <path d="M15 17h4a2 2 0 0 0 2-2v-2" />
          <polyline points="13 15 15 17 13 19" />
        </svg>
      );
    case 'brain': // LLM Integration
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="1.5" />
          <circle cx="20" cy="12" r="1.5" />
          <circle cx="12" cy="20" r="1.5" />
          <circle cx="4" cy="12" r="1.5" />
          <line x1="12" y1="5.5" x2="12" y2="9" />
          <line x1="18.5" y1="12" x2="15" y2="12" />
          <line x1="12" y1="18.5" x2="12" y2="15" />
          <line x1="5.5" y1="12" x2="9" y2="12" />
        </svg>
      );
    case 'prompt': // Prompt Engineering
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill={color}>
          <path d="M4 6h16a2 2 0 0 1 2 2v2H2V8a2 2 0 0 1 2-2zm0 6h16a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1zm0 4h12a1 1 0 0 1 1 1v1H3v-1a1 1 0 0 1 1-1z" />
        </svg>
      );
    case 'mcp': // Model Context Protocol
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
          <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M9 18c0-1.6 1.3-3 3-3s3 1.4 3 3" />
          <path d="M3 18c0-5 4-9 9-9s9 4 9 9" />
          <path d="M12 9V3" />
        </svg>
      );
    case 'llama': // Llama / Ollama
      return (
        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-[11px] font-black tracking-tighter">
          LLAMA
        </div>
      );
    case 'google': // Google GenAI
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      );
    case 'python': // Python
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#3776AB" d="M11.9 2c-4.8 0-4.5 2.1-4.5 2.1l.01 2.2h4.6v.7H4.4S2 6.7 2 11.5c0 4.8 2.1 4.6 2.1 4.6h1.3v-1.8s-.1-2.1 2.1-2.1h4.5s2 0 2-2V4.1s.3-2.1-2.1-2.1zm-2.4 1.3a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z"/>
          <path fill="#FFD43B" d="M12.1 22c4.8 0 4.5-2.1 4.5-2.1l-.01-2.2H12v-.7h7.6s2.4.3 2.4-4.5c0-4.8-2.1-4.6-2.1-4.6h-1.3v1.8s.1 2.1-2.1 2.1H12s-2 0-2 2v6.1s-.3 2.1 2.1 2.1zm2.4-1.3a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"/>
        </svg>
      );
    case 'fastapi': // FastAPI
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#059669"/>
          <path d="M13 3L6 14h5l-1 7 8-11h-5l1-7z" fill="white"/>
        </svg>
      );
    case 'pydantic': // Pydantic
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 20h20L12 2z" stroke="#E11D48" strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="3" fill="#E11D48"/>
        </svg>
      );
    case 'nodejs': // Node.js
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.9 8.4v7.2L12 19.7l7.1-4.1V8.4L12 4.3z"/>
        </svg>
      );
    case 'express': // Express
      return (
        <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center font-bold text-gray-800 text-sm tracking-tight border border-gray-300">
          ex
        </div>
      );
    case 'graphql': // GraphQL
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E10098">
          <path d="M12 2l8.7 5v10L12 22 3.3 17V7L12 2zm0 2.3L5.3 8.2v7.6L12 19.7l6.7-3.9V8.2L12 4.3z"/>
          <circle cx="12" cy="12" r="2.5" fill="#E10098"/>
        </svg>
      );
    case 'api': // REST API
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 17l3-3M17 17l-3-3M12 9V5" />
          <circle cx="12" cy="4" r="1.5" />
        </svg>
      );
    case 'html5':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E34F26">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.6 5.5h-8l.2 2.5h7.6l-.6 6.3-4.8 1.3-4.8-1.3-.3-3.7h2.4l.2 1.8 2.5.7 2.5-.7.3-3H6.8L6.2 5.5h11.6l-.2 2z"/>
        </svg>
      );
    case 'css3':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1572B6">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.5 5.5l-.2 2.4H8.7l.2 2.5h8.2l-.7 6.4-4.4 1.2-4.4-1.2-.3-3.6h2.4l.1 1.8 2.2.6 2.2-.6.3-2.6H6.8l-.6-6.7h11.3z"/>
        </svg>
      );
    case 'javascript':
      return (
        <div className="w-8 h-8 bg-[#F7DF1E] rounded text-black font-extrabold flex items-center justify-end pr-1 pb-0.5 text-xs shadow-sm">
          JS
        </div>
      );
    case 'typescript':
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
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#42B883" d="M12 18.5L2 2h4.5l5.5 9.5L17.5 2H22L12 18.5z"/>
          <path fill="#35495E" d="M12 18.5L6.5 2h3.2l2.3 4 2.3-4h3.2L12 18.5z"/>
        </svg>
      );
    case 'nextjs':
      return (
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
          N
        </div>
      );
    case 'tailwind':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.9 8.2h2v2h-2zm-2.8 0h2v2h-2zm-2.8 0h2v2h-2zm5.6-2.8h2v2h-2zm-2.8 0h2v2h-2zm-2.8 0h2v2h-2zm8.4 5.6h2v2h-2zm2.8 1.2c-.3-.2-1.2-.3-2-.3-.2 0-.4 0-.6.1-.2-1.2-1-2.1-2.1-2.5l-.5-.2-.3.4c-.4.5-.6 1.2-.6 1.9H2.2c-.6 0-1.1.5-1.1 1.1 0 3.3 2 6.2 5.2 7.2 1.8.6 3.8.7 5.7.3 3.4-.7 6-3.4 6.3-6.8.9-.4 2-1 2.2-1.2z"/>
        </svg>
      );
    case 'podman':
      return (
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
          P
        </div>
      );
    case 'openshift':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#EE0000">
          <circle cx="12" cy="12" r="9" stroke="#EE0000" strokeWidth="2" fill="none"/>
          <path d="M12 6v6l4 4" stroke="#EE0000" strokeWidth="2"/>
        </svg>
      );
    case 'cicd':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5">
          <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.5 6-4z" />
          <path d="M12 12c2 2.5 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.5-6 4z" />
        </svg>
      );
    case 'actions':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2088FF">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8v7.6L12 19.4 5.2 15.6V8L12 4.2z"/>
          <circle cx="12" cy="12" r="2.5" fill="#2088FF"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 1.5s5 5.5 5 11.5c0 4.5-3.5 7.5-5 9.5-1.5-2-5-5-5-9.5C7 7 12 1.5 12 1.5z"/>
          <path d="M12 2v20" stroke="#ffffff" strokeWidth="0.8"/>
        </svg>
      );
    case 'mysql':
      return (
        <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center font-bold text-sky-800 text-[11px] border border-blue-200">
          SQL
        </div>
      );
    case 'postgres':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#336791">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.5h-2v-2h2v2zm3-4H8V7.5h8v7z"/>
        </svg>
      );
    case 'chromadb':
      return (
        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-black">
          C
        </div>
      );
    case 'supabase':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3ECF8E">
          <path d="M12.8 2.2a1.2 1.2 0 0 0-2.1.8L8.2 13h6.6l-3.6 8.8a1.2 1.2 0 0 0 2.1-.8L15.8 11H9.2l3.6-8.8z"/>
        </svg>
      );
    case 'git':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l3 3c.4-.1.8 0 1.1.3.6.6.6 1.5 0 2.1l-2.8 2.8c-.3.3-.7.4-1.1.3l-2.3 2.3c.1.4 0 .8-.3 1.1-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1c.3-.3.7-.4 1.1-.3l2.2-2.2v-5c-.4-.1-.8-.3-1.1-.6-.6-.6-.6-1.5 0-2.1l2.3-2.3L2.4 10.9c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.6.6-1.5 0-2.1z"/>
        </svg>
      );
    case 'linux':
      return (
        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-lg">
          🐧
        </div>
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
    case 'postman':
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF6C37">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l8-4-4 8-1-3-3-1z" fill="white"/>
        </svg>
      );
    default:
      return (
        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
