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
  { title: "Programming Languages", items: ["Java", "Python", "SQL", "TypeScript", "JavaScript", "Bash", "C++"] },
  { title: "Web Development", items: ["React", "Next.js", "Spring Boot", "FastAPI", "REST APIs", "WebSockets", "HTML", "CSS"] },
  { title: "Databases & Data", items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Microsoft Fabric", "Power BI", "PySpark", "Apache POI", "Excel"] },
  { title: "Testing & Developer Tools", items: ["Vitest", "React Testing Library", "JUnit", "Git", "GitHub", "Maven", "Gradle", "IIS", "DataGrip"] },
  { title: "IT & Systems", items: ["Active Directory", "Ivanti", "Windows", "macOS", "Linux"] },
  { title: "AI-Assisted Development", items: ["ChatGPT", "Codex", "Claude", "Microsoft Copilot"], note: "I use AI tools to brainstorm, debug, and review code. I verify suggestions, test the results, and make sure I understand the code I’m working with." },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  contribution: string;
  outcome: string;
  stack: readonly string[];
  caseStudy?: string;
  source?: string;
};

export const projects: readonly Project[] = [
  {
    id: "manufacturing-dashboard",
    title: "Twin Disc Manufacturing Dashboard",
    category: "Twin Disc / Internal web app",
    summary: "Production views that refresh every three minutes for 150+ shop-floor employees.",
    contribution: "I built and deployed the dashboard on IIS using HTML, CSS, and JavaScript. It reads structured CSV files and refreshes production views every three minutes.",
    outcome: "Replaced manually updated Excel production displays for 150+ shop-floor employees.",
    stack: ["HTML", "CSS", "JavaScript", "IIS", "CSV"],
    caseStudy: "/projects/manufacturing-dashboard",
  },
  {
    id: "ip-threat-assessment",
    title: "IP Threat Assessment",
    category: "Cybersecurity / Internal web app",
    summary: "An internal tool that helps the IT team review IP threat information.",
    contribution: "I developed React and TypeScript frontend features, integrated REST APIs, and contributed changes to the FastAPI backend. I worked with a cybersecurity intern on the application.",
    outcome: "The tool brings together VirusTotal, Shodan, and GreyNoise findings in a general summary and a more detailed technical view.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "REST APIs"],
  },
  {
    id: "gradtracker",
    title: "GradTracker",
    category: "Full-stack web app / Four-person team",
    summary: "A degree planning app for students and academic advisors, built by a four-person university team.",
    contribution: "I built administration pages with search and sorting, implemented student and advisor sign-in flows and protected frontend routes, and tested role selection, signup restrictions, redirects, sorting, and interface rendering with Vitest and React Testing Library.",
    outcome: "University team project for students and academic advisors. The frontend source is public.",
    stack: ["Next.js", "TypeScript", "Supabase", "Chakra UI", "Vitest", "React Testing Library"],
    source: "https://github.com/Grad-Tracker/grad-tracker-frontend",
  },
  {
    id: "haribo-reporting",
    title: "HARIBO Supply Chain Reporting",
    category: "Business process automation / Industry project",
    summary: "Weekly reporting automation that cut preparation time by an estimated 75%.",
    contribution: "I developed a Java application with Apache POI to turn three Excel files into one structured weekly report. I gathered requirements with the reporting manager and validated the output against business needs.",
    outcome: "Replaced manual report preparation and reduced preparation time by an estimated 75%.",
    stack: ["Java", "Apache POI", "Excel"],
  },
  {
    id: "lab-checkpoint-sign-off",
    title: "Lab Checkpoint Sign-Off Application",
    category: "Full-stack app / Team prototype",
    summary: "A four-person team prototype for tracking checkpoints and help requests.",
    contribution: "I implemented WebSocket communication between React and Spring Boot so student and instructor views stayed in sync without a manual refresh.",
    outcome: "The four-person university prototype included instructor-generated join codes, student sign-ins, live checkpoint updates, and CSV exports for Canvas.",
    stack: ["React", "Java", "Spring Boot", "MongoDB", "WebSockets"],
  },
];

export type Role = {
  title: string;
  dates: string;
  contributions: readonly string[];
  highlights?: readonly { title: string; description: string; href?: string }[];
  links?: readonly { href: string; label: string }[];
};

export const experience: readonly { employer: string; location: string; roles: readonly Role[] }[] = [
  {
    employer: "Twin Disc, Inc.",
    location: "Racine, Wisconsin",
    roles: [{
      title: "Information Technology Intern (Software Development)",
      dates: "May 2026 – August 2026",
      contributions: [],
      highlights: [
        { title: "Manufacturing Dashboard", description: "I built and deployed an HTML, CSS, and JavaScript dashboard on IIS. CSV-based production views replaced manually updated Excel displays, refresh every three minutes, and serve 150+ shop-floor employees.", href: "/projects/manufacturing-dashboard" },
        { title: "IP Threat Assessment", description: "I built React and TypeScript frontend features, integrated REST APIs, and contributed changes to the FastAPI backend. The IT team could review VirusTotal, Shodan, and GreyNoise findings through general and technical views.", href: "/projects#ip-threat-assessment" },
        { title: "Ethics & Compliance", description: "I built a Next.js and TypeScript frontend for submission forms, progress dashboards, and screens for reviewing AI-suggested information." },
        { title: "Power BI Migration & Data Validation", description: "I gathered feedback from business stakeholders, including executive leadership, during the move from QlikView to Power BI. I compared reports, exported data to Excel, and used an approved AI assistant to investigate discrepancies. I documented findings for IT and worked with Microsoft Fabric and Power BI data workflows." },
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
          "At the CTS Tech Bar, I troubleshoot hardware, software, network, authentication, and account-access issues for students, faculty, and staff.",
          "I use Ivanti and Active Directory, document solutions, and explain fixes to users. Our Tech Bar team handles about 40 tickets daily.",
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
        "Worked directly with the reporting manager to map the manual workflow and gather requirements. I validated the generated reports against business needs.",
        "The application reduced report preparation time by an estimated 75%.",
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
