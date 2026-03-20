import { SkillsTable } from "../general/SkillsTable";

export function Skills(){

    const skills: string[] = ["React", "TypeScript", "Java", "Spring", "HTML", "CSS", "Python", "Pandas", "AWS", "SQL", "PostgreSQL", "Codex CLI", "Git", "GitHub"];

    return(
        <section
            id="skills"
            aria-labelledby="skills-title"
            className="w-full flex flex-col items-center bg-[var(--surface)] justify-center px-8 py-16"
        >
            <h2 id="skills-title" className="pb-4">Habilidades</h2>
            <SkillsTable values={skills}/>
        </section>
    );
}
