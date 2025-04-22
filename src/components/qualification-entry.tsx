// src/components/qualification-entry.tsx
import React from "react";

export interface Qualification {
  title: string;
  date: string;
  url?: string;
}

interface QualificationEntryProps {
  qualification: Qualification;
}

export function QualificationEntry({ qualification }: QualificationEntryProps) {
  return (
    <div className="text-sm text-zinc-700 leading-relaxed">
      <p className="font-semibold">
        {qualification.url ? (
          <a
            href={qualification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {qualification.title}
          </a>
        ) : (
          qualification.title
        )}
      </p>
      <p className="italic text-zinc-500 text-sm">{qualification.date}</p>
    </div>
  );
}
