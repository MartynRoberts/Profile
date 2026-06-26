export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5">
        <h1 className="font-serif text-2xl font-bold leading-tight text-slate-900 text-center sm:text-left">
          Martyn Roberts
          <span className="font-sans-serif block text-sm font-medium tracking-wide text-slate-500">
            Frontend Developer
          </span>
        </h1>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 sm:gap-8 text-m font-medium text-slate-900 pt-6 sm:pt-0">
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
            {/* 
            <li>
              <a
                className="hover:underline underline-offset-4"
                href="#projects"
              >
                Projects
              </a>
            </li>
            */}
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
