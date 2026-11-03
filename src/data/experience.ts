export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  pdfUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jan. 2026 – present",
    title: "Analyst (Contract; transitioned from internship)",
    company: "Nospare Inc.",
    description:
      "Independent contractor after completing the internship (Dec. 2024 – Dec. 31, 2025), which was limited to the education business. The contract role spans consulting (management, DX, and statistical advisory), solutions-oriented data analysis and machine learning, and continued involvement in education—on-demand programs such as EDRIGHT and statistics-focused seminars for practitioners—plus analysis, modeling, and implementation support for client needs.",
    companyUrl: "https://www.no-spare.com/",
  },
  {
    date: "Mar. 2019 – Oct. 2024",
    title: "Part-time work",
    company: "Food service (front of house & kitchen), liquor retail, logistics & warehousing",
  },
];
