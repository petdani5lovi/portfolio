import {
  LanguageProficiency,
  type Company,
  type Education,
  type Language,
  type Project,
  type SkillCategory,
} from "@/types"

export const companies: Company[] = [
  {
    name: "PopArt Studio",
    logo: "/popart.png",
    positions: [
      {
        title: "Senior Software Architect & SaaS Developer",
        duration: "Jan 2022 – Mar 2025",
        description: [
          "Contributed to the development of JerichoAI, a cloud and LLM cost optimization platform, helping enterprise clients reduce cloud spending by up to 85% through intelligent usage analysis and resource rightsizing.",
          "Designed and implemented responsive, enterprise-grade frontends using React.js and Next.js, improving UX performance and reducing page load times by 35%.",
          "Built and deployed serverless microservices with Node.js, Python (FastAPI), and AWS Lambda, enhancing scalability and cutting infrastructure overhead by 40%.",
          "Integrated AI-powered recommendation engines for cloud cost insights using OpenAI APIs, LangChain, and vector databases, enabling dynamic cost anomaly detection and contextual action suggestions.",
          "Architected a multi-cloud integration layer (AWS, Azure, GCP) with GraphQL APIs and PostgreSQL, streamlining vendor-agnostic analysis and reducing response latencies by 28%.",
          "Implemented secure user access control via Redis, JWT, and ScyllaDB, ensuring low-latency authentication for 100K+ users.",
          "Deployed the platform with Docker, Kubernetes (EKS), and GitHub Actions, achieving near-zero downtime CI/CD pipelines and reducing release cycles by 50%.",
          "Led technical documentation and contributed to sprint planning and retrospectives, improving team delivery consistency and cross-functional collaboration by 30%.",
        ],
      },
    ],
    technologies: ["Next.js", "React", "FastAPI", "OpenAI", "Redis", "Docker", "GraphQL", "TypeScript", "PostgreSQL"],
  },
  {
    name: "Qualysoft",
    logo: "/Qualysoft.svg",
    positions: [
      {
        title: "Full-Stack Developer",
        duration: "Jan 2020 – Jan 2022",
        description: [
          "Contributed to the development of FreeCast.com, a cross-platform live and on-demand streaming aggregation platform delivering 700+ live channels and 500K+ video assets to millions of users.",
          "Built dynamic and responsive UI components using React.js, enhancing user engagement and reducing bounce rates by 30% across desktop and smart TV platforms.",
          "Engineered high-performance backend services with FastAPI and Django, supporting user authentication, subscription management, content indexing, and personalized recommendations.",
          "Designed and optimized GraphQL and REST APIs for efficient content delivery, achieving a 40% reduction in server response times and smoother cross-device streaming experiences.",
          "Implemented JWT-based secure authentication and integrated social login support, boosting registration conversion by 20%.",
          "Integrated third-party video services and metadata providers (e.g., Roku, Freevee, Pluto TV) into a unified content graph with custom search and filtering.",
          "Applied asynchronous I/O and caching strategies with Redis and PostgreSQL to handle high-throughput API calls and reduce DB load by 35%.",
          "Participated in Agile workflows, including sprint planning and retrospectives, and collaborated with UI/UX and DevOps teams to ensure scalable, maintainable feature delivery.",
        ],
      }
    ],
    technologies: ["React.js", "Django", "FastAPI", "GraphQL", "REST", "GraphQL", "Redis", "PostgreSQL"],
  },
  {
    name: "DevWork Studio",
    logo: "/devwork.avif",
    positions: [
      {
        title: "Junior Developer & Tech Intern",
        duration: "Feb 2019 – Jan 2020",
        description: [
          "Developed core components of 1440 Mobile, a Salesforce-integrated messaging platform enabling omnichannel customer engagement via SMS, WhatsApp, social media, and live chat.",
          "Built and optimized the cross-platform mobile app using Flutter, delivering seamless performance across Android and iOS with over 98% crash-free sessions.",
          "Conducted unit and widget testing with Flutter’s testing framework, improving code reliability and decreasing post-release defects by 40%.",
          "Collaborated closely with product and Salesforce backend teams in Agile sprints, ensuring alignment with business requirements and rapid iteration cycles.",
        ],
      },
    ],
    technologies: ["Flutter", "Dart", "Provider", "iOS", "Android"],
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor in Computer Science",
    institution: "University of Belgrade",
    location: "Belgrade, Serbia",
    duration: "2014 – 2018",
    description:
      "Graduated with 3.65 GPA and Dean's List for 4 semesters. Concentrations in software engineering, web development and full-stack development.",
    logo: "/university_of_belgrade.png",
  },
]

export const projects: Project[] = [
  {
    title: "Bitcoin Node Server",
    description:
      "A TypeScript-based Express server that interfaces with a self-hosted Bitcoin node, providing blockchain data via a RESTful API. Utilizes TSOA for API documentation and adheres to separation of concerns principles.",
    thumbnail: "/btc-server.png",
    skills: ["TypeScript", "Express", "TSOA", "bitcoin-cli", "REST API", "Ngrok", "PostgreSQL", "Swagger"],
    link: "https://bitcoin-node-server.onrender.com/docs/",
    github: "https://github.com/petdani5lovi/bitcoin-node-server",
    duration: "Mar 2025 – Present",
  },
  {
    title: "BTC Dashboard",
    description:
      "A frontend dashboard built with Next.js and Tailwind CSS that displays real-time Bitcoin blockchain data fetched from the Bitcoin Node Server.",
    thumbnail: "/btc-frontend.png",
    skills: ["Next.js", "Tailwind", "REST API", "Vercel", "DNS", "V0", "Server Actions",],
    link: "https://btc.j3g.dev/",
    github: "https://github.com/petdani5lovi/btc_dashboard",
    duration: "Mar 2025 – Present",
  },
  {
    title: "VIUS Built – Estimating & Project Management Web App",
    description:
      "Developed a full-stack construction management platform using Next.js with server components, server actions, and SWR. Built backend features with Express and integrated OpenAI/Gemini APIs for document parsing and automation. Managed data with Supabase (Postgres, RPCs, RLS) and Docker, enabling accurate estimate generation and streamlined subcontractor workflows.",
    thumbnail: "/estimating.png",
    skills: ["Next.js", "Tailwind", "Server Actions", "Supabase", "PostgreSQL", "RPCs", "RLS", "OpenAI API", "Gemini API", "Express", "Docker"],
    link: "https://app.viusbuilt.com/",
    github: null,
    duration: "March 2024 – May 2025",
  },
  {
    title: "1440 – Multi-Channel Messaging App",
    description:
      "A cross-platform mobile app built with Flutter that unifies messaging from platforms like WhatsApp, Facebook Messenger, and Twitter for organizations using Salesforce. Integrated Salesforce GraphQL and REST APIs, implemented SOQL queries, and managed app state with Provider to enable seamless, real-time communication within a single app interface.",
    thumbnail: "/1440_appstore.png",
    skills: ["Flutter", "Dart", "Salesforce", "GraphQL", "REST APIs", "SOQL", "Provider", "State Management", "iOS", "Android"],
    link: "https://apps.apple.com/us/app/1440-mobile/id6468288380",
    github: null,
    duration: "May 2023 – Feb 2024",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Angular.js", level: 4 },
      { name: "Vue.js", level: 3 },
      { name: "Flutter", level: 4 },
      { name: "Tailwind CSS", level: 5 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express", level: 5 },
      { name: "FastAPI", level: 4 },
      { name: "Django", level: 4 },
      { name: "Supabase", level: 4 },
      { name: "PostgreSQL", level: 5 },
      { name: "Golang", level: 4 },
      { name: "Rust", level: 3 },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "SQL", level: 5 },
      { name: "Dart", level: 4 },
      { name: "Python", level: 5 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 5 },
      { name: "AI APIs (OpenAI, Gemini)", level: 4 },
      { name: "REST/GraphQL", level: 5 },
      { name: "Docker", level: 4 },
      { name: "CI/CD", level: 4 },
    ],
  },
]

export const languages: Language[] = [
  { name: "English", proficiency: LanguageProficiency.Fluent, level: 5 },
  { name: "Serbian", proficiency: LanguageProficiency.Native, level: 5 },
]
