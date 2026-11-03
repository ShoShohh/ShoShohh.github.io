import { Award } from "@/data/award";

interface AwardEntryProps {
  award: Award;
  isJapanese?: boolean;
}

export function AwardEntry({ award, isJapanese = false }: AwardEntryProps) {
  const titleNode = award.url ? (
    <a
      href={award.url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-600 hover:text-blue-800"
    >
      <span className="font-semibold">
        {award.title}（{award.organization}）
      </span>
    </a>
  ) : (
    <span className="font-semibold">
      {award.title}（{award.organization}）
    </span>
  );

  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{award.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-sm text-zinc-700 font-semibold leading-relaxed">{titleNode}</h3>
        {award.imageUrl && (
          <div className="mt-2">
            {award.imageUrl.toLowerCase().endsWith(".pdf") ? (
              <div className="max-w-xs rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
                <embed
                  src={award.imageUrl}
                  type="application/pdf"
                  className="w-full h-64"
                  title={award.title}
                />
              </div>
            ) : (
              <img
                src={award.imageUrl}
                alt={award.title}
                className="max-w-xs rounded-lg shadow-sm border border-zinc-200"
              />
            )}
          </div>
        )}
        {award.pdfUrl && (
          <div className="mt-2">
            <div className="max-w-xs rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
              <embed
                src={award.pdfUrl}
                type="application/pdf"
                className="w-full h-64"
                title={award.title}
              />
            </div>
            <div className="mt-2">
              <a
                href={award.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 underline"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                {isJapanese ? "PDFを別タブで開く" : "Open PDF in new tab"}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
