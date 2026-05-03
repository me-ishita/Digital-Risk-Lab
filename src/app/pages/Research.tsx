import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileSearch, Landmark, ShieldCheck } from "lucide-react";
import {
  fetchResearchPapers,
  type ResearchDomain,
  type ResearchPaper,
} from "../lib/researchEngine";

const REFRESH_INTERVAL_MS = 2 * 60 * 60 * 1000;

const domainIcon: Record<ResearchDomain, typeof Landmark> = {
  "Investment Banking": Landmark,
  "Digital Risk": ShieldCheck,
};

const domainAccent: Record<ResearchDomain, string> = {
  "Investment Banking": "text-orange-700 bg-orange-50 border-orange-200",
  "Digital Risk": "text-blue-700 bg-blue-50 border-blue-200",
};

const domainImagePool: Record<ResearchDomain, string[]> = {
  "Investment Banking": [
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
  ],
  "Digital Risk": [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
  ],
};

function normalizeImage(url: string): string {
  return url.split("?")[0].toLowerCase();
}

function assignUniqueResearchImages(items: ResearchPaper[]): ResearchPaper[] {
  const used = new Set<string>();
  const domainCursor: Record<ResearchDomain, number> = {
    "Investment Banking": 0,
    "Digital Risk": 0,
  };

  return items.map((paper, idx) => {
    const pick = (candidate: string) => {
      const key = normalizeImage(candidate);
      if (!used.has(key)) {
        used.add(key);
        return candidate;
      }
      return null;
    };

    const direct = pick(paper.image);
    if (direct) {
      return paper;
    }

    const pool = domainImagePool[paper.domain];
    for (let i = 0; i < pool.length; i += 1) {
      const pointer = (domainCursor[paper.domain] + i) % pool.length;
      const fallback = pick(pool[pointer]);
      if (fallback) {
        domainCursor[paper.domain] = pointer + 1;
        return { ...paper, image: fallback };
      }
    }

    return {
      ...paper,
      image: `${pool[idx % pool.length]}&sig=${encodeURIComponent(paper.id)}`,
    };
  });
}

export function Research() {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer: number | null = null;
    let cancelled = false;

    const load = async () => {
      const data = await fetchResearchPapers();
      if (!cancelled) {
        setPapers(assignUniqueResearchImages(data.slice(0, 9)));
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
          <div className="text-center text-slate-400 py-20">Loading top research...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-7">
            {papers.map((paper) => {
              const Icon = domainIcon[paper.domain];
              return (
                <Link
                  key={paper.id}
                  to={`/research/${encodeURIComponent(paper.id)}`}
                  className="group block rounded-3xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] border rounded-full px-2.5 py-1 bg-white/95 ${domainAccent[paper.domain]}`}
                      >
                        <Icon className="w-3 h-3" />
                        {paper.domain}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                        {paper.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h2 className="text-lg font-bold text-foreground leading-snug line-clamp-2">
                      {paper.title}
                    </h2>
                    <p className="mt-2 text-xs text-slate-500 font-medium line-clamp-1">
                      {paper.authors.join(", ")}
                    </p>
                    <p className="mt-3 text-foreground/70 text-sm leading-relaxed line-clamp-3">
                      {paper.summary}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>{paper.venue}</span>
                      <span className="text-blue-600 group-hover:text-blue-700">Read Summary</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
