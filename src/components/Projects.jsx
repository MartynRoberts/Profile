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
    <Section id="projects">
      <div className="mx-auto max-w-6xl">
        <H2 className="mb-12">Projects</H2>

        <ul className="relative space-y-6">
          {projects.map((project) => (
            <li
              key={`${project.title}`}
              className="relative rounded-2xl border border-slate-200 p-6 transition"
            >
              <div className="flex gap-5">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  className="w-90 h-60 mr-8"
                />

                <div>
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
                  <ul className="mt-6 space-y-2">
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
                      className="text-blue-500 hover:underline mt-4 block"
                    >
                      {project.repo}
                    </a>
                  )}
                  {project.technologies && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-sm rounded-full px-4 py-2 text-md border"
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
