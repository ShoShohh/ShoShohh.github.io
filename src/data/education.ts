export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  logoSrc?: string;
}

export const educationData: Education[] = [
  {
    year: "2025 – 2028 (expected)",
    institution: "[University of Tsukuba](https://www.tsukuba.ac.jp/en/)",
    degree: "Ph.D. in Mathematics, Graduate School of Science, Degree Programs in Pure and Applied Sciences",
    advisor: "Aoshima Laboratory",
  },
  {
    year: "2023 – 2025",
    institution: "[University of Tsukuba](https://www.tsukuba.ac.jp/en/)",
    degree: "M.Sc. in Mathematics, Graduate School of Science, Degree Programs in Pure and Applied Sciences",
    advisor: "Aoshima Laboratory",
  },
  {
    year: "2019 – 2023",
    institution: "[Kagoshima University](https://www.kagoshima-u.ac.jp/en/)",
    degree: "B.Sc. in Mathematics and Informatics, Faculty of Science, Mathematics and Informatics Program",
    advisor: "Yoshida Laboratory (2022–2023)",
  },
  {
    year: "2016 – 2019",
    institution: "[Ehime Prefectural Matsuyama Kita High School](https://matsuyamakita-h.esnet.ed.jp/)",
    degree: "Graduated (General Course)",
  },
];
