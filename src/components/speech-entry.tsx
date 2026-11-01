import { Speech } from "@/data/speech";

interface Props {
  speech: Speech;
}

export function SpeechEntry({ speech }: Props) {
  const highlightedAuthors = speech.authors.replace(
    "Sho Sakai",
    "<strong>Sho Sakai</strong>"
  );

  return (
    <div className="space-y-1">
      <p
        className="text-sm text-zinc-900 font-medium"
        dangerouslySetInnerHTML={{
          __html: `${highlightedAuthors}, “${speech.title}”, <em>${speech.event}</em>, ${speech.location}, ${speech.type}, ${speech.date}.`,
        }}
      />
      {speech.link && (
        <a
          href={speech.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 font-semibold underline"
        >
          View Program
        </a>
      )}
    </div>
  );
}