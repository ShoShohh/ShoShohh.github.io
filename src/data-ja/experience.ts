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
    date: "2026年1月 - 現在",
    title: "アナリスト（業務委託・インターンから移行）",
    company: "株式会社Nospare",
    description:
      "2024年12月〜2025年12月31日までインターンシップに参加（担当は教育事業のみ）。2026年1月から業務委託契約へ移行し、経営・DX・統計のコンサルティング、データ分析・機械学習モデルによるソリューション、および教育事業（オンデマンド講座「EDRIGHT」や実務者向けセミナー等）まで幅広く関与。クライアント課題に応じた分析・モデリング・実装支援も担当。",
    companyUrl: "https://www.no-spare.com/",
  },
  {
    date: "2019年3月 - 2024年10月",
    title: "アルバイト",
    company: "飲食業（ホール・厨房）、酒類小売業、物流・倉庫業",
  },
];
