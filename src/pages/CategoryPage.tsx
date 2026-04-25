import { useParams, Link } from "react-router-dom";
import { articles } from "../lib/data";
import { motion } from "motion/react";

export default function CategoryPage() {
  const { category } = useParams();
  
  const filteredArticles = category 
    ? articles.filter(a => a.category === category)
    : articles;

  const titleMap: Record<string, { title: string, subtitle: string }> = {
    spending: { title: "Spending Stories", subtitle: "Real reflections on where the money goes." },
    savings: { title: "Smart Savings", subtitle: "Gentle ways to keep more of what you earn." },
    lifestyle: { title: "Mindful Lifestyle", subtitle: "Living intentionally, simply, and beautifully." },
    budget: { title: "Budget Guides", subtitle: "Tools and tips to map your financial path." },
  };

  const currentCategory = category && titleMap[category] ? titleMap[category] : { title: "Latest Stories", subtitle: "Read our newest thoughtful pieces." };

  return (
    <div className="py-8">
      <header className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-serif mb-4 capitalize text-text"
        >
          {currentCategory.title}
        </motion.h1>
        <p className="text-text/70 text-lg">
          {currentCategory.subtitle}
        </p>
      </header>

      {filteredArticles.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={article.isDiary ? `/diaries/${article.slug}` : `/article/${article.slug}`} className="block h-full group">
                <div className="p-6 bg-white/50 rounded-3xl border border-primary/10 h-full flex flex-col group-hover:shadow-sm transition-all group-hover:bg-white/70">
                  <div className="w-full h-32 bg-primary/5 rounded-2xl mb-4 flex items-center justify-center">
                    <div className="w-12 h-1 bg-primary/70 rounded-full group-hover:scale-110 transition-transform"></div>
                  </div>
                  <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm opacity-70 mb-4 flex-1 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">{article.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-text/50">
          <p>No stories found in this category yet. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
