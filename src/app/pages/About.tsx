import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from "react-router-dom";
import { Lightbulb, Cpu, Handshake, ArrowRight, Globe, TrendingUp, CheckCircle, Repeat, Building2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import prismBG from '../../assets/prism-bg.png';

export function About() {
    const [activePillar, setActivePillar] = useState<number | null>(null);
    const [currentStory, setCurrentStory] = useState(0);
    const [currentLoop, setCurrentLoop] = useState(0);

    const pillars = [
        {
            id: 1,
            title: 'Incubation',
            icon: Lightbulb,
            color: '#d0ae79',
            tagline: 'Where Ideas Take Shape',
            purpose: 'To provide a structured platform for individuals who have a strong business idea but need the environment to build it into a viable startup.',
            function: 'It offers the foundational support required to get a business off the ground. This includes workspace, fundamental business strategy, market research validation, and initial operational structuring.',
            features: [
                'Workspace & Infrastructure',
                'Business Strategy Development',
                'Market Research & Validation',
                'Initial Operational Structuring',
                'Mentorship Programs'
            ]
        },
        {
            id: 2,
            title: 'Innovation',
            icon: Cpu,
            color: '#d0ae79',
            tagline: 'Building the Future',
            purpose: 'To turn theoretical concepts into functional, cutting-edge digital products.',
            function: 'It houses a network of technology experts who provide hands-on development, architecture design, and innovative tech solutions. Whether a startup needs AI integration, robust data analytics, or complex software development, this pillar acts as their dedicated technical team.',
            features: [
                'PRISM Platform',
                'Civil Nuclear Industry Security Controller',
                'Core Banking Platform',
                'AI Integration & Development',
                'Data Analytics Solutions'
            ]
        },
        {
            id: 3,
            title: 'Acceleration',
            icon: Handshake,
            color: '#b59667',
            tagline: 'Connecting Innovation to Enterprise',
            purpose: 'To facilitate scaling, investment, and market penetration through high-level partnerships.',
            function: 'It acts as a bridge between the startups (from the Incubator) and large, established organizations. It provides strategic advisory for entrepreneurs on how to approach big business, while simultaneously advising corporate entities on how to adopt the innovative solutions being built in the Lab.',
            features: [
                'Corporate Partnership Development',
                'Investment Facilitation',
                'Market Penetration Strategy',
                'Pilot Program Coordination',
                'Enterprise Integration Support'
            ]
        }
    ];

    const stories = [
        {
            title: 'From Concept to Reality',
            description: 'We transform ambitious ideas into market-ready innovations through our three-pillar ecosystem. Every startup begins with a vision—we provide the framework to make it tangible.',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1080'
        },
        {
            title: 'Building Tomorrow\'s Solutions',
            description: 'Our Innovation team leverages cutting-edge technology to develop platforms that solve real-world challenges. From AI to cybersecurity, we build what the future demands.',
            image: 'https://content.pexels.com/aigc-bundle/images/270c15d0-a370-4351-bdaf-48e81e2f92b6.jpg'
        },
        {
            title: 'Strategic Growth Partners',
            description: 'We connect visionary startups with established enterprises, creating partnerships that drive mutual growth. Your innovation becomes their competitive advantage.',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1080'
        }
    ];

    const loopSteps = [
        { label: 'Idea', icon: Lightbulb, description: 'Entrepreneur enters with a concept', step: 1 },
        { label: 'Build', icon: Cpu, description: 'Tech team creates the solution', step: 2 },
        { label: 'Partner', icon: Handshake, description: 'Connect with corporate partners', step: 3 },
        { label: 'Fund', icon: TrendingUp, description: 'Receive feedback and funding', step: 4 },
        { label: 'Repeat', icon: Repeat, description: 'Cycle continues with new resources', step: 5 }
    ];

    const caseStudies = [
        {
            title: 'FinTech Security Platform',
            image: prismBG,
            problem: 'Regional bank struggled with outdated security infrastructure and compliance gaps',
            solution: 'Built PRISM platform for automated regulatory compliance and real-time risk monitoring',
            outcome: '40% reduction in compliance costs, 100% audit readiness, zero security incidents'
        },
        {
            title: 'Civil Nuclear Security Controller',
            image: 'https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg',
            problem: 'Critical infrastructure needed advanced threat detection and automated response',
            solution: 'Developed Civil Nuclear Industry Security Controller with AI-powered monitoring',
            outcome: 'Real-time threat detection, 99.99% uptime, government certification achieved'
        },
        {
            title: 'Wearable Money – AKOIN',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600',
            problem: 'Legacy banking systems limiting digital transformation and customer experience',
            solution: 'Built modern Core Banking Platform with API-first architecture and cloud scalability',
            outcome: '10x faster transactions, 60% cost reduction, seamless integration capabilities'
        }
    ];

    // Auto-advance story slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStory((prev) => (prev + 1) % stories.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Auto-advance innovation loop
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLoop((prev) => (prev + 1) % loopSteps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();

    const nextStory = () => setCurrentStory((prev) => (prev + 1) % stories.length);
    const prevStory = () => setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-28 px-6 md:px-20 overflow-hidden">

                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container mx-auto px-6 text-center relative z-10"
                >

                    {/* HEADING (Updated) */}
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                        <span className="text-white">
                            The Digital Risk Labs Ecosystem
                        </span>
                    </h2>

                    {/* SUBTEXT (Short + Premium) */}
                    <p className="text-xl md:text-lg font-semibold text-white uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
                        Transforming cyber, AI, and regulatory risk into strategic advantage
                    </p>

                </motion.div>
            </section>

            {/* Storytelling Slider */}
            <section className="py-20 bg-muted relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative h-125 rounded-2xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStory}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <div className="grid md:grid-cols-2 h-full">
                                        <div className="relative">
                                            <img
                                                src={stories[currentStory].image}
                                                alt={stories[currentStory].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-r from-transparent to-muted"></div>
                                        </div>
                                        <div className="flex items-center justify-center p-12 bg-box">
                                            <div>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <h2 className="text-4xl mb-6 text-primary">
                                                        {stories[currentStory].title}
                                                    </h2>
                                                    <p className="text-lg leading-relaxed mb-8">
                                                        {stories[currentStory].description}
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        {stories.map((_, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => setCurrentStory(idx)}
                                                                className={`h-1 rounded-full transition-all duration-300 ${idx === currentStory ? 'w-8 bg-primary' : 'w-4 bg-border'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <button
                                onClick={prevStory}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-box transition-colors z-10"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextStory}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-box transition-colors z-10"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
                            Our Three-Pillar Ecosystem
                        </h2>
                        <p className="text-xl md:text-lg font-semibold text-muted-foreground uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
                            A comprehensive framework that transforms ideas into market-ready innovations
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => setActivePillar(pillar.id)}
                                onMouseLeave={() => setActivePillar(null)}
                            >
                                <Card className={`p-8 h-full transition-all duration-500 border-2 cursor-pointer bg-box ${activePillar === pillar.id ? 'border-primary scale-105 shadow-xl' : 'border-border'
                                    }`}>
                                    <div
                                        className={`w-16 h-16 rounded-xl p-4 mb-6 mx-auto transition-transform duration-300 ${activePillar === pillar.id ? 'scale-110' : ''
                                            }`}
                                        style={{ backgroundColor: pillar.color }}
                                    >
                                        <pillar.icon className="w-full h-full text-black" />
                                    </div>

                                    <h3 className="text-2xl mb-2 text-center text-primary">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-center mb-4 text-accent-foreground">
                                        {pillar.tagline}
                                    </p>

                                    <AnimatePresence mode="wait">
                                        {activePillar === pillar.id ? (
                                            <motion.div
                                                key="expanded"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="space-y-4"
                                            >
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Purpose</h4>
                                                    <p className="text-sm">{pillar.purpose}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Function</h4>
                                                    <p className="text-sm">{pillar.function}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Key Features</h4>
                                                    <ul className="space-y-2">
                                                        {pillar.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start text-sm">
                                                                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-primary" />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="collapsed"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="text-center"
                                            >
                                                <p className="text-muted-foreground text-sm mb-4">{pillar.purpose}</p>
                                                <p className="text-xs text-muted-foreground">Hover to learn more</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Loop - Automated */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
                            The Innovation Loop
                        </h2>
                        <p className="text-xl md:text-lg font-semibold text-muted-foreground uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
                            A continuous cycle that transforms ideas into funded, scalable businesses
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative">
                            {/* Loop visualization */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                                {loopSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: currentLoop === index ? 1.1 : 1,
                                                    backgroundColor: currentLoop === index ? '#1E3A8A' : '#d6dbe3'
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="w-24 h-24 rounded-2xl p-6 border-2 border-border flex items-center justify-center"
                                            >
                                                <step.icon
                                                    className="w-full h-full"
                                                    style={{ color: currentLoop === index ? '#ede4d8' : '#292b57' }}
                                                />
                                            </motion.div>

                                            {currentLoop === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-box border border-border rounded-lg px-4 py-2 shadow-lg whitespace-nowrap"
                                                >
                                                    <p className="text-sm font-medium">{step.description}</p>
                                                </motion.div>
                                            )}
                                        </div>
                                        <p className="text-center mt-20 text-primary font-medium">{step.label}</p>

                                        {index < loopSteps.length - 1 && (
                                            <ArrowRight className="hidden md:block absolute w-6 h-6 text-primary opacity-50" style={{ left: `${(index + 1) * 20 - 2}%`, top: '35%' }} />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 }}
                                className="mt-24 text-center"
                            >
                                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                                    The true strength of Digital Risk Lab is how these three pillars interact in a continuous loop:
                                    funding from partners flows back into the Incubator, creating a sustainable ecosystem of innovation.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
                            Featured Success Stories
                        </h2>
                        <p className="text-xl md:text-lg font-semibold text-muted-foreground uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
                            Real transformations powered by our three-pillar ecosystem
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full border-border bg-box hover:shadow-xl transition-shadow duration-300">
                                    <div className="h-1 bg-primary"></div>

                                    <div className="h-52 overflow-hidden bg-box flex items-center justify-center">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-contain p-6 transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl mb-6 text-primary">{study.title}</h3>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm uppercase tracking-wide text-destructive mb-2">Problem</h4>
                                                <p className="text-sm text-muted-foreground">{study.problem}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm uppercase tracking-wide text-primary mb-2">Solution</h4>
                                                <p className="text-sm text-muted-foreground">{study.solution}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm uppercase tracking-wide text-accent-foreground mb-2">Outcome</h4>
                                                <p className="text-sm text-muted-foreground">{study.outcome}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Impact */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
                            Global Impact
                        </h2>
                        <p className="text-xl md:text-lg font-semibold text-muted-foreground uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
                            Transforming businesses across continents and industries
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-border bg-box overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1080"
                                    alt="Global network"
                                    className="w-full h-80 object-cover"
                                />

                            </Card>
                        </motion.div>

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
              bg-muted backdrop-blur-lg 
              border border-black/10 
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
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-6 text-center relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl mb-6 text-primary-foreground">
                        Ready to Transform Your Idea?
                    </h2>
                    <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                        Join our ecosystem and turn your vision into a funded, scalable reality
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate("/contact")}
                        className="bg-card text-primary hover:bg-card/90 px-8 py-6 text-lg shadow-2xl group"
                    >
                        Join the Ecosystem
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </section>
        </div>
    );
}
