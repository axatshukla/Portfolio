import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeader from './SectionHeader';

export default function ConnectSection({ personalInfo, onCopyEmail }) {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    onCopyEmail(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full">
      {/* Full-width Top Header Bar */}
      <SectionHeader title="Let's Connect" />

      {/* Main Body Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="md:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[var(--border-color)] shadow-sm space-y-6">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--text-secondary)] uppercase">
                  Direct Contact
                </span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1">
                  Start a Conversation
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                  Whether you're interested in discussing full-stack development, AI agent architecture, internship roles, or project collaborations — feel free to reach out.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="bg-[var(--bg-primary)] p-4 rounded-2xl border border-[var(--border-color)] flex items-center justify-between">
                <div className="overflow-hidden mr-2">
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] block">Email</span>
                  <span className="font-mono text-xs font-bold text-[var(--text-primary)] truncate block">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="btn-primary p-2.5 rounded-xl shrink-0 text-xs font-medium flex items-center gap-1"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Grid */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase font-bold block">
                  Social Profiles
                </span>
                <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                  {personalInfo.connectLinks.filter(l => !l.isEmail).map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:bg-[var(--bg-primary)]/50 transition-all text-[var(--text-primary)]"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Note / Message */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[var(--border-color)] shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare className="w-4 h-4 text-[var(--accent-color)]" />
                  <span className="font-mono text-xs font-bold text-[var(--text-secondary)] uppercase">
                    Quick Message
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Send a Dispatch
                </h3>

                {formSent ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2 animate-fadeIn my-8">
                    <Sparkles className="w-8 h-8 mx-auto text-emerald-600" />
                    <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700">
                      Thanks for reaching out! Akshat will reply to your message shortly at {formData.email || 'your email'}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)] bg-[var(--bg-primary)]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)] bg-[var(--bg-primary)]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">Message</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Akshat, I'd like to talk about..."
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)] bg-[var(--bg-primary)]/40 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Footer status notice */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)]/50 flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Opportunities</span>
                </div>
                <span>IST (UTC+5:30)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
