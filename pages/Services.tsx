import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Bot, 
  Workflow, 
  ShieldCheck
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceDetails = [
    {
      id: "ai-design",
      title: "Neural UI/UX",
      tagline: "Adaptive Human Interfaces",
      description: "We merge human-centric design with real-time cognitive capabilities. Our interfaces don't just react; they anticipate user intent using predictive behavioral layers. Engineered for 2025 enterprise standards.",
      icon: <Code className="w-14 h-14 text-brand-accent" />,
      capabilities: [
        { name: "Predictive UX", desc: "Interfaces that reshape based on user patterns." },
        { name: "Generative Logic", desc: "AI-accelerated design cycles for high frequency." },
        { name: "Semantic Interaction", desc: "Natural interfaces beyond traditional buttons." },
        { name: "Voice-First Design", desc: "Multimodal engagement protocols." }
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "custom-solutions",
      title: "Proprietary LLMs",
      tagline: "Custom Sovereign Intelligence",
      description: "Standard tools are generic. We architect proprietary models trained on your unique business data to reveal competitive advantages. Our stack includes hardened RAG pipelines and vector knowledge graphs.",
      icon: <Database className="w-14 h-14 text-brand-purple" />,
      capabilities: [
        { name: "Sovereign Training", desc: "Models trained exclusively on your secure data." },
        { name: "Deep Forecasting", desc: "Behavioral analytics with extreme precision." },
        { name: "Cognitive Vision", desc: "Automated high-frequency visual inspection." },
        { name: "Vector Search", desc: "Massive-scale semantic knowledge retrieval." }
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4628c7185?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "intelligent-chatbots",
      title: "Agentic Autonomy",
      tagline: "Context-Aware Action Bots",
      description: "Our bots are not scripts; they are autonomous agents. Powered by advanced 2025 LLM logic, they handle complex transactions, manage calendars, and close sales with human-like nuance and zero latency.",
      icon: <Bot className="w-14 h-14 text-brand-accent" />,
      capabilities: [
        { name: "Intent Detection", desc: "Uncovering user needs before they are stated." },
        { name: "Full-Stack Sync", desc: "Seamless integration with enterprise tools." },
        { name: "Agentic Multimodal", desc: "Switching between audio, text, and visual input." },
        { name: "Closing Protocols", desc: "Executing transactions directly within flow." }
      ],
      image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "process-automation",
      title: "Neural Automation",
      tagline: "High-Frequency Orchestration",
      description: "We combine cognitive AI with RPA to automate workflows that once required oversight. Our 2025 suite identifies friction using neural audits and deploys workers to maintain optimal efficiency.",
      icon: <Workflow className="w-14 h-14 text-brand-purple" />,
      capabilities: [
        { name: "Logic Workflows", desc: "Complex automated decision trees." },
        { name: "Doc Intelligence", desc: "Instant data extraction from unstructured files." },
        { name: "Neural Audits", desc: "Automated identification of system bottlenecks." },
        { name: "Legacy Bridging", desc: "Modern AI layers over ancient infrastructure." }
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-support relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-[200px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[180px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-xs font-black uppercase tracking-[0.5em] mb-10"
          >
            Capabilities 2025
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10rem] font-black text-brand-light mb-12 tracking-tighter leading-none"
          >
            Engineering <span className="accent-gradient">Edge</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Deploying high-frequency neural architectures to resolve complex enterprise challenges.
          </motion.p>
        </div>

        {/* Detailed Service Blocks */}
        <div className="space-y-64">
          {serviceDetails.map((service, index) => (
            <motion.section 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-32 items-center`}
            >
              <div className="w-full lg:w-1/2 space-y-12">
                <div className="flex items-center space-x-8">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-7 rounded-[2rem] bg-brand-primary/60 border border-brand-accent/20 shadow-[0_0_30px_rgba(6,96,216,0.2)]"
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-5xl font-black text-brand-light tracking-tight">{service.title}</h2>
                    <p className="text-brand-purple font-black tracking-[0.3em] text-xs uppercase mt-2">{service.tagline}</p>
                  </div>
                </div>
                
                <p className="text-2xl text-gray-500 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {service.capabilities.map((cap, cIdx) => (
                    <motion.div 
                      key={cIdx} 
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="glass p-8 rounded-[2.5rem] border-l-4 border-l-brand-accent hover:bg-brand-accent/5 transition-all cursor-default"
                    >
                      <h4 className="text-brand-light font-black text-lg mb-2">{cap.name}</h4>
                      <p className="text-gray-600 text-sm font-light leading-tight">{cap.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent to-brand-purple rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden border border-brand-accent/10 shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[600px] object-cover transition-transform duration-[3000ms] group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-brand-support/30 mix-blend-multiply" />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-64 glass rounded-[5rem] p-16 md:p-32 text-center border border-brand-accent/10">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-block p-8 bg-brand-accent/10 rounded-3xl mb-14"
           >
             <ShieldCheck className="w-16 h-16 text-brand-accent mx-auto" />
           </motion.div>
           <h3 className="text-6xl md:text-8xl font-black text-brand-light mb-24 tracking-tighter">Impact Metrics</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
             <div className="space-y-6">
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="text-7xl font-black text-brand-accent tracking-tighter mb-4">35%</motion.div>
                <div className="text-brand-light font-black text-xl uppercase tracking-widest">Efficiency</div>
                <p className="text-gray-600 font-light text-lg">Average increase in throughput across 2024 neural deployments.</p>
             </div>
             <div className="space-y-6">
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="text-7xl font-black text-brand-purple tracking-tighter mb-4">24/7</motion.div>
                <div className="text-brand-light font-black text-xl uppercase tracking-widest">Autonomy</div>
                <p className="text-gray-600 font-light text-lg">Continuous logic execution with zero human overhead.</p>
             </div>
             <div className="space-y-6">
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} className="text-7xl font-black text-brand-accent tracking-tighter mb-4">99%</motion.div>
                <div className="text-brand-light font-black text-xl uppercase tracking-widest">Accuracy</div>
                <p className="text-gray-600 font-light text-lg">Proprietary model performance in complex decision trees.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;