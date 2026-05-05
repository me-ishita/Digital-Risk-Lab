import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Rocket, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

type CardType = {
    id: number;
    title: string;
    route: string;
    icon: LucideIcon;
    gradient: string;
    imageFront: string;
    imageBack: string;
    points: string[];
    description: string;
};

const cards: CardType[] = [

    {
        id: 1,
        title: 'Innovation',
        route: '/innovation',
        icon: Sparkles,
        gradient: 'from-[#769dbb] to-[#F5F3EF]',
        imageFront:
            'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600',
        imageBack:
            'https://images.unsplash.com/photo-1744640326166-433469d102f2?w=600',
        points: [
            'AI & Emerging Tech Development',
            'Product Architecture & System Design',
            'Cybersecurity & Risk Intelligence',
            'Scalable Cloud Infrastructure',
            'Prototype to Production Engineering'
        ],
        description:
            'We engineer next-generation digital solutions—transforming bold ideas into powerful, scalable technologies ready for real-world impact.'
    },
    {
        id: 2,
        title: 'Incubation',
        route: '/incubation',
        icon: Rocket,
        gradient: 'from-[#769dbb] to-[#F5F3EF]',
        imageFront:
            'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=600',
        imageBack:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
        points: [
            'Idea Validation & Market Research',
            'Business Model & Strategy Design',
            'Mentorship & Founder Support',
            'MVP Development & Testing',
            'Investor Readiness & Pitch Structuring'
        ],
        description:
            'We transform early-stage ideas into structured, investment-ready ventures—guiding founders from concept to clarity with strategic direction.'
    },
    {
        id: 3,
        title: 'Acceleration',
        route: '/acceleration',
        icon: TrendingUp,
        gradient: 'from-[#769dbb] to-[#F5F3EF]',
        imageFront:
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200',
        imageBack:
            'https://images.unsplash.com/photo-1677442135136-760c813028c0?w=600',
        points: [
            'Go-to-Market Strategy',
            'Enterprise Partnerships & Alliances',
            'Scaling Infrastructure & Operations',
            'Funding & Growth Enablement',
            'Performance Analytics & Optimization'
        ],
        description:
            'We accelerate ventures into the market—connecting them with enterprise networks, capital, and infrastructure to scale sustainably.'
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
                <FlippingCard key={card.id} card={card} index={index} isFlipped={isFlipped} />
            ))}
        </div>
    );
}

type FlippingCardProps = {
    card: CardType;
    index: number;
    isFlipped: boolean;
};

function FlippingCard({ card, index, isFlipped }: FlippingCardProps) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="perspective-1000 h-125 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(card.route)}
        >
            <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >

                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden">
                    <div className="h-full rounded-2xl overflow-hidden border border-border bg-card shadow-xl hover:shadow-2xl transition">

                        <div className="h-65 overflow-hidden">
                            <img
                                src={card.imageFront}
                                className="w-full h-full object-cover group-hover:scale-105 transition"
                            />
                        </div>

                        <div className="p-6 space-y-4">

                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${card.gradient} p-2`}>
                                    <card.icon className="text-white w-full h-full" />
                                </div>

                                <h3 className="text-3xl font-bold">
                                    {card.title}
                                </h3>
                            </div>

                            <p className="text-sm text-muted-foreground  leading-relaxed">
                                {card.description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-primary gap-1 pt-2">
                                Explore <ArrowRight className="w-4 h-4" />
                            </div>

                        </div>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className={`h-full rounded-2xl overflow-hidden text-blue-950 bg-linear-to-br ${card.gradient}`}>

                        <div className="h-65 overflow-hidden">
                            <img src={card.imageBack} className="w-full h-full object-cover group-hover:scale-105 transition" />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">
                                Key Offerings
                            </h3>

                            <ul className="space-y-2 text-sm">
                                {card.points.map((point: string, idx: number) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: isFlipped ? 1 : 0, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex gap-2"
                                    >
                                        <CheckCircle className="w-4 h-4 mt-0.5" />
                                        {point}
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
        <section className="py-12">

            <div className="container mx-auto px-6">
                <FlippingCardsCarousel />
            </div>

            <style>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>
        </section>
    );
}