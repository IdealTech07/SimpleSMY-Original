import { Link, Outlet } from "react-router-dom";
import { motion } from "motion/react";
import { Leaf } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-text relative bg-background overflow-x-hidden">
      {/* Subtle paper noise overlay */}
      <div 
        className="pointer-events-none fixed py-10 inset-0 opacity-[0.03] z-50 mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
      ></div>

      <header className="sticky top-0 z-40 bg-background border-b border-secondary/20">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-10 py-4 sm:py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background font-serif italic text-lg"
            >
              S
            </motion.div>
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text">
              SIMPLE SENSE <span className="font-normal italic">MY</span>
            </span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
              <NavLink to="/category/spending">Spending</NavLink>
              <NavLink to="/category/savings">Savings</NavLink>
              <NavLink to="/category/lifestyle">Lifestyle</NavLink>
              <NavLink to="/category/budget">Budget</NavLink>
            </div>
            <Link to="/about" className="hidden sm:block md:hidden text-sm font-medium uppercase tracking-widest hover:text-secondary transition-colors">About</Link>
            <button className="px-5 py-2 bg-secondary text-white rounded-full text-sm font-medium shadow-sm hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-[1024px] w-full mx-auto pb-10">
        <Outlet />
      </main>

      <footer className="px-4 sm:px-10 py-4 border-t border-secondary/10 flex flex-col sm:flex-row justify-between items-center bg-white/30 gap-4">
        <span className="text-[10px] uppercase tracking-widest opacity-40 italic text-center sm:text-left">Simple Sense — Spend less. Live more. Malaysia.</span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[10px] uppercase tracking-widest opacity-40 items-center">
          <Link to="#" className="hover:text-text transition-colors">Privacy</Link>
          <span className="hidden sm:inline">•</span>
          <span>Sponsored: Platinum Casino — play responsibly</span>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-text hover:text-secondary transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all group-hover:w-full" />
    </Link>
  );
}
