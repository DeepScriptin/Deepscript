import React from 'react';
import { Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-16 text-center">Insights</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden h-64 mb-6">
                <img 
                  src={`https://picsum.photos/600/400?random=${i + 100}`} 
                  alt="Blog post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex items-center space-x-2 text-teal-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>Oct 1{i}, 2023</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                The Future of Generative Design in 2024
              </h3>
              <p className="text-gray-400 line-clamp-3">
                How large language models are reshaping the way we approach user interface design and software architecture...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
