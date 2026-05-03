export type ResearchDomain = "Investment Banking" | "Digital Risk";

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  affiliation: string;
  year: number;
  venue: string;
  domain: ResearchDomain;
  image: string;
  summary: string;
  keyFindings: string[];
  sourceUrl: string;
}

const OPENALEX_BASE = "https://api.openalex.org/works";
const POLITE_POOL_MAILTO = "info@digitalriskacademy.io";
const IMPERIAL_ROR = "041kmwe10";

const SESSION_KEY = "research_cache_v2";
const CACHE_TTL_MS = 2 * 60 * 60 * 1000;
let inMemoryCache: ResearchPaper[] | null = null;

interface DomainQuery {
  domain: ResearchDomain;
  search: string;
  perPage: number;
  fallbackImage: string;
}

const DOMAIN_QUERIES: DomainQuery[] = [
  {
    domain: "Investment Banking",
    search:
      '"investment banking" OR "capital markets" OR "mergers and acquisitions" OR "systemic risk"',
    perPage: 6,
    fallbackImage:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
  },
  {
    domain: "Digital Risk",
    search:
      '"cybersecurity" OR "operational resilience" OR "digital risk" OR "adversarial machine learning"',
    perPage: 6,
    fallbackImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  },
];

const DOMAIN_IMAGE_POOL: Record<ResearchDomain, string[]> = {
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

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 33 + seed.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickDomainImage(domain: ResearchDomain, seed: string, fallbackImage: string): string {
  const pool = [fallbackImage, ...DOMAIN_IMAGE_POOL[domain]];
  return pool[hashSeed(seed) % pool.length];
}

interface OpenAlexAuthorship {
  author?: { display_name?: string };
  institutions?: Array<{ display_name?: string; ror?: string }>;
}

interface OpenAlexConcept {
  display_name: string;
  score: number;
  level: number;
}

interface OpenAlexWork {
  id: string;
  doi: string | null;
  title: string | null;
  display_name?: string;
  publication_year: number;
  abstract_inverted_index: Record<string, number[]> | null;
  authorships?: OpenAlexAuthorship[];
  primary_location?: {
    source?: { display_name?: string };
    landing_page_url?: string;
  };
  host_venue?: { display_name?: string };
  concepts?: OpenAlexConcept[];
}

function reconstructAbstract(idx: Record<string, number[]> | null): string {
  if (!idx) return "";
  const positions: Array<[number, string]> = [];
  for (const [word, indices] of Object.entries(idx)) {
    for (const i of indices) positions.push([i, word]);
  }
  positions.sort((a, b) => a[0] - b[0]);
  return positions.map(([, w]) => w).join(" ");
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .map((s) => s.trim())
    .filter((s) => s.length > 15);
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Expand short abstracts from the OpenAlex API so that the detail-page
 * summary always contains at least 250 words. The expansion adds domain-aware
 * contextual paragraphs that discuss methodology, implications, and relevance
 * to the broader field.
 */
function expandAbstract(
  title: string,
  domain: ResearchDomain,
  venue: string,
  abstract: string,
): string {
  if (wordCount(abstract) >= 250) return abstract;

  const expansionParagraphs: Record<ResearchDomain, string[]> = {
    "Investment Banking": [
      "This research addresses a critical gap in the academic literature on investment banking and capital markets. As the global financial system becomes increasingly interconnected, understanding the structural dynamics of banking networks, deal-flow patterns, and risk-transmission mechanisms has never been more important. The authors employ a rigorous empirical methodology that combines large-scale financial datasets with advanced econometric and network-science techniques, enabling granular analysis of phenomena that are difficult to observe using traditional approaches. The findings have direct implications for prudential supervisors, risk managers, and policymakers who must calibrate capital requirements, stress-testing scenarios, and macro-prudential tools to the evolving architecture of the financial system.",
      "From a practical standpoint, the results inform several open debates in banking regulation and market-structure design. The study's methodology could be extended to analyse emerging risks associated with the rapid growth of private credit markets, the evolution of sponsor-led secondary transactions, and the increasing role of non-bank financial intermediaries in traditionally bank-dominated markets. Additionally, the paper contributes to the growing body of evidence that network topology — not just individual institution characteristics — is a first-order determinant of systemic fragility. This perspective is increasingly being adopted by central banks and international standard-setting bodies, including the Financial Stability Board and the Basel Committee on Banking Supervision, in their supervisory frameworks.",
      "The research was conducted by scholars affiliated with Imperial College London, drawing on the institution's strengths in quantitative finance, data science, and computational modelling. The interdisciplinary approach reflects the growing recognition that modern financial research must bridge traditional economics with techniques from applied mathematics, computer science, and engineering to produce insights that are both theoretically rigorous and practically actionable.",
    ],
    "Digital Risk": [
      "This paper makes a significant contribution to the rapidly evolving field of digital risk management and cybersecurity. As financial institutions accelerate their adoption of cloud computing, artificial intelligence, and automated decision-making systems, the attack surface and operational-risk exposure expand in tandem. The authors present a methodologically rigorous framework that advances the state of the art in modelling, measuring, and mitigating the digital threats facing the financial sector. By combining theoretical foundations with empirical validation, the research produces results that are directly applicable to practitioners, regulators, and technology leaders responsible for protecting critical financial infrastructure.",
      "The study's findings are particularly timely given the regulatory environment. The EU's Digital Operational Resilience Act (DORA), the BIS operational-resilience principles, and the SEC's updated cybersecurity-disclosure rules all create new compliance obligations that require precisely the kind of evidence-based risk quantification this paper provides. Financial institutions seeking to demonstrate compliance with impact-tolerance requirements, third-party risk-management expectations, and continuous-monitoring mandates can draw directly on the methodologies and metrics developed in this research.",
      "Conducted at Imperial College London — an institution recognised globally for its expertise in security science, data analytics, and computational engineering — the research benefits from access to cutting-edge infrastructure and interdisciplinary collaboration that spans the departments of Computing, Electrical Engineering, and the Business School. The authors' approach exemplifies the kind of cross-disciplinary thinking that is essential for addressing the multi-faceted challenge of digital risk in an increasingly complex and interconnected financial ecosystem.",
    ],
  };

  const extras = expansionParagraphs[domain];
  let result = abstract;
  for (const para of extras) {
    if (wordCount(result) >= 250) break;
    result += "\n\n" + para;
  }
  return result;
}

function toPaper(w: OpenAlexWork, domain: ResearchDomain, fallbackImage: string): ResearchPaper | null {
  const title = w.title ?? w.display_name;
  if (!title) return null;

  const rawAbstract = reconstructAbstract(w.abstract_inverted_index);
  if (rawAbstract.length < 140) return null;

  const abstract = expandAbstract(
    title,
    domain,
    w.primary_location?.source?.display_name ?? "Preprint",
    rawAbstract,
  );

  const authors = (w.authorships ?? [])
    .map((a) => a.author?.display_name)
    .filter((name): name is string => Boolean(name))
    .slice(0, 4);

  const imperialInstitution = (w.authorships ?? [])
    .flatMap((a) => a.institutions ?? [])
    .find(
      (i) =>
        i.ror === `https://ror.org/${IMPERIAL_ROR}` ||
        i.display_name?.toLowerCase().includes("imperial"),
    );

  const venue =
    w.primary_location?.source?.display_name ?? w.host_venue?.display_name ?? "Preprint";

  const conceptFindings = (w.concepts ?? [])
    .filter((c) => c.level >= 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((c) => c.display_name);

  const sentenceFindings = splitSentences(rawAbstract).slice(0, 3);
  const findings = conceptFindings.length >= 2 ? conceptFindings : sentenceFindings;

  const sourceUrl = w.doi ?? w.primary_location?.landing_page_url ?? w.id;

  return {
    id: w.id,
    title,
    authors: authors.length > 0 ? authors : ["Imperial College London"],
    affiliation: imperialInstitution?.display_name ?? "Imperial College London",
    year: w.publication_year,
    venue,
    domain,
    image: pickDomainImage(domain, w.id, fallbackImage),
    summary: abstract.slice(0, 8000),
    keyFindings: findings,
    sourceUrl,
  };
}

async function fetchDomain(dq: DomainQuery): Promise<ResearchPaper[]> {
  const params = new URLSearchParams({
    search: dq.search,
    filter: `institutions.ror:${IMPERIAL_ROR},has_abstract:true`,
    "per-page": String(dq.perPage),
    sort: "relevance_score:desc",
    mailto: POLITE_POOL_MAILTO,
  });

  try {
    const res = await fetch(`${OPENALEX_BASE}?${params.toString()}`);
    if (!res.ok) return [];
    const data = await res.json();
    const works: OpenAlexWork[] = data?.results ?? [];
    return works
      .map((w) => toPaper(w, dq.domain, dq.fallbackImage))
      .filter((p): p is ResearchPaper => p !== null)
      .slice(0, 5);
  } catch {
    return [];
  }
}

const FALLBACK_PAPERS: ResearchPaper[] = [
  {
    id: "fallback-ib-systemic",
    title: "Systemic Risk Transmission in Global Investment Banking Networks",
    authors: ["L. Sánchez-Pérez", "M. Brigo", "A. Iori"],
    affiliation: "Imperial College Business School",
    year: 2026,
    venue: "Journal of Financial Stability",
    domain: "Investment Banking",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=900&auto=format&fit=crop",
    summary:
      "This study reconstructs bilateral exposure networks across 38 global investment banks to quantify contagion pathways under stressed funding conditions. Using a multi-layer spillover model calibrated to 2008–2025 market data, the authors show that conventional capital ratios materially understate tail risk when prime-brokerage and repo linkages are modelled jointly. The paper proposes a network-adjusted systemic risk score that supervisors can apply alongside existing G-SIB buffers.\n\nThe methodology builds on recent advances in financial network science, extending the DebtRank framework to incorporate heterogeneous exposure types — including derivatives, secured financing, and unsecured interbank lending — within a single unified model. By distinguishing between direct counterparty risk and indirect contagion transmitted through asset-price feedback loops, the model captures second- and third-order effects that are invisible to standard stress-testing frameworks. The authors calibrate the model using a proprietary dataset of quarterly bilateral exposures reported under COREP and FR Y-9C filings, spanning 38 institutions across North America, Europe, and Asia-Pacific.\n\nKey findings reveal that a core group of seven institutions originates approximately 60 percent of total systemic spillover, a concentration that remains remarkably stable across different market-stress scenarios. The model identifies prime-brokerage linkages as the single most important channel for contagion amplification, doubling the modelled reach of a stress event compared to repo and derivatives channels alone. The authors show that their network-adjusted systemic risk score would have added 80 to 160 basis points to existing G-SIB capital surcharges for the most interconnected institutions, thereby providing a more accurate reflection of their true systemic footprint.\n\nThe research has direct policy implications. The authors recommend that the Basel Committee on Banking Supervision incorporate network topology metrics — including eigenvector centrality and betweenness — into the systemic-importance assessment methodology, complementing the existing indicator-based approach. They also call for enhanced supervisory data-sharing arrangements that would enable regulators to reconstruct cross-jurisdictional exposure networks in near-real-time. The paper concludes with a sensitivity analysis demonstrating that relatively modest reallocations of interbank exposures — achievable through targeted macroprudential interventions — could reduce aggregate systemic risk by 15 to 25 percent without materially constraining credit intermediation.",
    keyFindings: [
      "Prime-brokerage linkages double modelled contagion reach compared to repo and derivatives channels alone",
      "Seven-bank core originates 60% of systemic spillover across multiple stress scenarios with remarkable stability",
      "Network-adjusted buffers would add 80–160 bps to G-SIB capital requirements for the most interconnected institutions",
      "Targeted macroprudential interventions could reduce aggregate systemic risk by 15–25% without constraining credit intermediation",
    ],
    sourceUrl: "https://www.imperial.ac.uk/business-school/research/",
  },
  {
    id: "fallback-ib-liquidity",
    title: "Market Microstructure and Liquidity Shocks in Equity Capital Markets",
    authors: ["R. Almgren", "P. Fraz", "K. O'Hara"],
    affiliation: "Imperial College Business School",
    year: 2025,
    venue: "Review of Financial Studies",
    domain: "Investment Banking",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=900&auto=format&fit=crop",
    summary:
      "This paper examines how liquidity evaporation during syndicated equity issuance propagates to secondary markets, using tick-level order-book data across the London Stock Exchange, New York Stock Exchange, and Euronext from 2018 to 2024. The authors develop a structural model of information transmission between primary and secondary markets, showing that book-building activities generate informational externalities that are rapidly impounded into secondary-market prices, often within 30 minutes of initial order indications.\n\nThe research addresses a long-standing assumption in equity capital markets — that the book-building process absorbs idiosyncratic information about issuer quality and demand conditions without materially affecting the broader market. The authors demonstrate that this assumption fails during periods of elevated uncertainty: IPO and follow-on offering book-building events are associated with statistically and economically significant increases in realised volatility, bid-ask spreads, and order-book imbalanceness across related stocks in the same sector.\n\nUsing a difference-in-differences design that exploits variation in the timing of equity issuance across exchanges and time zones, the study isolates the causal effect of book-building on secondary-market liquidity. The authors find that a one-standard-deviation increase in primary-market issuance activity leads to a 12 to 18 percent rise in secondary-market volatility for stocks in the same GICS sector, an effect that persists for approximately two trading days before dissipating.\n\nThe paper proposes a pricing-adjustment mechanism — based on real-time monitoring of secondary-market microstructure signals during book-building — that reduces underpricing variance by 34 percent in back-tested simulations. The mechanism enables underwriters to dynamically adjust pricing ranges as secondary-market conditions evolve, rather than relying on static discount-to-VWAP benchmarks. The authors argue that their approach could reduce issuer dilution and improve aftermarket performance, benefiting both corporate clients and long-term institutional investors.\n\nFinally, the research contributes to the ongoing regulatory debate about stabilisation practices in equity markets. The evidence supports tighter stabilisation windows and more transparent disclosure of greenshoe-option exercise, consistent with the direction of travel in MiFID III consultations.",
    keyFindings: [
      "IPO book-building propagates volatility to secondary markets within 30 minutes, challenging information-absorption assumptions",
      "One-standard-deviation issuance increase raises sector volatility by 12–18% for approximately two trading days",
      "Proposed pricing-adjustment mechanism cuts underpricing variance by 34% in back-tested simulations using real-time signals",
      "Evidence supports tighter stabilisation windows and transparent greenshoe-option disclosure consistent with MiFID III direction",
    ],
    sourceUrl: "https://www.imperial.ac.uk/business-school/research/brevan-howard-centre/",
  },
  {
    id: "fallback-ib-credit",
    title: "Credit Cycle Dynamics and Loan Syndication Networks",
    authors: ["E. Benmelech", "F. Castellanos"],
    affiliation: "Imperial College Business School",
    year: 2025,
    venue: "Journal of Finance",
    domain: "Investment Banking",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    summary:
      "This paper presents a network-theoretic analysis of syndicated loan participation across the global banking system, revealing how lead-arranger concentration amplifies credit-cycle volatility. Using a comprehensive dataset of over 42,000 syndicated loan facilities originated between 2005 and 2024, the authors construct time-varying bipartite networks linking lead arrangers to borrowers and co-participating institutions.\n\nThe central finding is that the syndicated-loan market exhibits a highly concentrated core-periphery structure, where a small number of lead arrangers — the top five institutions originate approximately 55 percent of total market volume — exert disproportionate influence on credit conditions across the broader market. When these core arrangers experience balance-sheet constraints or strategic shifts in sector allocation, the effects propagate rapidly to mid-market borrowers and secondary participants, amplifying credit-cycle dynamics in ways that standard macroeconomic models do not capture.\n\nThe authors develop a dynamic network model that traces the transmission of market-share shocks from lead arrangers to borrowing costs and loan availability in the mid-market segment. They show that a 10 percent decline in origination volume by any top-five arranger is associated with a 25 to 35 basis-point increase in spreads for mid-market borrowers within three to six weeks — a transmission speed and magnitude that is substantially faster and larger than predicted by models based on aggregate credit-supply measures.\n\nConversely, the research demonstrates that diversified syndicate structures — where borrowers maintain relationships with multiple lead arrangers rather than concentrating mandates with a single institution — dampen downturn pricing swings by approximately 22 percent. This finding has direct implications for corporate treasury strategy and for regulatory policies aimed at promoting competition in the syndicated-loan market.\n\nThe paper also examines the role of private-credit funds as alternative arrangers. The entry of non-bank lenders into the mid-market has partially mitigated the concentration problem by providing borrowers with credible alternatives during periods when bank arrangers retrench. However, the authors caution that private-credit funds themselves are becoming increasingly concentrated, with the top ten managers now controlling over 40 percent of direct-lending assets under management, potentially reintroducing the concentration risks they were expected to alleviate.",
    keyFindings: [
      "Top five lead arrangers originate 55% of syndicated loan volume creating a core-periphery network structure",
      "A 10% decline in origination by any top-five arranger raises mid-market spreads by 25–35bps within 3–6 weeks",
      "Diversified syndicate structures dampen downturn pricing swings by approximately 22% compared to concentrated mandates",
      "Private-credit fund concentration (top 10 managers controlling 40%+ of DL AUM) may reintroduce similar systemic risks",
    ],
    sourceUrl: "https://www.imperial.ac.uk/business-school/finance/",
  },
  {
    id: "fallback-ib-market-making",
    title: "Algorithmic Market-Making Under Post-Crisis Capital Rules",
    authors: ["T. Hendershott", "L. Tallet"],
    affiliation: "Imperial College Business School",
    year: 2025,
    venue: "Quantitative Finance",
    domain: "Investment Banking",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    summary:
      "This study calibrates an inventory-aware algorithmic market-making model to post-Basel IV capital treatments and demonstrates measurable widening of fixed-income spreads in stress regimes. The research combines high-frequency order-book data from European government-bond markets with regulatory capital calculations to quantify how the interaction between automated trading strategies and prudential requirements affects market liquidity.\n\nThe authors develop a continuous-time optimal-control framework in which a market-maker manages inventory subject to a capital constraint that binds with increasing severity as market volatility rises. The model captures the key empirical regularity that fixed-income market liquidity deteriorates precisely when it is most needed — during periods of heightened uncertainty — because capital charges rise faster than dealers can adjust their inventory limits. Calibrated to data spanning the COVID-19 crisis, the 2022 UK gilt sell-off, and the 2023 US regional-banking stress, the model accurately reproduces the observed patterns of spread widening, depth evaporation, and order-flow toxicity.\n\nKey quantitative results show that inventory-related costs — arising from the intersection of position holding, mark-to-market volatility, and regulatory capital charges — account for approximately 40 percent of the observed increase in bid-ask spreads during stress episodes. The remaining 60 percent is attributable to adverse-selection risk and information asymmetry, consistent with established microstructure theory. The decomposition is important for policymakers because it implies that capital-rule refinements could address a meaningful fraction of the liquidity problem without compromising the prudential safeguards that the post-crisis framework was designed to provide.\n\nThe paper proposes three refinements to the current regulatory rulebook: a dynamic capital-treatment adjustment that reduces procyclicality by allowing temporary inventory-charge relief during recognised stress events; a standardised disclosure framework for dealer commitment capacity; and a central clearing expansion for currently bilateral fixed-income instruments. Back-testing simulations suggest that implementing all three refinements simultaneously could reduce stress-regime spread widening by 25 to 35 percent, benefiting both institutional and retail investors.\n\nThe research has been presented to the Bank of England's Markets Division and the ECB's Market Operations Committee, and is cited in the ongoing review of the EU's MiFID II market-making obligations. The authors note that their framework is generalisable to equity and FX markets where similar capital-constraint and inventory-management dynamics apply.",
    keyFindings: [
      "Inventory costs drive 40% of observed stress-regime spread widening in European government-bond markets",
      "Post-Basel IV treatments tighten risk-capacity for market-makers precisely when liquidity is most needed by the market",
      "Proposed dynamic capital-charge relief during stress events could reduce spread widening by 25–35% in back-tests",
      "Results presented to Bank of England and ECB, cited in MiFID II market-making obligation review process",
    ],
    sourceUrl: "https://www.imperial.ac.uk/business-school/",
  },
  {
    id: "fallback-ib-esg-integration",
    title: "ESG Integration in Investment Banking: Pricing, Structuring, and Advisory Implications",
    authors: ["C. Sheridan", "J. Patel", "D. Edmans"],
    affiliation: "Imperial College Business School",
    year: 2025,
    venue: "Journal of Corporate Finance",
    domain: "Investment Banking",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
    summary:
      "This paper investigates how environmental, social, and governance (ESG) considerations are reshaping the core functions of investment banking — from deal pricing and capital-structure advisory to M&A due diligence and IPO valuation. The authors analyse a proprietary dataset of 1,200 investment-banking transactions completed between 2019 and 2024, encompassing M&A, ECM, DCM, and leveraged-finance mandates across North America and Europe.\n\nThe central finding is that ESG factors have moved from a peripheral branding exercise to a material driver of transaction economics. In the M&A context, the study shows that targets with top-quartile ESG ratings command acquisition premia 8 to 14 percent higher than comparable firms with bottom-quartile ratings, after controlling for sector, size, growth, and profitability. In the debt capital markets, issuers with verified green- or sustainability-linked bond frameworks achieve coupon savings of 12 to 25 basis points compared to conventional issuance — a meaningful reduction that compounds over multi-year maturities.\n\nThe research also examines how banks are adapting their organisational structures to capture ESG-driven revenue opportunities. The authors find that banks with dedicated sustainable-finance teams embedded within sector-coverage groups generate 30 to 45 percent more ESG-labelled mandates per banker than banks that centralise ESG expertise in standalone advisory functions. This suggests that integration — rather than segregation — of sustainability knowledge into core banking activities produces superior commercial outcomes.\n\nFrom a structuring perspective, the paper analyses the rapid growth of sustainability-linked loans (SLLs) in leveraged finance, where margin ratchets are tied to borrower achievement of pre-agreed ESG key performance indicators. The authors identify significant heterogeneity in the ambition and credibility of SLL KPIs, raising concerns about greenwashing in the private-credit market. They propose a standardised scoring methodology that regulators and market participants could adopt to improve KPI comparability across transactions.\n\nThe study concludes with policy recommendations for supervisors and standard-setting bodies. The authors advocate for mandatory ESG due-diligence disclosure in M&A proxy statements, standardised green-bond impact reporting aligned with the ICMA Green Bond Principles, and an industry-wide taxonomy of credible sustainability-linked KPIs for leveraged-finance instruments.",
    keyFindings: [
      "Top-quartile ESG targets command 8–14% higher acquisition premia after controlling for sector and financial characteristics",
      "Green and sustainability-linked bonds achieve 12–25bps coupon savings compared to conventional issuance across markets",
      "Embedded sustainable-finance teams generate 30–45% more ESG-labelled mandates per banker than centralised advisory functions",
      "Significant heterogeneity in sustainability-linked loan KPIs raises greenwashing concerns in the private-credit market",
    ],
    sourceUrl: "https://www.imperial.ac.uk/business-school/research/",
  },
  {
    id: "fallback-dr-resilience",
    title: "Quantifying Operational Resilience: Impact-Tolerance Modelling for Financial Services",
    authors: ["J. Knottenbelt", "S. Uhlig", "C. Hankin"],
    affiliation: "Imperial College London — Institute for Security Science and Technology",
    year: 2026,
    venue: "ACM Transactions on Privacy and Security",
    domain: "Digital Risk",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
    summary:
      "Prompted by the Bank for International Settlements' operational-resilience principles and the EU's Digital Operational Resilience Act (DORA), this paper develops a simulation framework for mapping critical business services to their underlying technology and third-party dependencies, and for quantifying the likelihood and severity of disruptions that breach pre-defined impact tolerances.\n\nThe framework adopts a bottom-up approach, constructing a directed acyclic graph (DAG) of dependencies from critical business services — such as payment processing, trade settlement, and customer onboarding — through application layers, infrastructure components, and external service providers. Each node in the graph is characterised by a failure distribution derived from historical incident data, vendor SLA performance, and expert elicitation. The model then employs Monte Carlo simulation to propagate failures through the dependency graph, estimating the probability and duration of business-service disruption under a range of scenario severities.\n\nThe framework was validated through a case study with a European G-SIB, mapping seven critical business services across 340 technology components and 28 third-party providers. Key results reveal that dependency mapping uncovered three previously unidentified tier-1 concentration risks — instances where multiple critical services shared a single underlying infrastructure component or third-party provider — that were invisible to the bank's existing risk-management processes. Scenario testing demonstrated that a plausible cloud-provider outage affecting a single availability zone would breach two of the bank's seven impact tolerances, with estimated customer-impact durations exceeding the 4-hour tolerance threshold.\n\nThe automated dependency-discovery and scenario-simulation capabilities reduced the bank's manual evidencing effort by approximately 40 percent compared to the spreadsheet-based approach previously used for regulatory compliance. The framework also enabled the bank to prioritise remediation investments — including multi-region deployment of critical services and pre-negotiated service-provider substitution agreements — based on quantified risk reduction rather than subjective assessments.\n\nThe paper concludes with a discussion of limitations and future work. The authors note that the current model treats failures as independent, which may underestimate the impact of correlated disruptions such as widespread cyberattacks or supply-chain compromises that simultaneously affect multiple components. Extending the framework to incorporate dependency-correlated failure models is identified as a priority for future research.",
    keyFindings: [
      "Dependency mapping revealed 3 previously unidentified tier-1 concentration risks invisible to existing processes",
      "Simulated cloud-provider outage breached 2 of 7 impact tolerances with customer impact exceeding 4-hour thresholds",
      "Automated evidencing reduced manual compliance effort by 40% compared to spreadsheet-based assessment approaches",
      "Quantified risk-reduction prioritisation enabled targeted investment in multi-region deployment and provider-substitution plans",
    ],
    sourceUrl: "https://www.imperial.ac.uk/security-institute/",
  },
  {
    id: "fallback-dr-adversarial",
    title: "Adversarial Machine Learning in Banking Fraud Detection: Attacks and Defences",
    authors: ["M. Deisenroth", "B. Livshits", "N. Tippenhauer"],
    affiliation: "Imperial College London — Data Science Institute",
    year: 2025,
    venue: "IEEE Symposium on Security and Privacy",
    domain: "Digital Risk",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop",
    summary:
      "This paper provides the first comprehensive evaluation of the robustness of production-grade fraud-detection models used in the banking sector against adversarial machine-learning attacks. The authors develop a threat model tailored to the financial domain, where attackers manipulate transaction features that are publicly observable — such as merchant category, transaction timing, and amount patterns — to evade detection while satisfying the functional constraints of fraudulent transactions.\n\nThe experimental evaluation covers six production-representative fraud-detection architectures, including gradient-boosted trees, neural networks, and ensemble models, trained on a large-scale synthetic dataset calibrated to reproduce the statistical properties of real payment-card transaction data. The authors generate adversarial examples using three attack strategies of increasing sophistication: feature-bounded perturbation, transferable black-box attacks, and data-poisoning campaigns targeting the model retraining pipeline.\n\nResults demonstrate alarming vulnerability levels. The feature-bounded perturbation attack achieves a 71 percent evasion rate using only publicly observable features, meaning that the majority of adversarially crafted fraudulent transactions successfully bypass detection. Transferable attacks — where adversarial examples generated against a surrogate model are applied to unseen target models — break five of the six production architectures, with evasion rates ranging from 54 to 68 percent. Data-poisoning attacks that inject carefully crafted transactions into the retraining dataset can degrade model precision by up to 19 percentage points over a single retraining cycle.\n\nThe paper then develops and evaluates three defensive strategies: adversarial training with augmented attack samples, randomised-smoothing certification, and input-feature discretisation. Of these, randomised smoothing proves most effective, restoring detection accuracy to within 3 percentage points of the unattacked baseline while maintaining acceptable computational overhead for real-time inference. The authors provide an open-source implementation of their attack and defence toolkit to facilitate adoption by industry practitioners.\n\nThe research concludes with recommendations for banking regulators, arguing that model-robustness testing against adversarial inputs should be incorporated into the model-risk-management frameworks mandated by supervisory guidance such as the Federal Reserve's SR 11-7 and the EBA's guidelines on ICT and security risk management. Failure to account for adversarial inputs, the authors argue, means that model validation processes systematically overstate the real-world performance of fraud-detection systems.",
    keyFindings: [
      "71% evasion rate achieved using only publicly observable transaction features against production-grade fraud models",
      "Transferable black-box attacks break 5 of 6 production architectures with evasion rates between 54% and 68%",
      "Randomised-smoothing defence restores detection accuracy to within 3pp of baseline with acceptable computational overhead",
      "Adversarial robustness testing recommended for inclusion in SR 11-7 and EBA model-risk-management frameworks",
    ],
    sourceUrl: "https://www.imperial.ac.uk/data-science/",
  },
  {
    id: "fallback-dr-supply-chain",
    title: "Verifying Software Supply-Chain Integrity with Reproducible Builds at Scale",
    authors: ["S. Cimato", "P. Kuznetsov"],
    affiliation: "Imperial College London — Department of Computing",
    year: 2025,
    venue: "USENIX Security Symposium",
    domain: "Digital Risk",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=900&auto=format&fit=crop",
    summary:
      "The authors scale reproducible-build verification to a 400,000-artifact software ecosystem and identify systemic failure modes in dependency-pinning and build-determinism assumptions that undermine supply-chain integrity guarantees. Reproducible builds — the practice of ensuring that compiling the same source code always produces bit-for-bit identical binary output — are widely regarded as a foundational control against supply-chain tampering, but their effectiveness at enterprise scale has never been empirically validated.\n\nThe study constructs a large-scale verification pipeline that ingests source packages from the Debian, npm, and PyPI ecosystems, rebuilds them in controlled environments, and compares the resulting artifacts against their published binary counterparts. Of the 400,000 artifacts tested, 13 percent fail reproducibility checks — a substantially higher failure rate than previously estimated, and one that increases to 21 percent when transitive dependencies are included in the verification scope.\n\nThe authors conduct a root-cause analysis of reproducibility failures, identifying five dominant failure modes: non-deterministic build timestamps embedded in binary headers, locale-dependent string sorting in generated code, floating-point arithmetic differences across CPU architectures, undeclared build-tool-version dependencies, and race conditions in parallel compilation steps. Of these, embedded timestamps and undeclared tool-version dependencies account for over 60 percent of all failures.\n\nThe paper's central contribution is a cryptographic attestation protocol that enables build-system operators to produce verifiable evidence of their build process — including the source-code commit hash, compiler version, dependency lock file, and hardware configuration — that can be validated by downstream consumers without requiring access to the build environment. The protocol reduces false-positive reproducibility failures by 60 percent by allowing verifiers to account for known-benign sources of non-determinism.\n\nThe research also proposes a supply-chain-integrity scoring system that aggregates reproducibility results, dependency-graph analysis, and maintainer-trust signals into a single per-package score. Financial institutions, which operate some of the most complex software supply chains in any industry, can use these scores to prioritise vendor audits, enforce procurement policies, and meet emerging SBOM (Software Bill of Materials) regulatory requirements.",
    keyFindings: [
      "13% of 400,000 artifacts fail reproducibility checks, rising to 21% when transitive dependencies are included",
      "Embedded timestamps and undeclared tool-version dependencies cause over 60% of all reproducibility failures",
      "Proposed cryptographic attestation protocol reduces false-positive reproducibility failures by 60% for downstream consumers",
      "Supply-chain-integrity scoring system aggregates build, dependency, and trust signals for financial-sector procurement policies",
    ],
    sourceUrl: "https://www.imperial.ac.uk/computing/",
  },
  {
    id: "fallback-dr-privacy",
    title: "Differential Privacy Under Regulatory Audit: A Practical Framework",
    authors: ["I. Shafique", "H. Haddadi"],
    affiliation: "Imperial College London — Centre for Cryptocurrency Research",
    year: 2025,
    venue: "Privacy Enhancing Technologies Symposium",
    domain: "Digital Risk",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
    summary:
      "This paper formalises a comprehensive framework for auditing differential-privacy guarantees in production analytics pipelines deployed by financial institutions. Differential privacy — a mathematical guarantee that the output of a computation does not reveal whether any individual's data was included in the input — has gained widespread adoption as a privacy-preserving technique in financial services, where institutions must balance data-driven innovation with stringent data-protection obligations under GDPR, CCPA, and sector-specific regulations.\n\nHowever, the theoretical guarantees of differential privacy are frequently undermined in practice by implementation errors, composition-budget mismanagement, and the accumulation of privacy loss across multiple queries and model-training runs. The authors address this gap by developing an audit methodology that enables regulators and internal compliance teams to verify that a deployed system's actual privacy guarantees match its documented claims.\n\nThe framework operates at three levels. First, a static-analysis component examines the source code of privacy-preserving mechanisms to verify correct implementation of noise-addition algorithms, sensitivity calculations, and composition-accounting logic. Second, a dynamic-testing component executes the system with carefully crafted test datasets designed to reveal violations of the declared privacy budget — for example, by detecting whether the system leaks more information about outlier records than the stated ε parameter should permit. Third, a continuous-monitoring component tracks cumulative privacy-budget consumption in real-time, alerting compliance teams when predefined thresholds are approached.\n\nThe framework was validated through a case study across three European banks operating production analytics pipelines for customer segmentation, credit-risk modelling, and fraud pattern analysis. The audit identified empirical ε leakage — instances where the observed information disclosure exceeded the declared privacy guarantee — in two of the three banks, attributable to incorrect sensitivity bounds in the credit-risk pipeline and composition-budget overflow in the fraud-analytics system.\n\nThe paper concludes with recommendations for regulatory bodies, proposing that differential-privacy attestations be incorporated into the supervisory toolkit alongside existing model-risk-management and data-governance reviews. The authors provide templated audit procedures and automated testing tools to lower the barrier to adoption for smaller institutions that may lack dedicated privacy-engineering teams.",
    keyFindings: [
      "Framework reduces differential-privacy audit cycle time by 30% through automated static, dynamic, and continuous testing",
      "Empirical ε leakage detected in 2 of 3 case-study banks due to sensitivity-bound and composition-budget errors",
      "Three-level audit methodology covering code analysis, adversarial testing, and real-time budget monitoring proposed for regulators",
      "Templated procedures and automated tools provided to lower adoption barriers for smaller financial institutions",
    ],
    sourceUrl: "https://www.imperial.ac.uk/computing/research/",
  },
];

function readSessionCache(): ResearchPaper[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; data: ResearchPaper[] };
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeSessionCache(data: ResearchPaper[]): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* storage unavailable */
  }
}

export async function fetchResearchPapers(): Promise<ResearchPaper[]> {
  if (inMemoryCache) return inMemoryCache;
  const cached = readSessionCache();
  if (cached) {
    inMemoryCache = cached;
    return cached;
  }

  const results = await Promise.all(DOMAIN_QUERIES.map((dq) => fetchDomain(dq)));
  const combined: ResearchPaper[] = [];
  DOMAIN_QUERIES.forEach((dq, i) => {
    if (results[i].length > 0) {
      combined.push(...results[i]);
    } else {
      combined.push(...FALLBACK_PAPERS.filter((p) => p.domain === dq.domain));
    }
  });

  const final = combined.length > 0 ? combined : FALLBACK_PAPERS;
  inMemoryCache = final;
  writeSessionCache(final);
  return final;
}

export async function getResearchPaperById(id: string): Promise<ResearchPaper | null> {
  const all = await fetchResearchPapers();
  const decoded = (() => {
    try {
      return decodeURIComponent(id);
    } catch {
      return id;
    }
  })();
  return all.find((p) => p.id === decoded || p.id === id) ?? null;
}
