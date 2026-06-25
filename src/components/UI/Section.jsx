export default function Section({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-12 md:py-16 xl:py-20 text-slate-800 ${className}`}
    >
      {children}
    </section>
  );
}
