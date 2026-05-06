import { motion } from 'motion/react';
import { Lightbulb, Target, Map, Building2, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Incubation() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-50">
              Building the Next Generation of Ventures
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              The starting point for visionaries and entrepreneurs—where strong ideas transform into viable startups
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
                To provide a structured platform for individuals who have a strong business idea but need the environment to build it into a viable startup. We nurture your vision from concept to reality.
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
                We offer the foundational support required to get a business off the ground—workspace, business strategy, market research validation, and initial operational structuring.
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
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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

      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Journey With Us
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              A structured pathway from idea to market-ready startup
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg h-full">
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold shadow-lg">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 bg-linear-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center mb-4">
                      <Icon size={32} className="text-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
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

      <section className="py-24 bg-[#0f0d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Metrics
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <div className="text-5xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
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
