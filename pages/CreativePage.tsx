
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Palette, Camera, Share2, PenTool, Sparkles, Megaphone } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';

const CreativePage: React.FC = () => {
  useSEO({
    title: 'Creative Production & Visual Identity',
    description: 'We build brand systems that work everywhere—online, in print, and on social media. Provocative design that grabs attention and gets results.'
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
          <h1 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-8">Pillar 02: Creative</h1>
          <h2 className="font-space text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
            Provocative <br />
            <span className="text-zinc-800 italic">By</span> Design.
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            We don't just make things look good. We make them stand out. Our work is designed to grab attention and get people to take action on your website and social media.
          </p>
        </motion.div>

        {/* Creative Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-12">
            <div className="group">
              <div className="aspect-video bg-zinc-900 border border-white/5 overflow-hidden mb-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" 
                  alt="Visual Identity" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="font-space text-3xl font-bold mb-4">Visual Identity Systems</h3>
              <p className="text-zinc-500 text-lg font-light leading-relaxed">
                We build brand systems that work everywhere—online, in print, and on social media. Your brand will look professional no matter where people see it.
              </p>
            </div>

            <div className="group">
              <div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden mb-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Content Strategy" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="font-space text-3xl font-bold mb-4">Content Strategy</h3>
              <p className="text-zinc-500 text-lg font-light leading-relaxed">
                We create content plans that help you tell your story and build trust with your audience across all platforms.
              </p>
            </div>
          </div>

          <div className="space-y-12 md:pt-24">
            <div className="group">
              <div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden mb-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                  alt="Digital Experience" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="font-space text-3xl font-bold mb-4">Immersive Digital Experiences</h3>
              <p className="text-zinc-500 text-lg font-light leading-relaxed">
                We build websites and apps that work perfectly and tell your brand's story in a way that people remember.
              </p>
            </div>

            <div className="group">
              <div className="aspect-video bg-zinc-900 border border-white/5 overflow-hidden mb-8 relative">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000" 
                  alt="Social Authority" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="font-space text-3xl font-bold mb-4">Social Media Authority</h3>
              <p className="text-zinc-500 text-lg font-light leading-relaxed">
                We help you build a social media presence that gets people talking and helps your business grow naturally.
              </p>
            </div>
          </div>
        </div>

        {/* Creative Capabilities */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: PenTool, title: "Art Direction", desc: "We set the look and feel for how your brand appears online." },
              { icon: Camera, title: "Content Production", desc: "We create high-quality photos and videos that are made specifically for the web." },
              { icon: Megaphone, title: "Narrative Strategy", desc: "We help you tell the stories that your customers actually want to hear." },
              { icon: Share2, title: "Social Tactics", desc: "We create content for specific platforms that gets people to like and share." },
              { icon: Palette, title: "UI/UX Design", desc: "We design websites that are easy to use and help people find what they need." },
              { icon: Sparkles, title: "Motion Graphics", desc: "We add movement and animation to make your brand stand out." }
            ].map((cap, idx) => (
              <div key={idx} className="flex flex-col">
                <cap.icon className="text-cyan-500 mb-6" size={32} />
                <h4 className="font-space text-xl font-bold mb-4">{cap.title}</h4>
                <p className="text-zinc-500 font-light leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-cyan-500 p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h3 className="font-space text-4xl font-bold text-black mb-4">Ready to update your brand?</h3>
            <p className="text-black/70 font-medium">Let's build a brand that people notice and that helps your business grow.</p>
          </div>
          <Link to="/contact" className="inline-block bg-black text-white font-space font-bold py-6 px-16 uppercase tracking-widest hover:bg-zinc-900 transition-all duration-300 whitespace-nowrap">
            Start Creative Brief
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreativePage;
