import React from 'react';
import { User, Target, Zap, Lightbulb, HandshakeIcon } from 'lucide-react';
import { portfolioData } from '../mock';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-cyan-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4 sm:mb-6">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10 transition-all duration-300">
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">{about.description}</p>

            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { Icon: Target, label: 'Precision' },
                { Icon: Zap, label: 'Fast Delivery' },
                { Icon: Lightbulb, label: 'Innovation' },
                { Icon: HandshakeIcon, label: 'Collaboration' }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-background/50 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <item.Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
