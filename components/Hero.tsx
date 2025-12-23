import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-3xl text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 animate-fade-in">
            Available for hire
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PORTFOLIO_DATA.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-light tracking-wide">
              {PORTFOLIO_DATA.title}
            </h2>
          </div>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
            {PORTFOLIO_DATA.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25 relative z-30 cursor-pointer"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-xl font-bold transition-all transform hover:scale-105 backdrop-blur-sm relative z-30 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-8 justify-center pt-10">
            {PORTFOLIO_DATA.socials.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-all transform hover:scale-125 hover:-translate-y-1 relative z-30"
                aria-label={social.platform}
              >
                {social.icon === 'Github' && <Github size={28} />}
                {social.icon === 'Linkedin' && <Linkedin size={28} />}
                {social.icon === 'Mail' && <Mail size={28} />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 z-10">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} aria-label="Scroll down" className="p-2 hover:text-primary transition-colors">
            <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;