
import React from "react";

export interface OutreachItem {
  title: string;
  period: string;
  description?: string;
  links?: { label: string; url: string; date?: string }[];
}

interface OutreachEntryProps {
  entry: OutreachItem;
}

export function OutreachEntry({ entry }: OutreachEntryProps) {
  return (
    <div className="text-sm text-zinc-700 leading-relaxed space-y-2">
      <div className="font-semibold text-zinc-800">{entry.title}</div>
      <div className="italic text-zinc-500">{entry.period}</div>
      {entry.description && <p>{entry.description}</p>}
      {entry.links && (
        <div className="space-y-2">
          {entry.links.map((link, index) => (
            <p key={index}>
              {link.date && (
                <span className="italic text-zinc-500">({link.date}) </span>
              )}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                <strong>{link.label}</strong>
              </a>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}