const logos = import.meta.glob(
  "../assets/brand_logos/*.{jpg,jpeg,png,webp,svg}",
  {
    eager: true,
    import: "default",
  },
);

export default Object.fromEntries(
  Object.entries(logos).map(([path, url]) => [path.split("/").pop(), url]),
);
