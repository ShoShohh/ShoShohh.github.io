

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
    <div className="space-y-1">
      {intern.url ? (
        <a
          href={intern.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline text-blue-600 hover:text-blue-800"
        >
          {intern.organization}
        </a>
      ) : (
        <div className="font-semibold">{intern.organization}</div>
      )}
      <div className="italic text-zinc-500">{intern.period}</div>
      {intern.description && <div>{intern.description}</div>}
    </div>
  );
}