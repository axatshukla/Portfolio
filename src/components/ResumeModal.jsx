import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, GraduationCap, Award, Phone, Briefcase, Code2, FolderGit2, CheckCircle2 } from 'lucide-react';
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

  const education = personalInfo?.education || {
    institution: "Sinhgad College of Engineering",
    degree: "B.E. in Computer Engineering",
    location: "Pune, India",
    period: "Expected 2027",
    cgpa: "8.5 / 10"
  };

  const objective = personalInfo?.objective || 
    "Computer Engineering undergraduate with hands-on experience building end-to-end machine learning and NLP systems using Python, scikit-learn, TensorFlow, PyTorch, and Hugging Face. Experienced in data preprocessing, feature engineering, model evaluation, API deployment, Docker, and CI/CD. Built and evaluated production-oriented ML pipelines with measurable performance improvements and automated testing.";

  const resumeSkills = personalInfo?.resumeSkills || [
    { category: "Languages", skills: ["Python", "Java", "SQL", "C++", "JavaScript"] },
    { category: "ML / Data", skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"] },
    { category: "Deep Learning / NLP", skills: ["TensorFlow", "PyTorch", "Hugging Face Transformers"] },
    { category: "ML Concepts", skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation", "Cross-Validation", "NLP", "Neural Networks"] },
    { category: "MLOps / Deployment", skills: ["FastAPI", "Docker", "Pytest", "GitHub Actions", "Streamlit"] },
    { category: "Tools", skills: ["Git", "GitHub", "Linux", "Jupyter Notebook"] }
  ];

  const resumeProjects = personalInfo?.resumeProjects || [
    {
      title: "ChurnIQ — Customer Churn Prediction Pipeline",
      github: "https://github.com/axatshukla/ChurnIQ",
      bullets: [
        "Built an end-to-end churn prediction pipeline using scikit-learn Pipeline and ColumnTransformer, covering data validation, feature engineering, and preprocessing.",
        "Selected Random Forest (class_weight='balanced') over Logistic Regression and XGBoost via stratified 5-fold CV; achieved F1: 0.6365 and ROC-AUC: 0.8435, with threshold tuned to 0.48 for recall ≥ 0.70.",
        "Deployed the model as a FastAPI service in Docker with Pytest-based automated tests and GitHub Actions CI."
      ]
    },
    {
      title: "Sentiment Classification — Classical ML vs. Transformer Benchmark",
      github: "https://github.com/axatshukla/sentiment-benchmark",
      bullets: [
        "Benchmarked classical NLP and transformer-based approaches, comparing TF-IDF + Logistic Regression against pretrained DistilBERT for movie-review sentiment classification.",
        "Achieved 89.68% accuracy (F1: 0.897) vs. 88.10% (F1: 0.881) for zero-shot DistilBERT, with the baseline running ~180x faster (0.69ms vs. 124.9ms) and using 580x less disk (0.44MB vs. 255MB).",
        "Performed qualitative error analysis on negation, sarcasm, and nuanced sentiment shifts."
      ]
    }
  ];

  const certifications = personalInfo?.certifications || [
    {
      name: "freeCodeCamp — Machine Learning with Python",
      issuer: "freeCodeCamp"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-[var(--border-color)] max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-[var(--accent-color)] border border-[var(--border-color)]/60">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-[var(--text-primary)] block leading-tight">
                Curriculum Vitae — {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-[var(--text-secondary)]">
                B.E. Computer Engineering · Expected 2027
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="/Akshat_Shukla_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Open Official PDF"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>
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
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white transition-colors ml-1"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-[var(--text-primary)]">
          {/* Header Info & Contacts */}
          <div className="border-b border-[var(--border-color)] pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                {personalInfo.name}
              </h1>
              <span className="text-xs font-mono font-semibold text-[var(--accent-color)] bg-slate-100 px-3 py-1 rounded-full w-fit">
                {personalInfo.statusBadge || "Computer Engineering Undergraduate"}
              </span>
            </div>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs font-mono text-[var(--text-secondary)]">
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                  <span>{personalInfo.phone}</span>
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin || "https://www.linkedin.com/in/akshatshuklaa/"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] hover:underline"
              >
                <span>in/akshatshuklaa</span>
              </a>
              <a
                href={personalInfo.github || "https://github.com/axatshukla"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] hover:underline"
              >
                <span>github.com/axatshukla</span>
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                <span>{personalInfo.location || "Pune, India"}</span>
              </span>
            </div>
          </div>

          {/* OBJECTIVE */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              Objective
            </h2>
            <div className="bg-[var(--bg-primary)]/40 p-4 sm:p-5 rounded-2xl border border-[var(--border-color)]/60 text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed">
              {objective}
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {resumeSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[var(--bg-primary)]/40 rounded-2xl border border-[var(--border-color)]/60"
                >
                  <span className="font-mono text-[11px] font-bold text-[var(--text-primary)] uppercase tracking-wider block mb-1.5">
                    {item.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-[var(--border-color)]/70 text-[var(--text-secondary)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              Experience
            </h2>
            <div className="space-y-3">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--bg-primary)]/40 p-4 sm:p-5 rounded-2xl border border-[var(--border-color)]/60 space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-sm sm:text-[15px] text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-[var(--accent-color)]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-secondary)] sm:text-right">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-[13px] text-[var(--text-secondary)] list-disc pl-4 leading-relaxed">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              Projects
            </h2>
            <div className="space-y-3">
              {resumeProjects.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--bg-primary)]/40 p-4 sm:p-5 rounded-2xl border border-[var(--border-color)]/60 space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-sm sm:text-[14.5px] text-[var(--text-primary)]">
                      {p.title}
                    </h3>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-semibold text-[var(--accent-color)] hover:underline inline-flex items-center gap-1"
                      >
                        <span>[GitHub]</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-[13px] text-[var(--text-secondary)] list-disc pl-4 leading-relaxed">
                    {p.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              Education
            </h2>
            <div className="bg-[var(--bg-primary)]/40 p-4 sm:p-5 rounded-2xl border border-[var(--border-color)]/60">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                    {education.institution}
                  </h3>
                  <p className="text-xs text-[var(--accent-color)] font-medium">
                    {education.degree} · {education.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--text-secondary)] sm:text-right">
                  {education.period}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-[var(--border-color)]/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-[var(--accent-color)] uppercase mb-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              Certifications
            </h2>
            <div className="bg-[var(--bg-primary)]/40 p-4 sm:p-5 rounded-2xl border border-[var(--border-color)]/60 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                  {certifications[0]?.name || "freeCodeCamp — Machine Learning with Python"}
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <a
            href="/Akshat_Shukla_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open official PDF file</span>
          </a>
          <div className="flex items-center gap-2">
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
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
