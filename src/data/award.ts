export interface Award {
    title: string;
    organization: string;
    date: string;
    url?: string;
  }
  
  export const awardData: Award[] = [
    {
      title: "Common Education Center Director's Award",
      organization: "Kagoshima University",
      date: "Oct. 2020",
      url: "https://www.kagoshima-u.ac.jp/topics-education-students/2020/10/post-1721.html",
    },
  ];