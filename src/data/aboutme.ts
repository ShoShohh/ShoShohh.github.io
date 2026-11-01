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
  name: "Sho Sakai",
  title: "Ph.D. Student in Mathematics",
  institution: "University of Tsukuba",
  institutionUrl: "https://www.math.tsukuba.ac.jp/",
  description: `My name is <strong>Sho Sakai</strong>, a Ph.D. student in the Mathematics Degree Program (Graduate School of Science, Degree Programs in Pure and Applied Sciences), <a href="https://www.math.tsukuba.ac.jp/" target="_blank" rel="noopener noreferrer">University of Tsukuba</a>. I am a <strong>JST BOOST Next-Generation AI Human Resource Development Program</strong> fellow, supported to pursue doctoral research in statistics and related fields (see <strong>Education</strong> and <strong>Experience</strong> below for details).<br><br>

I am interested in <strong>high-dimensional statistical analysis</strong>—topics such as dimensionality reduction and inference for principal component regression in high dimensions—as well as applications to real data and decision support. Personally, I am also curious about finance: how statistical structure and inference can connect to the <strong>quality of decisions</strong> in markets, including market data, risk measurement, and valuation or allocation—not as a trading game, but as careful evaluation under uncertainty.<br><br>

Alongside my degree I work as a <strong>contract analyst</strong> at <a href="https://www.no-spare.com/" target="_blank" rel="noopener noreferrer"><strong>Nospare Inc.</strong></a>, contributing to statistical and DX-oriented consulting, hands-on data analysis and machine learning, and education programs.<br><br>

I host the <strong>podcast</strong> <strong>“Data Science LG: Learning Together in Statistics and Data Science”</strong>, where we explore statistics, machine learning, and academic careers from the perspective of students and researchers. The podcast is available on <a href="https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537" target="_blank"><strong>Apple Podcast</strong></a>, <a href="https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9" target="_blank"><strong>Spotify</strong></a>, <a href="https://www.youtube.com/playlist?list=PLw4Xosv9MWswLAe7xMYa3ut4UoP0e9_De" target="_blank"><strong>YouTube</strong></a>, and <a href="https://music.amazon.co.jp/podcasts/93f29696-a96d-4c10-a37c-22d0c4e1153d/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9" target="_blank"><strong>Amazon Music</strong></a>. Through the <strong>Data Science Learning Group</strong> community, I plan and run study sessions on statistics, machine learning, deep learning, and related topics. For more on the study groups and podcast, please see the <strong>Community / Podcast</strong> section below.<br><br>

As a <strong>Bone Marrow Bank youth ambassador</strong>, I help raise awareness of <strong>hematopoietic stem cell transplantation</strong>: I share my experience as a donor, promote donor registration, and take part in talks and media appearances. Further links and write-ups are in <strong>Outreach / Public Engagement</strong> below. Through these activities I hope to connect healthcare and society.<br><br>

I share <strong>my research findings and code</strong> on 
<a href="https://github.com/ShoShohh" target="_blank"><strong>GitHub</strong></a>, and post about blood donation, hematopoietic stem cell transplantation, data science, education, and research on 
<a href="https://note.com/sho_77" target="_blank"><strong>note</strong></a>.
`,

  email: "ssakai[at]math.tsukuba.ac.jp",
  githubUsername: "ShoShohh",
  linkedinUsername: "ssakai0403",
  twitterUsername: "simplesho_CLT",
  blogUrl: "https://note.com/sho_77",
  cvUrl: "https://raw.githubusercontent.com/ShoShohh/resume/main/resume.pdf",
  imageUrl: "/your-image.JPG",
  googleScholarUrl: "https://scholar.google.com/...",
  kaggleUrl: "https://www.kaggle.com/sakaisho",
  orcidUrl: "https://orcid.org/0009-0005-3408-4622",
};