

import React from "react";
import type { Keyword } from "@/data/keyword";

interface Props {
  keyword: Keyword;
}

export function KeywordEntry({ keyword }: Props) {
  return (
    <span className="inline-block bg-zinc-100 text-zinc-700 text-sm px-3 py-1 rounded-full mr-2 mb-2">
      {keyword.label}
    </span>
  );
}