import { Portfolio } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

interface PortfolioEntryProps {
  portfolio: Portfolio;
  isJapanese?: boolean;
}

export function PortfolioEntry({ portfolio, isJapanese = false }: PortfolioEntryProps) {
  return (
    <div>
      <h3 className="font-serif text-md mb-3">
        <a
          href={portfolio.codeUrl || portfolio.projectUrl}
          className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
        >
          {portfolio.title}
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
          />
        </a>
      </h3>

      <div className="flex gap-2 mb-4 flex-wrap">
        {portfolio.technologies && portfolio.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <p className="text-sm text-zinc-600 mb-4 italic">
        {portfolio.description}
      </p>

      {portfolio.updatedDate && (
        <div className="text-zinc-500 text-xs mt-1">
          {isJapanese ? '更新日: ' : 'Updated on '}{portfolio.updatedDate}
        </div>
      )}

      <div className="border-t border-zinc-200 dark:border-zinc-700 my-2"></div>
    </div>
  );
}
