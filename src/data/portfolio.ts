export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Asymptotic Theory of PCA",
    description: "R code and mathematical notes on asymptotic properties of PCA under large-sample settings.",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/Asymptotic-Theory-of-PCA",
  },
  {
    title: "T.W. Anderson (2003) PCA Confirmatory Analysis",
    description: "Reimplementation of confirmatory PCA methods from Anderson's 2003 paper.",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Conf",
  },
  {
    title: "T.W. Anderson (2003) Hypothesis Testing",
    description: "Reproduction of hypothesis testing framework for PCA from Anderson (2003).",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Hypo",
  },
  {
    title: "Principal Component Analysis",
    description: "Notebooks to demonstrate PCA using both synthetic and real-world data. Implementations are available in Jupyter (Python) and R.",
    technologies: ["Jupyter Notebook", "R"],
    codeUrl: "https://github.com/ShoShohh/Principal-Component-Analysis",
  },
  {
    title: "Conditional Probability and Multiplication Theorem",
    description: "A TeX document that explains the relationship between conditional probability and multiplication rule.",
    technologies: ["LaTeX"],
    codeUrl: "https://github.com/ShoShohh/Conditional-Probability-and-Multiplication-Theorem",
  },
  {
    title: "PRML with Python",
    description: "Selected implementations and exercises based on 'Pattern Recognition and Machine Learning' (Bishop).",
    technologies: ["Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/PRML-with-Python",
  },
  {
    title: "Causal Inference",
    description: "Jupyter notebooks exploring potential outcome frameworks and causal graphs.",
    technologies: ["Python", "Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/Causal-inference",
  },
  {
    title: "Programming with R, C, and Python",
    description: "Introductory examples in multiple languages for basic computational logic and syntax.",
    technologies: ["R", "C", "Python"],
    codeUrl: "https://github.com/ShoShohh/Programming-with-R-C-and-Python.-An-Introduction-1-",
  },
  {
    title: "Transformation of Matrix",
    description: "Utility scripts and explanations for matrix operations and transformations.",
    codeUrl: "https://github.com/ShoShohh/Transformation-of-Matrix",
  },
];