import { motion } from 'motion/react';
import { Lightbulb, Target, Map, Building2, Users, TrendingUp, CheckCircle, Briefcase, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useEffect, useState } from 'react';

export function Incubation() {

  const incubationCards = [
    {
      title: 'Vision Development',
      desc: 'To provide a structured platform for individuals with strong business ideas who need the right ecosystem to transform concepts into viable startups. We nurture entrepreneurial vision from early ideation to real-world execution.',
      icon: Lightbulb,
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200',
    },
    {
      title: 'Foundational Enablement',
      desc: 'We provide the foundational support required to launch and structure emerging ventures—offering strategic guidance, operational planning, workspace support, business validation, and market-readiness development.',
      icon: Briefcase,
      image:
        'https://media.istockphoto.com/id/810529310/photo/presenting-some-of-her-top-ideas-to-the-team.jpg?b=1&s=612x612&w=0&k=20&c=LdWUyZoIDJMBJ1Ektyuh_3oJ_IemAoYWVCPCzVeq77I=',
    },
    {
      title: 'Growth Readiness',
      desc: 'Our incubation model helps founders build confidence, refine business direction, strengthen execution capabilities, and prepare scalable ventures for acceleration, investment, and long-term growth.',
      icon: Rocket,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200',
    },
  ];

  const [activeIncubation, setActiveIncubation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIncubation((prev) =>
        prev === incubationCards.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const supportServices = [
    {
      icon: Building2,
      title: 'Workspace',
      description: 'Professional environment to develop your ideas',
    },
    {
      icon: Map,
      title: 'Business Strategy',
      description: 'Fundamental business planning and direction',
    },
    {
      icon: Target,
      title: 'Market Research',
      description: 'Validation of your business concept',
    },
    {
      icon: TrendingUp,
      title: 'Operational Structure',
      description: 'Initial operational framework and processes',
    },
  ];

  const journeySteps = [
    {
      title: 'Vision Assessment',
      description: 'We evaluate your business idea and its market potential',
      icon: Lightbulb,
    },
    {
      title: 'Foundation Building',
      description: 'Establish core business model and value proposition',
      icon: Building2,
    },
    {
      title: 'Resource Allocation',
      description: 'Access workspace, mentorship, and initial funding',
      icon: Users,
    },
    {
      title: 'Market Validation',
      description: 'Test assumptions and refine your product-market fit',
      icon: Target,
    },
  ];

  const successMetrics = [
    { value: '85%', label: 'Success Rate' },
    { value: '6-12', label: 'Months Average' },
    { value: '50+', label: 'Startups Launched' },
    { value: '100+', label: 'Mentors Available' },
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* HERO SECTION */}
      <section className="relative py-24 bg-linear-to-br from-amber-50 via-amber-100 to-orange-50 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.pexels.com/photos/6077983/pexels-photo-6077983.jpeg"
            alt="Incubation Background"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Building the Next Generation of Ventures
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              The starting point for visionaries and entrepreneurs—where strong ideas transform into viable startups
            </p>
          </motion.div>
        </div>
      </section>

      {/* INCUBATION PURPOSE BLOCK */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-blue-800/70 to-transparent"></div>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - CONTENT */}
          <div className="space-y-6">

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Where Startups Begin to Take Shape
            </h2>

            <p className="text-lg md:text-xl text-primary leading-relaxed">
              Incubation at Digital Risk Lab is designed for founders with ambitious ideas
              who need the right environment, strategic guidance, and operational structure
              to transform vision into a scalable business.
            </p>

            <p className="text-lg md:text-xl text-primary leading-relaxed">
              We help early-stage ventures move beyond concepts by providing the foundation
              required to validate, structure, and prepare businesses for sustainable growth
              and long-term market readiness.
            </p>

            {/* SLIDE INDICATORS */}
            <div className="flex gap-2 pt-4">
              {incubationCards.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-6 rounded-full transition-all duration-400 ${i === activeIncubation
                    ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - SLIDING CARD */}
          <motion.div
            key={activeIncubation}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-card rounded-2xl shadow-xl border border-amber-200"
          >

            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={incubationCards[activeIncubation].image}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-10">

              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 bg-linear-to-br from-amber-200 to-orange-200  rounded-xl flex items-center justify-center">

                  {(() => {
                    const Icon = incubationCards[activeIncubation].icon;
                    return <Icon className="w-7 h-7 text-black" />;
                  })()}
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  {incubationCards[activeIncubation].title}
                </h3>
              </div>

              <p className="text-primary leading-relaxed">
                {incubationCards[activeIncubation].desc}
              </p>

            </div>
          </motion.div>

        </div>
      </section>

      {/* JOURNEY & SERVICES */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>

      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-6">
              Your Journey With Us
            </h2>

            <p className="text-2xl md:text-xl font-semibold text-[#d4af37] uppercase tracking-widest max-w-4xl mx-auto leading-relaxed px-4">
              A structured pathway from idea to market-ready startup
            </p>
          </motion.div>

          {/* JOURNEY FLOW */}
          <div className="relative">

            {/* CONNECTING LINE */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

              {journeySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="relative group"
                  >

                    {/* STEP NUMBER */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 
              w-12 h-12 rounded-full 
              bg-[#d4af37] text-black font-bold 
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
                      <div className="h-40 overflow-hidden">
                        <img
                          src={[
                            "https://images.pexels.com/photos/7691720/pexels-photo-7691720.jpeg",
                            "https://content.pexels.com/aigc-bundle/images/5ff8258d-6bee-47d3-ad8c-4ba2dff0d1ef.jpg",
                            "https://content.pexels.com/aigc-bundle/images/45251e4a-1afe-4ce3-96dd-af7031c865ee.jpg",
                            "https://images.pexels.com/photos/7605981/pexels-photo-7605981.jpeg"
                          ][index]}
                          className="w-full h-full object-cover 
                    group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-6 text-center">

                        {/* ICON */}
                        <div className="w-14 h-14 mx-auto mb-4 
                  bg-linear-to-br from-amber-200 to-orange-200 
                  rounded-xl flex items-center justify-center 
                  shadow-md group-hover:scale-110 transition">

                          <Icon size={26} className="text-black" />
                        </div>

                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          {step.title}
                        </h4>

                        <p className="text-primary text-sm leading-relaxed">
                          {step.description} 
                        </p>
                      </div>

                    </div>

                    
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* DIFFERENTIATORS & SERVICES */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                What Makes Us Different
              </h2>
              <div className="space-y-4">
                {[
                  'Integrated ecosystem connecting you to Innovation and Acceleration pillars',
                  'Expert mentorship from seasoned entrepreneurs and industry leaders',
                  'Access to cutting-edge technology development resources',
                  'Direct pathways to corporate partnerships and funding',
                  'Proven track record of successful startup launches',
                  'Comprehensive support from ideation to market entry',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className=" bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-primary/20">
                <ImageWithFallback
                  src="https://images.pexels.com/photos/7710148/pexels-photo-7710148.jpeg"
                  alt="Team collaboration"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-amber-600/70 to-transparent"></div>

      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-2xl md:text-xl font-semibold text-[#d4af37] uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
              Everything you need to transform your vision into a thriving business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all shadow-lg group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/*<section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center  bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-12 border border-primary/30"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of innovators and transform your vision into reality
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
              Apply to Incubator
            </button>
          </motion.div>
        </div>
      </section> 
      */}
    </div>
  );
}