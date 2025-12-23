import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (status === 'success') {
            setShowToast(true);
            const timer = setTimeout(() => {
                setShowToast(false);
                setStatus('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!PORTFOLIO_DATA.formspreeId || PORTFOLIO_DATA.formspreeId === 'mwkgvjzo_REPLACE_ME') {
            console.error("Formspree ID is missing or invalid in constants.ts");
            setStatus('error');
            return;
        }

        setStatus('submitting');

        try {
            const response = await fetch(`https://formspree.io/f/${PORTFOLIO_DATA.formspreeId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-dark relative overflow-hidden scroll-mt-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Encouraging Success Toast */}
            {showToast && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform animate-in fade-in slide-in-from-top-4">
                    <div className="bg-secondary text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-semibold border border-white/20">
                        <CheckCircle size={20} />
                        Success! You're awesome! 🚀
                    </div>
                </div>
            )}

            <ScrollReveal className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                    <div className="grid md:grid-cols-5 min-h-[500px]">
                        {/* Info Column */}
                        <div className="md:col-span-2 bg-slate-800/50 p-12 flex flex-col justify-between border-r border-slate-700/30">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                                <p className="text-slate-400 mb-10 leading-relaxed">
                                    I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>
                                
                                <div className="space-y-8">
                                    <a href={`mailto:${PORTFOLIO_DATA.email}`} className="flex items-start gap-5 group">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                            <Mail size={22} />
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email</h4>
                                            <p className="text-white font-medium group-hover:text-primary transition-colors break-all max-w-[200px] sm:max-w-none">
                                                {PORTFOLIO_DATA.email}
                                            </p>
                                        </div>
                                    </a>
                                    <div className="flex items-start gap-5">
                                        <div className="p-3 bg-secondary/10 rounded-xl text-secondary shrink-0">
                                            <MapPin size={22} />
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</h4>
                                            <p className="text-white font-medium">{PORTFOLIO_DATA.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-12 text-slate-500 text-sm italic">
                                Based in West Bengal, India.
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="md:col-span-3 p-12 bg-darker/40">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status === 'error' && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-shake">
                                        <AlertCircle size={20} />
                                        <span>Oops! Something went wrong. Please check your connection or try again.</span>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                                        <input 
                                            type="text" id="name" name="name" required
                                            value={formState.name}
                                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                                            className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Email</label>
                                        <input 
                                            type="email" id="email" name="email" required
                                            value={formState.email}
                                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                                            className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white transition-all"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                        <textarea 
                                            id="message" name="message" required rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                                            className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-white transition-all resize-none"
                                            placeholder="What would you like to discuss?"
                                        ></textarea>
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className="w-full py-5 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary disabled:from-slate-700 disabled:to-slate-800 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20"
                                >
                                    {status === 'submitting' ? (
                                        <>Sending... <Loader2 size={20} className="animate-spin" /></>
                                    ) : (
                                        <>Send Message <Send size={20} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Contact;