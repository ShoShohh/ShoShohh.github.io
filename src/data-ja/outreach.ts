export interface OutreachItem {
  title: string;
  period: string;
  description?: string;
  appearancesHeading?: string;
  appearanceColumns?: { date: string; place: string; record: string };
  appearances?: { date: string; place: string; links: { label: string; url: string }[] }[];
  otherLinksHeading?: string;
  links?: { label: string; url: string; date?: string }[];
}

export const outreachData: OutreachItem[] = [
  {
    title: "献血",
    period: "2018年 – 現在",
    description: "献血回数が70回を迎え、銀色有功章を獲得しました。",
    links: [
      {
        label: "献血回数RTA 銀色有功章獲得！（70回到達）レポート",
        url: "https://note.com/sho_77/n/ne5760ce20d31?sub_rt=share_b",
        date: "2025年8月13日"
      }
    ]
  },
  {
    title: "骨髄バンク ユースアンバサダー",
    period: "2024年 – 現在",
    description:
      "造血幹細胞移植や日本骨髄バンクについての情報発信・ドナー登録の普及啓発活動を行なっています。学校や大学、団体等での講演や啓発ブース設置にご関心のある方はぜひご連絡ください。日本骨髄バンクと連携しながらご相談させていただきます。若い世代の骨髄ドナーを増やすには、実際に提供した方やそのご家族の声を届けていくことが大切だと感じています。",
    appearancesHeading: "語り部・出演",
    appearances: [
      {
        date: "2026年11月13日",
        place: "宮城県内の大学",
        links: [
          {
            label: "若い世代に骨髄提供を届ける：宮城にてオンライン講演を通じて感じたこと",
            url: "https://note.com/sho_77/n/n05580716aaab",
          },
        ],
      },
      {
        date: "2026年9月4日",
        place: "東京都内の看護専門学校",
        links: [
          {
            label: "若い世代に骨髄提供を届ける：講演を通じて感じたこと",
            url: "https://note.com/sho_77/n/n6c7a89d6d09f",
          },
        ],
      },
      {
        date: "2026年4月14日",
        place: "FM湘南ナパサ「こちらラジオ番組制作部」",
        links: [
          {
            label: "出演アーカイブ（Spotify）",
            url: "https://open.spotify.com/episode/6YvMdN1wKXs2RCJGbmuFGO?si=141fc11dea454701",
          },
          {
            label: "若い世代に骨髄提供を届ける：講演を通じて感じたこと",
            url: "https://note.com/sho_77/n/n6c7a89d6d09f",
          },
        ],
      },
      {
        date: "2026年2月14日",
        place: "鎌倉FM",
        links: [
          {
            label: "骨髄ドナー経験者として鎌倉FMに出演しました｜知ることから始まる命のバトン",
            url: "https://note.com/sho_77/n/n69dae2a375f0",
          },
        ],
      },
      {
        date: "2025年7月7日",
        place: "東京都内の看護専門学校",
        links: [
          {
            label: "看護専門学校にて骨髄提供経験者として語部公演を行いました。",
            url: "https://note.com/sho_77/n/nbf32237872b1",
          },
        ],
      },
      {
        date: "2025年5月11日",
        place: "杉並区内の健康祭",
        links: [
          {
            label: "健康祭で日本骨髄バンクの啓発活動を行いました。",
            url: "https://note.com/sho_77/n/n2759ff59f092",
          },
        ],
      },
      {
        date: "2024年12月15日",
        place: "愛媛県「愛顔の骨髄バンク学生セミナー」",
        links: [
          {
            label: "「愛顔の骨髄バンク学生セミナー」にて骨髄提供経験者として語部公演を行いました。",
            url: "https://note.com/sho_77/n/n7e97a55f91b8",
          },
        ],
      },
      {
        date: "2024年12月",
        place: "日本骨髄バンク（インタビュー・ニュースレター）",
        links: [
          {
            label: "骨髄ドナー提供の体験談について、インタビューをお受けしました。",
            url: "https://www.jmdp.or.jp/about/material/publications/jmdp_news/",
          },
        ],
      },
    ],
    otherLinksHeading: "記事・その他",
    links: [
      {
        label: "【採血不要】自宅からドナー登録できる「スワブ登録」が開始。データで見る骨髄バンクの現状と、私たちができること",
        url: "https://note.com/sho_77/n/na5d81e176c0d?sub_rt=share_pb",
        date: "2026年1月21日"
      },
      {
        label: "可愛いだけじゃない。「骨髄ドニャー」誕生の背景とガチャ体験",
        url: "https://note.com/sho_77/n/n55b6ff424d99",
        date: "2025年11月30日"
      },
      {
        label: "骨髄移植 / 骨髄バンク / 献血 関連Podcast まとめ",
        url: "https://note.com/sho_77/n/n08aecb288f1f",
        date: "2025年5月28日"
      },
      {
        label: "「提供者家族の声」が掲載されました。",
        url: "https://www.jmdp.or.jp/about/story/detail/20250423130632.html",
        date: "2025年4月23日"
      },
      {        
        label: "公益財団法人 日本骨髄バンクを筑波大学T-ACTの地域活動団体として登録していただきました。",
        url: "https://x.com/simplesho_CLT/status/1861690291969032344",
        date: "2024年11月27日"
      },
      {
        label: "はじめての骨髄ドナー体験をすべて記録したリアルレポート（助成金・制度まとめ付き）",
        url: "https://note.com/sho_77/n/n4f60a7ea11cf",
        date: "2023年11月6日"
      }
    ]
  }
];