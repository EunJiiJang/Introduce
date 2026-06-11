import { experiences } from '@/app/data/experiences';

export function Experience() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {experiences.map((experience) => (
        <article
          key={experience.id}
          className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-6 flex flex-col justify-between aspect-square"
        >
          <p className="text-xs uppercase tracking-wider text-gray-400">
            {experience.period}
          </p>
          <div>
            <p className="text-sm text-gray-500">{experience.role}</p>
            <p className="font-semibold text-gray-900">{experience.company}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
