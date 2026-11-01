import type { CastGuestItem } from "@/data/cast-guest-list";
import { castGuestList } from "@/data/cast-guest-list";
import type { ConferenceReviewItem } from "@/data/conference-review-list";
import { conferenceReviewList } from "@/data/conference-review-list";
import type { PodcastReviewItem } from "@/data/podcast-review-list";
import { podcastReviewList } from "@/data/podcast-review-list";

export interface Community {
    title: string;
    subtitle?: string;
    details?: string[];
    links?: { label: string; url: string }[];
    articleLinks?: { label: string; url: string; date?: string }[];
    articleLinksHeading?: string;
    studyGroupLinks?: { label: string; url: string }[];
    castListTitle?: string;
    castList?: CastGuestItem[];
    castListNote?: string;
    conferenceReviewListTitle?: string;
    conferenceReviewList?: ConferenceReviewItem[];
    conferenceReviewListNote?: string;
    podcastReviewListTitle?: string;
    podcastReviewList?: PodcastReviewItem[];
    podcastReviewListNote?: string;
}
  
export const communityData: Community[] = [
    {
      title: "コミュニティ「データサイエンスラーニンググループ」・Podcast番組「Data Science LG: 学び合う統計とデータサイエンス」",
      subtitle: "2024年 - 現在",
      details: [
        "コミュニティー「データサイエンスラーニンググループ」では統計・機械学習・深層学習などを扱う勉強会を企画・運営しており、学生や実務家など、様々な背景を持つ方々にご参加いただいています。また、勉強会の運営フローの設計・公開も進めています。現在募集中・進行中の勉強会は以下からご確認いただけます。応募フォームに不具合がある場合は、SNSのDMなどで参加希望の旨をご連絡ください。",
        "Podcast番組「Data Science LG: 学び合う統計とデータサイエンス」を企画・運営し、統計・機械学習・研究者のキャリアなどについて、学生・研究者の視点から語り合っています。配信先はSpotify, Apple Podcast, YouTube, Amazon Musicです。",
        "Podcastの活動概要や関連情報は、以下のNotionページでご確認いただけます："
      ],
      studyGroupLinks: [
        { label: "募集", url: "https://docs.google.com/forms/d/e/1FAIpQLSfPdbL09wcisCn2qtuKtTQams88YlYJ12LSDfY_zMMdboZF8g/viewform?usp=publish-editor" },
        { label: "進行状況", url: "https://www.notion.so/Nospare-Student-Community-Division-Activities-List-188a9bc7146f80f19daec821b55178ad?pvs=21" },
      ],
      links: [
        { label: "Apple Podcast", url: "https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537" },
        { label: "Spotify", url: "https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9?si=15ddbbe5fc2645ac" },
        { label: "YouTube", url: "https://www.youtube.com/playlist?list=PLw4Xosv9MWswLAe7xMYa3ut4UoP0e9_De" },
        { label: "Amazon Music", url: "https://music.amazon.co.jp/podcasts/93f29696-a96d-4c10-a37c-22d0c4e1153d/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9" },
        { label: "Podcast活動概要", url: "https://secret-mat-72c.notion.site/Podcast-Data-Science-LG-188a9bc7146f803dbc3ad1ea95ad49dc?pvs=4" },
        { label: "News", url: "https://www.notion.so/Podcast-Data-Science-LG-188a9bc7146f803dbc3ad1ea95ad49dc?source=copy_link#27ba9bc7146f80e3828cdf2058288a15" },
        { label: "視聴データ", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=d30a39a66d854406a6449174df489725&pvs=4" },
        { label: "note", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=8427e57cf89547d6ba4b570e6e166986&pvs=4" },
        { label: "ゲスト確認事項", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=f2526e82a8844059a4563cfd2948b111&pvs=4" },
        { label: "学会感想回注意事項", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=7f37e8c0780f4f9e80a0c2834b7f4e91&pvs=4" },
      ],
      articleLinksHeading: "記事",
      articleLinks: [
        { label: "🎧 Podcast公開物は「mdテンプレ＋音声」で一括生成する 〜再現性のあるAI活用術〜", url: "https://note.com/sho_77/n/n75134b283392", date: "2026年7月23日" },
        { label: "🎧 時間はないけどこだわりたいPodcast作成 〜AIフル活用術〜", url: "https://note.com/sho_77/n/nc991fa4bf5bc", date: "2026年1月31日" },
        { label: "🎧 白金鉱業Meetup vol.20 効果検証編レポ w/ LINEヤフー株式会社 佐野和幸さん、Sansan株式会社 金髙右京さん", url: "https://note.com/sho_77/n/n94cf34d98b59", date: "2025年10月10日" },
      ],
      castListTitle: "出演者 / ゲスト一覧",
      castList: castGuestList,
      castListNote: "出演者 / ゲストの肩書きおよび所属は収録時点のものです。\n各ページにApple Podcastのリンクを添付していますが、Spotify, YouTube, Amazon Musicでも視聴可能です。\n*は複数エピソードにご出演いただいている方々です。エピソードリンクは初回出演のものですが、各プラットフォームにてお名前を調べていただくと他のエピソードもご視聴いただけます。",
      conferenceReviewListTitle: "学会などの振り返り回",
      conferenceReviewList,
      conferenceReviewListNote: "各エピソードにApple Podcastのリンクを添付していますが、Spotify, YouTube, Amazon Musicでも視聴可能です。",
      podcastReviewListTitle: "Podcastの振り返り回",
      podcastReviewList,
      podcastReviewListNote: "各エピソードにApple Podcastのリンクを添付していますが、Spotify, YouTube, Amazon Musicでも視聴可能です。",
    },
    {
      title: "Tsukuba Graduate Students' Network・Podcast「院生カフェ　つくば大学支店」",
      subtitle: "2024年 - 2025年",
      details: [
        "筑波大学の大学院生による学生コミュニティの一般メンバーとして参加し、その中でPodcast企画を立ち上げました。"
      ],
      links: [
        { label: "コミュニティーウェブサイト", url: "https://tgn.official.jp/" },
        { label: "Spotify", url: "https://open.spotify.com/show/592AguffFk9eJ1Og1OVCzW?si=a6cd6f7bda504ad7" }
      ],
    },
];