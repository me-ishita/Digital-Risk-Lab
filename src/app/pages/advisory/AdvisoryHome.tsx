import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { Shield, Target, Zap, Award, Eye, ArrowLeft, ArrowRight } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { FlippingCards } from "../../components/FlippingCards";
import { useNavigate } from 'react-router-dom';
import aiGovernanceImg from "../../../assets/ai_governance.png";
import cyberRiskImg from "../../../assets/cyber_risk.png";


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
      title: "AI Governance",
      img: aiGovernanceImg,
      icon: Zap,
      description:
        'Establish robust AI governance frameworks that ensure transparency, accountability, and regulatory compliance across your digital ecosystem. Enable responsible AI adoption with continuous monitoring, ethical safeguards, and risk-aware deployment strategies that align innovation with trust and control.'
    },
    {
      title: "Cyber Risk",
      img: cyberRiskImg,
      icon: Shield,
      description:
        'Identify, quantify, and mitigate cyber risks through advanced threat modeling, continuous monitoring, and intelligence-driven security frameworks. Gain real-time visibility into vulnerabilities, strengthen your security posture, and proactively defend against evolving cyber threats across your enterprise ecosystem.'
    },
  ];



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

  const sectionStyles = {
    light: "bg-background", 
    soft: "bg-background",  
    warm: "bg-background",  
    base: "bg-background",
    premium: "bg-background"
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
    <div className="bg-background text-foreground transition-colors duration-300">

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
              From Vision to Enterprise
            </span>

            <br />

            {/* SUB HEADING - DEEPER SILVER EMPHASIS */}
            <span className="logo-shine">
              Where Ideas Scale into Digital Ventures
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <p className="text-[clamp(0.85rem,3.4vw,1rem)] sm:text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto text-center px-2 leading-snug">
            An integrated ecosystem combining incubation, advanced technology, and global partnerships to build the next generation of digital businesses.
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
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className={`py-24 px-6 md:px-20 ${sectionStyles.premium}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>
        {/* Flipping Cards */}
         <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                        <span className="text-foreground">
                            Our Core Pillars
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl font-semibold text-primary uppercase tracking-widest whitespace-nowrap max-w-full mx-auto">
                        Combining strategic acceleration with cutting-edge innovation to deliver comprehensive digital risk solutions.
                    </p>
                </motion.div>
        <FlippingCards />

      </section>

      {/* ABOUT */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className={`py-24 ${sectionStyles.warm} overflow-hidden`}>
        
        <div className="container mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-foreground">
                About Us
              </span>
            </h2>

            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              A forward-thinking ecosystem designed to build, launch, and scale the next generation of digital ventures.
            </p>
          </div>

          {/* FAN LAYOUT */}
          <div className="relative min-h-150 flex items-center justify-center mt-12 px-4">
            <div className="relative w-full max-w-7xl flex flex-wrap justify-center gap-6 md:gap-0">
              {items.map((item, index) => {
                // Rotation and translation values for the fan effect
                const rotations = [-15, -5, 5, 15];
                const xOffsets = [-120, -40, 40, 120];
                const yOffsets = [40, 0, 0, 40];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100, rotate: 0, x: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: yOffsets[index], 
                      rotate: rotations[index],
                      x: xOffsets[index]
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 50,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 0, 
                      y: -20,
                      x: xOffsets[index],
                      zIndex: 50,
                      transition: { duration: 0.3 }
                    }}
                    className="w-75 md:w-[320px] lg:w-87.5 shrink-0 md:-ml-20 first:ml-0"
                    style={{ zIndex: index }}
                  >
                    <Card className="h-full rounded-3xl overflow-hidden relative group border border-border shadow-2xl bg-card/40 backdrop-blur-xl transition-all duration-500">
                      
                      {/* METALLIC GLASS BACKGROUND */}
                      <div className="absolute inset-0 bg-card/40 backdrop-blur-xl" />

                      {/* SHINE EFFECT */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                        <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-primary/30 to-transparent rotate-12 -translate-x-full group-hover:translate-x-[200%] transition-all duration-1000" />
                      </div>

                      {/* IMAGE */}
                      <div className="h-48 md:h-56 overflow-hidden relative z-10">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 relative z-10 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br from-gray-500 to-gray-700 shadow-md group-hover:scale-110 transition">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className={`py-24 ${sectionStyles.warm} overflow-hidden`}>
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-foreground">
                How We Work
              </span>
            </h2>

            <p className="text-lg md:text-xl font-semibold text-primary uppercase tracking-widest whitespace-nowrap max-w-full mx-auto">
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
                  className="min-w-[320px] md:min-w-95 bg-card rounded-2xl shadow-xl overflow-hidden snap-center group hover:shadow-2xl transition-all duration-500"
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
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {phase.title}
                    </h3>

                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* FADE EDGE EFFECT */}
            <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className={`py-24 px-6 md:px-20 ${sectionStyles.warm}`}>

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-foreground">
              Strategic Capabilities
            </span>
          </h2>

          <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
            From risk assessment to regulatory compliance, we enable secure and scalable digital transformation
          </p>
        </div>

        {/* TWO CARD GRID */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative"
              >
                <div className="bg-card rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-border flex flex-col h-full">
                  {/* IMAGE AREA - Zoom effect on hover */}
                  <div className="h-72 sm:h-80 overflow-hidden relative">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* CONTENT AREA */}
                  <div className="p-10 grow flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-foreground/80 text-lg leading-relaxed mb-8 grow">
                      {item.description}
                    </p>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-sm font-bold text-primary cursor-pointer uppercase tracking-widest"
                    >
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate('/advisory/services')}
            className="inline-flex items-center gap-1 text-lg font-semibold text-foreground/80 hover:text-foreground transition"
          >
            View All Advisory Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </section>

      {/* Innovation Spotlight - PRISM */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      <section className="py-24 relative overflow-hidden bg-background">

        {/* Dynamic Spotlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        
        {/* subtle grid background */}
        <div className="absolute inset-0 bg-grid-primary/[0.03] bg-size-[50px_50px]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-6 relative z-10"
        >

          {/* FLOATING PRISM CARD */}
          <div className="max-w-5xl mx-auto">

            <div className="relative rounded-[40px] p-10 md:p-16 overflow-hidden
        bg-card/30 backdrop-blur-2xl border border-primary/20 shadow-[0_0_50px_rgba(212,175,55,0.1)] group">

              {/* SPARKLE/LIGHT BEAM EFFECT */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                  animate={{ 
                    x: ['-100%', '200%'],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-transparent via-primary/40 to-transparent skew-x-[-25deg]"
                />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 text-center">

                {/* LOGO-SHINE TITLE */}
                <h2 className="text-5xl md:text-6xl mb-8 font-bold tracking-tight">
                  <span className="logo-shine block mb-2">Innovation Spotlight</span>
                  <span className="text-foreground">PRISM</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
                  PRISM is an automated regulatory intelligence platform built for precision, traceability,
                  and enterprise-scale compliance.
                </p>

                {/* FEATURE GRID */}
                <div className="grid md:grid-cols-3 gap-8">

                  {[
                    {
                      title: "Precision",
                      desc: "Accurate insights you can trust",
                      icon: Shield
                    },
                    {
                      title: "Traceability",
                      desc: "Full audit trail and explainability",
                      icon: Target
                    },
                    {
                      title: "Scalability",
                      desc: "Built for enterprise-scale compliance",
                      icon: Zap
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="relative rounded-3xl p-8 bg-card/40 border border-primary/10 shadow-lg
                hover:border-primary/40 transition-all duration-500 group/item overflow-hidden"
                    >
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                           <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* Why Choose Us */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className={`py-24 ${sectionStyles.premium}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-foreground">
                Why Choose Us
              </span>
            </h2>
            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
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
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group border-border hover:border-primary/50 bg-card">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 p-3 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
