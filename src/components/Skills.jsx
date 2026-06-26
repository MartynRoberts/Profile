import logoMap from "../data/technologyLogos";
import { H2, H3 } from "./UI/Header";
import Section from "./UI/Section";

const skillGroups = [
  {
    title: "Frontend",
    skills: {
      HTML: "html.svg",
      CSS: "css.svg",
      SASS: "sass.svg",
      "Tailwind CSS": "tailwind.svg",
      JavaScript: "javascript.svg",
      React: "react.svg",
      "Next.js": "nextjs.svg",
    },
  },
  {
    title: "Backend",
    skills: {
      "Node.js": "nodejs.svg",
      Express: "express.svg",
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
          A practical mix of frontend technologies, development tools, testing
          experience and backend fundamentals used to build clean, responsive
          and maintainable web experiences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="relative rounded-2xl border border-slate-200 p-6 transition"
          >
            <H3 className="mb-5">{group.title}</H3>

            <ul className="flex flex-wrap gap-10">
              {Object.entries(group.skills).map(([skill, logo]) => (
                <li
                  key={skill}
                  className="rounded-full text-sm font-semibold flex flex-col items-center"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <img
                      src={logoMap[logo]}
                      alt={`${skill} logo`}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-lg font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
