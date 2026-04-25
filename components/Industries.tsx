
import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Bed, ShoppingCart, Landmark, Heart, Utensils, Sprout, Plane, Activity } from 'lucide-react';

const industryData = [
  {
    name: 'Hospitality & Tourism',
    description: 'We help hotels and tourism brands tell their story while building booking platforms that actually get people to stay.',
    icon: Plane
  },
  {
    name: 'Food Service Industry',
    description: 'We help restaurants and food businesses run better. We look at everything from how customers order to how the kitchen works.',
    icon: Utensils
  },
  {
    name: 'FMCG & Retail',
    description: 'We help retail brands find their place in the market and build online stores that can handle a lot of orders.',
    icon: ShoppingCart
  },
  {
    name: 'Agriculture Value Addition',
    description: 'We build digital tools for the agriculture industry. Our goal is to make your business more transparent and help you reach more customers.',
    icon: Sprout
  },
  {
    name: 'Governmental',
    description: 'We help government groups communicate clearly. We build websites that people can trust and use easily.',
    icon: Landmark
  },
  {
    name: 'Entertainment & Events',
    description: 'We create digital experiences for events and entertainment. We help you build a community around your brand.',
    icon: Film
  },
  {
    name: 'Healthcare',
    description: 'We help healthcare providers build a professional online presence. We focus on security and making sure patients trust your brand.',
    icon: Activity
  },
  {
    name: 'Non Profit Impact',
    description: 'We help non-profits tell their story and build digital tools to get people involved in their mission.',
    icon: Heart
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-6">Vertical Expertise</h2>
          <h3 className="font-space text-4xl md:text-5xl font-bold tracking-tight mb-8">Specialized Solutions for Specialized Industries.</h3>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            We provide professional services for industries that have complex needs. We take deep market research and turn it into a plan that works at any scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industryData.map((industry, index) => (
            <Link to="/industries" key={index} className="p-8 bg-zinc-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group">
              <div className="mb-6 inline-flex p-3 bg-white/5 text-cyan-500 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300">
                <industry.icon size={24} />
              </div>
              <h4 className="font-space text-xl font-bold mb-4 text-white">{industry.name}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
