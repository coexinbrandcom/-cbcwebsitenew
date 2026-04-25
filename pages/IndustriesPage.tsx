
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Plane, Utensils, ShoppingCart, Sprout, Landmark, Film, Activity, Heart, ArrowRight } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';

const industryData = [
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    description: 'We help hotels and tourism brands tell their story while building booking platforms that actually get people to stay.',
    icon: Plane,
    stats: '45% Increase in Direct Bookings',
    features: ['Custom Reservation Engines', 'Customer Experience Planning', 'Luxury Brand Identity']
  },
  {
    id: 'food-service',
    name: 'Food Service Industry',
    description: 'We help restaurants and food businesses run better. We look at everything from how customers order to how the kitchen works.',
    icon: Utensils,
    stats: '22% Operational Efficiency Gain',
    features: ['Digital Menu Systems', 'Operational Flow Audits', 'Culinary Brand Strategy']
  },
  {
    id: 'fmcg',
    name: 'FMCG & Retail',
    description: 'We help retail brands find their place in the market and build online stores that can handle a lot of orders.',
    icon: ShoppingCart,
    stats: '10x Scalable E-commerce Growth',
    features: ['Headless Commerce', 'Market Positioning', 'Omnichannel Logistics']
  },
  {
    id: 'agriculture',
    name: 'Agriculture Value Addition',
    description: 'We build digital tools for the agriculture industry. Our goal is to make your business more transparent and help you reach more customers.',
    icon: Sprout,
    stats: '30% Market Expansion Rate',
    features: ['Supply Chain Transparency', 'Agri-Tech Platforms', 'Value-Added Branding']
  },
  {
    id: 'government',
    name: 'Governmental',
    description: 'We help government groups communicate clearly. We build websites that people can trust and use easily.',
    icon: Landmark,
    stats: '99% Public Trust Score',
    features: ['Authoritative UI/UX', 'Public Communication Strategy', 'Secure Data Systems']
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Events',
    description: 'We create digital experiences for events and entertainment. We help you build a community around your brand.',
    icon: Film,
    stats: '2M+ Audience Engagement',
    features: ['Experiential Digital Assets', 'Community Building', 'Event Tech Integrations']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'We help healthcare providers build a professional online presence. We focus on security and making sure patients trust your brand.',
    icon: Activity,
    stats: 'HIPAA Compliant Systems',
    features: ['Secure Patient Portals', 'Health-Tech Positioning', 'Trust-Based Branding']
  },
  {
    id: 'non-profit',
    name: 'Non Profit Impact',
    description: 'We help non-profits tell their story and build digital tools to get people involved in their mission.',
    icon: Heart,
    stats: '50% Donation Conversion Lift',
    features: ['Mobilization Platforms', 'Impact Storytelling', 'Donor Journey Optimization']
  }
];

const IndustriesPage: React.FC = () => {
  useSEO({
    title: 'Industry Verticals & Specialized Solutions',
    description: 'We provide professional services for hospitality, food service, FMCG, agriculture, healthcare, and more. Specialized solutions for high-complexity sectors.'
  });

  return (
    <div className="pt-32 pb-20 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h1 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-8">Vertical Expertise</h1>
          <h2 className="font-space text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
            Specialized <br />
            <span className="text-zinc-800 italic">For</span> High-Complexity.
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            We take deep market research and turn it into a plan that works at any scale. We build solutions specifically for industries that have complex needs.
          </p>
        </motion.div>

        {/* Industry Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {industryData.map((industry, idx) => (
            <motion.div 
              key={industry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-12 bg-zinc-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-white/5 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                    <industry.icon size={32} />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Key Outcome</p>
                    <p className="text-cyan-500 font-space font-bold text-sm">{industry.stats}</p>
                  </div>
                </div>
                <h3 className="font-space text-3xl font-bold mb-6 text-white">{industry.name}</h3>
                <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10">
                  {industry.description}
                </p>
                <div className="space-y-4 mb-12">
                  {industry.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-zinc-400 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="flex items-center gap-4 text-white font-space font-bold text-xs uppercase tracking-widest group-hover:text-cyan-500 transition-colors">
                View Case Study <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Industry Philosophy */}
        <section className="py-32 border-t border-white/5 bg-zinc-950/50 p-12 md:p-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-space text-4xl md:text-6xl font-bold tracking-tight mb-8">Niche Intelligence. Global Execution.</h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed mb-12">
              We don't use the same plan for everyone. Every industry is different. We take the time to understand your specific market so we can help you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <p className="font-space text-4xl font-bold text-cyan-500 mb-2">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-space text-4xl font-bold text-cyan-500 mb-2">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Global Clients</p>
              </div>
              <div className="text-center">
                <p className="font-space text-4xl font-bold text-cyan-500 mb-2">8</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Core Verticals</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h3 className="font-space text-5xl font-bold mb-12">Don't see your industry?</h3>
          <p className="text-zinc-500 text-xl font-light mb-12 max-w-2xl mx-auto">
            We work with businesses that have complex needs. If you need a clear strategy and technical help, we should talk.
          </p>
          <Link to="/contact" className="inline-block bg-cyan-500 text-black font-space font-bold py-6 px-16 uppercase tracking-widest hover:bg-white transition-all duration-300">
            Start a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
