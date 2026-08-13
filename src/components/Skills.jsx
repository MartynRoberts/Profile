import logoMap from "../data/technologyLogos";
import { H2, H3 } from "./UI/Header";
import Section from "./UI/Section";

const skillGroups = [
  {
    title: "Front-end",
    skills: {
      React: "react.svg",
      "Next.js": "nextjs.svg",
      TypeScript: "typescript.svg",
      JavaScript: "javascript.svg",
      "Tailwind CSS": "tailwind.svg",
      SASS: "sass.svg",
      CSS: "css.svg",
      HTML: "html.svg",
    },
  },
  {
    title: "Backend",
    skills: {
      "Node.js": "nodejs.svg",
      Express: "express.svg",
      PostgreSQL: "postgresql.svg",
      Prisma: "prisma.svg",
    },
  },
  {
    title: "Tools",
    skills: {
      "VS Code": "vscode.svg",
      Git: "git.svg",
      GitHub: "github.svg",
      Postman: "postman.svg",
      NPM: "npm.svg",
      Docker: "docker.svg",
    },
  },
  {
    title: "Testing",
    skills: {
      Jest: "jest.svg",
      "React Testing Library": "react-testing-library.svg",
    },
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="mb-12">
        <H2 className="mb-12">Skills</H2>

        <p className="text-lg leading-8 text-slate-600">
          A practical mix of front-end technologies, development tools, testing
          experience and backend fundamentals used to build clean, responsive
          and maintainable web experiences.
        </p>
      </div>

      <div className="grid sm:gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="relative border-b border-slate-200 py-6 transition sm:rounded-xl sm:border sm:p-6"
          >
            <H3 className="mb-5">{group.title}</H3>

            <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
              {Object.entries(group.skills).map(([skill, logo]) => (
                <li
                  key={skill}
                  className="flex min-w-0 flex-col items-center text-center text-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <img
                      src={logoMap[logo]}
                      alt={`${skill} logo`}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="mt-2 w-full text-sm font-light leading-tight">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
