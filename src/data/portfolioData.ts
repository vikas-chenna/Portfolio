import type { PortfolioData } from "../types";

export const fallbackPortfolioData: PortfolioData = {
  personal: {
    name: "Vikas Chenna",
    role: "Full Stack Developer",
    location: "Surat, Gujarat, India",
    email: "work.vikaschenna@gmail.com",
    github: "https://github.com/vikas-chenna",
    linkedin: "https://www.linkedin.com/in/vikaschenna",
    resumeUrl: "/Vikas_Chenna_Resume.pdf",
    status: "Available for Full-Time Roles & Remote Opportunities",
    titles: [
      "Full Stack Developer",
      "Web Developer",
      "PHP & Node.js Developer",
      "Android Developer",
      "MCA Student @ VNSGU",
    ],
    aboutBio:
      "I am a passionate Full Stack Developer and MCA student dedicated to crafting modern, scalable, and high-performance web applications. With expertise spanning modern frontend frameworks like React and Vite, backend engineering with Node.js and PHP, robust databases, and AI platform integrations, I bridge the gap between elegant UI design and clean system architecture.",
    careerObjective:
      "To leverage my skills in full-stack web engineering, database architecture, and artificial intelligence to build transformative digital products for industry-leading tech companies and high-growth startups.",
  },
  skills: [
    { name: "HTML5 / CSS3", category: "Frontend", level: 95, icon: "SiHtml5" },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      level: 90,
      icon: "SiJavascript",
    },
    { name: "React", category: "Frontend", level: 88, icon: "SiReact" },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: 92,
      icon: "SiTailwindcss",
    },
    { name: "Vite", category: "Frontend", level: 85, icon: "SiVite" },
    { name: "Bootstrap", category: "Frontend", level: 90, icon: "SiBootstrap" },

    { name: "PHP", category: "Backend", level: 88, icon: "SiPhp" },
    { name: "Node.js", category: "Backend", level: 82, icon: "SiNodedotjs" },

    { name: "MySQL", category: "Database", level: 88, icon: "SiMysql" },
    {
      name: "MongoDB Atlas",
      category: "Database",
      level: 84,
      icon: "SiMongodb",
    },

    { name: "Java", category: "Programming", level: 85, icon: "FaJava" },
    { name: "PHP", category: "Programming", level: 88, icon: "SiPhp" },
    { name: "C++", category: "Programming", level: 82, icon: "SiCplusplus" },

    { name: "Git & GitHub", category: "Tools", level: 90, icon: "SiGithub" },
    {
      name: "VS Code",
      category: "Tools",
      level: 95,
      icon: "SiVisualstudiocode",
    },
    { name: "Postman", category: "Tools", level: 86, icon: "SiPostman" },
    { name: "XAMPP", category: "Tools", level: 88, icon: "SiXampp" },
    {
      name: "Android Studio",
      category: "Tools",
      level: 72,
      icon: "SiAndroidstudio",
    },
    { name: "NetBeans", category: "Tools", level: 75, icon: "SiApache" },
    {
      name: "Visual Studio",
      category: "Tools",
      level: 78,
      icon: "SiVisualstudio",
    },
  ],
  projects: [
    {
      id: "plantastic",
      title: "Plantastic Event Management System",
      tagline: "Multi-user comprehensive event management & booking system",
      description:
        "Plantastic is an enterprise-grade multi-user event management web platform that streamlines event planning, ticketing, organizer workflows, and administrator controls with automated email notifications.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Bootstrap",
        "PHPMailer",
      ],
      features: [
        "Multi-role user authentication (Admin, Event Organizer, Customer)",
        "Interactive event catalog with real-time booking and seat availability",
        "Comprehensive Admin dashboard for user, event, and booking metrics",
        "Automated booking confirmation and notification emails via PHPMailer",
        "Responsive, mobile-optimized UI built with Bootstrap and vanilla JavaScript",
      ],
      github: "https://github.com/vikas-chenna/Plantastic-Events",
      demo: "",
      featured: true,
      badge: "Full Stack PHP/MySQL",
    },
    {
      id: "insight-ai",
      title: "Insight AI",
      tagline: "AI-Powered Business Intelligence & Analytics Platform",
      description:
        "Insight AI is a cutting-edge SaaS intelligence tool designed to transform raw metrics into actionable strategic insights using Large Language Models via OpenRouter API with a sleek glassmorphic dashboard.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "MongoDB Atlas",
        "OpenRouter API",
      ],
      features: [
        "Generative AI business insight generator powered by OpenRouter API",
        "Real-time analytics visualization with modern charts and metrics",
        "Scalable backend API structure with Node.js and Express",
        "Cloud database persistence via MongoDB Atlas",
        "Deployed on Vercel with lightning-fast initial load times",
      ],
      github: "https://github.com/vikas-chenna/InsightAI-Project",
      demo: "https://insightai-project-delta.vercel.app/",
      featured: true,
      badge: "Live",
    },
    {
      id: "nexus-compiler",
      title: "Nexus Code Execution Engine",
      tagline: "Developer code playground — currently under construction",
      description:
        "A developer-focused online code playground currently under construction, planned to support code editing, formatting, and execution directly from the browser.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Docker", "REST API"],
      features: [
        "Multi-language code syntax highlighting and auto-completion",
        "Isolated code execution sandbox with execution time limits",
        "Shareable code snippet links and export features",
        "Dark mode developer dashboard",
      ],
      github: "https://github.com/vikas-chenna",
      demo: "",
      featured: false,
      badge: "Under Construction",
    },
  ],
  experience: [
    {
      title: "Artificial Intelligence & Cloud Computing Intern",
      organization: "IBM SkillsBuild Virtual Internship",
      duration: "6 Weeks",
      type: "Virtual Internship",
      location: "Remote / India",
      description:
        "Underwent rigorous hands-on training in Artificial Intelligence fundamentals and Cloud Computing architecture. Engineered a capstone AI application integrating predictive machine learning models and cloud APIs.",
      highlights: [
        "Constructed and evaluated AI/ML model pipelines using Python",
        "Deployed cloud infrastructure models on IBM Cloud services",
        "Collaborated with industry mentors to deliver a full capstone presentation",
        "Earned official IBM SkillsBuild Credential in AI & Cloud",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution:
        "Department of Computer Science, Veer Narmad South Gujarat University (VNSGU)",
      location: "Surat, Gujarat, India",
      score: "CGPA: 8.0",
      period: "Expected Graduation: 2027",
      status: "In Progress",
      details:
        "Specializing in Advanced Web Technologies, Software Engineering, Cloud Architectures, and Database Systems.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bhagwan Mahavir College, Bhagwan Mahavir University",
      location: "Surat, Gujarat, India",
      score: "CGPA: 8.5",
      period: "Completed",
      status: "Graduated",
      details:
        "Focused on Core Programming (Java, C, C++, PHP), Data Structures, Database Management, and Web Development.",
    },
  ],
  certifications: [
    {
      title: "Artificial Intelligence & Cloud Computing",
      issuer: "IBM SkillsBuild",
      date: "2024",
      credentialUrl: "#",
      badge: "Verified IBM Credential",
      description:
        "Comprehensive practical program in Machine Learning models, natural language processing basics, and Cloud container deployment.",
    },
    {
      title: "Full Stack Web Development Certification",
      issuer: "Open Platform / Industry Certified",
      date: "2024",
      credentialUrl: "#",
      badge: "Full Stack",
      description:
        "Mastery in modern JavaScript (ES6+), React components, state management, REST API architecture, and database integrations.",
    },
    {
      title: "Database Management Systems & SQL",
      issuer: "Academic Excellence / Certification",
      date: "2023",
      credentialUrl: "#",
      badge: "Database Specialist",
      description:
        "Advanced relational schema design, query optimization, indexing, stored procedures, and multi-table transactions in MySQL.",
    },
  ],
  achievements: [
    {
      title: "Academic Top Performer (CGPA 8.5)",
      category: "Academic Excellence",
      date: "BCA Graduation",
      description:
        "Achieved CGPA 8.5 in BCA at Bhagwan Mahavir University with top performance in Web Development and Database Management.",
    },
    {
      title: "Deployed Production AI SaaS Platform",
      category: "Project Milestone",
      date: "2025",
      description:
        "Designed, developed, and deployed Insight AI live on Vercel, integrating OpenRouter LLM APIs with Node.js and React.",
    },
    {
      title: "IBM Capstone Project Award",
      category: "Internship Recognition",
      date: "IBM SkillsBuild",
      description:
        "Successfully presented and defended the AI Capstone solution during the 6-week virtual internship with IBM.",
    },
  ],
};

export async function fetchPortfolioData(): Promise<PortfolioData> {
  try {
    const res = await fetch("/data/portfolioData.json");
    if (!res.ok) throw new Error("Failed to fetch JSON configuration");
    const data = await res.json();
    return data as PortfolioData;
  } catch (error) {
    console.warn("Using fallback portfolio data:", error);
    return fallbackPortfolioData;
  }
}
