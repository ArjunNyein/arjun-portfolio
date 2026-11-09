export const profile = {
  name: "Arjun Nyein",
  university: "University of Wisconsin–Parkside",
  degree: "Bachelor of Science in Computer Science",
  graduation: "May 2027",
  gpa: "3.9/4.0",
  email: "aungpyaenyein777@gmail.com",
  github: "https://github.com/ArjunNyein",
  linkedin: "https://www.linkedin.com/in/arjun-nyein-025894293/",
  resume: "/Arjun_Nyein_Resume_Software.pdf",
};

export const skills = [
  { title: "Programming Languages", items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Bash", "C++"] },
  { title: "Web Development", items: ["React", "Next.js", "Spring Boot", "FastAPI", "REST APIs", "WebSockets", "HTML", "CSS"] },
  { title: "Databases & Data", items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Microsoft Fabric", "Power BI", "PySpark", "Apache POI", "Excel"] },
  { title: "Testing & Developer Tools", items: ["Vitest", "React Testing Library", "Git", "GitHub", "IIS", "DataGrip", "Gradle", "Maven"] },
  { title: "AI-Assisted Development", items: ["ChatGPT", "Codex", "Claude", "Microsoft Copilot"], note: "I use these tools for brainstorming, debugging, and reviewing my work. I verify suggestions against the code and its tests." },
];

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  contribution: string;
  stack: readonly string[];
  caseStudy?: string;
  source?: string;
};

export const projects: readonly Project[] = [
  {
    id: "manufacturing-dashboard",
    title: "Twin Disc Manufacturing Dashboard",
    shortTitle: "Manufacturing dashboard",
    category: "Twin Disc / Internal web app",
    summary: "Production views that refresh every three minutes for 150+ shop-floor employees.",
    contribution: "I developed and deployed an IIS-hosted dashboard that uses structured CSV feeds to replace manually updated Excel displays.",
    stack: ["HTML", "CSS", "JavaScript", "IIS", "CSV"],
    caseStudy: "/projects/manufacturing-dashboard",
  },
  {
    id: "ip-threat-assessment",
    title: "IP Threat Assessment",
    shortTitle: "IP threat assessment",
    category: "Twin Disc / Security tool",
    summary: "A web interface for reviewing IP security findings.",
    contribution: "I built React and TypeScript frontend features, integrated REST APIs, contributed modifications to the FastAPI backend, and created separate general and technical views. I collaborated with a cybersecurity intern.",
    stack: ["React", "TypeScript", "REST APIs", "FastAPI"],
  },
  {
    id: "gradtracker",
    title: "GradTracker",
    shortTitle: "GradTracker",
    category: "University / Four-person team",
    summary: "A degree planning app for students and academic advisors, built by a four-person university team.",
    contribution: "I built administration pages with search and sorting, implemented student and advisor sign-in flows and protected frontend routes, and wrote automated tests with Vitest and React Testing Library.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vitest", "React Testing Library"],
    source: "https://github.com/Grad-Tracker/grad-tracker-frontend",
  },
  {
    id: "haribo-reporting",
    title: "HARIBO Supply Chain Reporting",
    shortTitle: "HARIBO reporting",
    category: "University–industry / Reporting",
    summary: "Weekly reporting automation that cut preparation time by an estimated 75%.",
    contribution: "I developed a Java application with Apache POI that combines three Excel files into structured weekly supply-chain reports.",
    stack: ["Java", "Apache POI", "Microsoft Excel"],
  },
  {
    id: "lab-checkpoint-sign-off",
    title: "Lab Checkpoint Sign-Off",
    shortTitle: "Lab checkpoint sign-off",
    category: "University / Team prototype",
    summary: "A four-person team prototype for tracking checkpoints and help requests.",
    contribution: "I built the WebSocket integration between React and Spring Boot to keep student and instructor views in sync. The prototype uses MongoDB.",
    stack: ["React", "Spring Boot", "WebSockets", "MongoDB"],
  },
];

export type Role = {
  title: string;
  dates: string;
  contributions: readonly string[];
  links?: readonly { href: string; label: string }[];
};

export const experience: readonly { employer: string; location: string; roles: readonly Role[] }[] = [
  {
    employer: "Twin Disc, Inc.",
    location: "Racine, Wisconsin",
    roles: [{
      title: "Information Technology Intern (Software Development)",
      dates: "May 2026 – August 2026",
      contributions: [
        "Built and deployed an HTML, CSS, and JavaScript dashboard on IIS for 150+ shop-floor employees. Structured CSV feeds and three-minute refreshes replaced manually updated Excel displays.",
        "Developed React and TypeScript features for an IP threat assessment tool, integrated REST APIs, and contributed modifications to its FastAPI backend.",
        "Built the Next.js and TypeScript frontend for an internal ethics and compliance application, including submission forms and progress dashboards.",
        "Gathered feedback from business stakeholders, including executive leadership, during the QlikView-to-Power BI migration. Compared reports, exported datasets to Excel, used a company-approved AI assistant to investigate discrepancies, and documented findings for the IT team. Worked with Microsoft Fabric and Power BI data workflows.",
      ],
      links: [
        { href: "/projects/manufacturing-dashboard", label: "Manufacturing dashboard" },
        { href: "/projects#ip-threat-assessment", label: "IP threat assessment" },
      ],
    }],
  },
  {
    employer: "University of Wisconsin–Parkside",
    location: "Kenosha, Wisconsin",
    roles: [
      {
        title: "IT Analyst, Campus Technology Services",
        dates: "December 2024 – Present",
        contributions: [
          "Troubleshoot hardware, software, network, and account issues for students, faculty, and staff.",
          "Document solutions and explain fixes to the people who rely on campus systems.",
        ],
      },
      {
        title: "Technology & Data Ambassador",
        dates: "September 2024 – August 2025",
        contributions: [
          "Reviewed and approved 100+ job postings monthly on Handshake for over 2,000 students, checking accuracy, clarity, and alignment with student skills, programs, and career goals.",
          "Maintained and updated Career Center web resources in CommonSpot.",
        ],
      },
      {
        title: "Learning & Lab Assistant",
        dates: "February 2024 – January 2025",
        contributions: [
          "Guided students through Java debugging, object-oriented programming, data structures, and project implementation during lab sessions.",
          "Collected student learning data for faculty research on improving computer science instruction.",
        ],
      },
      {
        title: "Computer Science and Math Tutor",
        dates: "September 2024 – December 2024",
        contributions: [
          "Tutored students in computer science and mathematics, explaining course concepts and helping them work through assignments.",
          "Helped students debug code, identify mistakes, and develop their own problem-solving approaches.",
        ],
      },
    ],
  },
  {
    employer: "HARIBO / UW–Parkside Industry Project",
    location: "Kenosha, Wisconsin",
    roles: [{
      title: "Software Developer – Supply Chain Automation",
      dates: "June 2024 – December 2024",
      contributions: [
        "Built a Java application with Apache POI that combined three Excel files into structured weekly supply-chain reports.",
        "Reduced report preparation time by an estimated 75%.",
      ],
      links: [{ href: "/projects#haribo-reporting", label: "Supply-chain reporting" }],
    }],
  },
];

export const dashboardWorkflow = [
  { title: "Structured CSV files", description: "Provide production data in a consistent format." },
  { title: "IIS-hosted dashboard", description: "Retrieves the CSV data and displays production views." },
  { title: "JavaScript refresh", description: "Refreshes the views automatically every three minutes." },
  { title: "Shop-floor access", description: "Employees can see updated production information." },
];
