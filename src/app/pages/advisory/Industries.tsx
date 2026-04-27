import { motion } from "motion/react";
import { Link } from "react-router";
import { Laptop, DollarSign, Heart, School, Building2, Globe, ArrowRight } from "lucide-react";

const industries = [
  { icon: <Laptop className="w-12 h-12" />, name: "Startups & Digital Businesses", description: "Fast-moving digital companies need agile risk frameworks that enable growth without compromising security and trust." },
  { icon: <DollarSign className="w-12 h-12" />, name: "Financial Services", description: "Navigate complex regulatory requirements while maintaining customer trust and operational resilience." },
  { icon: <Heart className="w-12 h-12" />, name: "Healthcare", description: "Protect sensitive health data and ensure compliance in highly regulated environments." },
  { icon: <School className="w-12 h-12" />, name: "Education", description: "Build digital safety frameworks and enhance institutional risk capabilities." },
  { icon: <Building2 className="w-12 h-12" />, name: "Technology / SaaS", description: "Establish trust architectures and security postures that customers demand." },
  { icon: <Globe className="w-12 h-12" />, name: "Public Sector", description: "Strengthen governance, compliance, and digital resilience for public institutions." },
];

export function Industries() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-slate-300">
              Contextual digital risk expertise tailored to your industry
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-blue-500 mb-6">{industry.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-slate-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Industry Needs?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
