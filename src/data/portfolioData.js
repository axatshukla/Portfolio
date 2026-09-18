export const personalInfo = {
  name: "Akshat Shukla",
  title: "AI Engineer",
  roles: ["AI Engineer", "Vibe Coder", "Student"],
  role: "Student & Software Developer",
  statusBadge: "Computer Science Undergraduate",
  location: "India",
  email: "aksh4tshukla@gmail.com",
  web3FormsAccessKey: "ebb0fc58-94e4-4440-90ad-15b10e485a8f",
  aboutHeading: "I build scalable, intelligent applications across full stack & AI systems.",
  aboutDescription: "What began as a fascination with computer systems evolved into a focused drive for crafting high-impact software. Currently pursuing my degree, I specialize in building full-stack platforms, autonomous AI agents, and intuitive developer tooling that solve real-world problems.",
  avatarUrl: "/profile.png",

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
    period: "Feb 2026 - Mar 2026",
    location: "Hybrid, India",
    type: "Internship",
    bullets: [
      "Gained hands-on experience with Python, data analysis, and machine learning, AI/ML Workflow, working with real-world financial time-series data.",
      "Learned and applied feature engineering, regression, model training, and evaluation using Linear Regression, Ridge Regression, and Random Forest.",
      "Built and tested an interactive Stock Price Predictor with a Streamlit dashboard, implementing data collection, preprocessing, visualization, model comparison, and next-day prediction."
    ],
    projects: [
      {
        code: "01",
        title: "AI/ML Workflow & Financial Time-Series Modeling",
        bullets: [
          "Gained hands-on experience with Python, data analysis, and machine learning, AI/ML Workflow, working with real-world financial time-series data.",
          "Learned and applied feature engineering, regression, model training, and evaluation using Linear Regression, Ridge Regression, and Random Forest."
        ]
      },
      {
        code: "02",
        title: "Interactive Stock Price Predictor Dashboard",
        bullets: [
          "Built and tested an interactive Stock Price Predictor with a Streamlit dashboard, implementing data collection, preprocessing, visualization, model comparison, and next-day prediction."
        ]
      }
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Streamlit"]
  }
];

export const projects = [
  {
    id: "proj-1",
    title: "AutoPatch AI",
    category: "AI & Tools",
    description: "AI-powered bug fix generator. Paste an issue or error traceback, get a validated code patch and create a GitHub PR with one click.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80",
    tags: ["Python", "FastAPI", "React", "ChromaDB", "OpenAI"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/autopatch-ai",
    highlights: [
      "Automated AST parsing and error traceback diagnostics powered by LLM agents.",
      "Vector search retrieval with ChromaDB to locate relevant source code context.",
      "One-click GitHub API integration for generating tested patch pull requests."
    ]
  },
  {
    id: "proj-2",
    title: "Stride",
    category: "Full Stack & Systems",
    description: "High-performance sprint management & team collaboration workspace engineered with React 19, TypeScript, Express, SQLite WAL, Neon Cloud Postgres, and real email delivery.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
    tags: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "SQLite"],
    liveDemo: "https://strideeee.netlify.app/",
    codeLink: "https://github.com/axatshukla/Stride",
    highlights: [
      "Multi-tenant team workspaces with strict data isolation, RBAC permissions, and instant cache hydration.",
      "Interactive Kanban board, sprint velocity analytics, structured task tables, and calendar deadline tracking.",
      "Dual database architecture (SQLite WAL + Neon Cloud Postgres) and real-life email dispatch via Gmail SMTP & Resend."
    ]
  }
];


export const skillCategories = [
  {
    title: "AI & LLMs",
    skills: [
      { name: "LangChain", iconType: "chain", color: "#2E8B57", bg: "#EBF7EE" },
      { name: "LangGraph", iconType: "graph", color: "#1E3A8A", bg: "#EEF2FF" },
      { name: "RAG", iconType: "rag", color: "#0284C7", bg: "#F0F9FF" },
      { name: "LLM Integration", iconType: "brain", color: "#7C3AED", bg: "#F5F3FF" },
      { name: "Prompt Engineering", iconType: "prompt", color: "#111827", bg: "#F3F4F6" },
      { name: "Model Context Protocol", iconType: "mcp", color: "#9333EA", bg: "#FAF5FF" },
      { name: "LlamaStack / Ollama", iconType: "llama", color: "#0F172A", bg: "#F1F5F9" },
      { name: "Google GenAI SDK", iconType: "google", color: "#EA4335", bg: "#FEF2F2" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", iconType: "python", color: "#3776AB", bg: "#F0F7FC" },
      { name: "FastAPI", iconType: "fastapi", color: "#059669", bg: "#ECFDF5" },
      { name: "Pydantic", iconType: "pydantic", color: "#E11D48", bg: "#FFF1F2" },
      { name: "Node.js", iconType: "nodejs", color: "#16A34A", bg: "#F0FDF4" },
      { name: "Express", iconType: "express", color: "#374151", bg: "#F9FAFB" },
      { name: "GraphQL", iconType: "graphql", color: "#E535AB", bg: "#FDF2F8" },
      { name: "REST APIs", iconType: "api", color: "#0284C7", bg: "#F0F9FF" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", iconType: "html5", color: "#E34F26", bg: "#FEF2EE" },
      { name: "CSS3", iconType: "css3", color: "#1572B6", bg: "#F0F7FC" },
      { name: "JavaScript", iconType: "javascript", color: "#F7DF1E", bg: "#FEFDE8" },
      { name: "TypeScript", iconType: "typescript", color: "#3178C6", bg: "#EFF6FF" },
      { name: "React", iconType: "react", color: "#06B6D4", bg: "#ECFEFF" },
      { name: "Vue", iconType: "vue", color: "#10B981", bg: "#ECFDF5" },
      { name: "Next.js", iconType: "nextjs", color: "#111827", bg: "#F3F4F6" },
      { name: "Tailwind CSS", iconType: "tailwind", color: "#38BDF8", bg: "#F0F9FF" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", iconType: "docker", color: "#2496ED", bg: "#EFF6FF" },
      { name: "Podman", iconType: "podman", color: "#892CA0", bg: "#FAF5FF" },
      { name: "OpenShift", iconType: "openshift", color: "#EE0000", bg: "#FEF2F2" },
      { name: "CI/CD", iconType: "cicd", color: "#F59E0B", bg: "#FFFBEB" },
      { name: "Github Actions", iconType: "actions", color: "#2088FF", bg: "#EFF6FF" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", iconType: "mongodb", color: "#47A248", bg: "#F0FDF4" },
      { name: "MySQL", iconType: "mysql", color: "#4479A1", bg: "#EFF6FF" },
      { name: "PostgreSQL", iconType: "postgres", color: "#336791", bg: "#F0F7FC" },
      { name: "ChromaDB", iconType: "chromadb", color: "#F59E0B", bg: "#FFFBEB" },
      { name: "Supabase", iconType: "supabase", color: "#3ECF8E", bg: "#ECFDF5" }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", iconType: "git", color: "#F05032", bg: "#FEF2EE" },
      { name: "Linux", iconType: "linux", color: "#FCC624", bg: "#FEFCE8" },
      { name: "Figma", iconType: "figma", color: "#F24E1E", bg: "#FEF2EE" },
      { name: "Postman", iconType: "postman", color: "#FF6C37", bg: "#FEF3EE" }
    ]
  }
];
