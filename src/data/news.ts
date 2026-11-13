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
    date: "Nov. 13, 2026",
    updates: [
      {
        sectionId: "outreach",
        sectionLabel: "Outreach / Public Engagement",
        detail:
          "Added an online bone marrow bank talk at a university in Miyagi (Nov. 13, 2026).",
      },
    ],
  },
];
