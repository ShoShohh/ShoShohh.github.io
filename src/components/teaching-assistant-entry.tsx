"use client";

import { TeachingAssistant } from "@/data/teaching-assistant";

interface TeachingAssistantEntryProps {
  assistant: TeachingAssistant;
}

export function TeachingAssistantEntry({ assistant }: TeachingAssistantEntryProps) {
  return (
    <div className="space-y-1">
      <div className="text-sm font-medium text-zinc-800">{assistant.title}</div>
      <div className="text-sm italic text-zinc-500">{assistant.term}</div>
    </div>
  );
}