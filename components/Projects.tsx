import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-darker scroll-mt-16">
      <ScrollReveal className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-secondary rounded-full"></div>
            </div>
            <a href={PORTFOLIO_DATA.socials.find(s => s.platform === 'GitHub')?.url || "#"} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-400 transition-colors font-medium flex items-center gap-2">
                View Github <ExternalLink size={16} />
            </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs font-medium px-2 py-1 bg-primary/20 text-primary border border-primary/20 rounded-full backdrop-blur-sm">
                            {tech}
                        </span>
                    ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                    {project.demoUrl && (
                        <a 
                            href={project.demoUrl} 
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-primary text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                    {project.repoUrl && (
                        <a 
                            href={project.repoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
                            aria-label="View Code"
                        >
                            <Github size={18} />
                        </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Projects;