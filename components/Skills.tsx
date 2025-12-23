import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Code2, Database, PenTool, Layout, BarChart, Users } from 'lucide-react';
import { Skill } from '../types';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  // Group skills by category for better layout
  const categories = {
    frontend: PORTFOLIO_DATA.skills.filter(s => s.category === 'frontend'),
    backend: PORTFOLIO_DATA.skills.filter(s => s.category === 'backend'),
    design: PORTFOLIO_DATA.skills.filter(s => s.category === 'design'),
    product: PORTFOLIO_DATA.skills.filter(s => s.category === 'product'),
    tools: PORTFOLIO_DATA.skills.filter(s => s.category === 'tools'),
    soft: PORTFOLIO_DATA.skills.filter(s => s.category === 'soft-skills'),
  };

  // Only render categories that have skills
  const activeCategories = Object.entries(categories).filter(([_, skills]) => skills.length > 0);

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'frontend': return <Layout className="text-primary" size={24} />;
      case 'backend': return <Database className="text-secondary" size={24} />;
      case 'tools': return <Code2 className="text-purple-400" size={24} />;
      case 'design': return <PenTool className="text-pink-400" size={24} />;
      case 'product': return <BarChart className="text-yellow-400" size={24} />;
      case 'soft': return <Users className="text-green-400" size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  const getTitle = (cat: string) => {
      switch(cat) {
          case 'frontend': return "Frontend Development";
          case 'backend': return "Backend & Database";
          case 'tools': return "Tools & DevOps";
          case 'design': return "Design & Creative";
          case 'product': return "Product Management";
          case 'soft': return "Soft Skills";
          default: return "Other Skills";
      }
  };

  const getColor = (cat: string) => {
    switch(cat) {
        case 'frontend': return 'bg-primary';
        case 'backend': return 'bg-secondary';
        case 'tools': return 'bg-purple-500';
        case 'design': return 'bg-pink-500';
        case 'product': return 'bg-yellow-500';
        case 'soft': return 'bg-green-500';
        default: return 'bg-slate-500';
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark scroll-mt-16">
      <ScrollReveal className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive overview of my technical abilities, design skills, and professional competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategories.map(([category, skills]) => (
            <div key={category} className="bg-card p-8 rounded-2xl border border-slate-700/50 hover:shadow-xl hover:shadow-primary/5 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg">
                    {getIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-white capitalize">
                    {getTitle(category)}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill: Skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${getColor(category)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;