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
  orcidUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "酒井 彰",
  title: "博士後期課程 学生（数学）",
  institution: "筑波大学",
  institutionUrl: "https://www.math.tsukuba.ac.jp/",
  description: `私の名前は<strong>酒井 彰（Sho Sakai）</strong>です。<a href="https://www.math.tsukuba.ac.jp/" target="_blank" rel="noopener noreferrer">筑波大学</a> 大学院 理工情報生命学術院 数理物質科学研究群 数学学位プログラム 博士後期課程に在籍し、国の博士後期課程支援事業である <strong>JST BOOST（次世代AI人材育成プログラム）</strong> のフェローとしても研究に取り組んでいます（詳細は下記の<strong>学歴</strong>・<strong>奨学金・フェローシップ</strong>・<strong>職歴</strong>をご覧ください）。<br><br>

興味があるのは<strong>高次元統計解析</strong>です。次元削減や、高次元データにおける主成分回帰の推論といった理論的な話題のほか、実データや意思決定支援への応用にも関心があります。個人としては金融にも関心があり、市場データやリスク計測、価格評価・配分といった<strong>意思決定の質</strong>に、統計的な構造把握や推論をどうつなげるかを学びつつ考えています。<br><br>

学業と並行し、<a href="https://www.no-spare.com/" target="_blank" rel="noopener noreferrer"><strong>株式会社Nospare</strong></a> に<strong>アナリスト（業務委託）</strong>として参画し、統計・DXコンサル、データ分析・機械学習、教育事業などに関わっています。<br><br>

Podcast番組 <strong>「Data Science LG：学び合う統計とデータサイエンス」</strong>を企画・運営しています。統計・機械学習・研究者のキャリアなどについて、学生・研究者の視点から語り合っています。配信先：<a href="https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537" target="_blank"><strong>Apple Podcast</strong></a>、<a href="https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9" target="_blank"><strong>Spotify</strong></a>、<a href="https://www.youtube.com/playlist?list=PLw4Xosv9MWswLAe7xMYa3ut4UoP0e9_De" target="_blank"><strong>YouTube</strong></a>、<a href="https://music.amazon.co.jp/podcasts/93f29696-a96d-4c10-a37c-22d0c4e1153d/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9" target="_blank"><strong>Amazon Music</strong></a>。コミュニティ<strong>「データサイエンスラーニンググループ」</strong>では、統計・機械学習・深層学習などを扱う勉強会を企画・運営しています。勉強会・Podcastの詳細については、以下の<strong>コミュニティ・ポッドキャスト</strong>のセクションをご覧ください。<br><br>

<strong>骨髄バンク ユースアンバサダー</strong>として、<strong>造血幹細胞移植</strong>やドナー登録の理解促進に取り組んでいます。自身の提供経験に基づく講演やメディア出演、情報発信の一覧は下記の<strong>アウトリーチ・社会貢献</strong>にまとめています。医療と社会のあいだをつなぐ一助になれば幸いです。<br><br>

<a href="https://github.com/ShoShohh" target="_blank"><strong>GitHub</strong></a>では研究成果やコードの公開、
<a href="https://note.com/sho_77" target="_blank"><strong>note</strong></a>では献血や造血幹細胞移植、データサイエンス、教育、研究について発信しています。
`,

  email: "ssakai[at]math.tsukuba.ac.jp",
  githubUsername: "ShoShohh",
  linkedinUsername: "ssakai0403",
  twitterUsername: "simplesho_CLT",
  blogUrl: "https://note.com/sho_77",
  cvUrl: "https://raw.githubusercontent.com/ShoShohh/resume/main/resume_ja.pdf",
  imageUrl: "/your-image.JPG", // publicに画像を置けばOK
  googleScholarUrl: "https://scholar.google.com/...",
  kaggleUrl: "https://www.kaggle.com/sakaisho",
  orcidUrl: "https://orcid.org/0009-0005-3408-4622",
};