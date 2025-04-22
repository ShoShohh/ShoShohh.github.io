export interface OutreachItem {
  title: string;
  period: string;
  description?: string;
  links?: { label: string; url: string; date?: string }[];
}

export const outreachData: OutreachItem[] = [
  {
    title: "献血",
    period: "2018年 –",
  },
  {
    title: "骨髄バンク ユースアンバサダー",
    period: "2024年 –",
    description:
      "骨髄移植や骨髄バンクについての情報発信・ドナー登録の普及啓発活動を行なっています。学校や大学、団体等での講演や啓発ブース設置にご関心のある方はぜひご連絡ください。骨髄バンクと連携しながらご相談させていただきます。",
    links: [
      {
        label: "骨髄ドナー（骨髄提供）の体験レポートと関連情報を公開しました。",
        url: "https://note.com/sho_77/n/n4f60a7ea11cf",
        date: "2023年11月6日"
      },
      {
        label: "骨髄ドナー提供の体験談について、インタビューをお受けしました。",
        url: "https://www.jmdp.or.jp/about/material/publications/jmdp_news/",
        date: "2024年12月"
      },
      {
        label: "「愛顔の骨髄バンク学生セミナー」で講演を行いました。",
        url: "https://note.com/sho_77/n/n7e97a55f91b8",
        date: "2024年12月15日"
      }
    ],
  },
];