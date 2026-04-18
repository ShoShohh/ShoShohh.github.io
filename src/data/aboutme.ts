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
  name: "Sho Sakai",
  title: "Ph.D. Student in Mathematics",
  institution: "University of Tsukuba",
  institutionUrl: "https://www.math.tsukuba.ac.jp/",
  description: `<div style="background-color:#FFF4E5; border-left: 4px solid #FFA500; padding: 0.75em 1em; margin-bottom: 1.5em;">
<strong style="font-size:1.05em; color:#D97706;">Actively seeking</strong>: Research Assistant roles, internships during my Ph.D., and job placements after graduation!
</div>
  
<strong>Sho Sakai</strong>, a Ph.D. student in the Mathematics Degree Program, Degree Programs in Pure and Applied Sciences, Graduate School of Science and Technology, University of Tsukuba.<br><br>

My research focuses on <strong>high-dimensional statistical analysis</strong>, with interests extending beyond theoretical development to applications involving real-world data and decision-making processes.<br><br>

I host a <strong>podcast</strong> titled <strong>“Data Science LG: Learning Together in Statistics and Data Science”</strong>, where we explore topics such as statistics, machine learning, and academic careers from the perspective of students and researchers. The podcast is available on 
<a href="https://open.spotify.com/show/44vHXFAzqV292YyRvI9cZ9" target="_blank"><strong>Spotify</strong></a>, 
<a href="https://podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537" target="_blank"><strong>Apple Podcast</strong></a>, and 
<a href="https://www.youtube.com/playlist?list=PLw4Xosv9MWswLAe7xMYa3ut4UoP0e9_De" target="_blank"><strong>YouTube</strong></a>.<br><br>

I share <strong>my research findings and code</strong> on 
<a href="https://github.com/ShoShohh" target="_blank"><strong>GitHub</strong></a>, and post about education, research, and personal experiences on 
<a href="https://note.com/sho_77" target="_blank"><strong>note</strong></a>.<br><br>

I am also involved in <strong>advocacy to raise awareness about bone marrow transplantation</strong>, sharing my experience as a donor and promoting donor registration through talks and outreach activities. Through these efforts, I aim to help bridge the gap between healthcare and society.
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
};