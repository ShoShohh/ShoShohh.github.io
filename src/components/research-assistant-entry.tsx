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
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{ra.period}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-sm text-zinc-700 font-semibold leading-relaxed">
          {ra.organization}
        </h3>
      </div>
    </div>
  );
}
