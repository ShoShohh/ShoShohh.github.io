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
    <div className="space-y-12">
      {blocks.map((block, blockIndex) =>
        block[0].group ? (
          <div key={blockIndex} className="space-y-8">
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
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{qualification.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-sm text-zinc-700 font-semibold leading-relaxed">
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
        </h3>
        {qualification.pdfUrl && (
          <div className="mt-2">
            <a
              href={qualification.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 underline"
            >
              {qualification.pdfLabel ?? "修了証"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
