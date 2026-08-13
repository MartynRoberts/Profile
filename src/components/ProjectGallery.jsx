import { useEffect, useState } from "react";

function ArrowIcon({ direction }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-5 w-5 ${direction === "next" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m12.5 4-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectGallery({ media, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeItem = media[activeIndex];
  const hasMultipleItems = media.length > 1;

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(motionPreference.matches);

    updatePreference();
    motionPreference.addEventListener("change", updatePreference);
    return () => motionPreference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxOpen]);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + media.length) % media.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % media.length);
  }

  return (
    <div className="min-w-0 lg:w-[46%] lg:shrink-0 xl:w-[48%]">
      <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
        <div className="flex h-7 items-center gap-1.5 border-b border-slate-200 bg-white px-3" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>

        <div
          className="group relative aspect-[36/25] cursor-zoom-in overflow-hidden bg-slate-950 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:brightness-90"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex="0"
          aria-label={`Enlarge ${activeItem.caption || title}`}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setLightboxOpen(true);
            }
          }}
        >
          {activeItem.type === "video" ? (
            <video
              key={activeItem.src}
              className="h-full w-full object-contain"
              src={activeItem.src}
              poster={activeItem.poster}
              autoPlay={!reduceMotion}
              controls={reduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={activeItem.alt}
            />
          ) : (
            <img
              key={activeItem.src}
              src={activeItem.src}
              alt={activeItem.alt}
              className="h-full w-full object-contain"
            />
          )}

          {hasMultipleItems && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label={`Show previous ${title} media`}
                className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-950/75 text-white shadow transition hover:bg-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
              >
                <ArrowIcon direction="previous" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label={`Show next ${title} media`}
                className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-950/75 text-white shadow transition hover:bg-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
              >
                <ArrowIcon direction="next" />
              </button>
            </>
          )}
        </div>

        {activeItem.caption && (
          <figcaption className="bg-white px-3 py-2 text-sm text-slate-600">
            {activeItem.caption}
          </figcaption>
        )}
      </figure>

      {hasMultipleItems && (
        <div className="mt-3 flex snap-x gap-2 overflow-x-auto pb-2" aria-label={`${title} media gallery`}>
          {media.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.caption || `${title} media ${index + 1}`}`}
              aria-pressed={index === activeIndex}
              className={`relative w-24 shrink-0 snap-start overflow-hidden rounded-lg border-2 bg-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:translate-y-0 active:scale-[0.97] ${
                index === activeIndex ? "border-blue-500" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={item.type === "video" ? item.poster : item.src}
                alt=""
                className="aspect-video w-full object-cover"
              />
              {item.type === "video" && (
                <span className="absolute inset-0 grid place-items-center bg-slate-950/25 text-lg text-white" aria-hidden="true">
                  ▶
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} media viewer`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 active:bg-white/20"
            aria-label="Close enlarged media"
          >
            ×
          </button>

          <figure
            className="flex max-h-full w-full max-w-7xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              {activeItem.type === "video" ? (
                <video
                  key={`large-${activeItem.src}`}
                  className="max-h-[82vh] max-w-full object-contain"
                  src={activeItem.src}
                  poster={activeItem.poster}
                  autoPlay={!reduceMotion}
                  controls
                  muted
                  loop
                  playsInline
                  aria-label={activeItem.alt}
                />
              ) : (
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[82vh] max-w-full object-contain"
                />
              )}

              {hasMultipleItems && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label={`Show previous ${title} media`}
                    className="absolute left-1 grid h-11 w-11 place-items-center rounded-full bg-slate-950/80 text-white shadow transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 sm:left-4"
                  >
                    <ArrowIcon direction="previous" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label={`Show next ${title} media`}
                    className="absolute right-1 grid h-11 w-11 place-items-center rounded-full bg-slate-950/80 text-white shadow transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 sm:right-4"
                  >
                    <ArrowIcon direction="next" />
                  </button>
                </>
              )}
            </div>
            {activeItem.caption && (
              <figcaption className="mt-3 text-center text-sm text-white sm:text-base">
                {activeItem.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </div>
  );
}
