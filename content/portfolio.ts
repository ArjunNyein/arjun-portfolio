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

export const toolbox = [
  "Java", "Python", "TypeScript", "JavaScript", "React", "Next.js", "Spring Boot", "FastAPI",
  "SQL", "PostgreSQL", "MongoDB", "Supabase", "Power BI", "Microsoft Fabric", "Excel",
  "Git", "GitHub", "Vitest",
];

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  role: string;
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
    summary: "Production information, without the manual refresh.",
    role: "Built and deployed the IIS dashboard and connected its CSV data.",
    contribution: "I built and deployed the dashboard on IIS using HTML, CSS, and JavaScript. It reads structured CSV files and refreshes production views every three minutes.",
    outcome: "Replaced manually updated Excel production displays for 150+ shop-floor employees.",
    stack: ["HTML", "CSS", "JavaScript", "IIS", "CSV"],
    caseStudy: "/projects/manufacturing-dashboard",
  },
  {
    id: "ip-threat-assessment",
    title: "IP Threat Assessment",
    category: "Cybersecurity / Internal web app",
    summary: "Threat intelligence from three providers, brought into one view.",
    role: "Built the React frontend and integrated the FastAPI endpoints.",
    contribution: "I worked alongside a cybersecurity intern on an internal tool for the IT team. I built the React and TypeScript frontend and connected it to the FastAPI backend my teammate developed.",
    outcome: "The tool brings together VirusTotal, Shodan, and GreyNoise findings in a general summary and a more detailed technical view.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "REST APIs"],
  },
  {
    id: "gradtracker",
    title: "GradTracker",
    category: "Full-stack web app / Four-person team",
    summary: "Degree planning that’s easier to follow.",
    role: "Built admin features and sign-in flows, and wrote frontend tests.",
    contribution: "Our four-person team built GradTracker for students and academic advisors. I worked on administration pages, search and sorting, sign-in flows, and protected routes. I also wrote automated tests with Vitest and React Testing Library.",
    outcome: "University team project for students and academic advisors. The frontend source is public.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vitest", "React Testing Library"],
    source: "https://github.com/Grad-Tracker/grad-tracker-frontend",
  },
  {
    id: "haribo-reporting",
    title: "HARIBO Supply Chain Reporting",
    category: "Business process automation / Industry project",
    summary: "Less time preparing reports. More time for the actual work.",
    role: "Wrote the Java reporting tool and validated its output with the reporting manager.",
    contribution: "I developed a Java application with Apache POI to turn three Excel files into one structured weekly report. I gathered requirements with the reporting manager and validated the output against business needs.",
    outcome: "The tool produces a structured weekly report from the three source files.",
    stack: ["Java", "Apache POI", "Excel"],
  },
  {
    id: "lab-checkpoint-sign-off",
    title: "Lab Checkpoint Sign-Off Application",
    category: "Full-stack app / Team prototype",
    summary: "Lab check-ins, updated in real time.",
    role: "Connected instructor and student views using WebSockets.",
    contribution: "On a four-person team, I implemented WebSocket communication between React and Spring Boot so instructors and students could see checkpoint updates and help requests without refreshing.",
    outcome: "The four-person university prototype included instructor-generated join codes, student sign-ins, live checkpoint updates, and CSV exports for Canvas.",
    stack: ["React", "Spring Boot", "MongoDB", "WebSockets"],
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
      title: "Information Technology Intern",
      dates: "May 2026 – August 2026",
      contributions: [],
      highlights: [
        { title: "Manufacturing Dashboard", description: "I replaced manually updated Excel displays with a production dashboard used by 150+ shop-floor employees.", href: "/projects/manufacturing-dashboard" },
        { title: "IP Threat Assessment", description: "I worked with a cybersecurity intern to make threat intelligence easier for IT staff to review, whether they needed a quick summary or technical details.", href: "/projects#ip-threat-assessment" },
        { title: "Ethics & Compliance", description: "I built a Next.js and TypeScript interface for submissions, approval workflows, progress dashboards, and activity tracking." },
        { title: "Power BI Migration & Data Validation", description: "I validated QlikView reports against Power BI during a reporting migration. I used Excel and a company-approved AI assistant to investigate discrepancies, documented mismatches, and shared findings with the project team. I also worked with Microsoft Fabric workflows." },
      ],
    }],
  },
  {
    employer: "University of Wisconsin–Parkside",
    location: "Kenosha, Wisconsin",
    roles: [
      {
        title: "IT Analyst — Campus Technology Services",
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
      title: "Software Developer — Supply Chain Automation",
      dates: "June 2024 – December 2024",
      contributions: [
        "Built a Java application with Apache POI that combined three Excel files into structured weekly supply-chain reports.",
        "Worked directly with the reporting manager to map the manual workflow and gather requirements. I validated the generated reports against business needs.",
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
