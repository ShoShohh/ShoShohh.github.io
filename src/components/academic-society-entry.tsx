import React from "react";
import type { AcademicSociety } from "@/data/academic-society";

interface Props {
  society: AcademicSociety;
}

export const AcademicSocietyEntry = ({ society }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{society.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-sm text-zinc-700 font-semibold leading-relaxed">
          <a
            href={society.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {society.name}
          </a>
        </h3>
      </div>
    </div>
  );
};
