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
    year: "2023年 – 現在",
    institution: "[筑波大学](https://program.math.tsukuba.ac.jp/?lang=ja)",
    degree: "数学学位プログラム（修士・博士）",
    advisor: "青嶋研究室",
  },
  {
    year: "2019年 – 2023年",
    institution: "[鹿児島大学](https://sci-kagoshima-univ.jp/)",
    degree: "理学部 数学・情報数理学科",
    advisor: "吉田研究室",
  },
];
