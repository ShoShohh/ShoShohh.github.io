import { Speech } from "@/data/speech";

interface Props {
  speech: Speech;
}

export function SpeechEntry({ speech }: Props) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-zinc-900 font-medium">
        <strong>{speech.authors}</strong>, “{speech.title}”,{" "}
        <em>{speech.event}</em>, {speech.location}, {speech.type}, {speech.date}.
      </p>
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