import React from 'react';
import { Linkedin, Twitter, Github, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const handleLogoHover = (e: React.MouseEvent) => {
    const event = new CustomEvent('logo-hover-scatter', {
      detail: { x: e.clientX, y: e.clientY }
    });
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-brand-support border-t border-brand-accent/10 pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-24">
          
          <div className="space-y-12">
            <Link 
              to="/" 
              className="flex items-center space-x-5 group relative"
              onMouseEnter={handleLogoHover}
            >
              {/* Neo Shine Effect */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none">
                <motion.div 
                  animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border-2 border-brand-purple/20 shadow-[0_0_40px_rgba(203,0,218,0.3)]"
                />
              </div>

              <motion.div 
                whileHover={{ rotate: -5, scale: 1.05 }}
                className="relative w-14 h-14 rounded-xl overflow-hidden transition-transform shadow-[0_0_40px_rgba(6,96,216,0.2)] bg-brand-support border border-brand-accent/10"
              >
                <img 
                  src="https://raw.githubusercontent.com/DeepScriptin/DeepScript.in/main/logo.png" 
                  alt="DeepScript Logo" 
                  className="w-full h-full object-contain p-1.5"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black prominent-logo leading-tight neon-text-glow">
                  DEEPSCRIPT
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-brand-purple font-bold mt-1 opacity-80">
                  Global Intelligence
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-sm">
              Architecting the intelligence layers of tomorrow. We help visionaries transcend code through autonomous neural ecosystems.
            </p>
            <div className="flex space-x-10">
              <a href="#" className="text-gray-500 hover:text-brand-accent transition-all hover:scale-125"><Linkedin className="w-7 h-7" /></a>
              <a href="#" className="text-gray-500 hover:text-brand-accent transition-all hover:scale-125"><Twitter className="w-7 h-7" /></a>
              <a href="#" className="text-gray-500 hover:text-brand-accent transition-all hover:scale-125"><Github className="w-7 h-7" /></a>
            </div>
          </div>

          <div className="flex flex-col lg:pl-20">
            <h3 className="text-brand-light font-black text-xs uppercase tracking-[0.5em] mb-14 opacity-40">System Map</h3>
            <ul className="space-y-8 text-xl font-light">
              <li><Link to="/" className="text-gray-500 hover:text-brand-accent transition-all hover:translate-x-3 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-brand-accent transition-all hover:translate-x-3 inline-block">Engineering</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-brand-accent transition-all hover:translate-x-3 inline-block">Neural Services</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-brand-accent transition-all hover:translate-x-3 inline-block">Transmission</Link></li>
            </ul>
          </div>

          <div className="space-y-12">
            <h3 className="text-brand-light font-black text-xs uppercase tracking-[0.5em] mb-14 opacity-40">Direct Pulse</h3>
            <div className="space-y-12">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-8 group cursor-pointer"
              >
                <div className="p-4 rounded-xl bg-brand-primary border border-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-all shadow-xl group-hover:shadow-brand-accent/50">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-gray-300 text-xl font-black transition-colors group-hover:text-brand-accent">deepscript.in@gmail.com</span>
              </motion.div>
              
              <motion.div 
                animate={{ 
                  scale: [1, 1.02, 1],
                  filter: ["drop-shadow(0 0 0px #0660d8)", "drop-shadow(0 0 35px rgba(203, 0, 218, 0.3))", "drop-shadow(0 0 0px #cb00da)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col space-y-4 bg-brand-primary/40 p-10 rounded-[2rem] border border-brand-purple/20 backdrop-blur-md"
              >
                <div className="flex items-center space-x-6">
                  <Phone className="w-10 h-10 text-brand-accent" />
                  <span className="text-3xl md:text-5xl font-black text-brand-accent tracking-tighter leading-none">+91 98418 67282</span>
                </div>
                <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.4em] text-gray-500 font-black ml-1">
                   <span className="w-3 h-3 rounded-full bg-brand-purple animate-pulse shadow-[0_0_10px_#cb00da]" />
                   Neural Hub Connected
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-accent/5 pt-16 text-center text-[11px] text-gray-700 font-black uppercase tracking-[0.8em]">
          <p>&copy; 2025 DeepScript &bull; Engineering Beyond Traditional Logic &bull; Node 7-A</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;