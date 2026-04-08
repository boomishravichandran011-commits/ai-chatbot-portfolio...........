import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../mock';

const iconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail };

const Footer = () => {
  const { personal, socialLinks } = portfolioData;

  return (
    <footer className="py-10 border-t border-cyan-500/20 bg-gradient-to-b from-background to-cyan-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || Mail;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
              </a>
            );
          })}
        </div>
        <p className="text-foreground/50 text-sm">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
