export interface PermanentEmployment {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  pdfUrl?: string;
}

export const permanentEmploymentData: PermanentEmployment[] = [];
