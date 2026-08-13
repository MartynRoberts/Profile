import { H2 } from "./UI/Header";
import Section from "./UI/Section";

const projects = [
  {
    thumbnail: "thumbnail_td.jpg",
    title: "Transfer Dashboard",
    link: "https://football-transfer-dashboard.vercel.app/",
    repo: "https://github.com/MartynRoberts/football-transfer-dashboard",
    details: [
      "Built a responsive football analytics platform covering transfers, clubs, squads and players across Europe's top five leagues.",
      "Developed transfer analysis features including club spending, transfer-value ratings, best- and worst-value deals, and most-expensive transfer rankings.",
      "Created player analytics covering appearances, goals, assists, injuries, market-value history and percentile comparisons.",
      "Implemented club-level squad composition, availability, discipline, injury and contract-expiry insights.",
      "Designed a PostgreSQL and Prisma data model with a staged import pipeline powered by the Transfermarkt API.",
      "Built responsive data tables that transform into accessible, labelled cards on smaller devices.",
      "Deployed the application to Vercel with server-rendered and statically generated Next.js routes.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Recharts",
      "shadcn/ui",
      "Docker",
      "Vercel",
    ],
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="px-3 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <H2 className="mb-8 sm:mb-12">Projects</H2>

        <ul className="relative space-y-6">
          {projects.map((project) => (
            <li
              key={project.title}
              className="relative overflow-hidden rounded-xl border border-slate-200 p-3 transition sm:rounded-2xl sm:p-6"
            >
              <div className="flex min-w-0 flex-col gap-4 sm:gap-6 lg:flex-row lg:gap-8">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  className="h-auto w-full self-start rounded-xl lg:w-90 lg:shrink-0"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mt-4 block"
                    >
                      View Project
                    </a>
                  )}
                  <ul className="mt-5 space-y-2 pl-5 sm:mt-6">
                    {project.details.map((detail, index) => (
                      <li
                        key={index}
                        className="text-md text-slate-600 list-disc"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block break-all text-blue-500 hover:underline"
                    >
                      View source on GitHub
                    </a>
                  )}
                  {project.technologies && (
                    <div className="mt-5 sm:mt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="rounded-full border px-3 py-1.5 text-sm sm:px-4 sm:py-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
