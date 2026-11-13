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
    title: "Blood donation",
    period: "2018 – present",
    description: "Achieved 70 blood donations and received the silver merit badge.",
    links: [
      {
        label: "Blood Donation RTA: Silver Merit Badge Achievement (70 donations reached) Report",
        url: "https://note.com/sho_77/n/ne5760ce20d31?sub_rt=share_b",
        date: "August 13, 2025"
      }
    ],
  },
  {
    title: "Bone Marrow Bank Youth Ambassador",
    period: "2024 – present",
    description:
      "I engage in activities to share information about hematopoietic stem cell transplantation and promote donor registration. If you're interested in inviting a speaker or organizing a promotional booth about the Japan Marrow Donor Program at your school, university, or organization, please reach out. We can coordinate with the Japan Marrow Donor Program directly. To increase the number of young bone marrow donors, I believe it is important to share the voices of those who have actually donated and their families.",
    appearancesHeading: "Talks and media appearances",
    appearanceColumns: { date: "Date", place: "Venue / medium", record: "Record" },
    appearances: [
      {
        date: "Nov. 13, 2026",
        place: "University in Miyagi (online)",
        links: [
          {
            label: "Reaching younger generations about bone marrow donation: reflections from an online talk in Miyagi",
            url: "https://note.com/sho_77/n/n05580716aaab",
          },
        ],
      },
      {
        date: "Sep. 4, 2026",
        place: "Nursing school in Tokyo",
        links: [
          {
            label: "Reaching younger generations about bone marrow donation: reflections from a talk",
            url: "https://note.com/sho_77/n/n6c7a89d6d09f",
          },
        ],
      },
      {
        date: "Apr. 14, 2026",
        place: "FM Shonan Napassa, “Kochira Radio Bangumi Seisakubu”",
        links: [
          {
            label: "Broadcast archive (Spotify)",
            url: "https://open.spotify.com/episode/6YvMdN1wKXs2RCJGbmuFGO?si=141fc11dea454701",
          },
          {
            label: "Reaching younger generations about bone marrow donation: reflections from a talk",
            url: "https://note.com/sho_77/n/n6c7a89d6d09f",
          },
        ],
      },
      {
        date: "Feb. 14, 2026",
        place: "Kamakura FM",
        links: [
          {
            label: "I appeared on Kamakura FM as a bone marrow donor | Passing the baton of life begins with awareness",
            url: "https://note.com/sho_77/n/n69dae2a375f0",
          },
        ],
      },
      {
        date: "July 7, 2025",
        place: "Nursing school in Tokyo",
        links: [
          {
            label: "Gave a lecture as a bone marrow donor at a nursing school.",
            url: "https://note.com/sho_77/n/nbf32237872b1",
          },
        ],
      },
      {
        date: "May 11, 2025",
        place: "Health festival in Suginami",
        links: [
          {
            label: "Participated in a health festival to promote the Japan Marrow Donor Program",
            url: "https://note.com/sho_77/n/n2759ff59f092",
          },
        ],
      },
      {
        date: "Dec. 15, 2024",
        place: "Egao Japan Marrow Donor Program Student Seminar (Ehime)",
        links: [
          {
            label: "Gave a lecture as a bone marrow donor at the seminar",
            url: "https://note.com/sho_77/n/n7e97a55f91b8",
          },
        ],
      },
      {
        date: "Dec. 2024",
        place: "Japan Marrow Donor Program (interview, newsletter)",
        links: [
          {
            label: "Interviewed on my donation experience",
            url: "https://www.jmdp.or.jp/about/material/publications/jmdp_news/",
          },
        ],
      },
    ],
    otherLinksHeading: "Articles and other notes",
    links: [
      {
        label: "No-blood 'swab registration' starts: data on the marrow bank and what we can do",
        url: "https://note.com/sho_77/n/na5d81e176c0d?sub_rt=share_pb",
        date: "Jan. 21, 2026"
      },
      {
        label: "An article about the background of “Bone Marrow Donya-” and my gacha experience",
        url: "https://note.com/sho_77/n/n55b6ff424d99",
        date: "Nov. 30, 2025"
      },
      {
        label: "A summary of bone marrow transplant / bone marrow bank / blood donation related podcasts",
        url: "https://note.com/sho_77/n/n08aecb288f1f",
        date: "May 28, 2025"
      },
      {
        label: '"Voices of Donor Families" featured',
        url: "https://www.jmdp.or.jp/about/story/detail/20250423130632.html",
        date: "Apr. 23, 2025"
      },
      {        
        label: "The Japan Marrow Donor Program was registered as a T-ACT community group at the University of Tsukuba",
        url: "https://x.com/simplesho_CLT/status/1861690291969032344",
        date: "Nov. 27, 2024"
      },
      {
        label: "A report on bone marrow donation experience and related information",
        url: "https://note.com/sho_77/n/n4f60a7ea11cf",
        date: "Nov. 6, 2023"
      }
    ],
  },
];