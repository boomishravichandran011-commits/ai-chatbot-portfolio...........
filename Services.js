import React from 'react';
import { Globe, MessageCircle, Headphones, Cpu } from 'lucide-react';
import { portfolioData } from '../mock';

const iconMap = {
  globe: Globe,
  'message-circle': MessageCircle,
  headphones: Headphones,
  cpu: Cpu,
};

const Services = () => {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <div key={service.id} className="group p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
