export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
    {
      year: "2023–Present",
      institution: "[University of Tsukuba](https://program.math.tsukuba.ac.jp/?lang=en)",
      degree: "M.Sc. & Ph.D. Program in Mathematics",
      advisor: "Aoshima Laboratory",
    },
    {
      year: "2019–2023",
      institution: "[Kagoshima University](https://sci-kagoshima-univ.jp/en/)",
      degree: "B.Sc. in Mathematics and Informatics",
      advisor: "Yoshida Laboratory",
    },
];
