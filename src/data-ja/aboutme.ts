export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  kaggleUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "酒井 彰",
  title: "博士後期課程 学生（数学）",
  institution: "筑波大学",
  institutionUrl: "https://www.math.tsukuba.ac.jp/",
  description: `<div style="background-color:#FFF4E5; border-left: 4px solid #FFA500; padding: 0.75em 1em; margin-bottom: 1.5em;">
<strong style="font-size:1.05em; color:#D97706;">現在、以下の機会を積極的に探しております：</strong>：博士課程中のリサーチアシスタント職、インターンシップ、修了後の就職先
</div>

<strong>酒井 彰（Sho Sakai）</strong>は、筑波大学 数理物質科学研究群 数学学位プログラム 博士後期課程に在籍する大学院生です。<br><br>

専門は<strong>高次元統計解析</strong>であり、理論構築だけでなく、実データや意思決定支援への応用にも関心を持っています。<br><br>

Podcast番組 <strong>「Data Science LG：学び合う統計とデータサイエンス」</strong>を企画・運営しています。統計・機械学習・研究者のキャリアなどについて、学生・研究者の視点から語り合っています。配信先：
<a href="https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9" target="_blank"><strong>Spotify</strong></a>、
<a href="https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9" target="_blank"><strong>Apple Podcast</strong></a>、
<a href="https://www.youtube.com/playlist?list=PLw4Xosv9MWswLAe7xMYa3ut4UoP0e9_De" target="_blank"><strong>YouTube</strong></a>。<br><br>

研究成果やコードは
<a href="https://github.com/ShoShohh" target="_blank"><strong>GitHub</strong></a>で公開しており、教育や研究、日常については
<a href="https://note.com/sho_77" target="_blank"><strong>note</strong></a>で発信しています。<br><br>

また、<strong>骨髄移植の啓発活動</strong>にも取り組んでおり、自身のドナー経験を基に講演活動やドナー登録の推進に尽力しています。医療と社会の橋渡しとなることを目指しています。`,

  email: "ssakai[at]math.tsukuba.ac.jp",
  githubUsername: "ShoShohh",
  linkedinUsername: "ssakai0403",
  twitterUsername: "simplesho_CLT",
  blogUrl: "https://note.com/sho_77",
  cvUrl: "https://raw.githubusercontent.com/ShoShohh/resume/main/resume.pdf",
  imageUrl: "/your-image.JPG", // publicに画像を置けばOK
  googleScholarUrl: "https://scholar.google.com/...",
  kaggleUrl: "https://www.kaggle.com/sakaisho",
};