import sufisysDashboardImg from '../assets/projects/sufisys-dashboard.png'
import sufisysPigmyImg from '../assets/projects/sufisys-pigmy.png'
import sufisysMobileImg from '../assets/projects/sufisys-mobile.png'

export const personalInfo = {
  name: "Sudarshan Balichakra",
  shortName: "Sudarshan",
  title: "Full Stack Developer",
  experienceYears: "3.4+",
  location: "Bengaluru, Karnataka, India",
  phone: "9148580655",
  formattedPhone: "+91 9148580655",
  email: "suddu680@gmail.com",
  linkedin: "https://linkedin.com/in/sudarshan-balichakra-1a7239215",
  github: "https://github.com/sudarshanbalichakra",
  headline: "Full Stack Developer specializing in MERN, NestJS & Python FastAPI",
  summary:
    "Full Stack Developer with around 3.4 years of professional experience building responsive web applications and backend services using the MERN stack, React.js, Node.js, Express.js, MongoDB, and Python FastAPI. Experienced in designing REST APIs, real-time applications with WebSockets, state management with Redux, and modular application architectures. Hands-on with Docker, AWS EC2, CI/CD, and application deployment using Vercel and Render, with supporting tools including MongoDB Atlas, Cloudinary, and Expo.",
  status: "Available for new opportunities",
  highlights: [
    { label: "Experience", value: "3.4+ Years", desc: "Building scalable web & backend apps" },
    { label: "Core Stack", value: "MERN + FastAPI", desc: "React, Node, NestJS, Python" },
    { label: "Flagship SaaS", value: "SufiSys Multi-Tenant", desc: "Web dashboard + Expo mobile app" },
    { label: "Cloud & DevOps", value: "AWS EC2 & Docker", desc: "Nginx, CI/CD, Vercel, Render" }
  ]
}

export const technicalSkills = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Component architecture, reactive state, and modern styling",
    skills: [
      { name: "React.js", level: "Expert", featured: true },
      { name: "Next.js", level: "Advanced", featured: true },
      { name: "JavaScript (ES6+)", level: "Expert", featured: true },
      { name: "TypeScript", level: "Advanced", featured: true },
      { name: "Tailwind CSS", level: "Expert", featured: true },
      { name: "Redux / Redux Toolkit", level: "Advanced", featured: true },
      { name: "HTML5 & CSS3", level: "Expert", featured: false },
      { name: "Vite", level: "Advanced", featured: false }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "Robust services, microservices, and real-time streams",
    skills: [
      { name: "Node.js", level: "Expert", featured: true },
      { name: "Express.js", level: "Expert", featured: true },
      { name: "NestJS", level: "Advanced", featured: true },
      { name: "Python", level: "Advanced", featured: true },
      { name: "FastAPI", level: "Advanced", featured: true },
      { name: "RESTful APIs", level: "Expert", featured: true },
      { name: "WebSockets", level: "Advanced", featured: true }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    description: "Schema design, tenant isolation, and high-performance caching",
    skills: [
      { name: "MongoDB", level: "Expert", featured: true },
      { name: "MongoDB Atlas", level: "Advanced", featured: true },
      { name: "Mongoose ODM", level: "Expert", featured: true },
      { name: "Redis", level: "Intermediate", featured: false }
    ]
  },
  {
    category: "Cloud, DevOps & Hosting",
    icon: "Cloud",
    description: "Server administration, containerization, and automated delivery",
    skills: [
      { name: "AWS EC2", level: "Advanced", featured: true },
      { name: "Docker", level: "Advanced", featured: true },
      { name: "CI/CD Pipelines", level: "Intermediate", featured: true },
      { name: "Nginx (Web/Reverse Proxy)", level: "Advanced", featured: true },
      { name: "Vercel", level: "Advanced", featured: false },
      { name: "Render", level: "Advanced", featured: false }
    ]
  },
  {
    category: "Mobile & Media",
    icon: "Smartphone",
    description: "Cross-platform Android applications and cloud media vaults",
    skills: [
      { name: "React Native", level: "Advanced", featured: true },
      { name: "Expo", level: "Advanced", featured: true },
      { name: "Cloudinary CDN", level: "Advanced", featured: false }
    ]
  },
  {
    category: "Architecture & Practices",
    icon: "Cpu",
    description: "Enterprise software patterns and reliable engineering",
    skills: [
      { name: "Multi-Tenant Architecture", level: "Advanced", featured: true },
      { name: "Microservices", level: "Advanced", featured: true },
      { name: "Role-Based Access Control (RBAC)", level: "Advanced", featured: true },
      { name: "JWT Authentication", level: "Expert", featured: true },
      { name: "API Integration", level: "Expert", featured: false },
      { name: "Responsive UI/UX", level: "Expert", featured: false },
      { name: "Production Debugging", level: "Advanced", featured: false }
    ]
  }
]

export const sufisysProject = {
  id: "sufisys",
  title: "SufiSys – Multi-Tenant Finance Management System",
  subtitle:
    "Enterprise SaaS Platform & Field Collection Mobile App for Microfinance, Daily Pigmy Savings, and Loan Lifecycle Management",
  badge: "Featured Flagship Project",
  techStack: [
    "React.js",
    "Vite",
    "NestJS",
    "Node.js",
    "MongoDB Atlas",
    "Expo",
    "React Native",
    "Cloudinary",
    "Vercel",
    "Render"
  ],
  architectureType: "Multi-Tenant SaaS with Tenant-Aware DB Isolation",
  summary:
    "Designed and developed a production-grade finance management ecosystem serving multiple independent finance institutions with secure tenant-specific client accounts, automated loan tracking, daily Pigmy savings ledger, real-time field collections, and role-based access for branch executives and on-field agents.",
  images: {
    dashboard: sufisysDashboardImg,
    pigmy: sufisysPigmyImg,
    mobile: sufisysMobileImg,
    note: "Original application photos loaded."
  },
  modules: [
    {
      title: "Multi-Tenant SaaS Architecture",
      icon: "Building2",
      description:
        "Designed tenant-isolated database access where every finance branch operates in a dedicated organizational context, preventing cross-tenant data leakage while sharing scalable NestJS backend microservices."
    },
    {
      title: "Customer & Loan Lifecycle Engine",
      icon: "CreditCard",
      description:
        "End-to-end module managing borrower onboarding, KYC document uploads to Cloudinary, credit evaluation, automated EMI schedules, daily/weekly interest accrual, and final settlement with digital NOC receipts."
    },
    {
      title: "Pigmy Daily Savings Ledger",
      icon: "PiggyBank",
      description:
        "Purpose-built daily recurring deposit tracking featuring calendar attendance check-ins, automated daily punch-ins, compound interest maturity forecast, and doorstep customer passbook balance updates."
    },
    {
      title: "Dedicated Field Collection Android App",
      icon: "Smartphone",
      description:
        "Built with React Native and Expo for collection managers to view daily assigned customer routes, scan customer QR codes, log cash/UPI payments, operate offline, and dispatch real-time SMS receipts."
    },
    {
      title: "Role-Based Access Control (RBAC)",
      icon: "ShieldCheck",
      description:
        "Strict permission hierarchies separating Client Super-Administrators, Branch Managers, Cashiers, and On-Field Collection Agents with NestJS JWT guards and audit logging."
    },
    {
      title: "Cloud Infrastructure & Deployment",
      icon: "CloudLightning",
      description:
        "Continuous deployment with Vercel for the React frontend, Render for NestJS backend REST APIs, MongoDB Atlas multi-region clusters, and Cloudinary for optimized media and KYC records."
    }
  ],
  keyAchievements: [
    "Architected multi-tenant database abstraction layer ensuring zero cross-tenant contamination",
    "Streamlined daily doorstep collections across multiple field agents with instant ledger reconciliation",
    "Eliminated paper-based Pigmy registers through real-time calendar tracking and automatic interest calculation",
    "Engineered robust offline-first sync in the Expo mobile app for low-connectivity rural collection routes"
  ]
}

export const workExperience = [
  {
    company: "CraftySogo",
    role: "Software Engineer",
    location: "Bengaluru, Karnataka",
    period: "Jan 2025 – Jun 2026",
    status: "Present / Recent",
    skills: ["React.js", "Tailwind CSS", "Python FastAPI", "Node.js", "Express.js", "Redux", "Docker", "AWS EC2", "Next.js"],
    achievements: [
      "Developed interactive and responsive UI components using React.js and Tailwind CSS, integrating AI-powered chat streaming and molecular visualization features.",
      "Designed and integrated REST APIs using Node.js, Express.js, and Python FastAPI for database-driven application workflows.",
      "Managed complex application state with Redux, including chat-streaming data, user sessions, and shared UI state.",
      "Deployed backend microservices on AWS EC2 using Docker, supporting a modular and scalable application architecture.",
      "Implemented dynamic and file-based routing in Next.js, building multi-page applications with nested layouts and reusable components."
    ]
  },
  {
    company: "Digibizminds Private Limited",
    role: "Software Engineer (Full Stack Developer)",
    location: "Kalaburagi, Karnataka",
    period: "Jun 2022 – Dec 2024",
    status: "Completed",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2", "Nginx", "RESTful APIs", "Server Administration"],
    achievements: [
      "Developed responsive and dynamic web applications using React.js, building reusable components and maintaining a scalable frontend architecture.",
      "Designed and developed backend services and RESTful APIs using Node.js and Express.js, integrating frontend components with server-side business logic.",
      "Implemented database operations and application data management using MongoDB to support full-stack application workflows.",
      "Deployed and hosted web applications on AWS EC2 instances, configuring server environments for production deployment.",
      "Configured Nginx as a web server and reverse proxy to route incoming requests to backend services and serve the frontend application.",
      "Managed application deployment, server configuration, and production troubleshooting to maintain reliable application availability."
    ]
  }
]

export const education = {
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  institution: "Poojya Doddappa Appa College of Engineering",
  period: "Jul 2017 – Jul 2021",
  cgpa: "7.4 / 10",
  highlights: [
    "Core coursework: Data Structures, Analysis of Algorithms, Database Management Systems, Computer Networks, Operating Systems, Software Engineering.",
    "Graduated with 7.4/10 CGPA with practical project delivery in web development and algorithmic problem solving."
  ]
}

export const languages = [
  { language: "English", proficiency: "Full Professional Proficiency", rating: "Professional" },
  { language: "Kannada", proficiency: "Full Professional Proficiency", rating: "Native / Bilingual" },
  { language: "Hindi", proficiency: "Full Professional Proficiency", rating: "Fluent" }
]
