export interface Award {
    title: string;
    organization: string;
    date: string;
    url?: string;
  }
  
  export const awardData: Award[] = [
    {
      title: "令和二年度共通教育センター長賞",
      organization: "鹿児島大学",
      date: "2020年10月",
      url: "https://www.kagoshima-u.ac.jp/topics-education-students/2020/10/post-1721.html",
    },
  ];