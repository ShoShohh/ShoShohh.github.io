import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{education.year}</span>
        <div className="col-span-3">
          <h3
            className="text-sm text-zinc-700 font-semibold leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: education.institution.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" class="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">$1</a>'
              ),
            }}
          />
          <p className="text-sm text-zinc-600 leading-relaxed">{education.degree}</p>
          {education.advisor && (
            <p className="text-sm text-zinc-500 italic leading-relaxed mt-2">
              Advisor: {education.advisor}
            </p>
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 italic leading-relaxed mt-2">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
