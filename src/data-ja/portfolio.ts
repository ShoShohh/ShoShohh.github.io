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
    description: "大標本設定下における主成分分析（PCA）の漸近的性質に関するRコードおよび数学的ノートです。",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/Asymptotic-Theory-of-PCA",
  },
  {
    title: "T.W. Anderson (2003) PCA Confirmatory Analysis",
    description: "Anderson (2003) に基づく主成分分析の確認的手法を再現したものです。",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Conf",
  },
  {
    title: "T.W. Anderson (2003) Hypothesis Testing",
    description: "Anderson (2003) における主成分分析の仮説検定枠組みの再現です。",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Hypo",
  },
  {
    title: "Principal Component Analysis",
    description: "合成データと実データの両方を用いて主成分分析（PCA）を実演するノートブックです。Jupyter（Python）とRの実装を含みます。",
    technologies: ["Jupyter Notebook", "R"],
    codeUrl: "https://github.com/ShoShohh/Principal-Component-Analysis",
  },
  {
    title: "Conditional Probability and Multiplication Theorem",
    description: "条件付き確率と乗法定理の関係を解説したTeX資料です。",
    technologies: ["LaTeX"],
    codeUrl: "https://github.com/ShoShohh/Conditional-Probability-and-Multiplication-Theorem",
  },
  {
    title: "PRML with Python",
    description: "『パターン認識と機械学習』（Bishop）に基づく実装と演習の一部をまとめています。",
    technologies: ["Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/PRML-with-Python",
  },
  {
    title: "Causal Inference",
    description: "潜在的結果フレームワークや因果グラフに関するJupyterノートブックです。",
    technologies: ["Python", "Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/Causal-inference",
  },
  {
    title: "Programming with R, C, and Python",
    description: "基本的な計算論理と構文を複数の言語で紹介する入門例です。",
    technologies: ["R", "C", "Python"],
    codeUrl: "https://github.com/ShoShohh/Programming-with-R-C-and-Python.-An-Introduction-1-",
  },
  {
    title: "Transformation of Matrix",
    description: "行列演算や変換に関するユーティリティスクリプトと解説です。",
    codeUrl: "https://github.com/ShoShohh/Transformation-of-Matrix",
  },
];