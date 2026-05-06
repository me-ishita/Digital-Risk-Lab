import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { Shield, Target, Zap, Award, Eye, ArrowLeft, ArrowRight, Icon } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { FlippingCards } from "../../components/FlippingCards";
import { useNavigate } from 'react-router-dom';
import aiGovernanceImg from "../../../assets/ai_governance.png";
import cyberRiskImg from "../../../assets/cyber_risk.png";
import prismLogo from '../../../assets/Prism logo.png';


export default function AdvisoryHome() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Intelligence-driven risk strategies',
      description: 'We leverage advanced analytics and real-time intelligence to transform risk into a strategic advantage—enabling faster, smarter, and more confident decision-making across complex business environments.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'
    },
    {
      icon: Zap,
      title: 'AI and cyber expertise combined',
      description: 'Our integrated approach blends artificial intelligence with deep cybersecurity expertise to proactively identify threats, automate responses, and build resilient digital ecosystems for the future.',
      image: 'https://media.istockphoto.com/id/2205274485/photo/ai-technology-artificial-intelligence-brain-chip-wide-concepts-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=wj-1wf7bEnLh5F1JWl3SRw7yCEcehUx2ufrF64rJVec='
    },
    {
      icon: Shield,
      title: 'Regulatory-ready frameworks',
      description: 'We design and implement robust, scalable frameworks that ensure compliance with evolving regulations while enabling secure innovation and growth in a rapidly changing digital landscape.',
      image: 'https://images.pexels.com/photos/32529341/pexels-photo-32529341.jpeg'
    },
    {
      icon: Award,
      title: 'Outcome-focused execution',
      description: 'We are committed to delivering measurable results that drive business value, enhance security posture, and enable sustainable growth through strategic risk management and innovative solutions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200'
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


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % whyChooseUs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-[#DFE2E8] ">
        {/* Flipping Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-foreground font-extrabold mb-6">
            Our Core Pillars
          </h2>

          <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
            Combining strategic acceleration with cutting-edge innovation to deliver comprehensive digital risk solutions.
          </p>
        </motion.div>
        <FlippingCards />

      </section>

      {/* ABOUT */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-[#FAFAF8]">

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
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-[#DFE2E8] ">
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-foreground">
                How We Work
              </span>
            </h2>

            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
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

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-[#FAFAF8]">

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

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 grow">
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
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-[#DFE2E8]  ">

        {/* HEADER OUTSIDE CARD */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 whitespace-nowrap">
            <span className="text-foreground">
              Innovation Spotlight
            </span>
            <span className="ml-3 bg-linear-to-r from-[#4A7FA8] to-[#FF7A18] bg-clip-text text-transparent">
              PRISM
            </span>
          </h2>

          <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
            AI-powered regulatory intelligence transforming compliance into automated, traceable systems.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[40px] p-10 md:p-14 overflow-hidden
    bg-[#FAFAF8]
    border border-[#B8956A]/40
    shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

            {/* INNER GRID */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Dynamic Spotlight Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

              {/* subtle grid background */}
              <div className="absolute inset-0 bg-grid-primary/[0.03] bg-size-[50px_50px]"></div>

              {/* LEFT SIDE — PRISM STORY CARD */}
              <motion.div
                whileHover={{ y: -6 }}
                className="relative rounded-3xl p-6 
                            bg-card
                            border border-[#E6D3B5]
                            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                            transition-all duration-500 overflow-hidden">

                {/* subtle glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">

                  {/* LOGO + HEADING */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={prismLogo}
                      alt="PRISM Logo"
                      className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-3xl font-bold text-foreground tracking-tight">
                      About PRISM
                    </h3>
                  </div>

                  {/* CONTENT */}
                  <p className="text-primary leading-relaxed text-base md:text-lg lg:text-[17.28px] mt-8">
                    PRISM is an end-to-end AI-powered regulatory intelligence platform designed to transform
                    complex regulatory documentation into structured, executable, and fully auditable outputs.
                    It automates formula extraction, interpretation, and COREP reporting with complete traceability—
                    eliminating manual inefficiencies introduced by Basel 3.1 complexity. Built for financial institutions,
                    compliance teams, and audit functions, PRISM enables organisations to move from manual execution
                    to intelligent, scalable regulatory oversight.
                  </p>

                </div>
              </motion.div>


              {/* RIGHT SIDE — FEATURE STACK */}
              <div className="flex flex-col gap-6">

                {[
                  {
                    title: "Precision",
                    desc: "Accurate insights you can trust.",
                    icon: Shield
                  },
                  {
                    title: "Traceability",
                    desc: "Full audit trail and explainability.",
                    icon: Target
                  },
                  {
                    title: "Scalability",
                    desc: "Built for enterprise-scale compliance.",
                    icon: Zap
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative flex items-start gap-5 p-6 rounded-2xl
      bg-card
      border border-[#E6D3B5]
      shadow-[0_8px_20px_rgba(0,0,0,0.05)]
      hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]
      transition-all duration-500 overflow-hidden group"
                  >

                    {/* subtle hover glow */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#4A7FA8]/5 via-[#B8956A]/10 to-[#4A7FA8]/5 
      opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* left accent line */}
                    <div className="absolute left-0 top-0 h-full w-0.75 
      bg-linear-to-b from-[#4A7FA8] via-[#B8956A] to-[#4A7FA8] opacity-70 group-hover:opacity-100" />

                    {/* ICON */}
                    <div className="relative z-10 p-3 rounded-xl 
      bg-[#F5EFE6] text-[#B8956A] 
      group-hover:scale-110 group-hover:bg-white 
      transition-all duration-300 shadow-sm">

                      <item.icon className="w-5 h-5" />
                    </div>

                    {/* TEXT */}
                    <div className="relative z-10">
                      <h4 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                        {item.title}
                      </h4>

                      <p className="text-primary text-base md:text-lg leading-[1.7] mt-2">
                        {item.desc}
                      </p>
                    </div>

                  </motion.div>
                ))}

              </div>

            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a
                href="https://prism-rho-ruddy.vercel.app/"
                className="group inline-flex items-center gap-2 text-primary font-semibold text-lg relative"
              >
                <span className="relative">
                  View Details
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 text-primary bg-[#B8956A] transition-all duration-300 group-hover:w-full"></span>
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* Why Choose Us */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>
      <section className="py-24 bg-[#FAFAF8]">
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

          <div className="relative max-w-6xl xl:max-w-7xl mx-auto min-h-105 md:min-h-120 flex items-center justify-center">

            {whyChooseUs.map((item, index) => {
              const isActive = activeIndex === index;
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-full flex justify-center items-center ${isActive ? "z-10" : "z-0 pointer-events-none"
                    }`}
                >
                  <div className="rounded-3xl overflow-hidden 
bg-card 
border border-[#E6D3B5]
shadow-[0_25px_60px_rgba(0,0,0,0.08)]
w-full max-w-3xl md:max-w-4xl mx-auto transition-all duration-500">

                    {/* IMAGE */}
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 md:p-10">

                      {/* ICON + TITLE */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
  className="w-14 h-14 rounded-xl 
  bg-linear-to-br from-[#4A7FA8] via-[#7A8299] to-[#B8956A]
  p-3 shadow-lg flex items-center justify-center"
>
  <Icon className="w-full h-full text-white" />
</div>

                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-primary text-base md:text-lg leading-relaxed tracking-wide">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* DOT NAVIGATION */}
          <div className="flex justify-center mt-14 md:mt-16 gap-4 relative z-20">
            {whyChooseUs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${activeIndex === idx
                    ? 'bg-[#da9e4a] scale-125 shadow-[0_0_10px_rgba(198,167,125,0.8)]'
                    : 'bg-[#ffffff]/60 hover:bg-[#ffffff]'
                  }`}
              />
            ))}
          </div>
          
        </div>
      </section>

      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>


    </div>
  );
}
