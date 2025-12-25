import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, ShieldCheck, Sparkles, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-support relative overflow-hidden">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-9xl font-black text-brand-light mb-8 tracking-tighter leading-none"
          >
            The <span className="accent-gradient">Minds</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            DeepScript is a forward-deployed collective of engineers and data architects dedicated to the singular pursuit of enterprise intelligence.
          </motion.p>
        </div>

        {/* Mission 2025 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-brand-accent/20 rounded-xl">
                <Target className="text-brand-accent w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black text-brand-light">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-loose text-xl">
              We empower global enterprises by architecting AI solutions that don't just process information—they understand it. In 2025, our focus is on "Agentic Autonomy"—building systems that can strategize and execute with minimal human intervention.
            </p>
            <div className="space-y-4">
               {[
                 { icon: <ShieldCheck className="w-5 h-5" />, text: "Ethical AI Standards" },
                 { icon: <Sparkles className="w-5 h-5" />, text: "Zero-Latency Architecture" },
                 { icon: <Globe className="w-5 h-5" />, text: "Global Scalability" }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center space-x-3 text-brand-accent font-bold">
                   {item.icon}
                   <span className="text-sm tracking-widest uppercase">{item.text}</span>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[3rem] overflow-hidden group shadow-2xl shadow-brand-accent/10"
          >
             <div className="absolute inset-0 bg-brand-primary/40 z-10 mix-blend-overlay" />
             <img 
               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
               alt="Collaboration" 
               className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" 
             />
             <div className="absolute bottom-10 left-10 z-20 glass p-6 rounded-2xl border border-white/20">
               <div className="text-brand-accent font-black text-4xl">5+ Years</div>
               <div className="text-brand-light text-xs uppercase tracking-widest font-bold">Of Applied Innovation</div>
             </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <div className="glass-high rounded-[4rem] p-16 md:p-24 text-center border border-brand-accent/10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-support border border-brand-accent/20 rounded-3xl flex items-center justify-center rotate-45">
            <Trophy className="w-10 h-10 text-brand-accent -rotate-45" />
          </div>
          <h2 className="text-4xl font-black text-brand-light mb-16 uppercase tracking-tighter">Enterprise Recognition 2025</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <StatBox number="100M+" label="Data Points Processed" />
            <StatBox number="150+" label="Global Deployments" />
            <StatBox number="99.9%" label="Inference Uptime" />
            <StatBox number="SOC-2" label="Security Compliance" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBox: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="space-y-2"
  >
    <div className="text-5xl font-black text-brand-accent mb-2">{number}</div>
    <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">{label}</div>
  </motion.div>
);

export default About;