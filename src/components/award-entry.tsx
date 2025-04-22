import { Award } from "@/data/award";

interface AwardEntryProps {
  award: Award;
}

export function AwardEntry({ award }: AwardEntryProps) {
  return (
    <div>
      <p className="text-zinc-800 text-sm font-medium">
        {award.url ? (
          <a
            href={award.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            <span className="font-semibold">{award.title}（{award.organization}）</span>
          </a>
        ) : (
          <span className="font-semibold">
            {award.title}（{award.organization}）
          </span>
        )}
      </p>
      <p className="italic text-sm text-zinc-600">{award.date}</p>
    </div>
  );
}