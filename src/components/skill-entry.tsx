import { Skill } from "@/data/skill";

interface SkillEntryProps {
  skill: Skill;
}

export function SkillEntry({ skill }: SkillEntryProps) {
  return (
    <div>
      <p className="text-sm text-zinc-700">
        {skill.url ? (
          <>
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
            >
              {skill.label}
            </a>
          </>
        ) : (
          <>
            <strong>{skill.label}</strong>
            {skill.detail && ` — ${skill.detail}`}
          </>
        )}
      </p>
    </div>
  );
}