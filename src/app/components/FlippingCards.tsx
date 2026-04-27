import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const cards = [
    {
        id: 2,
        title: 'Innovation',
        icon: Sparkles,
        gradient: 'from-[#b59667] via-[#d0ae79] to-[#b59667]',
        imageFront:
            'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QUl8ZW58MHx8MHx8fDA%3D',
        imageBack:
            'https://images.unsplash.com/photo-1744640326166-433469d102f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fEFJfGVufDB8fDB8fHww',
        points: [
            'AI Risk Scanner™',
            'Cyber Pulse Dashboard',
            'Threat Simulation Engine',
            'Risk Quantification Engine',
            'PRISM Platform'
        ],
        description:
            'An advanced innovation ecosystem delivering AI-driven cybersecurity intelligence, real-time threat visibility, and predictive risk insights to empower faster, smarter decision-making.',
        hasExplore: true
    },
    {
        id: 3,
        title: 'Insights',
        icon: BarChart3,
        gradient: 'from-[#d4af37] via-[#b59667] to-[#d4af37]',
        imageFront:
            'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluc2lnaHRzfGVufDB8fDB8fHww',
        imageBack:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=60',
        points: [
            'Risk Analytics',
            'AI Monitoring',
            'Regulatory Updates',
            'Cyber Defense',
            'Compliance AI'
        ],
        description:
            'Thought leadership and advanced insights designed to help enterprises uncover hidden AI risks, stay ahead of regulatory shifts, and navigate evolving cyber threats with confidence.'
    },
    {
        id: 1,
        title: 'Advisory',
        icon: Shield,
        gradient: 'from-[#b59667] via-[#d0ae79] to-[#b59667]',
        imageFront:
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=60',
        imageBack:
            'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fEFJfGVufDB8fDB8fHww',
        points: [
            'Enterprise Risk Assessments',
            'Regulatory Compliance Strategy',
            'Risk Quantification & Reporting',
            'Board-Level Risk Advisory',
            'Security Architecture Design'
        ],
        description:
            'Enterprise-grade cybersecurity advisory delivering risk intelligence, regulatory alignment, and strategic insights to help leadership drive confident, resilient decisions in an evolving threat landscape.'
    }
];

function FlippingCardsCarousel() {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped((prev) => !prev);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid md:grid-cols-3 gap-10">
            {cards.map((card, index) => (
                <FlippingCard
                    key={card.id}
                    card={card}
                    index={index}
                    isFlipped={isFlipped}
                />
            ))}
        </div>
    );
}

function FlippingCard({
    card,
    index,
    isFlipped
}: {
    card: typeof cards[0];
    index: number;
    isFlipped: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="perspective-1000 h-125"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* FRONT FACE */}
                <div className="absolute inset-0 backface-hidden">
                    <div className="relative h-full bg-card rounded-2xl shadow-2xl overflow-hidden border border-border group cursor-pointer transition-colors duration-300">

                        <div className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div className="relative h-full flex flex-col">

                            {/* IMAGE */}
                            <div className="h-70 w-full overflow-hidden">
                                <img
                                    src={card.imageFront}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-5 flex flex-col gap-2">

                                {/* ICON + TITLE */}
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${card.gradient} p-2`}>
                                        <card.icon className="w-full h-full text-white" />
                                    </div>

                                    <h3 className="text-4xl font-bold">
                                        <span className={`bg-linear-to-r ${card.gradient} bg-clip-text text-transparent`}>
                                            {card.title}
                                        </span>
                                    </h3>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-lg text-foreground/80 leading-snug">
                                    {card.description}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className={`h-full bg-linear-to-br ${card.gradient} rounded-2xl shadow-2xl overflow-hidden text-white`}>

                        {/* IMAGE */}
                        <div className="h-65 w-full">
                            <img
                                src={card.imageBack}
                                className="w-full h-full object-cover opacity-70"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 flex flex-col">

                            <h3 className="text-2xl font-semibold mb-3">
                                Key Offerings
                            </h3>

                            <ul className="space-y-2 text-sm grow">
                                {card.points.map((point, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: isFlipped ? 1 : 0, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4 mt-0.5" />
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </ul>


                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}

export function FlippingCards() {
    return (
        <section className="py-24 bg-transparent">

            <div className="container mx-auto px-6">
               
            
                <FlippingCardsCarousel />
            </div>

            <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </section>
    );
}
