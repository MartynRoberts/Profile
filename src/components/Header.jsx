import { useEffect, useState } from "react";

const navigation = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header
      id="header"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
    >
      <div className="flex min-w-0 items-center justify-between gap-4 px-6 py-3 lg:py-5">
        <h1 className="min-w-0 truncate font-serif text-xl font-light leading-tight lg:text-2xl">
          MartynRoberts.dev
        </h1>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-slate-300 text-slate-900 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme lg:hidden"
          aria-label={
            menuOpen ? "Close main navigation" : "Open main navigation"
          }
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8 text-base font-light text-slate-900">
            {navigation.map(([label, href]) => (
              <li key={href}>
                <a className="underline-offset-4 hover:underline" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 px-3 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid grid-cols-2 gap-1 text-base font-medium text-slate-900 sm:grid-cols-3">
            {navigation.map(([label, href]) => (
              <li key={href}>
                <a
                  className="block rounded-lg px-3 py-3 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-theme"
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
