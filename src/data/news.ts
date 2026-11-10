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
    date: "Nov. 10, 2026",
    updates: [
      {
        sectionId: "qualification",
        sectionLabel: "Qualification / Test Score",
        detail:
          "Added AI Quant Trading Course 2026 Summer (Matsuo Institute) and AI Engineering Fundamentals 2026 Summer (Matsuo–Iwasawa Lab).",
      },
    ],
  },
];
