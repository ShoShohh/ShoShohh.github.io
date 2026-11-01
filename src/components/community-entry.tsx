"use client";

import type { CastGuestItem } from "@/data/cast-guest-list";
import type { ConferenceReviewItem } from "@/data/conference-review-list";
import type { PodcastReviewItem } from "@/data/podcast-review-list";

function getNoteEmbedUrl(url: string): string | null {
  const match = url.match(/note\.com\/.*\/n\/(n[a-zA-Z0-9]+)/);
  return match ? `https://note.com/embed/notes/${match[1]}` : null;
}

/** SNS行をパースし、URLは表示せずラベル（X, LinkedIn, HP等）だけをクリック可能なリンクにする */
function snsLineToLinks(line: string) {
  const urlRegex = /https?:\/\/\S+/g;
  const urls = line.match(urlRegex);
  if (!urls?.length) return <>{line}</>;
  const beforeFirst = line.slice(0, line.indexOf(urls[0]));
  let label = beforeFirst.replace(/\s*[:：]\s*$/, "").trim();
  if (label.length > 30) label = (label.split(/[:：]/)[0] || label).trim();
  if (!label) label = "Link";
  return (
    <>
      {urls.map((url, i) => (
        <span key={i}>
          {i > 0 && " "}
          <a
            href={url}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        </span>
      ))}
    </>
  );
}

interface CommunityEntryProps {
    title: string;
    subtitle?: string;
    details?: string[];
    links?: { label: string; url: string }[];
    articleLinks?: { label: string; url: string; date?: string }[];
    articleLinksHeading?: string;
    studyGroupLinks?: { label: string; url: string }[];
    castListTitle?: string;
    castList?: CastGuestItem[];
    castListNote?: string;
    conferenceReviewListTitle?: string;
    conferenceReviewList?: ConferenceReviewItem[];
    conferenceReviewListNote?: string;
    podcastReviewListTitle?: string;
    podcastReviewList?: PodcastReviewItem[];
    podcastReviewListNote?: string;
}
  
export function CommunityEntry({ title, subtitle, details = [], links = [], studyGroupLinks = [], articleLinks = [], articleLinksHeading, castListTitle, castList = [], castListNote, conferenceReviewListTitle, conferenceReviewList = [], conferenceReviewListNote, podcastReviewListTitle, podcastReviewList = [], podcastReviewListNote }: CommunityEntryProps) {
    const isDSLCommunity = title.includes("Data Science LG");

    const renderDetailParagraph = (d: string, key: number) => (
      <p key={key} className="text-sm text-zinc-700">
        {d.split(/(https?:\/\/\S+)/g).map((part, idx) =>
          part.match(/^https?:\/\//) ? (
            <a key={idx} href={part} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          ) : (
            part
          )
        )}
      </p>
    );

    const renderLinkGrid = (items: { label: string; url: string }[], className = "mt-2 columns-1 sm:columns-2 md:columns-3 gap-4") => (
      <div className={className}>
        {items.map((link, i) => (
          <div key={i} className="break-inside-avoid text-sm mb-1">
            <a
              href={link.url}
              className="font-semibold text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    );

    return (
      <section className="space-y-2 mb-6">
        <div className="space-y-1">
          <div className="font-semibold text-zinc-800 text-sm">{title}</div>
          {subtitle && <p className="italic text-sm text-zinc-600">{subtitle}</p>}
        </div>
        <div className="mt-2 space-y-1">
          {isDSLCommunity && details.length > 0 ? (
            <>
              {renderDetailParagraph(details[0], 0)}
              {studyGroupLinks.length > 0 && renderLinkGrid(studyGroupLinks, "mt-2 columns-2 gap-4 max-w-md")}
              {details.slice(1).map((d, i) => renderDetailParagraph(d, i + 1))}
            </>
          ) : (
            details.map((d, i) => renderDetailParagraph(d, i))
          )}
        </div>
        {/* Links */}
        {title === "Tsukuba Graduate Students' Network" ? (
          /* Simple vertical list (2 links only) */
          <div className="mt-2 space-y-1">
            {links.map((link, i) => (
              <div key={i} className="text-sm">
                <a
                  href={link.url}
                  className="font-semibold text-blue-600 underline hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        ) : (
          renderLinkGrid(links)
        )}
        {/* Apple Podcast Embed */}
        {isDSLCommunity && (
          <div className="mt-4">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="300"
              style={{ width: "100%", maxWidth: "500px", overflow: "hidden", borderRadius: "10px" }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.podcasts.apple.com/jp/podcast/data-science-lg-%E5%AD%A6%E3%81%B3%E5%90%88%E3%81%86%E7%B5%B1%E8%A8%88%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9/id1784394537"
            ></iframe>
          </div>
        )}
        {/* Cast / Guest List (Nospare Student Community) - in-page, responsive */}
        {isDSLCommunity && castListTitle && castList.length > 0 && (
          <div id="cast-guest-list" className="mt-8 scroll-mt-4">
            <h3 className="text-sm font-semibold text-zinc-800 mb-3">{castListTitle}</h3>
            {castListNote && (
              <p className="text-xs text-zinc-500 whitespace-pre-line mb-3 leading-snug">{castListNote}</p>
            )}
            {/* Desktop: scrollable table */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-zinc-200">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700">名前</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700">所属</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700">SNSなど</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700 min-w-[4rem]">エピソード</th>
                  </tr>
                </thead>
                <tbody>
                  {castList.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50">
                      <td className="py-2.5 px-3 font-medium text-zinc-800 align-top whitespace-nowrap">{row.name}</td>
                      <td className="py-2.5 px-3 text-zinc-600 align-top whitespace-pre-line">{row.affiliation}</td>
                      <td className="py-2.5 px-3 text-zinc-600 align-top text-xs">
                        <span className="flex flex-col gap-0.5">
                          {row.sns.split("\n").map((line, j) => (
                            <span key={j}>{snsLineToLinks(line)}</span>
                          ))}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 align-top min-w-[4rem]">
                        {row.episodeLink ? (
                          <a href={row.episodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="Episode">🔗</a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile: cards */}
            <div className="md:hidden space-y-3">
              {castList.map((row, i) => (
                <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50/30 p-3 text-sm">
                  <div className="font-medium text-zinc-800 mb-1">{row.name}</div>
                  <div className="text-zinc-600 text-xs whitespace-pre-line mb-2">{row.affiliation}</div>
                  <div className="text-zinc-600 text-xs mb-1 break-words space-y-0.5">
                    {row.sns.split("\n").map((line, j) => (
                      <span key={j} className="block">{snsLineToLinks(line)}</span>
                    ))}
                  </div>
                  {row.episodeLink && (
                    <a href={row.episodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs" title="Episode">🔗</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Conference Review List (学会などの振り返り回) - in-page with note, episode & note links */}
        {isDSLCommunity && conferenceReviewListTitle && conferenceReviewList.length > 0 && (
          <div id="conference-review-list" className="mt-8 scroll-mt-4">
            <h3 className="text-sm font-semibold text-zinc-800 mb-3">{conferenceReviewListTitle}</h3>
            {conferenceReviewListNote && (
              <p className="text-xs text-zinc-500 whitespace-pre-line mb-3 leading-snug">
                {conferenceReviewListNote.replace(/\n\n+/g, "\n")}
              </p>
            )}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-zinc-200">
              <table className="w-full min-w-[400px] text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700">名前</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700 min-w-[6rem]">日付</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700 min-w-[4rem]">エピソード</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700 min-w-[4rem]">note</th>
                  </tr>
                </thead>
                <tbody>
                  {conferenceReviewList.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50">
                      <td className="py-2.5 px-3 text-zinc-800 align-top">{row.name}</td>
                      <td className="py-2.5 px-3 text-zinc-600 align-top whitespace-nowrap">{row.date}</td>
                      <td className="py-2.5 px-3 align-top min-w-[4rem]">
                        {row.episodeLink ? (
                          <a href={row.episodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="Episode">🔗</a>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="py-2.5 px-3 align-top min-w-[4rem]">
                        {row.noteLink ? (
                          <a href={row.noteLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="note">🔗</a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-3">
              {conferenceReviewList.map((row, i) => (
                <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50/30 p-3 text-sm">
                  <div className="font-medium text-zinc-800">{row.name}</div>
                  <div className="text-zinc-600 text-xs mt-1">{row.date}</div>
                  <div className="flex gap-3 mt-2 text-xs">
                    {row.episodeLink && (
                      <a href={row.episodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="Episode">🔗 エピソード</a>
                    )}
                    {row.noteLink && (
                      <a href={row.noteLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="note">🔗 note</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Podcast Review List (Podcastの振り返り回) - same structure as conference review */}
        {isDSLCommunity && podcastReviewListTitle && podcastReviewList.length > 0 && (
          <div id="podcast-review-list" className="mt-8 scroll-mt-4">
            <h3 className="text-sm font-semibold text-zinc-800 mb-3">{podcastReviewListTitle}</h3>
            {podcastReviewListNote && (
              <p className="text-xs text-zinc-500 whitespace-pre-line mb-3 leading-snug">
                {podcastReviewListNote.replace(/\n\n+/g, "\n")}
              </p>
            )}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-zinc-200">
              <table className="w-full min-w-[400px] text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700">名前</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700 min-w-[6rem]">日付</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700 min-w-[4rem]">エピソード</th>
                    <th className="text-left py-2.5 px-3 font-medium text-zinc-700 min-w-[4rem]">note</th>
                  </tr>
                </thead>
                <tbody>
                  {podcastReviewList.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50">
                      <td className="py-2.5 px-3 text-zinc-800 align-top">{row.name}</td>
                      <td className="py-2.5 px-3 text-zinc-600 align-top whitespace-nowrap">{row.date}</td>
                      <td className="py-2.5 px-3 align-top min-w-[4rem]">
                        {row.episodeLink ? (
                          <a href={row.episodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="Episode">🔗</a>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="py-2.5 px-3 align-top min-w-[4rem]">
                        {row.noteLink ? (
                          <a href={row.noteLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="note">🔗</a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-3">
              {podcastReviewList.map((row, i) => (
                <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50/30 p-3 text-sm">
                  <div className="font-medium text-zinc-800">{row.name}</div>
                  <div className="text-zinc-600 text-xs mt-1">{row.date}</div>
                  <div className="flex gap-3 mt-2 text-xs">
                    {row.episodeLink && (
                      <a href={row.episodeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="Episode">🔗 エピソード</a>
                    )}
                    {row.noteLink && (
                      <a href={row.noteLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" title="note">🔗 note</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Article links with note embed (Nospare) — below Podcast review section */}
        {isDSLCommunity && articleLinks.length > 0 && (
          <div className="mt-8 space-y-4 scroll-mt-4" id="community-note-articles">
            {articleLinksHeading && (
              <h3 className="text-sm font-semibold text-zinc-800">{articleLinksHeading}</h3>
            )}
            {articleLinks.map((link, index) => {
              const embed = getNoteEmbedUrl(link.url);
              return (
                <div key={index} className="space-y-1">
                  <p>
                    {link.date && (
                      <span className="italic text-zinc-500 text-sm">({link.date}) </span>
                    )}
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline text-blue-600 font-semibold"
                    >
                      {link.label}
                    </a>
                  </p>
                  {embed && (
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
                  )}
                </div>
              );
            })}
          </div>
        )}
        {/* Spotify Embed for Tsukuba Graduate Students' Network */}
        {title === "Tsukuba Graduate Students' Network" && (
          <div className="mt-4">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/show/592AguffFk9eJ1Og1OVCzW?utm_source=generator"
              width="80%"
              height="200"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        )}
      </section>
    );
}