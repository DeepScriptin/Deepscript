import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [1, 2, 3, 4];

  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 text-center">Selected Works</h1>
        
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {projects.map((item) => (
            <motion.div 
              key={item}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img 
                  src={`https://picsum.photos/800/600?random=${item + 50}`} 
                  alt="Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-black rounded-full font-bold">View Case Study</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Project Nebula</h3>
                  <p className="text-gray-400">Automotive / Computer Vision</p>
                </div>
                <div className="px-3 py-1 border border-teal-500/30 text-teal-400 rounded-full text-xs">
                  2023
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="glass p-12 rounded-3xl">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Stories</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <p className="text-xl text-gray-300 italic">"DeepScript transformed our customer support infrastructure. The AI chatbot handled 80% of queries in week one."</p>
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-gray-600 rounded-full" />
                   <div>
                      <div className="text-white font-bold">Sarah Johnson</div>
                      <div className="text-gray-500 text-sm">CTO, TechFlow</div>
                   </div>
                </div>
             </div>
             <div className="space-y-4">
                <p className="text-xl text-gray-300 italic">"The custom AI model they built for our logistics improved delivery efficiency by 25%. A true game changer."</p>
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-gray-600 rounded-full" />
                   <div>
                      <div className="text-white font-bold">Michael Chen</div>
                      <div className="text-gray-500 text-sm">Director, LogiCorp</div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
