"use client";

import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2">{news.date}</p>
        {news.title && (
          <h3 className="font-serif text-md mb-3">
            {news.link ? (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
              >
                {news.title}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            ) : (
              news.title
            )}
          </h3>
        )}
        {news.description && (
          <p className="text-sm text-zinc-600 mb-3">{news.description}</p>
        )}
        {news.updates && news.updates.length > 0 && (
          <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600">
            {news.updates.map((update, index) => (
              <li key={index}>
                {update.sectionId ? (
                  <button
                    type="button"
                    onClick={() => scrollToSection(update.sectionId!)}
                    className="underline text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {update.sectionLabel}
                  </button>
                ) : (
                  <span className="font-medium text-zinc-700">{update.sectionLabel}</span>
                )}
                {" — "}
                {update.detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
