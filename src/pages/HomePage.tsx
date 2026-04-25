import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { articles } from "../lib/data";
import { cn } from "../lib/utils";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";

export default function HomePage() {
  const featured = articles.find(a => a.isDiary);
  const latest = articles.filter(a => !a.isDiary).slice(0, 4);

  return (
    <div className="space-y-4 sm:space-y-8">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 sm:pt-16 pb-6">
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl lg:text-6xl leading-[1.1] text-text mb-4"
          >
            Living well <br className="hidden sm:block" /> <span className="italic font-light text-primary">with less.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg leading-relaxed max-w-md opacity-80 mx-auto lg:mx-0"
          >
            A gentle daily read for mindful spending, smart saving, 
            and intentional lifestyle choices in Malaysia.
          </motion.p>
        </div>

        {/* Featured Diary - replacing old section to be inline with hero right column */}
        {featured && (
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <Link to={`/diaries/${featured.slug}`} className="group block relative">
              <div className="w-full h-64 bg-highlight rounded-[40px] rotate-2 absolute -z-10 opacity-30 transition-transform group-hover:rotate-3"></div>
              <div className="w-full h-64 bg-accent rounded-[40px] -rotate-1 absolute -z-10 opacity-30 transition-transform group-hover:-rotate-2"></div>
              <div className="w-full h-64 bg-white/80 backdrop-blur-sm rounded-[40px] border border-primary/30 flex flex-col justify-center px-8 sm:px-10 relative overflow-hidden transition-colors group-hover:bg-white/90">
                <span className="text-primary text-xs font-bold uppercase tracking-tighter mb-2">Featured Story</span>
                <h2 className="font-serif text-2xl sm:text-3xl mb-4 group-hover:text-primary transition-colors line-clamp-2">{featured.title}</h2>
                <p className="text-sm italic opacity-70 mb-4 line-clamp-2">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="px-3 py-1 bg-background border border-secondary rounded-full">Expense Diary</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        )}
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 pb-10">
        {/* Latest Articles */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary border-b border-secondary/20 pb-2 flex justify-between">
            <span>Latest Reflections</span>
            <span className="font-normal lowercase italic text-text/60">Updated today</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {latest.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Simple Tip */}
          <div className="p-6 bg-accent/20 border border-accent rounded-[32px] relative mt-4">
            <span className="absolute -top-3 left-6 bg-accent text-text px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full">DAILY TIP</span>
            <p className="font-serif text-lg leading-relaxed mix-blend-multiply">
              "Wait 72 hours before hitting 'buy' on anything over RM50. The urge usually fades, leaving room for what matters."
            </p>
          </div>

          {/* Low Cost Entertainment Sidebar (Casino Integration) */}
          <div className="p-6 bg-secondary/10 border border-secondary/20 rounded-[32px]">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-text/80">Low-Cost Fun</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                <p className="text-sm text-text/80">Having fun doesn't mean breaking the bank. Explore local parks or free galleries.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                <p className="text-sm text-text/80">Date night under RM50: The local mamak crawl.</p>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white/50 rounded-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-0.5">SPONSORED</p>
                  <p className="text-sm text-text/80">Responsible gaming entertainment with <span className="underline decoration-secondary/30 underline-offset-2 font-medium">Platinum Casino</span>.</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: any }) {
  return (
    <Link to={`/article/${article.slug}`} className="block h-full group">
      <div className="p-6 bg-white/50 rounded-3xl border border-primary/10 h-full flex flex-col group-hover:shadow-sm transition-all group-hover:bg-white/70">
        <div className="w-full h-32 bg-primary/5 rounded-2xl mb-4 flex items-center justify-center">
          <div className="w-12 h-1 bg-primary/70 rounded-full group-hover:scale-110 transition-transform"></div>
        </div>
        <h4 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
        <p className="text-sm opacity-70 mb-4 flex-1 line-clamp-2">{article.excerpt}</p>
        <span className="text-xs text-primary font-bold uppercase tracking-wider">{article.category}</span>
      </div>
    </Link>
  );
}
