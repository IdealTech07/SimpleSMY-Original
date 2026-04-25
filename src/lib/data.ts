export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "spending" | "savings" | "lifestyle" | "budget";
  date: string;
  readTime: string;
  imageUrl?: string;
  isDiary?: boolean;
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "kl-grocery-hacks",
    title: "How I Cut My KL Grocery Bill in Half",
    excerpt: "Switching from chain supermarkets to the local pasar pagi and meal planning around seasonal local produce changed everything.",
    category: "savings",
    date: "Oct 12, 2023",
    readTime: "4 min read",
  },
  {
    id: "2",
    slug: "budget-date-nights",
    title: "Date Nights Under RM50 in the City",
    excerpt: "You don't need a fancy omakase to connect. From free gallery walks to low-cost entertainment options like a small fun budget for online games or simply a picnic at Titiwangsa.",
    category: "lifestyle",
    date: "Oct 10, 2023",
    readTime: "5 min read",
  },
  {
    id: "3",
    slug: "october-expense-diary",
    title: "Expense Diary: A Marketing Executive Earning RM4,500",
    excerpt: "A transparent look into where my money went this month, including rent in PJ, a surprise car repair, and mindful coffee spending.",
    category: "spending",
    date: "Oct 01, 2023",
    readTime: "8 min read",
    isDiary: true,
  },
  {
    id: "4",
    slug: "decluttering-wardrobe",
    title: "Finding Joy in a Smaller Wardrobe",
    excerpt: "Why I stopped buying fast fashion online and how capsule dressing gave me more peace of mind every morning.",
    category: "lifestyle",
    date: "Sep 28, 2023",
    readTime: "6 min read",
  },
  {
    id: "5",
    slug: "utility-budget-guide",
    title: "Our Simple System to Reduce Utility Bills",
    excerpt: "Practical steps to cut down electricity and water wastage in a typical Malaysian apartment without feeling deprived of comfort.",
    category: "budget",
    date: "Sep 15, 2023",
    readTime: "3 min read",
  }
];
