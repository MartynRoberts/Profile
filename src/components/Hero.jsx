import { trackEvent } from "../utils/analytics";

export default function Hero() {
  return (
    <section className="px-6 py-16 text-slate-900 sm:py-20 lg:py-28">
      <div className="max-w-4xl">
        <p className="mb-4 font-serif text-sm font-medium uppercase tracking-[0.18em] text-theme sm:text-base">
          Front-End Developer
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Building accessible, data-rich React applications.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          I create responsive, maintainable web experiences that turn complex
          requirements and data into clear, intuitive interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-theme px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-theme-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-dark active:scale-[0.98] active:bg-theme-dark active:text-white"
          >
            View featured project
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] active:bg-slate-100"
          >
            Contact me
          </a>
          <a
            href="/martyn-roberts-cv.pdf"
            download="Martyn Roberts CV.pdf"
            onClick={() => trackEvent("CV Downloaded", { location: "Hero" })}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] active:bg-slate-100"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path
                d="M10 3v10m0 0 4-4m-4 4L6 9M4 17h12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
