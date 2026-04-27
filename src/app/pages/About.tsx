import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { useRef } from "react";

export function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      description:
        "We uphold the highest standards of honesty and transparency.",
    },
    {
      icon: Zap,
      title: "Innovation",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description:
        "We push boundaries to solve evolving digital risks.",
    },
    {
      icon: Award,
      title: "Accountability",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      description:
        "We deliver measurable outcomes with ownership.",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description:
        "We maintain exceptional quality across all engagements.",
    },
  ];

  const stats = [
    { number: "500+", label: "Organizations Served", icon: Users },
    { number: "15+", label: "Years of Expertise", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "50+", label: "Certifications", icon: Shield },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">

      {/* HERO */}
      <section className="py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-gray-400 to-purple-400 bg-clip-text text-transparent"
        >
          About Digital Risk Lab
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-xl mx-auto"
        >
          Cybersecurity, AI governance, and digital resilience—built for a
          world where risk and innovation go hand in hand.
        </motion.p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-14">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-semibold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 mb-3">
              Digital Risk Lab bridges the gap between technology and
              business strategy. We help organizations navigate complex
              digital risks without slowing innovation.
            </p>

            <p className="text-gray-600">
              From AI governance to cybersecurity architecture, we
              transform risk into a strategic advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Card className="p-6 text-center bg-white/70 backdrop-blur-xl shadow-lg border border-white/30 rounded-2xl">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-14">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6">

          {[{
            title: "Our Mission",
            icon: Target,
            text: "Enable secure innovation by embedding risk intelligence into every decision."
          },
          {
            title: "Our Vision",
            icon: Eye,
            text: "To lead globally in AI risk governance and digital trust frameworks."
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl shadow-lg rounded-2xl border border-white/30">
                <item.icon className="w-10 h-10 mb-3 text-purple-500" />
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-14">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl text-center mb-6 font-semibold">
            Our Values
          </h2>

          <div className="flex justify-end gap-3 mb-3">
            <button onClick={() => scroll("left")} className="px-3 py-1 bg-gray-200 rounded">←</button>
            <button onClick={() => scroll("right")} className="px-3 py-1 bg-gray-200 rounded">→</button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="min-w-[260px]"
              >
                <Card className="overflow-hidden rounded-xl shadow-lg bg-white/70 backdrop-blur-xl">
                  <div className="h-36 overflow-hidden">
                    <img
                      src={value.image}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-4">
                    <value.icon className="w-6 h-6 mb-2 text-indigo-500" />
                    <h3 className="font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14">
        <div className="container mx-auto px-6 text-center max-w-3xl">

          <h2 className="text-3xl font-semibold mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mb-6">
            We don’t just manage risk—we turn it into a competitive advantage
            through cutting-edge intelligence and strategic execution.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg"
          >
            Explore Services
          </motion.button>
        </div>
      </section>
    </div>
  );
}