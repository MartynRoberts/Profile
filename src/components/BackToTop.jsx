import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 600);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function returnToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={returnToTop}
      aria-label="Return to top"
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-theme text-white shadow-lg transition duration-200 hover:bg-theme-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-dark active:scale-95 active:bg-theme-dark active:text-white sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="m5 12 5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
