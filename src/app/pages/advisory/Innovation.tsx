'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText, Brain, Calculator, CheckCircle, ArrowRight,
  Users, Zap, Database
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import prismLogo from '../../../assets/Prism-Logo.png';

export function Innovation() {

  const prismWorkflow = [
    {
      icon: FileText,
      title: 'Extract',
      description: 'Regulatory text from source documents',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
      color: 'bg-amber-100',
    },
    {
      icon: Brain,
      title: 'Structure',
      description: 'Segment & enrich regulatory logic',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=400',
      color: 'bg-amber-200',
    },
    {
      icon: Calculator,
      title: 'Interpret',
      description: 'Translate formulas using AI',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      color: 'bg-orange-200',
    },
    {
      icon: Zap,
      title: 'Execute',
      description: 'Run symbolic computations',
      image: 'https://images.pexels.com/photos/12899191/pexels-photo-12899191.jpeg',
      color: 'bg-amber-300',
    },
    {
      icon: CheckCircle,
      title: 'Deliver',
      description: 'COREP outputs with audit trails',
      image: 'https://images.pexels.com/photos/36496927/pexels-photo-36496927.jpeg',
      color: 'bg-orange-100',
    },
  ];

  const storyCards = [
    {
      title: 'Strategic Vision',
      desc: 'We exist to transform complex, high-impact ideas into scalable digital systems that solve real-world problems and create long-term value.',
      icon: Zap,
      image: 'https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?b=1&s=612x612&w=0&k=20&c=-wlvWS-XTNTxhD6_ewD5T8vRsiTrvnId8b7uf-5-Ucw=',
    },
    {
      title: 'Engineering Depth',
      desc: 'Our strength lies in combining AI, cloud, and advanced architecture to build intelligent, production-ready systems designed for scale and resilience.',
      icon: Users,
      image: 'https://images.pexels.com/photos/34804018/pexels-photo-34804018.jpeg',
    },
    {
      title: 'Enterprise Trust',
      desc: 'Every system we build is auditable, secure, and aligned with enterprise standards—ensuring confidence, reliability, and long-term adoption.',
      icon: Database,
      image: 'https://images.pexels.com/photos/36733294/pexels-photo-36733294.jpeg',
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % storyCards.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
            alt="Innovation Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Engineering Intelligent Digital Systems
          </h1>
        </div>
      </section>

      {/* PURPOSE BLOCK */}

      <section className="py-24 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - ABOUT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              The Architecture of Innovation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Innovation at Digital Risk Lab is where ideas are transformed into scalable,
              production-ready technologies—bridging advanced engineering, AI intelligence,
              and real-world enterprise execution.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We don’t just build products—we design systems that can evolve, adapt,
              and scale within complex environments. Our approach ensures every innovation
              is aligned with real business needs and future growth.
            </p>

            {/* INDICATORS */}
            <div className="flex gap-2 pt-4">
              {storyCards.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-6 rounded-full ${i === active ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - STORY CARD */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200"
          >
            <div className="h-64">
              <img
                src={storyCards[active].image}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = storyCards[active].icon;
                    return <Icon className="text-white w-5 h-5" />;
                  })()}
                </div>

                <h3 className="text-2xl font-bold">
                  {storyCards[active].title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {storyCards[active].desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRISM */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className="py-28 bg-linear-to-br from-amber-50 via-orange-50 to-yellow-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-4 mb-4">
              <img src={prismLogo} alt="PRISM Logo" className="w-12 h-12" />

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-5xl md:text-6xl font-extrabold mb-6">Live Innovation — </span>
                <span className="bg-linear-to-r from-[#d4af37] to-[#f5d06f] bg-clip-text text-transparent text-5xl md:text-6xl font-extrabold mb-6">
                  PRISM
                </span>
              </h2>
            </div>

            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              AI-powered regulatory intelligence transforming compliance into automated, traceable, and scalable systems.
            </p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT - INFO CARDS (VERTICAL) */}
            <div className="flex flex-col gap-6">

              {/* WHY */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white border border-amber-200 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-600">
                  Why PRISM Exists
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Basel 3.1 introduces massive regulatory complexity with hundreds of formulas and cross-references.
                  PRISM eliminates manual interpretation risk by replacing it with intelligent automation—reducing errors,
                  timelines, and compliance costs.
                </p>
              </motion.div>

              {/* HOW */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white border border-amber-200 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-600">
                  How PRISM Works
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PRISM processes regulatory documents through a five-step pipeline—extracting text, structuring logic,
                  interpreting formulas using AI, executing calculations, and generating fully auditable COREP outputs.
                </p>
              </motion.div>

              {/* IMPACT */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white border border-amber-200 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-amber-600">
                  Where PRISM Creates Impact
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PRISM accelerates compliance operations, strengthens governance, enables regulatory intelligence,
                  and ensures audit readiness—transforming compliance into a scalable, intelligent system.
                </p>
              </motion.div>

            </div>

            {/* RIGHT - WORKFLOW */}
            <div className="relative flex justify-center items-center">

              <div className="relative w-105 h-105">

                {prismWorkflow.map((step, i) => {
                  const angle = (i / prismWorkflow.length) * 2 * Math.PI;
                  const radius = 170;

                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);

                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 60px)`,
                        top: `calc(50% + ${y}px - 60px)`
                      }}
                    >
                      <div className="w-28 h-28 bg-white border border-amber-200 rounded-xl p-3 text-center shadow-md hover:scale-105 transition">

                        <Icon className="mx-auto mb-1 text-amber-600" size={20} />
                        <h4 className="text-sm font-semibold text-gray-800">{step.title}</h4>
                        <p className="text-[10px] text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

                {/* CENTER */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-linear-to-br from-amber-400 to-yellow-300 flex items-center justify-center text-white font-bold shadow-lg">
                    PRISM
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* UPCOMING */}
      <section className="py-24 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Upcoming Innovations
          </h2>
          <p className="text-muted-foreground mb-12">
            Expanding our innovation portfolio across industries
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-lg">
              <img src="https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg" className="rounded mb-4" />
              <h3 className="text-xl font-semibold">Civil Nuclear Security Controller</h3>
              <p className="text-muted-foreground">
                Advanced security intelligence platform for critical infrastructure protection.
              </p>
              <span className="text-sm text-primary font-medium">Coming Soon</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600" className="rounded mb-4" />
              <h3 className="text-xl font-semibold">Core Banking Platform – AKOIN</h3>
              <p className="text-muted-foreground">
                Next-generation digital banking infrastructure for scalable financial ecosystems.
              </p>
              <span className="text-sm text-primary font-medium">In Development</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA 
      <section className="py-20 text-center">
        <h2 className="text-3xl mb-4">
          From Innovation to Scalable Ventures
        </h2>
        <p className="text-muted-foreground mb-6">
          Every innovation we build is designed to evolve into real-world ventures through our ecosystem.
        </p>

        <button className="px-6 py-3 bg-primary text-white rounded-full flex items-center gap-2 mx-auto">
          Explore Ecosystem <ArrowRight size={18} />
        </button>
      </section>
        */}

    </div>
  );
}