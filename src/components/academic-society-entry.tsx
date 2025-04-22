import React from "react";
import type { AcademicSociety } from "@/data/academic-society";

interface Props {
  society: AcademicSociety;
}

export const AcademicSocietyEntry = ({ society }: Props) => {
  return (
    <div className="text-sm text-zinc-700 leading-relaxed">
      <p className="font-semibold">
        <a
          href={society.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800"
        >
          {society.name}
        </a>
      </p>
      <p className="italic text-zinc-500 text-sm">{society.date}</p>
    </div>
  );
};