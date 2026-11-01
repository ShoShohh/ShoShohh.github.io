import React from "react";

function getNoteEmbedUrl(url: string): string | null {
  const match = url.match(/note\.com\/.*\/n\/(n[a-zA-Z0-9]+)/);
  return match ? `https://note.com/embed/notes/${match[1]}` : null;
}

export interface OutreachAppearance {
  date: string;
  place: string;
  links: { label: string; url: string }[];
}

export interface OutreachItem {
  title: string;
  period: string;
  description?: string;
  /** Talks and media appearances, shown as a table (no embeds). */
  appearances?: OutreachAppearance[];
  appearancesHeading?: string;
  appearanceColumns?: { date: string; place: string; record: string };
  otherLinksHeading?: string;
  links?: { label: string; url: string; date?: string }[];
}

interface OutreachEntryProps {
  entry: OutreachItem;
}

function AppearanceTable({
  rows,
  columns,
}: {
  rows: OutreachAppearance[];
  columns: { date: string; place: string; record: string };
}) {
  return (
    <>
      <div className="hidden md:block overflow-x-auto rounded-lg border border-zinc-200">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="bg-zinc-50 border-b border-zinc-200">
              <th className="text-left py-2.5 px-3 font-medium text-zinc-700 whitespace-nowrap">{columns.date}</th>
              <th className="text-left py-2.5 px-3 font-medium text-zinc-700">{columns.place}</th>
              <th className="text-left py-2.5 px-3 font-medium text-zinc-700">{columns.record}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-zinc-100 last:border-0">
                <td className="py-2.5 px-3 text-zinc-600 align-top whitespace-nowrap">{row.date}</td>
                <td className="py-2.5 px-3 text-zinc-800 align-top">{row.place}</td>
                <td className="py-2.5 px-3 align-top">
                  <span className="flex flex-col gap-1">
                    {row.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800"
                      >
                        {link.label}
                      </a>
                    ))}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-3">
        {rows.map((row, index) => (
          <div key={index} className="rounded-lg border border-zinc-200 bg-zinc-50/30 p-3 text-sm">
            <div className="text-zinc-500 text-xs">{row.date}</div>
            <div className="text-zinc-800 mt-1">{row.place}</div>
            <span className="flex flex-col gap-1 mt-1">
              {row.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 hover:text-blue-800 text-xs"
                >
                  {link.label}
                </a>
              ))}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export function OutreachEntry({ entry }: OutreachEntryProps) {
  return (
    <div className="text-sm text-zinc-700 leading-relaxed space-y-2">
      <div className="font-semibold text-zinc-800">{entry.title}</div>
      <div className="italic text-zinc-500">{entry.period}</div>
      {entry.description && <p>{entry.description}</p>}
      {entry.appearances && entry.appearances.length > 0 && (
        <div className="pt-3 space-y-2">
          {entry.appearancesHeading && (
            <h3 className="text-sm font-semibold text-zinc-800">{entry.appearancesHeading}</h3>
          )}
          <AppearanceTable
            rows={entry.appearances}
            columns={
              entry.appearanceColumns ?? { date: "日付", place: "場所・媒体", record: "記録" }
            }
          />
        </div>
      )}
      {entry.links && entry.links.length > 0 && (
        <div className="space-y-4 pt-4">
          {entry.otherLinksHeading && (
            <h3 className="text-sm font-semibold text-zinc-800">{entry.otherLinksHeading}</h3>
          )}
          {entry.links.map((link, index) => (
            <div key={index} className="space-y-1">
              <p>
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
              {(() => {
                const embed = getNoteEmbedUrl(link.url);
                if (!embed) return null;
                return (
                  <>
                    <iframe
                      className="note-embed"
                      src={embed}
                      style={{
                        border: "0",
                        display: "block",
                        maxWidth: "99%",
                        width: "494px",
                        padding: "0px",
                        margin: "10px 0px",
                        position: "static",
                        visibility: "visible",
                      }}
                      height="400"
                    />
                    <script
                      async
                      src="https://note.com/scripts/embed.js"
                      charSet="utf-8"
                    ></script>
                  </>
                );
              })()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
