import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-sm text-zinc-700 font-semibold leading-relaxed">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="underline text-blue-600 hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.advisor && (
          <p className="text-sm text-zinc-500 italic leading-relaxed mt-2">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-500 italic leading-relaxed mt-2">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {experience.description}
          </p>
        )}
        {experience.pdfUrl && (
          <div className="mt-2">
            <a
              href={experience.pdfUrl}
              className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
