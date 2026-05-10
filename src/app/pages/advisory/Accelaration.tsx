import { motion } from 'motion/react';
import { TrendingUp, Handshake, Target, Globe, Building, Briefcase, ArrowRight, CheckCircle, ShoppingCart, Heart, Building2, Network, Rocket, Search } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card } from '@/app/components/ui/card';
import { useEffect, useState } from 'react';

export function Acceleration() {
  const services = [
    {
      icon: Handshake,
      title: 'Strategic Enterprise Partnerships',
      description: 'Direct access to enterprise ecosystems, enabling meaningful collaborations with industry leaders for commercial opportunities.',
    },
    {
      icon: Target,
      title: 'Enterprise Market Penetration',
      description: 'Navigate complex B2B sales cycles with guided positioning, stakeholder mapping, and proven go-to-market strategies.',
    },
    {
      icon: Globe,
      title: 'Global Growth Enablement',
      description: 'Expand into new markets with strategic support across localization, compliance, and international business development.',
    },
    {
      icon: Briefcase,
      title: 'Capital & Investment Strategy',
      description: 'Engage with strategic investors and funding networks aligned with your long-term vision and scalable growth trajectory.',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Curated Innovation Access',
      description: 'Discover high-potential startups and emerging technologies aligned with your strategic priorities and industry focus.',
      icon: TrendingUp,
    },
    {
      title: 'Structured Pilot Programs',
      description: 'Validate new solutions through controlled pilot environments, enabling measurable outcomes with minimal operational risk.',
      icon: Target,
    },
    {
      title: 'Accelerated Digital Transformation',
      description: 'Integrate cutting-edge innovations into your business to enhance efficiency, agility, and long-term competitiveness.',
      icon: Building,
    },
    {
      title: 'Strategic Co-Innovation',
      description: 'Collaborate directly with startups to co-create tailored solutions that address real business challenges and unlock new value streams.',
      icon: Handshake,
    },
  ];

  const accelerationProcess = [
    {
      step: 'Assessment',
      description: 'We evaluate product maturity, scalability, and enterprise readiness to align your solution with real market opportunities.',
      image: 'https://images.pexels.com/photos/7691720/pexels-photo-7691720.jpeg',
      icon: Search,

    },
    {
      step: 'Strategic Alignment',
      description: 'Connect with enterprise partners whose business challenges align with your innovation and growth potential.',
      image: 'https://media.istockphoto.com/id/2210586431/photo/technology-leadership-business-the-way-forward-innovation-futuristic-artificial-intelligence.jpg?b=1&s=612x612&w=0&k=20&c=96qJwQq2HvvPgdPH2f08tWvUS2jwDlTyYwkTq4qHk04=',
      icon: Handshake,

    },
    {
      step: 'Pilot Deployment',
      description: 'Launch controlled pilot programs within enterprise environments to validate performance and business impact.',
      image: 'https://content.pexels.com/aigc-bundle/images/7b189f9e-fd23-4a17-9b22-b7a59db66249.jpg',
      icon: Rocket,

    },
    {
      step: 'Scale & Expansion',
      description: 'Transform successful pilots into long-term partnerships and scale across markets, business units and global regions.',
      image: 'https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?b=1&s=612x612&w=0&k=20&c=bpQMsH07ziELXla0SZJt84-w0JkxsVXs05c7T2Iygks=',
      icon: TrendingUp,
    },
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
      icon: Briefcase,
      name: 'Government & Public Sector',
      description: 'Critical infrastructure protection',
      gradient: 'from-gray-400 via-gray-500 to-gray-400'
    },
    {
      icon: ShoppingCart,
      name: 'Retail & E-commerce',
      description: 'Payment security, fraud detection, data protection',
      gradient: 'from-zinc-400 via-zinc-500 to-zinc-400'
    },
  ];

  const accelerationCards = [
    {
      title: 'Strategic Scaling',
      desc: 'We facilitate growth, investment readiness, and market expansion by connecting startups with enterprise ecosystems—transforming innovation into scalable business value.',
      icon: TrendingUp,
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200',
    },
    {
      title: 'Enterprise Integration',
      desc: 'We act as a bridge between startups and large organizations—enabling meaningful collaborations while guiding enterprises toward adopting innovative, high-impact solutions.',
      icon: Network,
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    },
    {
      title: 'Market Expansion',
      desc: 'Our acceleration framework supports startups in achieving market penetration, strategic partnerships, and long-term growth through structured advisory and ecosystem access.',
      icon: Rocket,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200',
    },
  ];

  const [activeAcceleration, setActiveAcceleration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAcceleration((prev) =>
        prev === accelerationCards.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-linear-to-br from-orange-50 via-amber-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.pexels.com/photos/7698819/pexels-photo-7698819.jpeg"
            alt="Acceleration Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Accelerating Growth Into Enterprise Success
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Bridging the gap between innovation and enterprise—connecting startups with strategic corporate partners
            </p>
          </motion.div>
        </div>
      </section>

      {/* ACCELERATION PURPOSE BLOCK */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - CONTENT */}
          <div className="space-y-6">

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The Engine Behind Startup Acceleration
            </h2>

            <p className="text-lg md:text-xl text-primary leading-relaxed">
              Acceleration at Digital Risk Lab is designed to help startups transition from
              validated ideas to high-growth ventures by unlocking access to enterprise ecosystems,
              strategic partnerships, and market expansion opportunities.
            </p>

            <p className="text-lg md:text-xl text-primary leading-relaxed">
              We enable organisations and innovators to collaborate effectively—transforming
              breakthrough ideas into scalable, investment-ready, and market-driven solutions.
            </p>

            {/* SLIDE INDICATORS */}
            <div className="flex gap-2 pt-4">
              {accelerationCards.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-6 rounded-full transition-all duration-400 ${i === activeAcceleration ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - SLIDING CARD */}
          <motion.div
            key={activeAcceleration}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-card rounded-2xl shadow-xl border border-amber-200"
          >

            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={accelerationCards[activeAcceleration].image}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-10">

              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 bg-linear-to-br from-amber-200 to-orange-200 rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = accelerationCards[activeAcceleration].icon;
                    return <Icon className="w-7 h-7 text-black" />;
                  })()}
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  {accelerationCards[activeAcceleration].title}
                </h3>
              </div>

              <p className="text-primary leading-relaxed">
                {accelerationCards[activeAcceleration].desc}
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      {/* STARTUPS + CORPORATES COMBINED */}

      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Acceleration Ecosystem
            </h2>

            <p className="text-2xl md:text-xl font-semibold text-[#d4af37] uppercase tracking-widest max-w-4xl mx-auto leading-relaxed px-4">
              Creating a structured ecosystem where enterprise needs meet startup innovation to deliver scalable, real-world solutions.
            </p>
          </motion.div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid lg:grid-cols-2 gap-14">

            {/* LEFT — STARTUPS */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">
                For Startups
              </h3>

              <div className="space-y-6">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: 6 }}
                      className="flex gap-5 items-start p-5 rounded-2xl
                bg-accent
                border border-[#E6D3B5]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                transition-all duration-300"
                    >

                      {/* IMAGE */}
                      <img
                        src={[
                          "https://images.pexels.com/photos/5520322/pexels-photo-5520322.jpeg",
                          "https://images.pexels.com/photos/7868972/pexels-photo-7868972.jpeg",
                          "https://images.pexels.com/photos/4990527/pexels-photo-4990527.jpeg",
                          "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg"
                        ][index]}
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      {/* CONTENT */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-[#F5EFE6] text-[#B8956A]">
                            <Icon className="w-5 h-5" />
                          </div>

                          <h4 className="text-lg font-semibold text-foreground">
                            {service.title}
                          </h4>
                        </div>

                        <p className="text-primary text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — CORPORATES */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">
                For Corporate Partners
              </h3>

              <div className="space-y-6">
                {corporateBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: -6 }}
                      className="flex gap-5 items-start p-5 rounded-2xl
                bg-accent
                border border-[#E6D3B5]
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                transition-all duration-300"
                    >

                      {/* IMAGE */}
                      <img
                        src={[
                          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600",
                          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
                          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
                          "https://content.pexels.com/aigc-bundle/images/f40f6d75-7012-4ee9-adff-a5d36e47e78d.jpg"
                        ][index]}
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      {/* CONTENT */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-[#F5EFE6] text-[#B8956A]">
                            <Icon className="w-5 h-5" />
                          </div>

                          <h4 className="text-lg font-semibold text-foreground">
                            {benefit.title}
                          </h4>
                        </div>

                        <p className="text-primary text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ACCELERATION PROCESS */}
      
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Acceleration Process
            </h2>
            <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest max-w-4xl mx-auto leading-relaxed px-4">
              A structured journey from enterprise readiness to scalable market impact
            </p>
          </motion.div>

          {/* PROCESS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

            {accelerationProcess.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >

                  {/* ARROW (desktop only) */}
                  {index < accelerationProcess.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.25 }}
                      className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                    >
                      <div className="w-12 h-12 flex items-center justify-center
                  bg-linear-to-r from-amber-200 to-orange-200
                  rounded-full shadow-md animate-pulse text-black">
                        →
                      </div>
                    </motion.div>
                  )}

                  {/* STEP NUMBER TOP CENTER */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 
              w-12 h-12 rounded-full 
              bg-ring text-black font-bold 
              flex items-center justify-center 
              shadow-lg z-20">
                    {index + 1}
                  </div>

                  {/* CARD */}
                  <div className="relative rounded-2xl overflow-hidden 
              bg-card backdrop-blur-xl 
              border border-white/10 
              shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)]
              transition-all duration-500">

                    {/* IMAGE */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.step}
                        className="w-full h-full object-cover 
                  transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 pt-10 text-center">

                      {/* ICON */}
                      <div className="w-14 h-14 mx-auto mb-4 
                  bg-ring text-black
                  rounded-xl flex items-center justify-center 
                  shadow-md group-hover:scale-110 transition">

                        <Icon size={26} className="text-black" />
                      </div>

                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.step}
                      </h4>

                      <p className="text-sm text-primary leading-relaxed">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* SUCCESS STORIES + TIMELINE */}
     
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>
      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE — SUCCESS METRICS */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>

              <p className="text-lg text-[#d4af37] mb-10 max-w-lg leading-relaxed">
                Delivering measurable outcomes through strategic partnerships
              </p>

              <div className="grid sm:grid-cols-2 gap-6">

                {[
                  { value: '$50M+', label: 'Strategic Partnerships Facilitated' },
                  { value: '30+', label: 'Startups Connected to Enterprises' },
                  { value: '60%', label: 'Pilot-to-Production Conversion' },
                  { value: '25+', label: 'Global Market Expansions' },
                  { value: '$100M+', label: 'Combined Revenue Generated' },
                  { value: '20+', label: 'Deployments Completed' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-2xl 
              bg-accent backdrop-blur-lg 
              border border-white/10 
              hover:border-[#d4af37]/40
              hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]
              transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {item.value}
                    </h3>
                    <p className="text-sm text-primary">
                      {item.label}
                    </p>
                  </motion.div>
                ))}

              </div>
            </motion.div>


            {/* RIGHT SIDE — TIMELINE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div className="relative rounded-3xl p-8 md:p-10
          bg-accent backdrop-blur-xl
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

                <h3 className="text-2xl md:text-3xl font-semibold text-popover-foreground mb-10">
                  Partnership Timeline
                </h3>

                <div className="relative space-y-10">

                  {/* vertical line */}
                  <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-primary to-transparent opacity-40" />

                  {[
                    { phase: 'Initial Engagement', duration: 'Week 1–2' },
                    { phase: 'Due Diligence & Alignment', duration: 'Week 3–6' },
                    { phase: 'Pilot Execution', duration: 'Month 2–4' },
                    { phase: 'Enterprise Scaling', duration: 'Month 5+' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="relative flex items-start gap-6"
                    >

                      {/* dot */}
                      <div className="relative z-10">
                        <div className="w-5 h-5 rounded-full bg-primary shadow-md" />
                      </div>

                      {/* content */}
                      <div className="flex-1 flex justify-between items-start">

                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {item.phase}
                          </h4>
                          <p className="text-sm text-primary mt-1">
                            Structured execution phase ensuring alignment and measurable outcomes
                          </p>
                        </div>

                        <span className="text-sm text-primary font-medium whitespace-nowrap">
                          {item.duration}
                        </span>

                      </div>

                    </motion.div>
                  ))}

                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/*<section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-9xl mx-auto">
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

      <section className="py-24 bg-linear-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Scale?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our acceleration program and connect with enterprise partners
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                For Startups
                <ArrowRight size={20} />
              </button>
              <button className="bg-card text-foreground px-8 py-4 rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-xl border border-border inline-flex items-center gap-2">
                For Corporates
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}

    </div>
  );
}