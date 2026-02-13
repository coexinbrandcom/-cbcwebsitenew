
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Server, Users, Target } from 'lucide-react';

const generateMockData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      time: `${i}:00`,
      value: Math.floor(Math.random() * 100) + 400,
    });
  }
  return data;
}

const CoexinPulse: React.FC = () => {
  const [data, setData] = useState(generateMockData());
  const [activeUsers, setActiveUsers] = useState(1284);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          value: Math.floor(Math.random() * 100) + 400,
        });
        return newData;
      });
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10) - 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="analytics" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-4">Real-time Performance</h2>
            <h3 className="font-space text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none">The Pulse of Growth.</h3>
            <p className="text-zinc-400 text-lg mt-8 max-w-2xl font-light leading-relaxed">
              We provide complete transparency into your progress. Our custom tools show the direct impact of every strategic move and technical update we implement.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
                <span className="text-[10px] uppercase font-bold tracking-widest">Coexin Live Dashboard</span>
              </div>
              <p className="font-space text-3xl font-bold tracking-tighter uppercase text-white">Active Performance</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900/50 border border-white/5 p-8 group hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <Users className="text-cyan-500 w-6 h-6" />
                <span className="text-[10px] text-zinc-500 font-mono">+12.4% Momentum</span>
              </div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Total Engagement</p>
              <h4 className="font-space text-4xl font-bold mt-2 tracking-tighter text-white">{activeUsers.toLocaleString()}</h4>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 p-8 group hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <Server className="text-cyan-500 w-6 h-6" />
                <span className="text-[10px] text-zinc-500 font-mono">Status Healthy</span>
              </div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Request Velocity</p>
              <h4 className="font-space text-4xl font-bold mt-2 tracking-tighter text-white">18.2k<span className="text-sm font-light text-zinc-500 ml-1">req/s</span></h4>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 p-8 group hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <Target className="text-cyan-500 w-6 h-6" />
                <span className="text-[10px] text-emerald-500 font-mono">Verified Growth</span>
              </div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Revenue Attribution</p>
              <h4 className="font-space text-4xl font-bold mt-2 tracking-tighter text-white">4.8x</h4>
            </div>
          </div>

          <div className="lg:col-span-8 bg-zinc-900/30 border border-white/5 p-8 h-[500px] relative">
            <div className="flex justify-between items-center mb-10">
              <div>
                <p className="font-space text-xl font-bold tracking-tight text-white">Growth Velocity Trends</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Aggregate Data View • v4.0.2</p>
              </div>
              <div className="flex space-x-2 font-space">
                <div className="px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-tighter">Live Tracking</div>
              </div>
            </div>
            
            <div className="h-full w-full pb-16">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff0a" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#71717a', fontSize: 10}}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#71717a', fontSize: 10}}
                  />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#18181b', border: '1px solid #ffffff1a', color: '#fff'}}
                    itemStyle={{color: '#06b6d4'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#06b6d4" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={1000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoexinPulse;