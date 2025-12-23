import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-darker scroll-mt-16">
      <ScrollReveal className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              {PORTFOLIO_DATA.about}
            </p>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Work Experience</h3>
            <div className="space-y-8 relative border-l-2 border-slate-700 ml-3 pl-8">
              {PORTFOLIO_DATA.experience.map((job) => (
                <div key={job.id} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-darker border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                          {job.role}
                        </h4>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 md:mt-0 bg-slate-800 px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                        {job.description.map((desc, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full shrink-0"></span>
                                {desc}
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;