const modules = import.meta.glob("../articles/**/*.ts");

const loadArticles = async (): Promise<{ [key: string]: any }> => {
  const articles: { [key: string]: any } = {};

  for (const path in modules) {
    const mod = await modules[path](); // Wait for dynamic import
    if (mod && typeof mod === "object" && "default" in mod) {
      const formattedPath = path.replace("../articles/", "").replace(".ts", "");
      articles[formattedPath] = mod.default;
    }
  }

  return articles;
};

export default loadArticles;
