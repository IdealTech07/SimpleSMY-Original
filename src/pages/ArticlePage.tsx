import { useParams, Link } from "react-router-dom";
import { articles } from "../lib/data";
import { ArrowLeft, UserCircle2, Clock, Leaf } from "lucide-react";

export default function ArticlePage({ isDiary = false }: { isDiary?: boolean }) {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug) || articles[0]; // Fallback to first if not found

  return (
    <article className="max-w-3xl mx-auto py-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-sm font-medium text-text/50 hover:text-primary transition-colors mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back home
      </Link>

      <header className="mb-12 text-center md:text-left">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
          <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold tracking-wider uppercase">
            {article.category}
          </span>
          <div className="flex items-center gap-2 text-text/50 text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-8">
          {article.title}
        </h1>
        
        <div className="flex items-center justify-center md:justify-start gap-4 pt-6 border-t border-primary/10">
          <UserCircle2 className="w-10 h-10 text-primary/40" />
          <div className="text-left">
            <p className="text-sm font-bold text-text">Simple Sense Writer</p>
            <p className="text-xs text-text/50">{article.date}</p>
          </div>
        </div>
      </header>

      {/* Hero "Illustration" Placeholder */}
      <div className="w-full aspect-[21/9] bg-gradient-to-br from-surface to-primary/10 rounded-3xl mb-16 flex items-center justify-center">
        <span className="font-serif text-primary/30 text-lg">Gentle illustration space</span>
      </div>

      <div className="prose prose-lg prose-p:text-text/80 prose-headings:font-serif prose-headings:text-text max-w-none space-y-6 text-lg leading-relaxed">
        <p className="font-medium text-xl text-text">
          {article.excerpt}
        </p>
        <p>
          When I first started looking at my expenses, I was overwhelmed. The numbers seemed to flow out faster than they came in, and I couldn't figure out where the leaks were. It wasn't until I sat down with a quiet cup of tea and a notebook that things began to make sense.
        </p>
        <p>
          We often buy things to soothe an immediate discomfort, confusing a quick dopamine hit with actual well-being. By slowing down the purchasing process, we allow ourselves space to feel whatever it is we are trying to avoid.
        </p>

        {isDiary && (
          <div className="bg-surface border border-secondary/20 rounded-3xl p-8 my-10 shadow-sm">
            <h3 className="font-serif text-2xl mb-6 text-secondary">Breakdown</h3>
            <ul className="space-y-4 font-numbers text-lg">
              <li className="flex justify-between border-b border-secondary/10 pb-2">
                <span className="font-sans text-base">Housing & Utilities</span>
                <span>RM 1,250</span>
              </li>
              <li className="flex justify-between border-b border-secondary/10 pb-2">
                <span className="font-sans text-base">Groceries & Food</span>
                <span>RM 680</span>
              </li>
              <li className="flex justify-between border-b border-secondary/10 pb-2">
                <span className="font-sans text-base">Transport</span>
                <span>RM 300</span>
              </li>
              <li className="flex justify-between border-b border-secondary/10 pb-2">
                <span className="font-sans text-base">Entertainment (Inc. low-cost dates)</span>
                <span>RM 120</span>
              </li>
              <li className="flex justify-between font-bold pt-2 text-primary">
                <span className="font-sans text-base">Total Spent</span>
                <span>RM 2,350</span>
              </li>
            </ul>
          </div>
        )}

        <p>
          The beauty of a budget isn't in restricting yourself, but in giving yourself permission to spend on what truly matters. If your joy comes from weekly coffee dates with a friend, budget for it. Cut mercilessly in areas that bring you no joy so you can spend lavishly on the few that do.
        </p>

        <div className="py-8 my-12 border-y border-primary/20 flex flex-col items-center text-center">
          <p className="font-quote text-3xl text-primary leading-tight mb-4">
            "We buy things we don't need, with money we don't have, to impress people we don't like."
          </p>
        </div>

        <p>
          In moving forward, I challenge you to a "no-spend" weekend. Pack a lunch, visit a free park, and simply exist. You might find that the best things in life truly are free.
        </p>
      </div>

      <div className="my-16 flex items-center justify-center relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-b-[2px] border-dashed border-primary/20"></div>
        <div className="relative bg-background px-4">
          <Leaf className="w-5 h-5 text-primary/30" />
        </div>
      </div>

      {/* Mock comment section */}
      <section>
        <h3 className="font-serif text-2xl mb-8">Thoughts & Reflections</h3>
        <div className="bg-surface rounded-2xl p-6 border border-primary/10 mb-8">
          <textarea 
            placeholder="Share your thoughts gently..."
            className="w-full bg-transparent border-none focus:ring-0 resize-none text-text placeholder:text-text/30"
            rows={3}
          />
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-full font-medium text-sm">
              Post Comment
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
