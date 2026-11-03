import { Section, sectionOrder } from "@/data/section-order";
import { educationData as educationEn } from "@/data/education";
import { educationData as educationJa } from "@/data-ja/education";
import { experienceData as experienceEn } from "@/data/experience";
import { experienceData as experienceJa } from "@/data-ja/experience";
import { permanentEmploymentData as permanentEn } from "@/data/permanent-employment";
import { permanentEmploymentData as permanentJa } from "@/data-ja/permanent-employment";
import { fellowshipData as fellowshipEn } from "@/data/fellowship";
import { fellowshipData as fellowshipJa } from "@/data-ja/fellowship";
import { internData as internEn } from "@/data/intern";
import { internData as internJa } from "@/data-ja/intern";
import { researchAssistantData as raEn } from "@/data/research-assistant";
import { researchAssistantData as raJa } from "@/data-ja/research-assistant";
import { teachingAssistantData as taEn } from "@/data/teaching-assistant";
import { teachingAssistantData as taJa } from "@/data-ja/teaching-assistant";
import { campusServiceData as campusEn } from "@/data/campus-service";
import { campusServiceData as campusJa } from "@/data-ja/campus-service";
import { awardData as awardEn } from "@/data/award";
import { awardData as awardJa } from "@/data-ja/award";
import { communityData as communityEn } from "@/data/community";
import { communityData as communityJa } from "@/data-ja/community";
import { outreachData as outreachEn } from "@/data/outreach";
import { outreachData as outreachJa } from "@/data-ja/outreach";
import { qualificationData as qualificationEn } from "@/data/qualification";
import { qualificationData as qualificationJa } from "@/data-ja/qualification";
import { academicSocietyData as societyEn } from "@/data/academic-society";
import { academicSocietyData as societyJa } from "@/data-ja/academic-society";
import { portfolioData as portfolioEn } from "@/data/portfolio";
import { portfolioData as portfolioJa } from "@/data-ja/portfolio";
import { skillData as skillEn } from "@/data/skill";
import { skillData as skillJa } from "@/data-ja/skill";
import { publicationData } from "@/data/publication";
import { speechData } from "@/data/speech";

function hasContent(section: Section, isJapanese: boolean): boolean {
  switch (section) {
    case Section.News:
    case Section.Keyword:
      return false; // not listed in TOC
    case Section.Skill:
      return (isJapanese ? skillJa : skillEn).length > 0;
    case Section.Publication:
      return publicationData.length > 0;
    case Section.Speech:
      return speechData.length > 0;
    case Section.Education:
      return (isJapanese ? educationJa : educationEn).length > 0;
    case Section.Experience: {
      const permanent = isJapanese ? permanentJa : permanentEn;
      const experience = isJapanese ? experienceJa : experienceEn;
      return permanent.length + experience.length > 0;
    }
    case Section.Intern:
      return (isJapanese ? internJa : internEn).length > 0;
    case Section.Fellowship:
      return (isJapanese ? fellowshipJa : fellowshipEn).length > 0;
    case Section.ResearchAssistant:
      return (isJapanese ? raJa : raEn).length > 0;
    case Section.TeachingAssistant: {
      const ta = isJapanese ? taJa : taEn;
      const campus = isJapanese ? campusJa : campusEn;
      return ta.length + campus.length > 0;
    }
    case Section.Award:
      return (isJapanese ? awardJa : awardEn).length > 0;
    case Section.Community:
      return (isJapanese ? communityJa : communityEn).length > 0;
    case Section.Outreach:
      return (isJapanese ? outreachJa : outreachEn).length > 0;
    case Section.Qualification:
      return (isJapanese ? qualificationJa : qualificationEn).length > 0;
    case Section.AcademicSociety:
      return (isJapanese ? societyJa : societyEn).length > 0;
    case Section.Portfolio:
      return (isJapanese ? portfolioJa : portfolioEn).length > 0;
    default:
      return false;
  }
}

/** Sections that appear in the TOC and have content (matches body visibility). */
export function getVisibleTocSections(isJapanese: boolean): Section[] {
  const tocCandidates = [
    Section.Skill,
    Section.Publication,
    Section.Speech,
    Section.Education,
    Section.Experience,
    Section.Intern,
    Section.Fellowship,
    Section.ResearchAssistant,
    Section.TeachingAssistant,
    Section.Award,
    Section.Community,
    Section.Outreach,
    Section.Qualification,
    Section.AcademicSociety,
    Section.Portfolio,
  ];

  return tocCandidates.filter(
    (section) => sectionOrder.includes(section) && hasContent(section, isJapanese)
  );
}
