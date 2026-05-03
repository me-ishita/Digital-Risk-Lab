'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText, Brain, Calculator, CheckCircle, ArrowRight,
  Users, Zap, Database
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';


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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-4">
            PRISM — Live Innovation
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A fully operational AI-powered regulatory intelligence platform
          </p>

          {/* WORKFLOW */}
          <div className="grid md:grid-cols-5 gap-6">
            {prismWorkflow.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border"
                >
                  <img src={step.image} className="h-32 w-full object-cover" />
                  <div className="p-4 text-center">
                    <Icon className="mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* PRISM CONTENT */}
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-3">What PRISM Does</h3>
              <p className="text-muted-foreground">
                Converts complex regulatory frameworks into structured, executable outputs—ensuring compliance is accurate, auditable, and scalable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Business Impact</h3>
              <p className="text-muted-foreground">
                Reduces compliance time from weeks to minutes while improving accuracy, audit readiness, and operational efficiency.
              </p>
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