import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Landmark, Newspaper, Shield, ShieldAlert } from "lucide-react";
import { fetchArticles, type NewsArticle, type NewsCategory } from "../lib/newsEngine";

const REFRESH_INTERVAL_MS = 2 * 60 * 60 * 1000;

const categoryIcon: Record<NewsCategory, typeof Landmark> = {
  "Investment Banking": Landmark,
  "Digital Risk": Shield,
  "Cyber Risk": ShieldAlert,
};

const categoryAccent: Record<NewsCategory, string> = {
  "Investment Banking": "text-orange-700 bg-orange-50 border-orange-200",
  "Digital Risk": "text-blue-700 bg-blue-50 border-blue-200",
  "Cyber Risk": "text-rose-700 bg-rose-50 border-rose-200",
};

const categoryImagePool: Record<NewsCategory, string[]> = {
  "Investment Banking": [
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
  ],
  "Digital Risk": [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=900&auto=format&fit=crop",
  ],
  "Cyber Risk": [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=900&auto=format&fit=crop",
  ],
};

function normalizeImage(url: string): string {
  return url.split("?")[0].toLowerCase();
}

function assignUniqueNewsImages(items: NewsArticle[]): NewsArticle[] {
  const used = new Set<string>();
  const categoryCursor: Record<NewsCategory, number> = {
    "Investment Banking": 0,
    "Digital Risk": 0,
    "Cyber Risk": 0,
  };

  return items.map((article, idx) => {
    const pick = (candidate: string) => {
      const key = normalizeImage(candidate);
      if (!used.has(key)) {
        used.add(key);
        return candidate;
      }
      return null;
    };

    const direct = pick(article.image);
    if (direct) {
      return article;
    }

    const pool = categoryImagePool[article.category];
    for (let i = 0; i < pool.length; i += 1) {
      const pointer = (categoryCursor[article.category] + i) % pool.length;
      const fallback = pick(pool[pointer]);
      if (fallback) {
        categoryCursor[article.category] = pointer + 1;
        return { ...article, image: fallback };
      }
    }

    return {
      ...article,
      image: `${pool[idx % pool.length]}&sig=${encodeURIComponent(article.id)}`,
    };
  });
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: number | null = null;
    let cancelled = false;

    const load = async () => {
      const data = await fetchArticles();
      if (!cancelled) {
        setArticles(assignUniqueNewsImages(data.slice(0, 9)));
        setLoading(false);
      }
    };

    load();
    timer = window.setInterval(load, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-background pt-32 pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6">


        {loading ? (
          <div className="text-center text-slate-400 py-20">Loading top news...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-7">
            {articles.map((article) => {
              const Icon = categoryIcon[article.category];
              return (
                <div
                  onClick={() => navigate(`/news/${encodeURIComponent(article.id)}`)}
                  className="group block rounded-3xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] border rounded-full px-2.5 py-1 bg-white/95 ${categoryAccent[article.category]}`}
                      >
                        <Icon className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                        {article.source}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h2 className="text-lg font-bold text-foreground leading-snug line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-foreground/70 text-sm leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span className="text-orange-600 group-hover:text-orange-700">Read Summary</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
