import React from 'react';
import { Check, Info } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[var(--accent-color)] text-white text-xs font-mono px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
      <Check className="w-4 h-4 text-emerald-400" />
      <span>{message}</span>
    </div>
  );
}
