// src/data/qualification.ts
import { Qualification } from "@/components/qualification-entry";

const matsuoInstitute = "株式会社松尾研究所（講座）";
const matsuo =
  "東京大学大学院工学系研究科 松尾・岩澤研究室（Deep Learning 講座）";

export const qualificationData: Qualification[] = [
  {
    title: "高等学校教諭一種免許状　情報, 数学",
    date: "2023年3月",
  },
  {
    title: "中学校教諭一種免許状　数学",
    date: "2023年3月",
  },
  {
    title: "TOEIC L&R score 735",
    date: "2022年3月",
    url: "https://www.iibc-global.org/toeic/toeic_program.html",
  },
  {
    group: matsuoInstitute,
    title: "AIクオンツトレード講座 2026 Summer",
    date: "2026年夏",
    url: "https://matsuo-institute.com/seminar/ai-quant-trading/",
    pdfUrl: "/Certificate_AIクオンツトレード講座_2026Summer.pdf",
    pdfLabel: "修了証",
  },
  {
    group: matsuo,
    title: "AIエンジニアリング基礎講座 2026 Summer",
    date: "2026年夏",
    pdfUrl: "/Certificate_AIエンジニアリング基礎講座.pdf",
    pdfLabel: "修了証",
  },
  {
    group: matsuo,
    title: "深層生成モデル 2026 Summer",
    date: "2026年夏",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/deep-generative-model/",
    pdfUrl: "/Certificate_DeepLearning応用講座_深層主成モデル.pdf",
    pdfLabel: "修了証",
  },
  {
    group: matsuo,
    title: "大規模言語モデル1 2026 Spring",
    date: "2026年春",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/large-language-model/",
    pdfUrl: "/大規模言語モデル1 Deep Learning 応用講座 2026 Spring - 修了証.pdf",
    pdfLabel: "修了証",
  },
  {
    group: matsuo,
    title: "基礎講座 2026 Spring",
    date: "2026年春",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/deep-learning/",
    pdfUrl: "/Certificate_Deep Learning 基礎講座 2026 Spring.pdf",
    pdfLabel: "修了証",
  },
  {
    group: matsuo,
    title: "金融市場取引と機械学習 2026 Spring",
    date: "2026年春",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/financial-machin-learning/",
    pdfUrl: "/Certificate_Deep Learning 応用講座 2026 Spring 金融市場取引と機械学習.pdf",
    pdfLabel: "修了証",
  },
];
