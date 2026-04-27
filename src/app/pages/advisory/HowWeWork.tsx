import { motion } from "motion/react";
import { Link } from "react-router";
import { Search, BarChart3, Lightbulb, Rocket, RefreshCcw, ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Diagnose",
    icon: <Search className="w-10 h-10" />,
    description: "Assess current state and identify gaps",
    activities: ["Current state assessment", "Stakeholder interviews", "Gap analysis", "Initial recommendations"],
  },
  {
    number: "02",
    title: "Assess",
    icon: <BarChart3 className="w-10 h-10" />,
    description: "Evaluate risks and establish priorities",
    activities: ["Risk identification", "Impact analysis", "Priority mapping", "Roadmap development"],
  },
  {
    number: "03",
    title: "Design",
    icon: <Lightbulb className="w-10 h-10" />,
    description: "Develop frameworks and solutions",
    activities: ["Framework design", "Policy development", "Control specification", "Solution architecture"],
  },
  {
    number: "04",
    title: "Enable",
    icon: <Rocket className="w-10 h-10" />,
    description: "Implement and build capability",
    activities: ["Implementation support", "Capability building", "Tool configuration", "Training delivery"],
  },
  {
    number: "05",
    title: "Embed",
    icon: <RefreshCcw className="w-10 h-10" />,
    description: "Operationalize and sustain",
    activities: ["Process integration", "Continuous improvement", "Performance monitoring", "Ongoing support"],
  },
];

export function HowWeWork() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">How We Work</h1>
            <p className="text-xl text-slate-300">
              A structured, repeatable approach to digital risk transformation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.p
              className="text-lg text-slate-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our five-phase methodology ensures comprehensive digital risk capability building and transformation. This approach mirrors how leading consulting firms deliver structured, measurable outcomes through systematic capability-building and transformation processes.
            </motion.p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-5xl font-bold text-blue-500/20">{phase.number}</div>
                      <div className="text-blue-500">{phase.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-slate-400">{phase.description}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-4 text-blue-400">Key Activities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.activities.map((activity: string, i: number) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span className="text-slate-300">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why This Approach Works</h2>
            <p className="text-lg text-slate-300 mb-8">
              Our methodology is built on proven frameworks used by leading advisory firms like KPMG and McKinsey. We combine strategic thinking with practical execution to deliver sustainable digital risk capability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Structured", description: "Repeatable, measurable process" },
                { title: "Practical", description: "Action-oriented deliverables" },
                { title: "Sustainable", description: "Long-term capability building" },
              ].map((benefit, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-500 to-orange-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Start Your Transformation</h2>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-all"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
