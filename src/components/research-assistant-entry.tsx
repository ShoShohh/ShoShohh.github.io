import React from "react";

export interface ResearchAssistant {
  organization: string;
  period: string;
}

interface ResearchAssistantEntryProps {
  ra: ResearchAssistant;
}

export function ResearchAssistantEntry({ ra }: ResearchAssistantEntryProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-zinc-900 font-medium">{ra.organization}</p>
      <p className="text-sm text-zinc-500 italic">{ra.period}</p>
    </div>
  );
}
