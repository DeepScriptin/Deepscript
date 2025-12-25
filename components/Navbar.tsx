import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLogoHover = (e: React.MouseEvent) => {
    const event = new CustomEvent('logo-hover-scatter', {
      detail: { x: e.clientX, y: e.clientY }
    });
    window.dispatchEvent(event);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-high">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link 
            to="/" 
            className="flex items-center space-x-4 group relative"
            onMouseEnter={handleLogoHover}
          >
            {/* Animated Neo Shine Circles */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 -z-10 pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-brand-purple/30 shadow-[0_0_20px_rgba(203,0,218,0.15)]"
              />
              <motion.div 
                animate={{ scale: [1, 2.3], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute inset-0 rounded-full border border-brand-accent/20"
              />
            </div>

            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="relative w-12 h-12 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(203,0,218,0.3)] z-10 flex items-center justify-center bg-brand-support border border-brand-purple/10"
            >
              <img 
                src="https://raw.githubusercontent.com/DeepScriptin/DeepScript.in/main/logo.png" 
                alt="DeepScript Logo" 
                className="w-full h-full object-contain p-1"
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black prominent-logo leading-tight neon-text-glow">
                DEEPSCRIPT
              </span>
              <span className="text-[7px] uppercase tracking-[0.4em] text-brand-dim font-bold mt-0.5 ml-0.5 opacity-70">
                Beyond Code
              </span>
            </div>
          </Link>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                      isActive ? 'text-brand-purple' : 'text-gray-500 hover:text-brand-purple'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-accent shadow-[0_0_15px_#cb00da]"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-brand-purple p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-brand-purple/10"
          >
            <div className="px-6 pt-6 pb-12 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-6 rounded-xl text-xl font-bold uppercase tracking-[0.2em] ${
                    location.pathname === item.path
                      ? 'text-brand-purple bg-brand-purple/5 border border-brand-purple/20'
                      : 'text-gray-500 hover:text-brand-purple hover:bg-brand-purple/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;