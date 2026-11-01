export interface Award {
    title: string;
    organization: string;
    date: string;
    url?: string;
    imageUrl?: string;
    pdfUrl?: string;
  }
  
  export const awardData: Award[] = [
    {
      title: "日本赤十字社銀色有功章",
      organization: "日本赤十字社",
      date: "2025年12月1日",
      url: "https://www.jrc.or.jp/about/publication/news/20230105_030202.html",
      pdfUrl: "/2025_日本赤十字社銀色有功章.pdf",
    },
    {
      title: "骨髄移植感謝状",
      organization: "厚生労働大臣",
      date: "",
      pdfUrl: "/2023_骨髄提供感謝状_年月日なし.pdf",
    },
    {
      title: "令和二年度共通教育センター長賞",
      organization: "鹿児島大学",
      date: "2020年10月28日",
      url: "https://www.kagoshima-u.ac.jp/topics-education-students/2020/10/post-1721.html",
      pdfUrl: "/令和2年10月28日 鹿児島大学共通教育センター長賞.pdf",
    },
  ];