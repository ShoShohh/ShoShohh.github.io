// src/data/qualification.ts
import { Qualification } from "@/components/qualification-entry";

const matsuoInstitute = "Matsuo Institute (courses)";
const matsuo =
  "Matsuo–Iwasawa Lab, Graduate School of Engineering, The University of Tokyo (Deep Learning courses)";

export const qualificationData: Qualification[] = [
  {
    title: "Japanese High School Teacher’s License (Information & Mathematics)",
    date: "Mar. 2023",
  },
  {
    title: "Japanese Junior High School Teacher’s License (Mathematics)",
    date: "Mar. 2023",
  },
  {
    title: "TOEIC L&R score 735",
    date: "Mar. 2022",
    url: "https://www.iibc-global.org/toeic/toeic_program.html",
  },
  {
    group: matsuoInstitute,
    title: "AI Quant Trading Course 2026 Summer",
    date: "Summer 2026",
    url: "https://matsuo-institute.com/seminar/ai-quant-trading/",
    pdfUrl: "/Certificate_AIクオンツトレード講座_2026Summer.pdf",
    pdfLabel: "Certificate",
  },
  {
    group: matsuo,
    title: "AI Engineering Fundamentals 2026 Summer",
    date: "Summer 2026",
    pdfUrl: "/Certificate_AIエンジニアリング基礎講座.pdf",
    pdfLabel: "Certificate",
  },
  {
    group: matsuo,
    title: "Deep Generative Models 2026 Summer",
    date: "Summer 2026",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/deep-generative-model/",
    pdfUrl: "/Certificate_DeepLearning応用講座_深層主成モデル.pdf",
    pdfLabel: "Certificate",
  },
  {
    group: matsuo,
    title: "Large Language Model 1 2026 Spring",
    date: "Spring 2026",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/large-language-model/",
    pdfUrl: "/大規模言語モデル1 Deep Learning 応用講座 2026 Spring - 修了証.pdf",
    pdfLabel: "Certificate",
  },
  {
    group: matsuo,
    title: "Fundamentals 2026 Spring",
    date: "Spring 2026",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/deep-learning/",
    pdfUrl: "/Certificate_Deep Learning 基礎講座 2026 Spring.pdf",
    pdfLabel: "Certificate",
  },
  {
    group: matsuo,
    title: "Financial Market Trading and Machine Learning 2026 Spring",
    date: "Spring 2026",
    url: "https://weblab.t.u-tokyo.ac.jp/lecture/course-list/financial-machin-learning/",
    pdfUrl: "/Certificate_Deep Learning 応用講座 2026 Spring 金融市場取引と機械学習.pdf",
    pdfLabel: "Certificate",
  },
];
