
export interface OutreachItem {
  title: string;
  period: string;
  description?: string;
  links?: { label: string; url: string; date?: string }[];
}

export const outreachData: OutreachItem[] = [
  {
    title: "Blood donation",
    period: "2018 –",
  },
  {
    title: "Bone Marrow Bank Youth Ambassador",
    period: "2024 –",
    description:
      "I engage in activities to share information about bone marrow transplants and promote donor registration. If you're interested in inviting a speaker or organizing a promotional booth about the Japan Marrow Donor Program at your school, university, or organization, please reach out. We can coordinate with the Bone Marrow Bank directly.",
    links: [
      {
        label: "Published a report on bone marrow donation experience and related information",
        url: "https://note.com/sho_77/n/n4f60a7ea11cf",
        date: "Nov. 6, 2023"
      },
      {
        label: "Interviewed by JMDP on my donation experience and featured in their newsletter",
        url: "https://www.jmdp.or.jp/about/material/publications/jmdp_news/",
        date: "Dec. 2024"
      },
      {
        label: "Gave a talk at the 'Egao Bone Marrow Bank Student Seminar'",
        url: "https://note.com/sho_77/n/n7e97a55f91b8",
        date: "Dec. 15, 2024"
      }
    ],
  },
];