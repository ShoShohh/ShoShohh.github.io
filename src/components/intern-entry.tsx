import React from "react";

export interface Intern {
  organization: string;
  period: string;
  description?: string;
  url?: string;
}

interface InternEntryProps {
  intern: Intern;
}

export function InternEntry({ intern }: InternEntryProps) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1 whitespace-pre-line">{intern.period}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-sm text-zinc-700 font-semibold leading-relaxed">
          {intern.url ? (
            <a
              href={intern.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800 transition-colors"
            >
              {intern.organization}
            </a>
          ) : (
            intern.organization
          )}
        </h3>
        {intern.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">{intern.description}</p>
        )}
      </div>
    </div>
  );
}
