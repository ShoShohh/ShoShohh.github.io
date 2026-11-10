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
    year: "2025年4月 – 2028年3月（予定）",
    institution: "[筑波大学](https://www.tsukuba.ac.jp/)",
    degree: "大学院 理工情報生命学術院 数理物質科学研究群 数学学位プログラム 博士後期課程 修了予定 博士（理学）",
    advisor: "青嶋研究室",
  },
  {
    year: "2023年4月 – 2025年3月",
    institution: "[筑波大学](https://www.tsukuba.ac.jp/)",
    degree: "大学院 理工情報生命学術院 数理物質科学研究群 数学学位プログラム 博士前期課程 修了 修士（理学）",
    advisor: "青嶋研究室",
  },
  {
    year: "2019年4月 – 2023年3月",
    institution: "[鹿児島大学](https://www.kagoshima-u.ac.jp/)",
    degree: "理学部 数理情報科学科 学士（理学）",
    advisor: "吉田研究室（2022年度）",
  },
  {
    year: "2016年4月 – 2019年3月",
    institution: "[愛媛県立松山北高等学校](https://matsuyamakita-h.esnet.ed.jp/)",
    degree: "普通科 卒業",
  },
];
