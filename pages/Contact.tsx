import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-support relative overflow-hidden">
      {/* High-Impact Decorative Glows - Re-matched to new Purple/Blue theme */}
      <div className="absolute top-0 right-0 w-[1400px] h-[1400px] bg-brand-purple/5 rounded-full blur-[300px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] bg-brand-accent/10 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-40"
        >
          <h1 className="text-8xl md:text-[12rem] font-black text-brand-light mb-12 tracking-tighter leading-none">
            Let's <span className="accent-gradient">Execute</span>.
          </h1>
          <p className="text-3xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Architecting the future of enterprise logic. Your transmission starts here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          {/* Contact Details Side */}
          <div className="space-y-24">
            <div className="space-y-8">
              <h3 className="text-5xl font-black text-brand-light tracking-tight">Handshake Protocol</h3>
              <p className="text-gray-500 text-2xl max-w-md leading-relaxed font-light">
                Direct neural link to our engineering collective for high-stakes projects.
              </p>
            </div>

            <div className="space-y-16">
              <motion.div 
                whileHover={{ scale: 1.05, x: 15 }}
                className="glass p-12 rounded-[3.5rem] border border-brand-purple/10 flex items-center space-x-10 group"
              >
                <div className="w-24 h-24 rounded-3xl bg-brand-primary border border-brand-purple/30 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-brand-light transition-all duration-700 shadow-xl group-hover:shadow-[0_0_40px_rgba(203,0,218,0.5)]">
                  <Mail className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="text-gray-600 font-black uppercase tracking-[0.4em] text-xs mb-3">Secure Transmission</h4>
                  <p className="text-brand-purple text-3xl font-black group-hover:text-brand-light transition-colors">deepscript.in@gmail.com</p>
                </div>
              </motion.div>

              {/* MASSIVE CONTINUOUSLY ANIMATED PHONE NUMBER */}
              <div className="relative group pt-16">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 0 0px rgba(203,0,218,0)",
                      "0 0 80px rgba(6,96,216,0.4)",
                      "0 0 0px rgba(203,0,218,0)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="glass p-16 md:p-20 rounded-[5rem] border border-brand-accent/20 flex flex-col items-center text-center space-y-12 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-brand-purple/5 pointer-events-none" />
                  
                  <motion.div 
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center shadow-[0_0_100px_rgba(203,0,218,0.6)] z-10"
                  >
                    <Phone className="w-14 h-14 text-brand-light" />
                  </motion.div>

                  <div className="space-y-4 z-10">
                    <h4 className="text-brand-purple font-black uppercase tracking-[0.6em] text-sm">Priority Enterprise Access</h4>
                    <motion.div
                      animate={{ 
                        textShadow: ["0 0 0px #cb00da", "0 0 25px #cb00da", "0 0 0px #0660d8"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl md:text-7xl lg:text-8xl font-black text-brand-purple tracking-tighter"
                    >
                      +91 98418 67282
                    </motion.div>
                  </div>

                  <div className="flex items-center space-x-4 text-brand-accent font-black text-sm uppercase tracking-[0.3em] z-10 animate-pulse">
                    <div className="w-4 h-4 rounded-full bg-brand-accent shadow-[0_0_20px_#0660d8]" />
                    <span>Orchestrator Online</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-high p-16 md:p-20 rounded-[5rem] border border-brand-purple/10 shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-[700px] flex flex-col items-center justify-center text-center space-y-14"
                >
                  <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, ease: "backOut" }}
                    className="w-40 h-40 bg-brand-purple/20 rounded-full flex items-center justify-center border border-brand-purple/40 shadow-[0_0_80px_rgba(203,0,218,0.3)]"
                  >
                    <CheckCircle2 className="w-20 h-20 text-brand-purple" />
                  </motion.div>
                  <div className="space-y-8">
                    <h3 className="text-6xl font-black text-brand-light tracking-tighter leading-none">Transmission Confirmed.</h3>
                    <p className="text-gray-500 max-w-sm mx-auto text-2xl font-light leading-relaxed">
                      Our architects are analyzing your data. Direct link established.
                    </p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsSubmitted(false)} 
                    className="text-brand-purple border-b-2 border-brand-purple font-black tracking-[0.5em] uppercase text-xs transition-all pb-2"
                  >
                    Transmit Again
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <InputField label="Entity Name" name="name" value={formData.name} onChange={handleChange} required />
                    <InputField label="Communication Port" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <InputField label="Signal Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    <div className="space-y-4">
                      <label className="text-xs font-black text-gray-600 uppercase tracking-[0.5em] ml-8">Sector Interest</label>
                      <select 
                        name="service"
                        value={formData.service} 
                        onChange={handleChange}
                        className="w-full bg-brand-primary/50 border border-brand-purple/10 rounded-[2.5rem] px-10 py-7 text-brand-light focus:outline-none focus:border-brand-purple transition-all appearance-none cursor-pointer backdrop-blur-xl"
                      >
                        <option value="" className="bg-brand-support">Select Interest...</option>
                        <option value="design" className="bg-brand-support">Neural UI/UX</option>
                        <option value="custom" className="bg-brand-support">Proprietary LLM</option>
                        <option value="chatbots" className="bg-brand-support">Agentic Bot</option>
                        <option value="automation" className="bg-brand-support">Autonomous Workflow</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-600 uppercase tracking-[0.5em] ml-8">Project Parameters</label>
                    <textarea 
                      rows={6} 
                      name="message"
                      value={formData.message} 
                      onChange={handleChange}
                      required
                      placeholder="Define the enterprise mission..."
                      className="w-full bg-brand-primary/50 border border-brand-purple/10 rounded-[3rem] px-10 py-7 text-brand-light focus:outline-none focus:border-brand-purple transition-all resize-none placeholder-gray-800 backdrop-blur-xl"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(203,0,218,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-purple to-brand-accent text-brand-light font-black py-8 rounded-[2.5rem] shadow-2xl transition-all uppercase tracking-[0.6em] text-sm"
                  >
                    Initiate Transmission
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const InputField: React.FC<{ label: string; name: string; type?: string; value: string; onChange: any; required?: boolean }> = ({ label, name, type = "text", value, onChange, required = false }) => (
  <div className="space-y-4">
    <label className="text-xs font-black text-gray-600 uppercase tracking-[0.5em] ml-8">{label}</label>
    <input 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange}
      required={required}
      className="w-full bg-brand-primary/50 border border-brand-purple/10 rounded-[2.5rem] px-10 py-7 text-brand-light focus:outline-none focus:border-brand-purple transition-all backdrop-blur-xl"
    />
  </div>
);

export default Contact;