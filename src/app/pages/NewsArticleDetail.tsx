import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Landmark, Shield, ShieldAlert } from "lucide-react";
import {
  getArticleById,
  type NewsArticle,
  type NewsCategory,
} from "../lib/newsEngine";

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

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function toParagraphs(content: string): string[] {
  return content
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40)
    .slice(0, 12);
}

export function NewsArticleDetail() {
  const { id = "" } = useParams();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getArticleById(id).then((data) => {
      if (!cancelled) {
        setArticle(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return <section className="min-h-screen bg-slate-950 pt-32 text-center text-slate-400">Loading article...</section>;
  }

  if (!article) {
    return (
      <section className="min-h-screen bg-slate-950 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-white">Article not found</h1>
          <p className="mt-4 text-slate-300">The article link may be outdated.</p>
          <Link to="/news" className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Top News
          </Link>
        </div>
      </section>
    );
  }

  const Icon = categoryIcon[article.category];
  const paragraphs = toParagraphs(article.content);

  return (
    <section className="min-h-screen bg-slate-950 pt-28 pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <Link to="/news" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Top News
        </Link>

        <article className="mt-6 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
          <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] border rounded-full px-3 py-1 bg-white/95 ${categoryAccent[article.category]}`}>
                <Icon className="w-3.5 h-3.5" />
                {article.category}
              </span>
              <h1 className="mt-3 text-2xl sm:text-4xl font-bold text-white leading-tight">{article.title}</h1>
              <p className="mt-2 text-white/85 text-sm sm:text-base">{article.source} · {formatDate(article.publishedAt)}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900">Summary</h2>
            <div className="mt-4 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              {paragraphs.length > 0 ? paragraphs.map((p) => <p key={p}>{p}</p>) : <p>{article.content}</p>}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Key Takeaways</h3>
              <ul className="mt-4 space-y-3">
                {article.keyTakeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={article.sourceUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors"
              >
                Open Original Article
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
