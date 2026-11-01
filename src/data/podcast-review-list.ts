export interface PodcastReviewItem {
  name: string;
  date: string;
  episodeLink?: string;
  noteLink?: string;
}

/** CSV「Podcastの振り返り回DB」（名前, エピソードリンク, 作成日時） */
export const podcastReviewList: PodcastReviewItem[] = [
  {
    name: "#26 半年間の振り返りと今後の構想、データサイエンス系Podcastのおすすめ",
    date: "2025年6月11日",
    episodeLink: "https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537?i=1000709552812",
  },
  {
    name: "#44 NeurIPS & CMStat 2025振り返りレポ、みずほR&T・みずほ第一FTのインターン（おまけ：統計サマセミ、統計連合大会、異分野交流会、2025総括も） w/ 筑波大 増田さん",
    date: "2025年12月28日",
    episodeLink: "https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537?l=en-US&i=1000742904327",
  },
];
