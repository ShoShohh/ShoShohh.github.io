export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  updatedDate?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Reading notes: Claude and Finance articles",
    description: "Notes compiled while reading articles on Claude and finance.",
    projectUrl: "https://note.com/sho_77/n/n0ffbe8d1aacd",
    updatedDate: "Jul. 15, 2026",
  },
  {
    title: "Master's Thesis / Hypothesis testing for PCR coefficients in high-dimensional data (JSS NEWS)",
    description: "Introduced in JAPAN STATISTICAL SOCIETY NEWS (April 20, 2025, No.203, Section 9: p.15).",
    codeUrl: "https://www.jss.gr.jp/wp-content/uploads/K203.pdf",
  },
  {
    title: "Master's Thesis / Hypothesis testing for PCR coefficients in high-dimensional data (Mathematics Communication)",
    description: "Featured in Mathematical Society of Japan's 'Mathematics Communication' (Volume 30, No.1, May 2025) in the section '2024 Master's and Doctoral Theses'.",
    codeUrl: "https://www.mathsoc.jp/publications/tushin/backnumber/index30-1.html",
  },
  {
    title: "Graduation Thesis / Asymptotic Theory of Principal Component Analysis",
    description: "Related repository link available above.",
    codeUrl: "https://github.com/ShoShohh/Asymptotic-Theory-of-PCA",
    updatedDate: "Nov 23, 2024",
  },
  {
    title: "Asymptotic Theory of PCA",
    description: "R code and mathematical notes on asymptotic properties of PCA under large-sample settings.",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/Asymptotic-Theory-of-PCA",
    updatedDate: "Nov 23, 2024",
  },
  {
    title: "T.W. Anderson (2003) PCA Confirmatory Analysis",
    description: "Reimplementation of confirmatory PCA methods from Anderson's 2003 paper.",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Conf",
    updatedDate: "Nov 23, 2024",
  },
  {
    title: "T.W. Anderson (2003) Hypothesis Testing",
    description: "Reproduction of hypothesis testing framework for PCA from Anderson (2003).",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Hypo",
    updatedDate: "Nov 23, 2024",
  },
  {
    title: "Principal Component Analysis",
    description: "Notebooks to demonstrate PCA using both synthetic and real-world data. Implementations are available in Jupyter (Python) and R.",
    technologies: ["Jupyter Notebook", "R"],
    codeUrl: "https://github.com/ShoShohh/Principal-Component-Analysis",
    updatedDate: "Nov 23, 2024",
  },
  {
    title: "Conditional Probability and Multiplication Theorem",
    description: "A TeX document that explains the relationship between conditional probability and multiplication rule.",
    technologies: ["LaTeX"],
    codeUrl: "https://github.com/ShoShohh/Conditional-Probability-and-Multiplication-Theorem",
    updatedDate: "Nov 23, 2024",
  },
  {
    title: "PRML with Python",
    description: "Selected implementations and exercises based on 'Pattern Recognition and Machine Learning' (Bishop).",
    technologies: ["Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/PRML-with-Python",
    updatedDate: "Nov 1, 2023",
  },
  {
    title: "Causal Inference",
    description: "Jupyter notebooks exploring potential outcome frameworks and causal graphs.",
    technologies: ["Python", "Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/Causal-inference",
    updatedDate: "Jul 26, 2023",
  },
  {
    title: "Programming with R, C, and Python",
    description: "Introductory examples in multiple languages for basic computational logic and syntax.",
    technologies: ["R", "C", "Python"],
    codeUrl: "https://github.com/ShoShohh/Programming-with-R-C-and-Python.-An-Introduction-1-",
    updatedDate: "Apr 19, 2023",
  },
  {
    title: "Transformation of Matrix",
    description: "Utility scripts and explanations for matrix operations and transformations.",
    codeUrl: "https://github.com/ShoShohh/Transformation-of-Matrix",
    updatedDate: "Feb 2, 2023",
  },
];