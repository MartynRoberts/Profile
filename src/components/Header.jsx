export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
    >
      <div className="flex min-w-0 flex-col items-center justify-between px-3 py-3 md:flex-row md:px-6 md:py-5">
        <h1 className="text-center font-serif text-xl font-bold leading-tight text-slate-900 md:text-left md:text-2xl">
          MartynRoberts.dev
        </h1>

        <nav className="w-full min-w-0 md:w-auto" aria-label="Main navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-4 text-sm font-medium text-slate-900 md:flex-nowrap md:gap-6 md:pt-0 md:text-base lg:gap-8">
            <li>
              <a className="hover:underline underline-offset-4" href="#about">
                About
              </a>
            </li>
            <li>
              <a
                className="hover:underline underline-offset-4"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:underline underline-offset-4"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
