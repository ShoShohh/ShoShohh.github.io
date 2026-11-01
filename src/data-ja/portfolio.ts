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
    title: "ClaudeとFinanceの記事をまとめて読んでみた",
    description: "ClaudeとFinanceに関する記事をまとめて読んだメモ。",
    projectUrl: "https://note.com/sho_77/n/n0ffbe8d1aacd",
    updatedDate: "2026年7月15日",
  },
  {
    title: "修士論文 / 高次元データの主成分回帰係数に関する仮説検定（JSS NEWS）",
    description: "日本統計学会会報 2025年4月20日 No.203「９．博士論文・修士論文の紹介」のp.15で紹介されました。",
    codeUrl: "https://www.jss.gr.jp/wp-content/uploads/K203.pdf",
  },
  {
    title: "修士論文 / 高次元データの主成分回帰係数に関する仮説検定（数学通信）",
    description: "日本数学会『数学通信』30巻1号（2025年5月）「2024年度修士および博士論文」で紹介されました。",
    codeUrl: "https://www.mathsoc.jp/publications/tushin/backnumber/index30-1.html",
  },
  {
    title: "卒業論文 / 主成分分析の漸近理論",
    description: "関連リポジトリのリンクは上記。",
    codeUrl: "https://github.com/ShoShohh/Asymptotic-Theory-of-PCA",
    updatedDate: "2024年11月23日",
  },
  {
    title: "主成分分析の漸近理論",
    description: "大標本設定における主成分分析の漸近的性質に関するRコードと数学的ノート。",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/Asymptotic-Theory-of-PCA",
    updatedDate: "2024年11月23日",
  },
  {
    title: "T.W. Anderson (2003) 主成分分析の検証的分析",
    description: "Andersonの2003年の論文から検証的主成分分析手法を再実装。",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Conf",
    updatedDate: "2024年11月23日",
  },
  {
    title: "T.W. Anderson (2003) 仮説検定",
    description: "Anderson (2003) の主成分分析の仮説検定フレームワークを再現。",
    technologies: ["R"],
    codeUrl: "https://github.com/ShoShohh/T.W.Anderson-2003-_Hypo",
    updatedDate: "2024年11月23日",
  },
  {
    title: "主成分分析",
    description: "合成データと実世界データの両方を用いて主成分分析を実演するノートブック。Jupyter (Python) とRで実装。",
    technologies: ["Jupyter Notebook", "R"],
    codeUrl: "https://github.com/ShoShohh/Principal-Component-Analysis",
    updatedDate: "2024年11月23日",
  },
  {
    title: "条件付き確率と乗法定理",
    description: "条件付き確率と乗法定理の関係を説明するTeXドキュメント。",
    technologies: ["LaTeX"],
    codeUrl: "https://github.com/ShoShohh/Conditional-Probability-and-Multiplication-Theorem",
    updatedDate: "2024年11月23日",
  },
  {
    title: "PythonによるPRML",
    description: "『パターン認識と機械学習』（ビショップ）に基づく選択的な実装と演習。",
    technologies: ["Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/PRML-with-Python",
    updatedDate: "2023年11月1日",
  },
  {
    title: "因果推論",
    description: "ポテンシャルアウトカムフレームワークと因果グラフを探るJupyterノートブック。",
    technologies: ["Python", "Jupyter Notebook"],
    codeUrl: "https://github.com/ShoShohh/Causal-inference",
    updatedDate: "2023年7月26日",
  },
  {
    title: "R、C、Pythonによるプログラミング",
    description: "基本的な計算ロジックと構文のための多言語による入門例。",
    technologies: ["R", "C", "Python"],
    codeUrl: "https://github.com/ShoShohh/Programming-with-R-C-and-Python.-An-Introduction-1-",
    updatedDate: "2023年4月19日",
  },
  {
    title: "行列の変換",
    description: "行列の操作と変換のためのユーティリティスクリプトと説明。",
    codeUrl: "https://github.com/ShoShohh/Transformation-of-Matrix",
    updatedDate: "2023年2月2日",
  },
];