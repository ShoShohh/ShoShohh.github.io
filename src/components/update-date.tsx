import { cvUpdateDate } from "@/data/cv-update-date";
import { cvUpdateDate as cvUpdateDateJa } from "@/data-ja/cv-update-date";

interface UpdateDateProps {
  isJapanese?: boolean;
}

export function UpdateDate({ isJapanese = false }: UpdateDateProps) {
  const currentDate = new Date();
  const hpFormattedDate = currentDate.toLocaleDateString(
    isJapanese ? 'ja-JP' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  const cvDate = isJapanese ? cvUpdateDateJa : cvUpdateDate;

  return (
    <div className="text-center text-xs text-zinc-500 mt-8 pt-4 border-t border-zinc-200 space-y-1">
      <div>
        {isJapanese ? `HP 最終更新日: ${hpFormattedDate}` : `HP Last updated: ${hpFormattedDate}`}
      </div>
      <div>
        {isJapanese ? `CV 最終更新日: ${cvDate}` : `CV Last updated: ${cvDate}`}
      </div>
    </div>
  );
}
