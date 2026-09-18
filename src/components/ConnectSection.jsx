import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ExternalLink, Sparkles, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeader from './SectionHeader';

export default function ConnectSection({ personalInfo, onCopyEmail }) {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showDirectOptions, setShowDirectOptions] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    onCopyEmail(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setShowDirectOptions(false);

    let sentSuccessfully = false;
    const isLocalhost = Boolean(
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname === ''
    );

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || personalInfo.web3FormsAccessKey;

    // Strategy 1: If hosted on Netlify (or production), submit via native Netlify Forms
    if (!isLocalhost) {
      try {
        const netlifyParams = new URLSearchParams({
          'form-name': 'dispatch',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

        const netlifyResponse = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyParams.toString(),
        });

        if (netlifyResponse.ok) {
          sentSuccessfully = true;
        }
      } catch (err) {
        console.warn('Netlify form submission note:', err);
      }
    }

    // Strategy 2: Web3Forms submission (via FormData, avoiding JSON CORS preflight issues)
    if (!sentSuccessfully && accessKey && accessKey.trim().length > 0) {
      try {
        const web3Data = new FormData();
        web3Data.append('access_key', accessKey.trim());
        web3Data.append('name', formData.name);
        web3Data.append('email', formData.email);
        web3Data.append('message', formData.message);
        web3Data.append('subject', `Portfolio Dispatch from ${formData.name}`);
        web3Data.append('from_name', formData.name);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: web3Data,
        });

        if (response.ok) {
          const result = await response.json().catch(() => ({ success: true }));
          if (result.success) {
            sentSuccessfully = true;
          }
        }
      } catch (err) {
        console.warn('Web3Forms submission note:', err);
      }
    }

    // Strategy 3: Localhost development testing support
    if (!sentSuccessfully && isLocalhost) {
      console.info('Local development: Dispatch recorded successfully in console:', formData);
      sentSuccessfully = true;
    }

    if (sentSuccessfully) {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
      });
      setFormSent(true);
      setTimeout(() => {
        setFormSent(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    } else {
      setErrorMessage('Unable to dispatch automatically right now. You can send it directly with one click below:');
      setShowDirectOptions(true);
    }

    setIsSubmitting(false);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(`Portfolio Dispatch from ${formData.name || 'Visitor'}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Portfolio Dispatch from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

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
                    <h4 className="font-bold text-sm">Message Dispatched!</h4>
                    <p className="text-xs text-emerald-700">
                      Thanks for reaching out! Akshat will reply to your message shortly at {formData.email || 'your email'}.
                    </p>
                  </div>
                ) : (
                  <form
                    name="dispatch"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Netlify form detection hidden inputs */}
                    <input type="hidden" name="form-name" value="dispatch" />
                    <div className="hidden">
                      <input name="bot-field" tabIndex="-1" autoComplete="off" />
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                          <span className="font-medium">{errorMessage}</span>
                        </div>
                        {showDirectOptions && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            <a
                              href={gmailComposeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 bg-white border border-amber-300 rounded-lg text-[11px] font-semibold text-amber-900 hover:bg-amber-100/60 flex items-center gap-1.5 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 text-amber-700" />
                              <span>Open in Gmail</span>
                            </a>
                            <a
                              href={mailtoUrl}
                              className="px-3 py-1.5 bg-white border border-amber-300 rounded-lg text-[11px] font-semibold text-amber-900 hover:bg-amber-100/60 flex items-center gap-1.5 transition-colors"
                            >
                              <span>Default Mail App</span>
                            </a>
                          </div>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)] bg-[var(--bg-primary)]/40 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)] bg-[var(--bg-primary)]/40 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">Message</label>
                      <textarea
                        required
                        name="message"
                        rows={3}
                        disabled={isSubmitting}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Akshat, I'd like to talk about..."
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--accent-color)] bg-[var(--bg-primary)]/40 resize-none disabled:opacity-50"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
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
