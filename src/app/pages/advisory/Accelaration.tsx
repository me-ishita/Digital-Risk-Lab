import { motion } from 'motion/react';
import { TrendingUp, Handshake, Target, Globe, Building, Briefcase, ArrowRight, CheckCircle, ShoppingCart, Heart, Building2 } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Card } from '@/app/components/ui/card';

export function Acceleration() {
  const services = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Connect with Fortune 500 companies and industry leaders',
    },
    {
      icon: Target,
      title: 'Market Penetration',
      description: 'Navigate complex enterprise sales cycles',
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Scale your solution to international markets',
    },
    {
      icon: Briefcase,
      title: 'Investment Advisory',
      description: 'Secure funding from strategic investors',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Innovation Access',
      description: 'Early access to cutting-edge solutions and technologies',
      icon: TrendingUp,
    },
    {
      title: 'Pilot Programs',
      description: 'Low-risk testing of innovative products in real environments',
      icon: Target,
    },
    {
      title: 'Digital Transformation',
      description: 'Accelerate your digital transformation initiatives',
      icon: Building,
    },
  ];

  const accelerationProcess = [
    {
      step: 'Assessment',
      description: 'Evaluate readiness for corporate partnerships',
    },
    {
      step: 'Match-Making',
      description: 'Connect with aligned corporate partners',
    },
    {
      step: 'Pilot Launch',
      description: 'Deploy solution in controlled environment',
    },
    {
      step: 'Scaling',
      description: 'Expand successful partnerships',
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
            <h1 className="text-5xl md:text-6xl font-bold text-amber-50 mb-6">
              Driving Enterprise Growth
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Bridging the gap between innovation and enterprise—connecting startups with strategic corporate partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl p-8 border border-border shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">The Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                To facilitate scaling, investment, and market penetration through high-level partnerships with established organizations. We transform innovation into enterprise value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-xl p-8 border border-primary/20 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">The Function</h3>
              <p className="text-foreground leading-relaxed">
                We act as a bridge between startups and large organizations, providing strategic advisory for entrepreneurs on corporate engagement while guiding enterprises toward innovative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              For Startups
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accelerate your growth through strategic corporate partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
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

      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              For Corporate Partners
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Access innovative solutions and accelerate digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-card rounded-xl p-8 border border-border shadow-lg"
                >
                  <div className="w-16 h-16 bg-linear-to-br from-orange-200 to-amber-200 rounded-full flex items-center justify-center mb-6">
                    <Icon size={32} className="text-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The Acceleration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to enterprise partnership
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-orange-200 via-primary to-amber-300 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {accelerationProcess.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground text-center mb-2">
                      {item.step}
                    </h4>
                    <p className="text-sm text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-white mb-8">
                Our partnerships have created measurable value for both startups and enterprises
              </p>
              <div className="space-y-4">
                {[
                  'Facilitated $50M+ in strategic partnerships',
                  'Connected 30+ startups with Fortune 500 companies',
                  'Average pilot-to-production conversion rate of 60%',
                  'Expanded startups into 25+ international markets',
                  'Generated $100M+ in combined revenue',
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-white">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Partnership Timeline
                </h3>
                <div className="space-y-6">
                  {[
                    { phase: 'Initial Contact', duration: 'Week 1-2' },
                    { phase: 'Due Diligence', duration: 'Week 3-6' },
                    { phase: 'Pilot Program', duration: 'Month 2-4' },
                    { phase: 'Full Deployment', duration: 'Month 5+' },
                  ].map((timeline, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-foreground">{timeline.phase}</span>
                          <span className="text-sm text-muted-foreground">{timeline.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
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

      {/*<section className="py-24 bg-linear-to-br from-amber-50 to-orange-50">
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
