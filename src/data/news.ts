export interface NewsUpdate {
  /** Section element id (e.g. Section.Outreach). Omit for non-section items such as About. */
  sectionId?: string;
  sectionLabel: string;
  detail: string;
}

export interface News {
  date: string;
  /** Optional; omit for addition-only changelog entries. */
  title?: string;
  description?: string;
  link?: string;
  updates?: NewsUpdate[];
}

export const newsData: News[] = [
  {
    date: "Nov. 1, 2026",
    updates: [
      {
        sectionId: "intern",
        sectionLabel: "Internship",
        detail: "Added Mitsubishi UFJ Trust Investment Technology Institute (MTEC), Oct. 2026.",
      },
      {
        sectionId: "qualification",
        sectionLabel: "Qualification / Test Score",
        detail:
          "Added the Matsuo–Iwasawa Lab Deep Generative Models (Deep Learning Applied Course) 2026 Summer certificate.",
      },
      {
        sectionId: "community",
        sectionLabel: "Community / Podcast",
        detail: "Added guest Fuyuto Miyake (episode #48).",
      },
      {
        sectionLabel: "Contact",
        detail: "Added ORCID.",
      },
    ],
  },
];
