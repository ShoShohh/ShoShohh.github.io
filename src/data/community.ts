import type { CastGuestItem } from "./cast-guest-list";
import { castGuestList } from "./cast-guest-list";
import type { ConferenceReviewItem } from "./conference-review-list";
import { conferenceReviewList } from "./conference-review-list";
import type { PodcastReviewItem } from "./podcast-review-list";
import { podcastReviewList } from "./podcast-review-list";

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
      title: "Community \"Data Science Learning Group\"・Podcast \"Data Science LG: Learning Together in Statistics and Data Science\"",
      subtitle: "2024 - present",
      details: [
        "In the Data Science Learning Group community, I plan and run study sessions on statistics, machine learning, deep learning, and related topics, with participants from diverse backgrounds including students and industry practitioners. I am also advancing the design and public release of operational workflows for study groups. You can check currently open and ongoing sessions below. If the application form does not work, please contact us via social media DM to express your interest in joining.",
        "I host the podcast \"Data Science LG: Learning Together in Statistics and Data Science\", where we explore topics such as statistics, machine learning, and academic careers from the perspective of students and researchers. The podcast is available on Spotify, Apple Podcast, YouTube, and Amazon Music.",
        "For an overview of our podcast activities and related information, please visit the Notion page below:"
      ],
      studyGroupLinks: [
        { label: "Recruitment", url: "https://docs.google.com/forms/d/e/1FAIpQLSfPdbL09wcisCn2qtuKtTQams88YlYJ12LSDfY_zMMdboZF8g/viewform?usp=publish-editor" },
        { label: "Progress", url: "https://www.notion.so/Nospare-Student-Community-Division-Activities-List-188a9bc7146f80f19daec821b55178ad?pvs=21" },
      ],
      links: [
        { label: "Apple Podcast", url: "https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537" },
        { label: "Spotify", url: "https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9?si=15ddbbe5fc2645ac" },
        { label: "YouTube", url: "https://www.youtube.com/playlist?list=PLw4Xosv9MWswLAe7xMYa3ut4UoP0e9_De" },
        { label: "Amazon Music", url: "https://music.amazon.co.jp/podcasts/93f29696-a96d-4c10-a37c-22d0c4e1153d/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9" },
        { label: "Podcast Activity Overview", url: "https://secret-mat-72c.notion.site/Podcast-Data-Science-LG-188a9bc7146f803dbc3ad1ea95ad49dc?pvs=4" },
        { label: "News", url: "https://www.notion.so/Podcast-Data-Science-LG-188a9bc7146f803dbc3ad1ea95ad49dc?source=copy_link#27ba9bc7146f80e3828cdf2058288a15" },
        { label: "Audience Data", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=d30a39a66d854406a6449174df489725&pvs=4" },
        { label: "Note", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=8427e57cf89547d6ba4b570e6e166986&pvs=4" },
        { label: "Guest Confirmation Checklist", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=f2526e82a8844059a4563cfd2948b111&pvs=4" },
        { label: "Conference Review Guidelines", url: "https://secret-mat-72c.notion.site/188a9bc7146f803dbc3ad1ea95ad49dc?v=7f37e8c0780f4f9e80a0c2834b7f4e91&pvs=4" },
      ],
      articleLinksHeading: "Articles",
      articleLinks: [
        { label: "🎧 Batch-generating podcast deliverables with an md template + audio — reproducible AI workflows", url: "https://note.com/sho_77/n/n75134b283392", date: "Jul. 23, 2026" },
        { label: "🎧 Podcast production when you're short on time but care about quality – Full use of AI", url: "https://note.com/sho_77/n/nc991fa4bf5bc", date: "Jan. 31, 2026" },
        { label: "🎧 Shirokane Kogyo Meetup vol.20 Effect Verification Report w/ LINE Yahoo Corporation Sano Kazuyuki, Sansan Corporation Kindaka Ukyo", url: "https://note.com/sho_77/n/n94cf34d98b59", date: "Oct. 10, 2025" },
      ],
      castListTitle: "Cast / Guest List",
      castList: castGuestList,
      castListNote: "Titles and affiliations are as of the time of recording.\nApple Podcast links are provided for each entry; the show is also available on Spotify, YouTube, and Amazon Music.\n* indicates guests who have appeared in multiple episodes. The episode link is to their first appearance; you can find other episodes by searching for their name on each platform.",
      conferenceReviewListTitle: "Conference Reviews",
      conferenceReviewList,
      conferenceReviewListNote: "Apple Podcast links are provided for each entry; the show is also available on Spotify, YouTube, and Amazon Music.",
      podcastReviewListTitle: "Podcast Reviews",
      podcastReviewList,
      podcastReviewListNote: "Apple Podcast links are provided for each entry; the show is also available on Spotify, YouTube, and Amazon Music.",
    },
    {
      title: "Tsukuba Graduate Students' Network・Podcast 'Graduate Student Café – University of Tsukuba Branch'",
      subtitle: "2024 - 2025",
      details: [
        "I was a general member of this graduate student community and started a podcast initiative within the group."
      ],
      links: [
        { label: "Community Website", url: "https://tgn.official.jp/" },
        { label: "Spotify", url: "https://open.spotify.com/show/592AguffFk9eJ1Og1OVCzW?si=a6cd6f7bda504ad7" }
      ],
    },
];