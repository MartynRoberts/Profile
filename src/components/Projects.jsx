import { H2 } from "./UI/Header";
import Section from "./UI/Section";
import ProjectGallery from "./ProjectGallery";
import { useEffect, useRef } from "react";
import { trackEvent } from "../utils/analytics";

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        d="M11 4h5v5M16 4l-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

const projects = [
  {
    media: [
      {
        type: "image",
        src: "/projects/transfer-dashboard/leagues.png",
        alt: "Transfer Dashboard leagues page showing Europe's top five leagues and spending rankings",
        caption:
          "Compare football club finances, squads, injuries and discipline",
      },
      {
        type: "video",
        src: "/projects/transfer-dashboard/analytics-demo.webm",
        poster: "/projects/transfer-dashboard/overview.png",
        alt: "Transfer Dashboard navigating between overview, club spending, transfer value and record fee analytics",
        caption: "Explore interactive transfer and spending analytics",
      },
      {
        type: "image",
        src: "/projects/transfer-dashboard/arsenal.png",
        alt: "Arsenal club dashboard showing squad statistics, net spend and incoming transfers",
        caption: "Detailed club spending and squad insights",
      },
      {
        type: "video",
        src: "/projects/transfer-dashboard/mobile-demo.webm",
        poster: "/projects/transfer-dashboard/mobile-demo-poster.png",
        alt: "Transfer Dashboard mobile navigation and responsive league analytics demonstration",
        caption: "Responsive navigation and analytics on mobile",
      },
    ],
    title: "Transfer Dashboard",
    link: "https://football-transfer-dashboard.vercel.app/",
    repo: "https://github.com/MartynRoberts/football-transfer-dashboard",
    caseStudy:
      "https://github.com/MartynRoberts/football-transfer-dashboard#readme",
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
  const sectionRef = useRef(null);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTrackedView.current) {
          hasTrackedView.current = true;
          trackEvent("Projects Section Viewed");
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="projects" className="px-3 sm:px-6" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <H2 className="mb-8 sm:mb-12">Projects</H2>

        <ul className="relative sm:space-y-6">
          {projects.map((project) => (
            <li
              key={project.title}
              className="relative overflow-hidden border-b border-slate-200 py-6 transition sm:rounded-xl sm:border sm:p-6"
            >
              <div className="flex min-w-0 flex-col gap-4 sm:gap-6 lg:flex-row lg:gap-8">
                <ProjectGallery media={project.media} title={project.title} />

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("Live Project Visited", {
                          project: project.title,
                        })
                      }
                      className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] active:bg-slate-900"
                    >
                      View live project
                      <ExternalLinkIcon />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] active:bg-slate-100"
                    >
                      <GitHubIcon />
                      View source
                    </a>
                  </div>
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
