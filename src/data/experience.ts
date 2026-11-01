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
    date: "Apr. 2025 – Mar. 2028",
    title: "Next-Generation AI Human Resource Development Program Fellow",
    company: "JST BOOST initiative, University of Tsukuba",
    description:
      "Selected for the University of Tsukuba's Next-Generation AI Talent Development Program, \"Project for Interdisciplinary Next-Generation AI Innovative Human Resource Development\". This initiative, part of a national strategy to foster doctoral students, supports 600 students across Japan. The University of Tsukuba has a quota of 12 students, and I was chosen as one of them through a highly competitive internal selection process. Receiving support for living expenses and research funds, I am able to fully dedicate myself to theoretical and applied research in high-dimensional statistics. I plan to actively pursue collaborations with fields such as bioinformatics, materials science, and astronomy.",
    companyUrl: "https://www.jst.go.jp/pr/info/info1681/index.html",
    pdfUrl: "https://www.tsukuba.ac.jp/education/jst-spring-program/pdf/jst_boost2025.pdf",
  },
  {
    date: "Apr. 2024 – present (Chair: Apr. 2025 – Mar. 2026; Vice Chair: Apr. 2026 – present)",
    title: "Vice Chair & Technical Assistant",
    company: "User Committee, Department of Mathematics, University of Tsukuba",
    description:
      "Served as technical assistant for the graduate student user committee under the Department of Mathematics, University of Tsukuba, providing technical support for the management and maintenance of the department's computing environment. Held the position of chair from Apr. 2025 to Mar. 2026 and vice chair from Apr. 2026 to present.",
    companyUrl:
      "https://www.math.tsukuba.ac.jp/~compcom/wiki/wiki.cgi?page=%B1%A1%C0%B8%A5%E6%A1%BC%A5%B6%A1%BC%B2%F1",
  },
  {
    date: "Dec. 2023 / Dec. 2024",
    title: "International Symposium Staff",
    company: "International Symposiums on Large Complex Data",
    description:
      "Contributed to the 2023 International Symposium on Recent Advances in Theories and Methodologies for Large Complex Data and the 2024 International Symposium on Theories, Methodologies and Applications for Large Complex Data. Reported each activity on LinkedIn.",
    companyUrl: "https://www.math.tsukuba.ac.jp/~aoshima-lab/symposium.html",
  },
  {
    date: "Jul. 2023 / Jul. 2024",
    title: "Staff, Mathematics Trial Program",
    company: "University of Tsukuba",
    description:
      "Served as staff for the undergraduate mathematics experience program in July 2023 and July 2024.",
  },
  {
    date: "Mar. 2019 – Oct. 2024",
    title: "Part-time work",
    company: "Food service (front of house & kitchen), liquor retail, logistics & warehousing",
  },
];
