// src/components/qualification-entry.tsx
import React from "react";

export interface Qualification {
  title: string;
  date: string;
  url?: string;
  pdfUrl?: string;
  pdfLabel?: string;
  /** Shared heading for consecutive items (e.g. Matsuo Lab courses). */
  group?: string;
}

interface QualificationEntryProps {
  qualification: Qualification;
}

export function QualificationList({ items }: { items: Qualification[] }) {
  const blocks: Qualification[][] = [];
  for (const item of items) {
    const last = blocks[blocks.length - 1];
    if (item.group && last?.[0]?.group === item.group) {
      last.push(item);
    } else {
      blocks.push([item]);
    }
  }

  return (
    <div className="space-y-4">
      {blocks.map((block, blockIndex) =>
        block[0].group ? (
          <div key={blockIndex} className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold text-zinc-800">{block[0].group}</h3>
            {block.map((qualification, index) => (
              <QualificationEntry key={index} qualification={qualification} />
            ))}
          </div>
        ) : (
          block.map((qualification, index) => (
            <QualificationEntry key={`${blockIndex}-${index}`} qualification={qualification} />
          ))
        )
      )}
    </div>
  );
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
      <p className="italic text-zinc-500 text-sm">
        {qualification.date}
        {qualification.pdfUrl && (
          <>
            {"　"}
            <a
              href={qualification.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800 not-italic"
            >
              {qualification.pdfLabel ?? "修了証"}
            </a>
          </>
        )}
      </p>
    </div>
  );
}
