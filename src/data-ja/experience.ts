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
    date: "2025年4月 - 2028年3月",
    title: "次世代AI人材育成プログラム フェロー",
    company: "JST BOOST：国家戦略分野の博士後期課程学生育成事業、筑波大学",
    description:
      "筑波大学の次世代AI人材育成プログラム「学際的次世代AIイノベーション人材育成プロジェクト」に採択。本事業は、国家戦略分野における博士後期課程学生の育成を目的としたもので、全国で600名が支援対象となります。うち、筑波大学には12名の採用枠があり、競争率の高い学内選抜を経てその一人として選出されました。生活費相当額および研究費の支援を受け、高次元統計の理論構築と応用研究に専念します。今後は、バイオインフォマティクス、材料科学、天文学といった分野との連携を積極的に進めていく計画です。",
    companyUrl: "https://www.jst.go.jp/pr/info/info1681/index.html",
    pdfUrl: "https://www.tsukuba.ac.jp/education/jst-spring-program/pdf/jst_boost2025.pdf",
  },
  {
    date: "2024年4月 - 現在（会長：2025年4月 - 2026年3月、副会長：2026年4月 - 現在）",
    title: "ユーザー会 副会長・技術補佐員",
    company: "筑波大学 数学域 計算機委員会 院生ユーザー会",
    description:
      "筑波大学 数学域 計算機委員会 院生ユーザー会の技術補佐員として、計算機環境の維持管理などの技術支援を担当。2025年4月〜2026年3月は会長、2026年4月〜現在は副会長を務めています。",
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
    date: "2023年度 / 2024年度",
    title: "筑波大学 数学類体験学習 スタッフ",
    company: "筑波大学",
    description:
      "2023年および2024年の数学類体験学習にて、参加高校生の補助を行う学生スタッフとして参加。",
  },
  {
    date: "2019年3月 - 2024年10月",
    title: "アルバイト",
    company: "飲食業（ホール・厨房）、酒類小売業、物流・倉庫業",
  },
];
