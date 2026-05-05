import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    title: "University Digital Awareness Program",
    category: "Education",
    challenge: "A leading university needed to strengthen digital risk awareness across 2,500+ students and faculty.",
    solution: "Developed role-based awareness program with interactive modules and measurable outcomes.",
    results: ["2,500+ participants trained", "92% knowledge improvement", "Sustainable awareness culture"],
    image: "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHVuaXZlcnNpdHklMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Startup Governance Readiness",
    category: "Technology",
    challenge: "Fast-growing startup needed governance frameworks before Series A funding.",
    solution: "Implemented lightweight GRC framework aligned with investor expectations and regulatory requirements.",
    results: ["Series A ready in 90 days", "Investor confidence secured", "Scalable governance foundation"],
    image: "https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBhZHZpc29yeSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc1MjM2MDU5fDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Enterprise Cyber Risk Awareness",
    category: "Financial Services",
    challenge: "250-person team lacked consistent cyber risk awareness and role-specific training.",
    solution: "Designed and delivered role-based cyber awareness program with continuous reinforcement.",
    results: ["95% engagement rate", "60% reduction in risk incidents", "Strong risk culture"],
    image: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YSUyMHByb3RlY3Rpb24lMjBzaGllbGR8ZW58MXx8fHwxNzc1MjM2MDU4fDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  },
  {
    title: "AI Governance Framework Implementation",
    category: "Technology",
    challenge: "SaaS company deploying AI features without governance or risk oversight.",
    solution: "Built comprehensive AI governance framework with policy, oversight, and responsible AI practices.",
    results: ["AI governance maturity achieved", "Responsible deployment process", "Customer trust enhanced"],
    image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGNpcmN1aXR8ZW58MXx8fHwxNzc1MjA0OTkwfDA&ixlib=rb-4.1.0&q=55&w=900&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Healthcare Privacy Readiness",
    category: "Healthcare",
    challenge: "Healthcare provider needed privacy framework for expanding digital services.",
    solution: "Designed privacy-first architecture with compliance readiness and trust mechanisms.",
    results: ["HIPAA compliance achieved", "Patient trust strengthened", "Digital services launched"],
    image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
  },
];

export function CaseStudies() {
  return (
    <div className="pt-20 bg-background text-foreground">
            <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>

      {/* HERO */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Case Studies & Impact Stories
            </h1>

            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              Real results from organizations we've partnered with to navigate digital risk and drive transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">

            {caseStudies.map((study, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >

                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isReverse ? "lg:grid-flow-col-dense" : ""
                      }`}
                  >

                    {/* IMAGE */}
                    <div
                      className={`relative h-64 lg:h-full overflow-hidden ${isReverse ? "lg:col-start-2" : ""
                        }`}
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                      />

                      {/* subtle glow overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-tr from-blue-100/0 via-transparent to-blue-200/0 group-hover:to-blue-200/20 transition duration-500" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 lg:px-12 flex flex-col justify-center">

                      {/* CATEGORY */}
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 w-fit">
                        {study.category}
                      </div>

                      {/* TITLE */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                        {study.title}
                      </h3>

                      {/* CHALLENGE + SOLUTION */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-orange-500 mb-1">
                            Challenge
                          </h4>
                          <p className="text-foreground/70 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-600 mb-1">
                            Solution
                          </h4>
                          <p className="text-foreground/70 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* RESULTS */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground/90">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                          Results
                        </h4>

                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.2 + i * 0.15,
                                duration: 0.4,
                              }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                              <span className="text-foreground/70">{result}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>

      <section className="py-24">

        <div className="container mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-3xl p-12 shadow-lg">

            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Create Your Success Story?
            </h2>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>
        </div>
      </section>
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>

    </div>
  );
}
