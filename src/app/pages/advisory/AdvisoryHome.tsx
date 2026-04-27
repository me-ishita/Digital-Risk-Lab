import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { Shield, Target, Zap, Award, Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { FlippingCards } from "../../components/FlippingCards";
import { useNavigate } from 'react-router-dom';


export default function AdvisoryHome() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const whyChooseUs = [
    {
      icon: Target,
      title: 'Intelligence-driven risk strategies',
      description: 'Data-backed insights that transform risk into opportunity'
    },
    {
      icon: Zap,
      title: 'AI and cyber expertise combined',
      description: 'Unified approach to modern digital threats'
    },
    {
      icon: Shield,
      title: 'Regulatory-ready frameworks',
      description: 'Compliant solutions built for global standards'
    },
    {
      icon: Award,
      title: 'Outcome-focused execution',
      description: 'Measurable results that drive business value'
    }
  ];

  const howWeWork = [
    {
      step: '01',
      title: 'Discover',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
      description: 'Deep dive into your business environment, digital assets, and risk exposure landscape.',
    },
    {
      step: '02',
      title: 'Assess',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      description: 'Identify vulnerabilities, threat vectors, and compliance gaps using advanced analytics.',
    },
    {
      step: '03',
      title: 'Design',
      image: 'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfDB8MHx8fDA%3D',
      description: 'Craft tailored cybersecurity frameworks aligned with your strategic objectives.',
    },
    {
      step: '04',
      title: 'Implement',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      description: 'Deploy scalable, secure solutions seamlessly into your operational ecosystem.',
    },
    {
      step: '05',
      title: 'Monitor & Evolve',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZhbHVhdGlvbnxlbnwwfDB8MHx8fDA%3D',
      description: 'Continuously monitor, adapt, and strengthen resilience against evolving threats.',
    }
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      title: "Cyber Risk",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      description:
        'Identify, quantify, and mitigate cyber risks through advanced threat modeling, continuous monitoring, and intelligence-driven security frameworks. Gain real-time visibility into vulnerabilities, strengthen your security posture, and proactively defend against evolving cyber threats across your enterprise ecosystem.'
    },
    {
      title: "AI Governance",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description:
        'Establish robust AI governance frameworks that ensure transparency, accountability, and regulatory compliance across your digital ecosystem. Enable responsible AI adoption with continuous monitoring, ethical safeguards, and risk-aware deployment strategies that align innovation with trust and control.'
    },
    {
      title: "Compliance",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      description:
        'Navigate complex regulatory environments with structured, scalable compliance strategies aligned to global standards and industry best practices. Streamline audits, reduce compliance risk, and build a resilient foundation that adapts to evolving legal and cybersecurity requirements.'
    },
  ];

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = [
    {
      title: "Our Story",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1625014618427-fbc980b974f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D",
      description:
        "Bridging technology and strategy to help organizations thrive securely. We combine cybersecurity, AI, and business insight to drive resilient innovation."
    },
    {
      title: "Our Mission",
      icon: Target,
      image: "https://images.unsplash.com/photo-1737703121444-c568a9d3bc0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlubm92YXRpb24lMjBsYWJ8ZW58MHx8MHx8fDA%3D",
      description:
        "To empower organizations to innovate securely in a digital-first world. We ensure risk management enables growth rather than restricting progress."
    },
    {
      title: "Our Vision",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      description:
        "To become a global leader in digital risk intelligence and AI governance, setting benchmarks in security, compliance, and resilience."
    },
    {
      title: "Our Values",
      icon: Award,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "Our foundation is built on integrity, innovation, accountability, and excellence. We uphold transparency innovation to deliver impactful, high-quality solutions."
    }
  ];

  /* AUTO SLIDE */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  const nextAbout = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const prevAbout = () => {
    setActive((prev) => (prev - 1 + items.length) % items.length);
  };


  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current < services.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="bg-linear-to-br from-white via-slate-50 to-slate-100 text-slate-900">

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/Hero-Background2.mp4" type="video/mp4" />
        </video>

        {/* DARK GRADIENT OVERLAY (clean + readable) */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
          >

            {/* MAIN HEADING - METALLIC SILVER */}
            <span className="bg-linear-to-r from-gray-200 via-gray-300 to-gray-300 bg-clip-text text-transparent">
              Securing Digital Futures
            </span>

            <br />

            {/* SUB HEADING - DEEPER SILVER EMPHASIS */}
            <span className="logo-shine">
              Enabling Intelligent Growth
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="text-[clamp(0.85rem,3.4vw,1rem)] sm:text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto text-center px-2 leading-snug">
            Digital Risk Lab helps organizations navigate cybersecurity, AI risk,
            and regulatory complexity—turning uncertainty into strategic advantage.
          </p>

          <div className="flex gap-6 mt-10">
            <button
              onClick={() => navigate('/advisory/services')}
              className="px-7 py-3 rounded-xl bg-linear-to-r from-zinc-500 via-zinc-600 to-zinc-500 text-white font-medium shadow-xl hover:scale-105 transition"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate('//contact')}
              className="px-7 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* CORE PILLARS - CLICK FLIP */}
      <section className="py-24 px-6 md:px-20 bg-white">

        {/* Flipping Cards */}
        <FlippingCards />

      </section>

      {/* ABOUT */}

      <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
                About Digital Risk Lab
              </span>
            </h2>

            <p className="text-lg md:text-xl font-semibold text-transparent bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text uppercase tracking-widest whitespace-nowrap max-w-full mx-auto">
              A forward-thinking consulting firm specializing in cybersecurity, AI risk, and digital resilience.
            </p>
          </div>

          {/* CAROUSEL */}
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >

            {/* LEFT */}
            <button
              onClick={prevAbout}
              className="absolute left-2 md:left-0 z-20 bg-white/70 backdrop-blur-md p-3 rounded-full shadow hover:scale-110 transition"
            >
              <ArrowLeft />
            </button>

            {/* TRACK */}
            <div className="relative w-full max-w-6xl overflow-hidden">

              {/* FADE LEFT */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-linear-to-r from-white to-transparent z-10" />

              {/* FADE RIGHT */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-linear-to-l from-white to-transparent z-10" />

              <motion.div
                className="flex gap-6"
                animate={{
                  x: -(active * 500)
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.3
                }}


              >
                {items.map((item, index) => {
                  const isActive = index === active;

                  return (
                    <motion.div
                      key={index}
                      className="w-[320px] md:w-[420px] lg:w-[480px] flex-shrink-0"
                      animate={{
                        scale: isActive ? 1 : 0.88,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="h-full rounded-3xl overflow-hidden relative group border border-white/20 shadow-2xl">

                        {/* METALLIC GLASS BACKGROUND */}
                        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-gray-200/20 to-white/10 backdrop-blur-xl" />

                        {/* SHINE EFFECT */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                          <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-white/60 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000" />
                        </div>

                        {/* IMAGE */}
                        <div className="h-64 md:h-72 overflow-hidden relative z-10">
                          <img
                            src={item.image}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 relative z-10 flex flex-col h-65">

                          <div>
                            <div className="flex items-center gap-4 mb-4 group">

                              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 shadow-md group-hover:scale-110 transition">
                                <item.icon className="w-6 h-6 text-white" />
                              </div>

                              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                {item.title}
                              </h3>

                            </div>
                            <p className="text-gray-700 text-xl leading-relaxed mt-auto">
                              {item.description}
                            </p>
                          </div>


                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* RIGHT */}
            <button
              onClick={nextAbout}
              className="absolute right-2 md:right-0 z-20 bg-white/70 backdrop-blur-md p-3 rounded-full shadow hover:scale-110 transition"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>

            <p className="text-lg md:text-xl font-semibold text-transparent bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text uppercase tracking-widest whitespace-nowrap max-w-full mx-auto">
              A structured, intelligence-driven approach to managing digital risk
            </p>
          </div>

          {/* HORIZONTAL SCROLL */}
          <div className="relative">
            <motion.div
              className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory"
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {howWeWork.map((phase, index) => (
                <motion.div
                  key={index}
                  className="min-w-[320px] md:min-w-95 bg-white rounded-2xl shadow-xl overflow-hidden snap-center group hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  {/* IMAGE */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={phase.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* STEP BADGE */}
                    <div className="absolute top-4 left-4 bg-linear-to-br from-gray-500 via-gray-700 to-gray-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Step {phase.step}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
                      {phase.title}
                    </h3>

                    <p className="text-gray-800 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* FADE EDGE EFFECT */}
            <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 md:px-20 bg-white">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
              Strategic Capabilities
            </span>
          </h2>

          <p className="text-lg md:text-xl font-semibold text-transparent bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text uppercase tracking-widest whitespace-nowrap max-w-full mx-auto">
            From risk assessment to regulatory compliance, we enable secure and scalable digital transformation
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto">

          {/* LEFT */}
          <button
            onClick={prev}
            disabled={current === 0}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition
    ${current === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:scale-110 hover:shadow-xl'
              }`}
          >
            <ChevronLeft />
          </button>

          {/* RIGHT */}
          {current < services.length - 1 && (
            <button
              onClick={next}
              disabled={current === services.length - 1}
              className={`absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition
    ${current === services.length - 1
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:scale-110 hover:shadow-xl'
                }`}
            >
              <ChevronRight />
            </button>
          )}

          {/* SLIDER */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.6 }}
            >
              {services.map((item, i) => (
                <div key={i} className="min-w-full px-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"                  >
                    <div className="h-95 md:h-105 overflow-hidden">
                      <img
                        src={item.img}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-4 bg-linear-to-r  from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
                        {item.title}
                      </h3>

                      <p className="text-gray-800 text-lg leading-relaxed w-full">
                        {item.description}
                      </p>

                      <div className="mt-6 flex items-center text-sm font-medium text-gray-700 cursor-pointer">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/advisory/services')}
            className="inline-flex items-center gap-1 text-lg font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            View All Advisory Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </section>

      {/* Innovation Spotlight - PRISM */}
      <section className="py-10 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">

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
        bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl group">

              {/* METALLIC SHINE OVERLAY */}
              <div className="pointer-events-none absolute inset-0">
                <div className="shine-metal absolute top-0 left-[-120%] h-full w-[60%]" />
              </div>

              {/* subtle gradient glow */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-100 via-white to-gray-100 opacity-80" />

              {/* CONTENT */}
              <div className="relative z-10 text-center">

                {/* TITLE */}
                <h2 className="text-4xl md:text-5xl mb-6 font-semibold bg-linear-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                  Innovation Spotlight: PRISM
                </h2>

                {/* DESCRIPTION */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
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
                      className="relative rounded-2xl p-6 bg-white/60 border border-gray-200 shadow-md
                hover:shadow-xl transition group overflow-hidden"
                    >

                      {/* inner highlight */}
                      <div className="absolute inset-0 bg-linear-to-br from-gray-200 via-white to-gray-100 opacity-0 group-hover:opacity-100 transition" />

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

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-linear-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-2xl md:text-xl font-semibold text-transparent bg-linear-to-r from-slate-700 via-gray-500 to-slate-500 bg-clip-text uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              Strategic cybersecurity and digital risk solutions designed for executive leadership and organizational resilience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group border-gray-200 hover:border-purple-300">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 p-3 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}