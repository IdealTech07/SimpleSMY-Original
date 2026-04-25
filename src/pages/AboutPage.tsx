import { Leaf } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 sm:py-20 text-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex justify-center items-center w-20 h-20 bg-secondary/10 rounded-full mb-8 text-secondary"
      >
        <Leaf className="w-10 h-10" />
      </motion.div>
      
      <h1 className="text-4xl sm:text-5xl font-serif mb-8 text-text">About Simple Sense</h1>
      
      <div className="prose prose-lg prose-p:text-text/80 mx-auto text-left space-y-6">
        <p>
          Hello, and welcome to a quiet corner of the internet. I started Simple Sense MY as a personal diary to document my journey towards a more intentional life in busy Kuala Lumpur.
        </p>
        <p>
          In a world constantly shouting at us to buy more, do more, and be more, this space is a gentle reminder that sometimes, less is actually more. A smaller wardrobe can mean less morning stress. A simpler meal can bring more joy. A tighter budget can lead to incredible creativity and unexpected freedom.
        </p>
        <p>
          Our philosophy is built on mindful spending. It's not about extreme frugality or depriving yourself of joy. It's about auditing your life, removing the excess, and making room for what truly mattersâwhether that's an emergency fund, a weekend staycation, or simply the peace of mind that comes from knowing you have enough.
        </p>
        
        <div className="bg-surface p-8 rounded-3xl border border-primary/10 my-12 text-center">
          <p className="font-quote text-2xl text-primary mb-4">
            "Spend less. Live more."
          </p>
          <p className="text-sm font-medium text-text/60">It sounds simple, but it takes courage to practice.</p>
        </div>

        <p>
          Thank you for being here. I hope the stories and tips shared here bring a sense of calm to your finances and your daily life.
        </p>
        <p>
          With warmth,<br/>
          <span className="font-serif italic text-lg mt-2 inline-block">The Simple Sense Writer</span>
        </p>
      </div>
    </div>
  );
}
