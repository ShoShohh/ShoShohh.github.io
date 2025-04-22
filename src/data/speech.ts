export interface Speech {
    title: string;
    authors: string;
    event: string;
    location: string;
    type: string;
    date: string;
    link?: string;
}
  
export const speechData: Speech[] = [
    {
      title: "Hypothesis testing for PCR coefficients in high-dimensional data",
      authors: "Sho Sakai, Kazuyoshi Yata, and Makoto Aoshima",
      event: "The Mathematical Society of Japan Annual Meeting",
      location: "Tokyo, Japan",
      type: "Oral Presentation",
      date: "March 21, 2025",
      link: "https://www.mathsoc.jp/activity/meeting/waseda25mar/index.html",
    },
    {
      title: "Hypothesis testing for PCR coefficients in high-dimensional data",
      authors: "Sho Sakai",
      event: "Seminars by Alumnae/Alumni of Kagoshima University on their Recent Achievements 2025",
      location: "Kagoshima, Japan",
      type: "Oral Presentation",
      date: "March 11, 2025",
      link: "https://www.sci.kagoshima-u.ac.jp/mcs/SAKURA/sakura2025.html",
    },
];