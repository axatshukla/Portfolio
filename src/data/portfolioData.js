export const personalInfo = {
  name: "Akshat Shukla",
  title: "AI Engineer",
  roles: ["AI Engineer", "Vibe Coder", "Student"],
  role: "Computer Engineering Undergraduate",
  statusBadge: "Computer Engineering Undergraduate",
  location: "Pune, India",
  phone: "+91 8830189542",
  email: "aksh4tshukla@gmail.com",
  github: "https://github.com/axatshukla",
  linkedin: "https://www.linkedin.com/in/akshatshuklaa/",
  resumeUrl: "/Akshat_Shukla_Resume.pdf",
  web3FormsAccessKey: "ebb0fc58-94e4-4440-90ad-15b10e485a8f",
  aboutHeading: "I turn ideas into tested, intelligent software.",
  aboutDescription: "Fascinated by how machines learn, and driven to build software people can rely on. I bring together data, models, clean code and rigorous testing to create AI that's accurate, efficient and ready for the real world.",
  avatarUrl: "/profile.png",

  objective: "Computer Engineering undergraduate with hands-on experience building end-to-end machine learning and NLP systems using Python, scikit-learn, TensorFlow, PyTorch, and Hugging Face. Experienced in data preprocessing, feature engineering, model evaluation, API deployment, Docker, and CI/CD. Built and evaluated production-oriented ML pipelines with measurable performance improvements and automated testing.",

  education: {
    institution: "Sinhgad College of Engineering",
    degree: "B.E. in Computer Engineering",
    location: "Pune, India",
    period: "Expected 2027",
    cgpa: "8.5 / 10"
  },

  certifications: [
    {
      name: "freeCodeCamp — Machine Learning with Python",
      issuer: "freeCodeCamp",
      badge: "Verified Certificate"
    }
  ],

  resumeSkills: [
    {
      category: "Languages",
      skills: ["Python", "Java", "SQL", "C++", "JavaScript"]
    },
    {
      category: "ML / Data",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      category: "Deep Learning / NLP",
      skills: ["TensorFlow", "PyTorch", "Hugging Face Transformers"]
    },
    {
      category: "ML Concepts",
      skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation", "Cross-Validation", "NLP", "Neural Networks"]
    },
    {
      category: "MLOps / Deployment",
      skills: ["FastAPI", "Docker", "Pytest", "GitHub Actions", "Streamlit"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Linux", "Jupyter Notebook"]
    }
  ],

  resumeProjects: [
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
  ],

  focusAreas: [
    {
      title: "AI ENGINEERING",
      skills: [
        "LLM Applications & AI Agents",
        "RAG Pipelines & Vector Search",
        "Prompt Systems & Fine-Tuning"
      ]
    },
    {
      title: "BACKEND ENGINEERING",
      skills: [
        "FastAPI, Node.js & Express",
        "REST APIs & Microservices",
        "PostgreSQL, Redis & Supabase"
      ]
    },
    {
      title: "WEB ENGINEERING",
      skills: [
        "React, Next.js & TypeScript",
        "Modern UI/UX Architecture",
        "Performance & State Design"
      ]
    }
  ],

  connectLinks: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/akshatshuklaa/", isExternal: true },
    { label: "GitHub", url: "https://github.com/axatshukla", isExternal: true },
    { label: "LeetCode", url: "https://leetcode.com/u/axatshukla/", isExternal: true },
    { label: "aksh4tshukla@gmail.com", url: "mailto:aksh4tshukla@gmail.com", isEmail: true }
  ]
};

export const experiences = [
  {
    id: "exp-1",
    role: "Artificial Intelligence Intern",
    company: "Codec Technologies",
    companyLogo: "/codec-technologies.png",
    status: "COMPLETED",
    period: "Feb 2026 – Mar 2026",
    location: "Pune, India",
    type: "Internship",
    bullets: [
      "Analyzed financial time-series data using Python and applied preprocessing and feature engineering techniques for ML modeling.",
      "Trained and evaluated Linear Regression, Ridge Regression, and Random Forest models for stock-price prediction.",
      "Developed an interactive Streamlit dashboard integrating data collection, preprocessing, visualization, model comparison, and next-day prediction."
    ],
    projects: [
      {
        code: "01",
        title: "AI/ML Workflow & Financial Time-Series Modeling",
        bullets: [
          "Analyzed financial time-series data using Python and applied preprocessing and feature engineering techniques for ML modeling.",
          "Trained and evaluated Linear Regression, Ridge Regression, and Random Forest models for stock-price prediction."
        ]
      },
      {
        code: "02",
        title: "Interactive Stock Price Predictor Dashboard",
        bullets: [
          "Developed an interactive Streamlit dashboard integrating data collection, preprocessing, visualization, model comparison, and next-day prediction."
        ]
      }
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Streamlit"]
  }
];

export const projects = [
  {
    id: "proj-1",
    title: "Stride",
    category: "Full Stack & Systems",
    description: "High-performance sprint management & team collaboration workspace engineered with React 19, TypeScript, Express, SQLite WAL, Neon Cloud Postgres, and real email delivery.",
    impactMetrics: "Full Stack Workspace · Dual DB (SQLite + Postgres) · RBAC · Real-time Tasks",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
    tags: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "SQLite"],
    liveDemo: "https://strideeee.netlify.app/",
    codeLink: "https://github.com/axatshukla/Stride",
    highlights: [
      "Multi-tenant team workspaces with strict data isolation, RBAC permissions, and instant cache hydration.",
      "Interactive Kanban board, sprint velocity analytics, structured task tables, and calendar deadline tracking.",
      "Dual database architecture (SQLite WAL + Neon Cloud Postgres) and real-life email dispatch via Gmail SMTP & Resend."
    ]
  },
  {
    id: "proj-2",
    title: "ChurnIQ",
    subtitle: "Production-oriented customer churn prediction system achieving 0.8435 ROC-AUC and 78.9% recall on a held-out test set.",
    category: "ML & Data Science",
    description: "End-to-end ML platform for predicting telecom customer churn with optimized decision thresholds, automated testing, and production-ready API serving.",
    overview: "End-to-end ML workflow for 7,043 telecom customers, covering data validation, EDA, feature engineering, model selection, threshold optimization, and REST API inference.",
    impactMetrics: "0.8435 ROC-AUC · 78.9% Recall · 63.7% F1 · 7,043 Customers · 19 Tests",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    tags: ["Python", "Scikit-learn", "FastAPI", "XGBoost", "MLflow"],
    liveDemo: "https://github.com/axatshukla/ChurnIQ",
    codeLink: "https://github.com/axatshukla/ChurnIQ",
    highlights: [
      "0.8435 ROC-AUC and 0.6365 F1 on 1,409 unseen test records.",
      "78.88% recall with an optimized 0.48 decision threshold.",
      "5-fold CV benchmarking Random Forest, Logistic Regression & XGBoost.",
      "19 automated tests covering features, preprocessing, and API behavior.",
      "Atomic sklearn Pipeline keeps training and inference preprocessing consistent.",
      "FastAPI + MLflow provide API serving and experiment tracking."
    ]
  },
  {
    id: "proj-3",
    title: "Sentiment Classifier",
    subtitle: "Empirical comparison of classical NLP and pretrained transformers, revealing a 180× CPU inference gap while the tuned baseline achieved higher accuracy on the IMDB dataset.",
    category: "NLP & Machine Learning",
    description: "Empirical NLP benchmark comparing classical TF-IDF + Logistic Regression against DistilBERT for accuracy, latency, compute, and model efficiency.",
    overview: "Benchmarked TF-IDF + Logistic Regression against DistilBERT across accuracy, F1, latency, throughput, training time, memory, and model footprint using 50,000 balanced IMDB reviews.",
    impactMetrics: "89.68% Accuracy · 0.8968 F1 · 180× Faster · 580× Smaller · 50K Reviews",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
    tags: ["Python", "Scikit-learn", "PyTorch", "DistilBERT", "NLP", "Pandas"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/sentiment-benchmark",
    highlights: [
      "89.68% accuracy and 0.8968 F1 from the classical baseline.",
      "0.69 ms/review inference vs 124.90 ms for DistilBERT — 180.7× faster.",
      "0.44 MB model footprint vs 255.41 MB — approximately 580× smaller.",
      "~1,447 reviews/sec baseline throughput vs ~8 reviews/sec for DistilBERT.",
      "Real-world error analysis covering sarcasm, negation, sentiment shifts, and ambiguity.",
      "Reproducible CPU benchmark designed to connect model quality with compute and operational cost."
    ]
  }
];


export const skillCategories = [
  {
    title: "AI / ML",
    skills: [
      { name: "Python", iconType: "python", color: "#3776AB", bg: "#F0F7FC" },
      { name: "Machine Learning", iconType: "ml", color: "#6366F1", bg: "#EEF2FF" },
      { name: "Scikit-learn", iconType: "scikit", color: "#F89939", bg: "#FFF7ED" },
      { name: "Pandas", iconType: "pandas", color: "#150458", bg: "#F5F3FF" },
      { name: "NumPy", iconType: "numpy", color: "#013243", bg: "#F0F9FF" },
      { name: "Deep Learning", iconType: "dl", color: "#8B5CF6", bg: "#F5F3FF" },
      { name: "NLP", iconType: "nlp", color: "#059669", bg: "#ECFDF5" },
      { name: "Generative AI", iconType: "genai", color: "#7C3AED", bg: "#FAF5FF" },
      { name: "LLMs", iconType: "llms", color: "#9333EA", bg: "#FAF5FF" },
      { name: "RAG", iconType: "rag", color: "#0284C7", bg: "#F0F9FF" }
    ]
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "Java", iconType: "java", color: "#E76F00", bg: "#FFF7ED" },
      { name: "DSA", iconType: "dsa", color: "#2563EB", bg: "#EFF6FF" },
      { name: "OOP", iconType: "oop", color: "#4F46E5", bg: "#EEF2FF" },
      { name: "SQL", iconType: "sql", color: "#0284C7", bg: "#F0F9FF" },
      { name: "REST APIs", iconType: "api", color: "#0284C7", bg: "#F0F9FF" },
      { name: "Git", iconType: "git", color: "#F05032", bg: "#FEF2EE" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", iconType: "html5", color: "#E34F26", bg: "#FEF2EE" },
      { name: "CSS3", iconType: "css3", color: "#1572B6", bg: "#F0F7FC" },
      { name: "JavaScript", iconType: "javascript", color: "#F7DF1E", bg: "#FEFDE8" },
      { name: "TypeScript", iconType: "typescript", color: "#3178C6", bg: "#EFF6FF" },
      { name: "React", iconType: "react", color: "#06B6D4", bg: "#ECFEFF" },
      { name: "Vue.js", iconType: "vue", color: "#42B883", bg: "#ECFDF5" },
      { name: "Next.js", iconType: "nextjs", color: "#111827", bg: "#F3F4F6" },
      { name: "Node.js", iconType: "nodejs", color: "#16A34A", bg: "#F0FDF4" },
      { name: "FastAPI", iconType: "fastapi", color: "#059669", bg: "#ECFDF5" },
      { name: "Tailwind CSS", iconType: "tailwind", color: "#38BDF8", bg: "#F0F9FF" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", iconType: "mysql", color: "#00758F", bg: "#EFF6FF" },
      { name: "MongoDB", iconType: "mongodb", color: "#47A248", bg: "#F0FDF4" },
      { name: "Supabase", iconType: "supabase", color: "#3ECF8E", bg: "#ECFDF5" }
    ]
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "GitHub", iconType: "github", color: "#181717", bg: "#F3F4F6" },
      { name: "Docker", iconType: "docker", color: "#2496ED", bg: "#EFF6FF" },
      { name: "Linux", iconType: "linux", color: "#FCC624", bg: "#FEFCE8" },
      { name: "Jupyter", iconType: "jupyter", color: "#F37626", bg: "#FFF7ED" },
      { name: "Figma", iconType: "figma", color: "#F24E1E", bg: "#FEF2EE" }
    ]
  }
];
