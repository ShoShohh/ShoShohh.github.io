import type { News } from "@/data/news";

export const newsData: News[] = [
  {
    date: "2026年11月1日",
    updates: [
      {
        sectionId: "intern",
        sectionLabel: "インターンシップ",
        detail: "三菱UFJトラスト投資工学研究所（MTEC）（2026年10月）を追加。",
      },
      {
        sectionId: "qualification",
        sectionLabel: "資格・テストスコア",
        detail:
          "松尾・岩澤研究室「深層生成モデル Deep Learning 応用講座 2026 Summer」の修了を追加。",
      },
      {
        sectionId: "community",
        sectionLabel: "コミュニティ・ポッドキャスト",
        detail: "ゲストに三宅 冬人さん（#48）を追加。",
      },
      {
        sectionLabel: "連絡先",
        detail: "ORCID を追加。",
      },
    ],
  },
];
