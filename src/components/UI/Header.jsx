export function H2({ children, className = "" }) {
  return (
    <h2
      className={` text-center sm:text-left text-3xl font-bold tracking-tight text-slate-950 md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}
