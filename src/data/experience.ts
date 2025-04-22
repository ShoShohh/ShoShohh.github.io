export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Apr. 2024 – (Chair: Apr. 2025 –)",
    title: "Chair & Technical Assistant",
    company: "User Committee, Department of Mathematics, University of Tsukuba",
    description:
      "Appointed chair and technical assistant of the graduate student user committee for computing services, supporting computational infrastructure and student system administration.",
    companyUrl:
      "https://www.math.tsukuba.ac.jp/~compcom/wiki/wiki.cgi?page=%B1%A1%C0%B8%A5%E6%A1%BC%A5%B6%A1%BC%B2%F1",
  },
  {
    date: "Dec. 2023 / Dec. 2024",
    title: "International Symposium Staff",
    company: "International Symposiums on Large Complex Data",
    description: "Contributed to the 2023 International Symposium on Recent Advances in Theories and Methodologies for Large Complex Data and the 2024 International Symposium on Theories, Methodologies and Applications for Large Complex Data. Reported each activity on LinkedIn.",
    companyUrl: "https://www.math.tsukuba.ac.jp/~aoshima-lab/symposium.html",
  },
  {
    date: "Jul. 2023 / Jul. 2024",
    title: "Staff, Mathematics Trial Program",
    company: "University of Tsukuba",
    description:
      "Served as staff for the undergraduate mathematics experience program in July 2023 and July 2024.",
  },
];
