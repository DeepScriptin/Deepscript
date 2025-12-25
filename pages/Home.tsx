import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, Cpu, MessageSquareCode, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1920',
    title: 'Architecting Autonomy',
    subtitle: 'Neural Enterprise Ecosystems',
    color: 'from-brand-purple to-brand-accent'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c7185?auto=format&fit=crop&q=80&w=1920',
    title: 'Intelligence Unbound',
    subtitle: 'Beyond Code, Toward Logic',
    color: 'from-brand-purple to-brand-accent'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=1920',
    title: 'Future Protocol',
    subtitle: 'Synchronous AI Integration',
    color: 'from-brand-purple to-brand-accent'
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-brand-support/80 z-10 backdrop-blur-[1px]" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover animate-[kenburns_30s_linear_infinite]"
            />
            
            <motion.div 
              style={{ opacity }}
              className="absolute inset-0 z-20 flex items-center justify-center px-4"
            >
              <div className="max-w-6xl text-center">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ delay: 0.5 }}
                  className={`inline-block px-6 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-brand-purple text-xs font-black uppercase tracking-[0.5em] mb-8`}
                >
                  {slide.title}
                </motion.div>
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-7xl md:text-[10rem] font-black text-brand-light mb-12 tracking-tighter leading-none"
                >
                  {slide.subtitle}
                </motion.h1>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                  <Link
                    to="/services"
                    className="px-14 py-7 bg-gradient-to-r from-brand-purple to-brand-accent text-brand-light font-black text-sm uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(203,0,218,0.5)] group flex items-center"
                  >
                    <span>Deploy Logic</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-14 py-7 bg-white/5 backdrop-blur-2xl border border-white/10 text-brand-light font-black text-sm uppercase tracking-widest rounded-full transition-all duration-500 hover:bg-white/10"
                  >
                    Consult Architect
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
        
        <div className="absolute bottom-16 left-0 right-0 z-30 flex justify-center space-x-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-700 ${
                idx === currentSlide ? 'bg-brand-purple w-20 shadow-[0_0_15px_#cb00da]' : 'bg-white/10 w-8 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust & Innovation Section */}
      <section className="py-48 bg-brand-support relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-brand-purple/5 rounded-full blur-[200px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-brand-purple font-black tracking-[0.4em] uppercase text-xs">The Neural Standard</h2>
              <h3 className="text-6xl md:text-8xl font-black text-brand-light leading-[0.9] tracking-tighter">We build intelligence that <span className="accent-gradient">learns</span>.</h3>
              <p className="text-2xl text-gray-500 leading-relaxed font-light">
                DeepScript architects custom AI layers that integrate seamlessly into your enterprise fabric, evolving with every data point.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-10">
                <div className="space-y-4">
                  <div className="text-brand-purple font-black text-6xl tracking-tighter">2025</div>
                  <div className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-black">Future-Safe Protocol</div>
                </div>
                <div className="space-y-4">
                  <div className="text-brand-accent font-black text-6xl tracking-tighter">Zero</div>
                  <div className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-black">Latency Bottleneck</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-brand-purple/20 rounded-[4rem] blur-[120px] opacity-30 animate-pulse" />
              <div className="relative glass p-16 rounded-[5rem] border border-brand-purple/20 h-full flex flex-col items-center justify-center overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-2000"
                  alt="Cyber Security"
                />
                <div className="relative z-10 text-center space-y-10">
                  <Shield className="w-24 h-24 text-brand-purple mx-auto drop-shadow-[0_0_20px_#cb00da]" />
                  <h4 className="text-4xl font-black text-brand-light tracking-tight">Security-First Logic</h4>
                  <p className="text-gray-400 text-lg font-light">Hardened architectures ensuring your proprietary data stays under absolute sovereign control.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-48 bg-brand-primary/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-brand-purple font-black tracking-[0.5em] uppercase text-xs mb-6">Neural Primitives</h2>
            <h3 className="text-7xl font-black text-brand-light tracking-tighter leading-none">High-Frequency Intelligence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Brain className="w-10 h-10" />}
              title="Cognitive Design"
              description="Interfaces that anticipate human behavior using advanced neural predictive modeling."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Cpu className="w-10 h-10" />}
              title="LLM Fine-Tuning"
              description="Niche-specific models trained on your sovereign business datasets for absolute precision."
              delay={0.2}
            />
            <FeatureCard 
              icon={<MessageSquareCode className="w-10 h-10" />}
              title="Agentic Systems"
              description="Autonomous agents capable of complex decision-making and tool-use within your stack."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-60 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-support" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[180px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6"
        >
          <div className="w-32 h-32 rounded-[2.5rem] bg-brand-purple/10 flex items-center justify-center mx-auto mb-14 border border-brand-purple/30 shadow-[0_0_60px_rgba(203,0,218,0.3)]">
            <Rocket className="w-14 h-14 text-brand-purple animate-pulse" />
          </div>
          <h2 className="text-7xl md:text-[12rem] font-black text-brand-light mb-12 tracking-tighter leading-none">Ready to <span className="accent-gradient">Deploy?</span></h2>
          <p className="text-3xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            The era of manual software is ending. Orchestrate your neural future with DeepScript.
          </p>
          <Link to="/contact" className="inline-block px-20 py-8 bg-gradient-to-r from-brand-purple to-brand-accent text-brand-light font-black text-lg uppercase tracking-[0.3em] rounded-full hover:scale-110 transition-all shadow-[0_20px_80px_rgba(203,0,218,0.4)]">
            Contact Engineering
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="glass p-14 rounded-[4rem] border border-brand-purple/10 hover:border-brand-purple/50 transition-all duration-700 group cursor-default"
  >
    <div className="mb-12 p-7 rounded-3xl bg-brand-primary/60 text-brand-purple w-fit group-hover:bg-brand-purple group-hover:text-brand-light transition-all duration-700 shadow-inner group-hover:shadow-[0_0_30px_#cb00da]">
      {icon}
    </div>
    <h4 className="text-3xl font-black text-brand-light mb-6 tracking-tight">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-lg font-light">{description}</p>
  </motion.div>
);

export default Home;