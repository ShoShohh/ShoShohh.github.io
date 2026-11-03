import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { permanentEmploymentData } from "@/data/permanent-employment";
import { fellowshipData } from "@/data/fellowship";
import { campusServiceData } from "@/data/campus-service";
import { sectionTitles } from "@/data/section-titles";
import { getVisibleTocSections } from "@/lib/visible-sections";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { SkillEntry } from "@/components/skill-entry";
import { skillData } from "@/data/skill";
import { SpeechEntry } from "@/components/speech-entry";
import { speechData } from "@/data/speech";
import { teachingAssistantData } from "@/data/teaching-assistant";
import { AwardEntry } from "@/components/award-entry";
import { awardData } from "@/data/award";
import { ResearchAssistantEntry } from "@/components/research-assistant-entry";
import { researchAssistantData } from "@/data/research-assistant";
import { QualificationList } from "@/components/qualification-entry";
import { qualificationData } from "@/data/qualification";
import { CommunityEntry } from "@/components/community-entry";
import { communityData } from "@/data/community";
import { InternEntry } from "@/components/intern-entry";
import { internData } from "@/data/intern";
import { academicSocietyData } from "@/data/academic-society";
import { AcademicSocietyEntry } from "@/components/academic-society-entry";
import { outreachData } from "@/data/outreach";
import { OutreachEntry } from "@/components/outreach-entry";
import { KeywordEntry } from "@/components/keyword-entry";
import { keywordData } from "@/data/keyword";
import { TableOfContents } from "@/components/table-of-contents";
import { UpdateDate } from "@/components/update-date";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <div
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-blue-600 [&_a:hover]:text-blue-800"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

                   {/* Interests section - right after About */}
                   {keywordData.length > 0 && (
                     <section id={Section.Keyword}>
                       <h2 className="font-serif text-lg font-semibold mb-4 tracking-wide uppercase">Interests</h2>
                <div className="flex flex-wrap">
                  {keywordData.map((keyword, index) => (
                    <KeywordEntry key={index} keyword={keyword} />
                  ))}
                </div>
              </section>
            )}

            {/* News section - right after Keywords */}
            {newsData.length > 0 && (
              <section id={Section.News}>
                <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                  News
                </h2>
                <div className="space-y-12">
                  {newsData.map((news, index) => (
                    <div key={index}>
                      <NewsEntry news={news} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Table of Contents - after News */}
            <TableOfContents sections={getVisibleTocSections(false)} isJapanese={false} />

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience: {
                  const workExperience = [...permanentEmploymentData, ...experienceData];
                  return (
                    workExperience.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          {sectionTitles[Section.Experience]}
                        </h2>
                        <div className="space-y-12">
                          {workExperience.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                }
                case Section.Fellowship:
                  return (
                    fellowshipData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          {sectionTitles[Section.Fellowship]}
                        </h2>
                        <div className="space-y-12">
                          {fellowshipData.map((fellowship, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={fellowship}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Skill:
                  return (
                    skillData.length > 0 && (
                      <section key={sectionName} id={sectionName}>
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Skill
                        </h2>
                        <div className="space-y-4">
                          {skillData.map((skill, index) => (
                            <SkillEntry key={index} skill={skill} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Speech:
                  return (
                    speechData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Speech
                        </h2>
                        <div className="space-y-12">
                          {speechData.map((speech, index) => (
                            <SpeechEntry key={index} speech={speech} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Intern:
                  return (
                    internData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          {sectionTitles[Section.Intern]}
                        </h2>
                        <div className="space-y-12">
                          {internData.map((intern, index) => (
                            <InternEntry key={index} intern={intern} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.TeachingAssistant: {
                  const teachingService = [...teachingAssistantData, ...campusServiceData];
                  return (
                    teachingService.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          {sectionTitles[Section.TeachingAssistant]}
                        </h2>
                        <div className="space-y-12">
                          {teachingService.map((item, index) => (
                            <ExperienceEntry key={index} experience={item} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                }
                case Section.Award:
                  return (
                    awardData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Award
                        </h2>
                        <div className="space-y-6">
                          {awardData.map((award, index) => (
                            <AwardEntry key={index} award={award} isJapanese={false} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.AcademicSociety:
                  return (
                    academicSocietyData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Academic Society
                        </h2>
                        <div className="space-y-12">
                          {academicSocietyData.map((society, index) => (
                            <AcademicSocietyEntry key={index} society={society} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.ResearchAssistant:
                  return (
                    researchAssistantData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Research Assistant
                        </h2>
                        <div className="space-y-12">
                          {researchAssistantData.map((ra, index) => (
                            <ResearchAssistantEntry key={index} ra={ra} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Qualification:
                  return (
                    qualificationData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Qualification / Test Score
                        </h2>
                        <QualificationList items={qualificationData} />
                      </section>
                    )
                  );
                case Section.Outreach:
                  return (
                    outreachData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Outreach / Public Engagement
                        </h2>
                        <div className="space-y-4 text-sm text-zinc-700">
                          {outreachData.map((entry, index) => (
                            <OutreachEntry key={index} entry={entry} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Community:
                  return (
                    communityData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="border-t-2 border-zinc-300 pt-10">
                        <h2 className="font-serif text-lg font-semibold mb-8 tracking-wide uppercase">
                          Community / Podcast
                        </h2>
                        <div className="space-y-12">
                          {communityData.map((entry, index) => (
                            <CommunityEntry key={index} {...entry} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
        <UpdateDate isJapanese={false} />
      </div>
    </div>
  );
}
