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
      title: "Silver Medal of the Japanese Red Cross",
      organization: "Japanese Red Cross",
      date: "Dec. 1, 2025",
      url: "https://www.jrc.or.jp/about/publication/news/20230105_030202.html",
      pdfUrl: "/2025_日本赤十字社銀色有功章.pdf",
    },
    {
      title: "Bone Marrow Donation Certificate of Appreciation",
      organization: "Minister of Health, Labour and Welfare",
      date: "",
      pdfUrl: "/2023_骨髄提供感謝状_年月日なし.pdf",
    },
    {
      title: "Common Education Center Director's Award",
      organization: "Kagoshima University",
      date: "Oct. 28, 2020",
      url: "https://www.kagoshima-u.ac.jp/topics-education-students/2020/10/post-1721.html",
      pdfUrl: "/令和2年10月28日 鹿児島大学共通教育センター長賞.pdf",
    },
  ];