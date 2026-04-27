import { motion } from 'motion/react';
import { Shield, RefreshCw, Brain, GraduationCap, FileCheck, Building2, Heart, Code, Briefcase, ShoppingCart } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Digital Risk Advisory',
      image:
        'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxjb2Rpbmd8ZW58MHwwfDB8fHww',
      description: 'We help organizations manage digital risk at a strategic level. We align cybersecurity, compliance, and business goals into a unified risk posture.',
      gradient: 'from-gray-400 via-gray-500 to-gray-400',
      offerings: [
        'Enterprise risk assessments',
        'Regulatory compliance (ISO, NIST, GDPR, etc.)',
        'Risk quantification & reporting',
        'Board-level risk strategy'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Cyber Resilience',
      image:
        'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxjb2Rpbmd8ZW58MHwwfDB8fHww',
      description: 'Build systems that don’t just defend—but recover, adapt, and evolve under pressure. Strengthen resilience across infrastructure and operations.',
      gradient: 'from-gray-400 via-gray-500 to-gray-400',
      offerings: [
        'Incident response planning',
        'Threat modeling & simulation',
        'Business continuity & disaster recovery',
        'Security architecture design'
      ]
    },
    {
      icon: Brain,
      title: 'AI Risk & Governance',
      image:
        'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpfGVufDB8MHwwfHx8MA%3D%3D',
      description: 'AI adoption introduces risks like bias and compliance failures. We ensure safe, ethical, and compliant AI systems.',
      gradient: 'from-slate-400 via-slate-500 to-slate-400',
      offerings: [
        'AI model risk assessment',
        'Responsible AI frameworks',
        'Bias detection & mitigation',
        'AI governance & policy design'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=60',
      description: 'Empower teams with the skills to manage modern digital risks effectively. Deliver structured learning for cybersecurity and AI readiness.',
      gradient: 'from-slate-400 via-slate-500 to-slate-400',
      offerings: [
        'Cybersecurity training programs',
        'AI risk awareness workshops',
        'Executive leadership training',
        'Certification-focused learning'
      ]
    },
    {
      icon: FileCheck,
      title: 'Audit & Assurance',
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=60',
      description: 'Independent validation of your security and compliance posture to build trust with stakeholders. Identify gaps and strengthen controls.',
      gradient: 'from-gray-500 via-gray-600 to-gray-500',
      offerings: [
        'Security audits & gap analysis',
        'Compliance audits',
        'Third-party risk assessments',
        'Continuous monitoring frameworks'
      ]
    },
    {
      icon: Building2,
      title: 'Academic Advisory',
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=60',
      description:
        'We partner with academic and public institutions to strengthen digital capability and governance. Enable structured risk and resilience programs.',
      gradient: 'from-gray-400 via-gray-600 to-gray-400',
      offerings: [
        'Policy and safety advisory',
        'Digital literacy and risk strategy',
        'Academic program enablement',
        'Institution readiness assessments'
      ]
    }
  ];

  const industries = [
    {
      icon: Building2,
      name: 'Financial Services',
      description: 'Fraud prevention, regulatory compliance',
      gradient: 'from-zinc-400 via-zinc-500 to-zinc-400'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Patient data security, HIPAA compliance',
      gradient: 'from-gray-400 via-gray-500 to-gray-400'
    },
    {
      icon: Code,
      name: 'Technology & SaaS',
      description: 'Cloud security, AI governance',
      gradient: 'from-zinc-400 via-zinc-500 to-zinc-400'
    },
    {
      icon: Briefcase,
      name: 'Government & Public Sector',
      description: 'Critical infrastructure protection',
      gradient: 'from-gray-400 via-gray-500 to-gray-400'
    },
    {
      icon: ShoppingCart,
      name: 'Retail & E-commerce',
      description: 'Payment security, fraud detection',
      gradient: 'from-zinc-400 via-zinc-500 to-zinc-400'
    },
    {
      icon: GraduationCap,
      name: 'Education & Institutions',
      description: 'Digital learning security, student data protection',
      gradient: 'from-gray-400 via-gray-500 to-gray-400'
    }
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-10 bg-linear-to-br from-background via-card to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5 bg-size-[50px_50px]"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
            Strategic digital risk solutions aligned with your goals
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 max-w-9xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >

                <Card className="p-0 h-full group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-card/60 border border-border shadow-xl hover:shadow-2xl transition-all duration-500">

                  {/* GLASS GRADIENT OVERLAY */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition`} />

                  {/* ✨ METALLIC SHINE */}
                  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                    <div className="shine absolute top-0 left-[-120%] h-full w-[60%]" />
                  </div>

                  {/* IMAGE */}
                  <div className="h-60 w-full overflow-hidden">
                    <img
                      src={service.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 relative z-10">

                    {/* ICON + TITLE */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.gradient} p-2 shadow-lg`}>
                        <service.icon className="w-full h-full text-white" />
                      </div>

                      <h3 className={`text-2xl font-extrabold bg-linear-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-[15px] md:text-[16px] font-medium text-foreground/80 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* KEY OFFERINGS */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
                        Key Offerings
                      </h4>
                      <div className={`relative p-px rounded-2xl bg-linear-to-r ${service.gradient}`}>

                        <div className="bg-card/70 backdrop-blur-md rounded-2xl p-4">

                          <ul className="space-y-2">
                            {service.offerings.map((offering, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-foreground/90"
                              >
                                <span className={`w-2 h-2 mt-2 rounded-full bg-linear-to-r ${service.gradient}`} />
                                <span className="leading-relaxed font-medium">
                                  {offering}
                                </span>
                              </li>
                            ))}
                          </ul>

                        </div>
                      </div>
                    </div>

                    {/* CTA BUTTON (FIXED GAP) */}
                    <div className="mt-6">
                      <button
                        onClick={() => navigate('/contact')}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium
    bg-linear-to-r from-slate-700 via-gray-500 to-slate-700
    hover:opacity-90 transition"
                      >
                        Book an Advisor
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Spotlight - PRISM */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>

      <section className="py-20 bg-background relative overflow-hidden">

        {/* subtle grid background */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.03] bg-size-[50px_50px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10"
        >

          {/* FLOATING PRISM CARD */}
          <div className="max-w-5xl mx-auto">

            <div className="relative rounded-3xl p-10 md:p-14 overflow-hidden
        bg-card/70 backdrop-blur-xl border border-border shadow-2xl group">

              {/* METALLIC SHINE OVERLAY */}
              <div className="pointer-events-none absolute inset-0">
                <div className="shine-metal absolute top-0 left-[-120%] h-full w-[60%]" />
              </div>

              {/* subtle gradient glow */}
              <div className="absolute inset-0 bg-linear-to-br from-card via-background to-card opacity-80" />

              {/* CONTENT */}
              <div className="relative z-10 text-center">

                {/* TITLE */}
                <h2 className="text-5xl md:text-6xl mb-8 font-bold tracking-tight">
                  <span className="logo-shine block mb-2">Innovation Spotlight</span>
                  <span className="text-foreground">PRISM</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10">
                  PRISM is an automated regulatory intelligence platform built for precision, traceability,
                  and enterprise-scale compliance. It delivers structured, explainable, and audit-ready insights
                  for modern financial ecosystems.
                </p>

                {/* FEATURE GRID */}
                <div className="grid md:grid-cols-3 gap-6">

                  {[
                    {
                      title: "Precision",
                      desc: "Accurate insights you can trust"
                    },
                    {
                      title: "Traceability",
                      desc: "Full audit trail and explainability"
                    },
                    {
                      title: "Scalability",
                      desc: "Built for enterprise-scale compliance"
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl p-6 bg-card/60 border border-border shadow-md
                hover:shadow-xl transition group overflow-hidden"
                    >

                      {/* inner highlight */}
                      <div className="absolute inset-0 bg-linear-to-br from-card via-background to-card opacity-0 group-hover:opacity-100 transition" />

                      <div className="relative z-10">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* Industries Section */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              Tailored to your specific risk landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group border-gray-200 hover:border-purple-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-linear-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${industry.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <industry.icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl mb-2">{industry.name}</h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
