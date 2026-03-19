interface SkillsTableProps {
  values: string[];
}

export function SkillsTable({ values }: SkillsTableProps) {
  return (
    <ul className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:bg-[var(--background)] rounded-xl">
      {values.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="p-2 flex justify-center bg-[var(--background)] md:bg-[var(--surface)] rounded-xl"
        >
          <span className="text-xl">{item}</span>
        </li>
      ))}
    </ul>
  );
}
