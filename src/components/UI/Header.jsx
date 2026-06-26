export function H2({ children, className = "" }) {
  return (
    <h2
      className={`font-serif text-center sm:text-left text-3xl font-bold text-slate-950 md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }) {
  return (
    <h3 className={`text-xl font-bold text-slate-950 ${className}`}>
      {children}
    </h3>
  );
}
