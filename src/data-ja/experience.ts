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
    date: "2024年4月〜（会長：2025年4月〜）",
    title: "ユーザー会 会長・技術補佐員",
    company: "筑波大学 数学域 計算機委員会 院生ユーザー会",
    description:
      "筑波大学 数学域 計算機委員会 院生ユーザー会の技術補佐員および会長（2025年4月〜）として、計算機環境の維持管理や学生向けサービスの技術支援を担当。",
    companyUrl:
      "https://www.math.tsukuba.ac.jp/~compcom/wiki/wiki.cgi?page=%B1%A1%C0%B8%A5%E6%A1%BC%A5%B6%A1%BC%B2%F1",
  },
  {
    date: "2023年12月 / 2024年12月",
    title: "国際シンポジウム 学生スタッフ",
    company: "大規模複雑データに関する国際シンポジウム",
    description:
      "2023年の「International Symposium on Recent Advances in Theories and Methodologies for Large Complex Data」および2024年の「International Symposium on Theories, Methodologies and Applications for Large Complex Data」において、学生スタッフとして運営補助を担当。",
    companyUrl: "https://www.math.tsukuba.ac.jp/~aoshima-lab/symposium.html",
  },
  {
    date: "2023年度・2024年度",
    title: "筑波大学 数学類体験学習 スタッフ",
    company: "筑波大学",
    description:
      "2023年および2024年の数学類体験学習にて、参加高校生の補助を行う学生スタッフとして参加。",
  },
];
