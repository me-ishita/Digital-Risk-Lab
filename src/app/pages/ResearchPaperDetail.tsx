import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Landmark, ShieldCheck } from "lucide-react";
import {
  getResearchPaperById,
  type ResearchDomain,
  type ResearchPaper,
} from "../lib/researchEngine";

const domainIcon: Record<ResearchDomain, typeof Landmark> = {
  "Investment Banking": Landmark,
  "Digital Risk": ShieldCheck,
};

const domainAccent: Record<ResearchDomain, string> = {
  "Investment Banking": "text-orange-700 bg-orange-50 border-orange-200",
  "Digital Risk": "text-blue-700 bg-blue-50 border-blue-200",
};

function toParagraphs(content: string): string[] {
  return content
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40)
    .slice(0, 12);
}

export function ResearchPaperDetail() {
  const { id = "" } = useParams();
  const [paper, setPaper] = useState<ResearchPaper | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getResearchPaperById(id).then((data) => {
      if (!cancelled) {
        setPaper(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return <section className="min-h-screen bg-slate-950 pt-32 text-center text-slate-400">Loading research...</section>;
  }

  if (!paper) {
    return (
      <section className="min-h-screen bg-slate-950 pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-white">Research paper not found</h1>
          <p className="mt-4 text-slate-300">The research link may be outdated.</p>
          <Link to="/research" className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Top Research
          </Link>
        </div>
      </section>
    );
  }

  const Icon = domainIcon[paper.domain];
  const paragraphs = toParagraphs(paper.summary);

  return (
    <section className="min-h-screen bg-slate-950 pt-28 pb-16 sm:pb-20 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <Link to="/research" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Top Research
        </Link>

        <article className="mt-6 bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
          <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
            <img src={paper.image} alt={paper.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] border rounded-full px-3 py-1 bg-white/95 ${domainAccent[paper.domain]}`}>
                <Icon className="w-3.5 h-3.5" />
                {paper.domain}
              </span>
              <h1 className="mt-3 text-2xl sm:text-4xl font-bold text-white leading-tight">{paper.title}</h1>
              <p className="mt-2 text-white/85 text-sm sm:text-base">
                {paper.authors.join(", ")} · {paper.affiliation} · {paper.venue} ({paper.year})
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900">Summary</h2>
            <div className="mt-4 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              {paragraphs.length > 0 ? paragraphs.map((p) => <p key={p}>{p}</p>) : <p>{paper.summary}</p>}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Key Findings</h3>
              <ul className="mt-4 space-y-3">
                {paper.keyFindings.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={paper.sourceUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                Open Original Research
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
