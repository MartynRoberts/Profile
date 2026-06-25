import logoMap from "../data/brandLogos";
import { H2 } from "./UI/Header";
import Section from "./UI/Section";

const roles = [
  {
    logo: "logo_jd.jpg",
    title: "Senior Front End Developer",
    company: "JD Outdoor",
    dates: "Jul 2023 - 2026",
    duration: "3 yrs",
    location: "Bury (hybrid)",
    details: [
      "Created a new front-end architecture for the department's e-commerce websites, including a shared template library and asset collection.",
      "Expanded the number of brands using the shared template library to 7 outdoor websites (GO Outdoors, Blacks, Millets, Ultimate Outdoors, Brasher, Eurohike and Peter Storm).",
      "Worked on the development of an in-store kiosk application to enable the stores to sell a wider range of products.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Smarty"],
  },
  {
    logo: "logo_blacks.jpg",
    title: "Front End Web Developer",
    company: "Blacks Outdoor Retail Limited",
    dates: "Aug 2015 - Sep 2024",
    duration: "9 yrs 2 mos",
    location: "Bury (hybrid)",
    details: [
      "Took over as the front-end developer for the Blacks e-commerce team in addition to my role with Ultimate Outdoors (both within the JD Outdoor department).",
      "Began working with an internal marketing team to create engaging content for the company's digital properties.",
      "Worked alongside the Conversion Manager to optimize user journeys and improve conversion rates (Monetate).",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Smarty"],
  },
  {
    logo: "logo_ultimate_outdoors.jpg",
    title: "Front End Web Developer",
    company: "Ultimate Outdoors",
    dates: "Oct 2014 - Sep 2024",
    duration: "10 yrs",
    location: "Bury (hybrid)",
    details: [
      "Developed and maintained the company's e-commerce website on the Aurora platform.",
      "Designed and built landing pages and marketing emails.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Smarty"],
  },
  {
    logo: "logo_bank.png",
    title: "Front End Web Developer",
    company: "BANK Fashion",
    dates: "Nov 2013 - Oct 2014",
    duration: "1 yr",
    location: "Bury",
    details: [
      "Produced responsive landing pages for the BANK Fashion retail website.",
      "Worked alongside a graphic design team to create visually appealing web content.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    logo: "logo_web_designer.png",
    title: "Web Designer & Developer",
    company: "Self-employed",
    dates: "Jul 2011 - Nov 2013",
    duration: "2 yrs 5 mos",
    location: "Ramsbottom",
    details: [
      "Provided web design and development services to various clients both directly and alongside a graphic designer.",
      "Developed websites for a number of small businesses both in the UK and New Zealand.",
    ],
    technologies: [
      "Wordpress",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "MySQL",
    ],
  },
  {
    logo: "logo_xsortal.jpg",
    title: "Web Content Editor",
    company: "Xsortal Ltd",
    dates: "Feb 2008 - Jul 2011",
    duration: "3 yrs 6 mos",
    location: "Manchester",
    details: [
      "Worked for a small startup in a team that was manually scraping data to produce a directory of data aimed at UK businesses.",
    ],
  },
  {
    logo: "logo_itv.jpg",
    title: "Data Administrator",
    company: "ITV",
    dates: "Dec 2005 - Feb 2008",
    duration: "2 yrs 3 mos",
    location: "Manchester",
    details: [
      "Primarily respsonsible for maintaining digital records of media produced by the creative team.",
      "A secondary role of scheduling interstitial segments between the ads and the kids programs.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-6xl">
        <H2 className="mb-12">Experience</H2>

        <ul className="relative space-y-6">
          {roles.map((role) => (
            <li
              key={`${role.company}-${role.dates}`}
              className="relative rounded-2xl border border-slate-200 p-6 transition"
            >
              <div className="flex gap-5">
                <img
                  src={logoMap[role.logo]}
                  alt={`${role.company} logo`}
                  className="h-12 w-12 rounded-full"
                />

                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {role.title}
                  </h3>
                  <p className="text-slate-700 text-lg">
                    {role.company}
                    {role.location && (
                      <span className="text-slate-500"> · {role.location}</span>
                    )}
                  </p>
                  <p className="mt-6 text-md font-medium">
                    {role.dates} · {role.duration}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {role.details.map((detail, index) => (
                      <li
                        key={index}
                        className="text-md text-slate-600 list-disc"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {role.technologies && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {role.technologies.map((tech, index) => (
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
