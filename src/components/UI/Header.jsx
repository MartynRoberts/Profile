export function H2({ children, className = "" }) {
  return (
    <h2
      className={`font-serif text-center sm:text-left text-3xl font-light text-theme md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }) {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
}
