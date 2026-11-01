import { Section } from "./section-order";

export const sectionTitles: Record<Section, string> = {
  [Section.News]: "ニュース",
  [Section.Skill]: "スキル",
  [Section.Keyword]: "関心分野",
  [Section.Publication]: "論文",
  [Section.Speech]: "講演",
  [Section.Education]: "学歴",
  [Section.PermanentEmployment]: "職歴（無期雇用）",
  [Section.FixedTermEmployment]: "職歴（有期雇用）",
  [Section.Intern]: "インターンシップ",
  [Section.ResearchAssistant]: "リサーチアシスタント",
  [Section.Award]: "受賞",
  [Section.Community]: "コミュニティ・ポッドキャスト",
  [Section.Outreach]: "アウトリーチ・社会貢献",
  [Section.TeachingAssistant]: "ティーチングアシスタント",
  [Section.Qualification]: "資格・テストスコア",
  [Section.AcademicSociety]: "所属学協会",
  [Section.Portfolio]: "ポートフォリオ",
}; 