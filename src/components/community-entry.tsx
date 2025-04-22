interface CommunityEntryProps {
    title: string;
    subtitle?: string;
    details?: string[];
    links?: { label: string; url: string }[];
}
  
export function CommunityEntry({ title, subtitle, details = [], links = [] }: CommunityEntryProps) {
    return (
      <section className="space-y-2 mb-6">
        <div className="space-y-1">
          <div className="font-semibold text-zinc-800 text-sm">{title}</div>
          {subtitle && <p className="italic text-sm text-zinc-600">{subtitle}</p>}
        </div>
        <div className="mt-2 space-y-1">
          {details.map((d, i) => (
            <p key={i} className="text-sm text-zinc-700">
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
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="text-sm font-semibold text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    );
}