"use client";

import { Section } from "@/data/section-order";

interface TableOfContentsProps {
  sections: Section[];
  isJapanese?: boolean;
}

const sectionNames: Record<Section, { en: string; ja: string }> = {
  [Section.News]: { en: "News", ja: "ニュース" },
  [Section.Keyword]: { en: "Interests", ja: "関心分野" },
  [Section.Skill]: { en: "Skill", ja: "スキル" },
  [Section.Publication]: { en: "Publications", ja: "論文" },
  [Section.Speech]: { en: "Speech", ja: "講演" },
  [Section.Education]: { en: "Education", ja: "学歴" },
  [Section.PermanentEmployment]: { en: "Work Experience (Permanent)", ja: "職歴（無期雇用）" },
  [Section.FixedTermEmployment]: { en: "Work Experience (Fixed-term)", ja: "職歴（有期雇用）" },
  [Section.Intern]: { en: "Internship", ja: "インターンシップ" },
  [Section.ResearchAssistant]: { en: "Research Assistant", ja: "リサーチアシスタント" },
  [Section.Award]: { en: "Award", ja: "受賞" },
  [Section.Community]: { en: "Community / Podcast", ja: "コミュニティ・ポッドキャスト" },
  [Section.Outreach]: { en: "Outreach / Public Engagement", ja: "アウトリーチ・社会貢献" },
  [Section.TeachingAssistant]: { en: "Teaching Assistant", ja: "ティーチングアシスタント" },
  [Section.Qualification]: { en: "Qualification / Test Score", ja: "資格・テストスコア" },
  [Section.AcademicSociety]: { en: "Academic Society", ja: "所属学協会" },
  [Section.Portfolio]: { en: "Portfolio", ja: "ポートフォリオ" },
};

export function TableOfContents({ sections, isJapanese = false }: TableOfContentsProps) {
  const scrollToSection = (sectionName: Section) => {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 目次に含めるセクション（KeywordsとNewsは除外）
  const tableOfContentsSections = [
    Section.Skill,
    Section.Publication,
    Section.Speech,
    Section.Education,
    Section.PermanentEmployment,
    Section.FixedTermEmployment,
    Section.Intern,
    Section.ResearchAssistant,
    Section.Award,
    Section.Community,
    Section.Outreach,
    Section.TeachingAssistant,
    Section.Qualification,
    Section.AcademicSociety,
    Section.Portfolio,
  ].filter(section => sections.includes(section));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-6 mb-8">
      <h3 className="font-serif text-lg font-semibold mb-4 tracking-wide uppercase text-zinc-800">
        {isJapanese ? "目次" : "Table of Contents"}
      </h3>
      <nav>
        <ul className="space-y-2">
          {tableOfContentsSections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="text-left w-full text-sm text-zinc-600 hover:text-zinc-800 hover:bg-zinc-50 px-2 py-1 rounded transition-colors duration-200"
              >
                {isJapanese ? sectionNames[section].ja : sectionNames[section].en}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 