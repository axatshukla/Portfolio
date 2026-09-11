export const personalInfo = {
  name: "Akshat Shukla",
  title: "AI & Full-Stack Developer",
  role: "Student & Software Developer",
  statusBadge: "Computer Science Undergraduate",
  location: "India",
  email: "aksh4tshukla@gmail.com",
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
    role: "Software Engineering Intern",
    company: "Apex Tech Labs",
    companyLogo: "⚡",
    status: "CURRENT",
    period: "Jan 2025 – Present",
    location: "Remote, India",
    type: "Internship",
    projects: [
      {
        code: "01",
        title: "Intelligent Developer Assistant & RAG Engine",
        bullets: [
          "Architected and deployed an internal code search and RAG engine indexing 50k+ repository files, reducing dev onboarding query time by 45%.",
          "Implemented semantic chunking, hybrid vector/keyword search with ChromaDB, and context reranking for high recall.",
          "Integrated automated CI/CD pipeline triggers and telemetry logging for system health."
        ]
      },
      {
        code: "02",
        title: "FastAPI Microservices & API Gateway",
        bullets: [
          "Developed high-throughput async microservices handling authentication, rate limiting, and structured JSON payloads.",
          "Optimized Postgres query patterns with indexing and connection pooling, shaving p95 latency to under 35ms.",
          "Configured containerized Docker instances and automated deployment scripts."
        ]
      }
    ],
    tags: ["React", "FastAPI", "TypeScript", "Python", "ChromaDB", "Docker", "PostgreSQL"]
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "Campus Spark Studio",
    companyLogo: "🚀",
    status: "COMPLETED",
    period: "May 2024 – Dec 2024",
    location: "Campus / Remote",
    type: "Part-time",
    projects: [
      {
        code: "01",
        title: "Student Collaboration & Resource Portal",
        bullets: [
          "Built a reactive MERN stack web app serving 3,000+ active university students for course resources and project team matching.",
          "Integrated real-time notification socket feeds and file storage with Amazon S3.",
          "Created modular reusable UI component library using Tailwind CSS and Radix primitives."
        ]
      },
      {
        code: "02",
        title: "Database Performance & Query Optimization",
        bullets: [
          "Refactored complex MongoDB aggregations and implemented Redis cache layers, accelerating page load speeds by 3x."
        ]
      }
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "Tailwind CSS", "REST APIs"]
  },
  {
    id: "exp-3",
    role: "Undergraduate Research Trainee",
    company: "Department of Computer Science",
    companyLogo: "🎓",
    status: "ACADEMIC",
    period: "Aug 2023 – Apr 2024",
    location: "University Campus",
    type: "Research",
    projects: [
      {
        code: "01",
        title: "Data Pipelines & Neural Network Benchmarking",
        bullets: [
          "Gained hands-on expertise in structured data extraction, preprocessing, and statistical evaluation with Python (NumPy, Pandas, PyTorch).",
          "Benchmarked multi-modal embeddings across text and image datasets for semantic retrieval benchmarks."
        ]
      }
    ],
    tags: ["Python", "PyTorch", "Data Science", "PostgreSQL", "Algorithms"]
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
    codeLink: "https://github.com/axatshukla/autopatch-ai"
  },
  {
    id: "proj-2",
    title: "ZenKit-UI",
    category: "Frontend",
    description: "Modern, ultra-minimal React component library with built-in accessibility, fluid physics transitions, and copy-paste code snippets.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/zenkit-ui"
  },
  {
    id: "proj-3",
    title: "DevChronicle Publishing",
    category: "Full Stack",
    description: "Full-featured technical publication platform inspired by Medium. Supports Markdown, real-time collaboration, and community interactions.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/devchronicle"
  },
  {
    id: "proj-4",
    title: "Rick & Morty Vault",
    category: "Web & API",
    description: "Interactive themed collector experience with character filters, live dimension exploration, audio soundboards, and cart checkout simulation.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=700&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/rick-morty-vault"
  },
  {
    id: "proj-5",
    title: "SweetSpot Artisan",
    category: "Frontend",
    description: "Gourmet confectionery storefront featuring 3D product rotates, ingredient customizer, and silky smooth micro-animations.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/sweetspot"
  },
  {
    id: "proj-6",
    title: "SummitHaven Escapes",
    category: "Full Stack",
    description: "Comprehensive vacation rental reservation platform with date range pricing, interactive map clustering, and instant host messaging.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    tags: ["MongoDB", "Express", "React", "Node.js", "Mapbox"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/summithaven"
  },
  {
    id: "proj-7",
    title: "VibeWave Audio",
    category: "Web & Audio",
    description: "Aesthetic browser audio station replicating Spotify's fluid player with web audio equalizer, custom playlist curation, and lyrics syncing.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/vibewave"
  },
  {
    id: "proj-8",
    title: "CampusSphere Radar",
    category: "Mobile & Web",
    description: "Real-time navigation and event locator for university campuses with turn-by-turn routing, venue occupancy meters, and indoor maps.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80",
    tags: ["React", "Geolocation API", "Tailwind CSS", "Node.js"],
    liveDemo: "https://github.com/axatshukla",
    codeLink: "https://github.com/axatshukla/campussphere"
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
