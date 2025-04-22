export interface Community {
    title: string;
    subtitle?: string;
    details?: string[];
    links?: { label: string; url: string }[];
}
  
export const communityData: Community[] = [
    {
      title: "Nospare Student Community",
      subtitle: "2024 -",
      details: [
"I lead the design and management of study group templates, including topics such as multivariate analysis, reinforcement learning, Gaussian processes, and Bayesian deep learning. I also participate in the practical machine learning study group and organize the podcast “Data Science LG: Learning Together in Statistics and Data Science”, distributed via Spotify, Apple Podcast, and YouTube."
      ],
      links: [
        { label: "Website", url: "https://www.notion.so/Nospare-Student-Community-Division-Activities-List-188a9bc7146f80f19daec821b55178ad?pvs=21" },
        { label: "Podcast Activity Overview", url: "https://secret-mat-72c.notion.site/Podcast-Data-Science-LG-188a9bc7146f803dbc3ad1ea95ad49dc?pvs=4" },
        { label: "Spotify", url: "https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9?si=15ddbbe5fc2645ac" },
        { label: "Apple Podcast", url: "https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537" },
        { label: "YouTube", url: "https://www.youtube.com/playlist?list=PLw4Xosv9MWswLAe7xMYa3ut4UoP0e9_De" }
      ],
    },
    {
      title: "Tsukuba Graduate Students' Network",
      subtitle: "2024 -",
      details: [
        "I am a general member of this graduate student community and started a podcast initiative within the group."
      ],
      links: [
        { label: "Website", url: "https://tgn.official.jp/" },
        { label: "Spotify", url: "https://open.spotify.com/show/592AguffFk9eJ1Og1OVCzW?si=a6cd6f7bda504ad7" }
      ],
    },
];