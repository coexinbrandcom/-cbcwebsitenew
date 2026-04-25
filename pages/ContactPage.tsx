
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Check, Brain, Zap, Cpu, BarChart3, Edit, Send } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';

const serviceOptions = [
  { name: 'Strategy', icon: Brain, description: 'Market research, brand planning, and growth strategy.' },
  { name: 'Tactics', icon: Zap, description: 'Marketing across all platforms, content strategy, and paid media.' },
  { name: 'Software', icon: Cpu, description: 'Custom software, website design, and connecting your technical systems.' },
  { name: 'Analytics', icon: BarChart3, description: 'Data analysis, reporting dashboards, and tracking your sales results.' },
];

const budgetOptions = ['< $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+'];
const timelineOptions = ['< 1 Month', '1-3 Months', '3-6 Months', '6+ Months'];

const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact Us | Start Your Project',
    description: 'Ready to grow your brand? Contact us to discuss your strategy, creative, or technology needs. We respond to all inquiries within 24 hours.'
  });

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [] as string[],
    description: '',
    budget: '',
    timeline: '',
    name: '',
    company: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceToggle = (serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter(s => s !== serviceName)
        : [...prev.services, serviceName],
    }));
  };

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));
  const goToStep = (stepNumber: number) => {
    if (step > stepNumber) {
      setStep(stepNumber);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    // Replace with your own Formspree endpoint ID
    const formspreeEndpoint = 'https://formspree.io/f/xojnwkrn';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          "Services of Interest": formData.services.join(', '),
          "Project Description": formData.description,
          "Estimated Budget": formData.budget,
          "Expected Timeline": formData.timeline,
          "Full Name": formData.name,
          "Company": formData.company,
          "Email Address": formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (e) {
      setError('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const ProgressTracker = () => (
    <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-16">
      {[1, 2, 3, 4].map(stepNum => (
        <div key={stepNum} className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-widest ${step > stepNum ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => goToStep(stepNum)}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-space transition-all duration-300 ${step >= stepNum ? 'bg-cyan-500 text-black' : 'bg-white/5 text-zinc-500 border border-white/10'}`}>
            {step > stepNum ? <Check size={16} /> : stepNum}
          </div>
          <span className={`hidden md:block transition-colors ${step >= stepNum ? 'text-white' : 'text-zinc-600'}`}>
            {['Services', 'Scope', 'Contact', 'Review'][stepNum - 1]}
          </span>
        </div>
      ))}
    </div>
  );
  
  const renderContent = () => {
    if (submitted) {
      return (
        <div className="text-center animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-8 bg-cyan-500/10 border-2 border-cyan-500 rounded-full flex items-center justify-center">
            <Send size={40} className="text-cyan-500" />
          </div>
          <h2 className="font-space text-4xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-zinc-400 max-w-md mx-auto text-lg leading-relaxed">
            We've received your message and will get back to you within 24 hours. We're looking forward to hearing more about your project.
          </p>
        </div>
      );
    }

    switch(step) {
      case 1:
        return (
          <div className="animate-fade-in">
            <h2 className="font-space text-3xl font-bold text-white mb-2 text-center">What can we help you with?</h2>
            <p className="text-zinc-400 mb-12 text-center">Select the services you need help with.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceOptions.map(({name, icon: Icon, description}) => (
                <div key={name} onClick={() => handleServiceToggle(name)}
                  className={`p-6 border transition-all duration-300 cursor-pointer group ${formData.services.includes(name) ? 'bg-cyan-500 border-cyan-500' : 'bg-white/5 border-white/10 hover:border-cyan-500/50'}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <Icon size={24} className={`mb-4 transition-colors ${formData.services.includes(name) ? 'text-black' : 'text-cyan-500'}`} />
                      <h3 className={`font-space text-xl font-bold transition-colors ${formData.services.includes(name) ? 'text-black' : 'text-white'}`}>{name}</h3>
                      <p className={`text-sm mt-2 transition-colors ${formData.services.includes(name) ? 'text-black/70' : 'text-zinc-500'}`}>{description}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center ${formData.services.includes(name) ? 'border-black bg-black' : 'border-zinc-600 group-hover:border-cyan-500'}`}>
                      {formData.services.includes(name) && <Check size={14} className="text-cyan-500" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-fade-in">
            <h2 className="font-space text-3xl font-bold text-white mb-2 text-center">Tell us about the project.</h2>
            <p className="text-zinc-400 mb-12 text-center">Tell us a bit about what you want to do.</p>
            <div className="space-y-8">
              <div>
                <label className="font-space text-sm font-bold text-zinc-400 tracking-widest uppercase" htmlFor="description">Project Description</label>
                <textarea id="description" rows={5} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full mt-2 p-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
                  placeholder="e.g., We need a new online store for our spice business..." />
              </div>
              <div>
                <label className="font-space text-sm font-bold text-zinc-400 tracking-widest uppercase mb-4 block">Estimated Budget</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {budgetOptions.map(option => (
                    <button key={option} onClick={() => setFormData({...formData, budget: option})}
                      className={`p-4 text-center font-space font-bold border transition-all ${formData.budget === option ? 'bg-cyan-500 text-black border-cyan-500' : 'bg-transparent text-white border-white/20 hover:border-cyan-500'}`}>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-space text-sm font-bold text-zinc-400 tracking-widest uppercase mb-4 block">Expected Timeline</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {timelineOptions.map(option => (
                    <button key={option} onClick={() => setFormData({...formData, timeline: option})}
                      className={`p-4 text-center font-space font-bold border transition-all ${formData.timeline === option ? 'bg-cyan-500 text-black border-cyan-500' : 'bg-transparent text-white border-white/20 hover:border-cyan-500'}`}>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-fade-in">
            <h2 className="font-space text-3xl font-bold text-white mb-2 text-center">Finally, how can we reach you?</h2>
            <p className="text-zinc-400 mb-12 text-center">We respect your privacy and will not share your information.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-space text-sm font-bold text-zinc-400 tracking-widest uppercase" htmlFor="name">Full Name*</label>
                <input type="text" id="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full mt-2 p-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" />
              </div>
              <div>
                <label className="font-space text-sm font-bold text-zinc-400 tracking-widest uppercase" htmlFor="company">Company</label>
                <input type="text" id="company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full mt-2 p-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="font-space text-sm font-bold text-zinc-400 tracking-widest uppercase" htmlFor="email">Email Address*</label>
                <input type="email" id="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full mt-2 p-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="animate-fade-in">
            <h2 className="font-space text-3xl font-bold text-white mb-2 text-center">Review Your Inquiry</h2>
            <p className="text-zinc-400 mb-12 text-center">One final check before we get the conversation started.</p>
            <div className="bg-white/5 border border-white/10 p-8 space-y-6">
              <div className="flex justify-between items-start pb-4 border-b border-white/10">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">Services</p>
                  <p className="font-bold text-white">{formData.services.join(', ') || 'Not selected'}</p>
                </div>
                <button onClick={() => goToStep(1)} className="text-cyan-500 hover:text-white"><Edit size={16}/></button>
              </div>
              <div className="flex justify-between items-start pb-4 border-b border-white/10">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">Scope</p>
                  <p className="text-white font-light text-sm leading-relaxed mb-2">{formData.description || 'No description provided.'}</p>
                  <p className="text-white"><span className="text-zinc-500">Budget:</span> {formData.budget || 'N/A'} | <span className="text-zinc-500">Timeline:</span> {formData.timeline || 'N/A'}</p>
                </div>
                <button onClick={() => goToStep(2)} className="text-cyan-500 hover:text-white"><Edit size={16}/></button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">Contact</p>
                  <p className="text-white">{formData.name}</p>
                  <p className="text-white">{formData.company}</p>
                  <p className="text-cyan-400">{formData.email}</p>
                </div>
                <button onClick={() => goToStep(3)} className="text-cyan-500 hover:text-white"><Edit size={16}/></button>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  const isNextDisabled = () => {
    if (step === 1 && formData.services.length === 0) return true;
    if (step === 3 && (!formData.name || !formData.email)) return true;
    return false;
  }

  return (
    <div className="bg-[#050505] min-h-screen pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10" hidden={step === 1}>
          <h1 className="font-space text-5xl font-bold tracking-tighter text-white">Start a Project</h1>
          <p className="text-zinc-400 text-lg mt-4">Let's work together to grow your brand.</p>
        </div>
        
        {!submitted && <ProgressTracker />}

        <div className="min-h-[400px]">
          {renderContent()}
        </div>

        {!submitted && (
          <div className="mt-16 flex flex-col items-center">
            <div className="w-full flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center space-x-2 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all font-bold font-space uppercase tracking-widest text-sm"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                  className="flex items-center space-x-2 bg-cyan-500 text-black px-8 py-4 font-bold font-space uppercase tracking-widest text-sm hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <span>Next Step</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex items-center justify-center space-x-2 bg-cyan-500 text-black px-8 py-4 font-bold font-space uppercase tracking-widest text-sm hover:bg-white transition-all w-[190px] disabled:opacity-50 disabled:cursor-wait"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              )}
            </div>
            {error && (
              <p className="mt-6 text-red-500 text-center font-space text-sm">{error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;