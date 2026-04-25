
import React from 'react';
import { Brain, Zap, Cpu, BarChart3 } from 'lucide-react';
import { Pillar } from './types';

export const PILLARS: Pillar[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Strategy',
    focus: 'Market Intelligence',
    description: 'Market Dynamics & Brand Architecture. We look at your market and how your brand fits in. Then we build a plan based on facts, not guesses.',
    techFlex: 'Clean & Corporate Aesthetic',
    icon: 'Brain'
  },
  {
    id: 'tactics',
    number: '02',
    title: 'Tactics',
    focus: 'Omnichannel Execution',
    description: 'High-performance marketing and execution. We handle the day-to-day marketing and execution to turn your plans into real-world sales.',
    techFlex: 'Active UI & Motion Graphics',
    icon: 'Zap'
  },
  {
    id: 'software',
    number: '03',
    title: 'Software',
    focus: 'Systems Integration',
    description: 'Full-stack engineering and custom platforms. We build the technical foundation your business needs to run smoothly.',
    techFlex: 'Component-Based Architecture',
    icon: 'Cpu'
  },
  {
    id: 'analytics',
    number: '04',
    title: 'Analytics',
    focus: 'Data Science',
    description: 'Attribution models and ROI tracking. We track your results and show you the data behind every move we make.',
    techFlex: 'Live-Rendered Data Points',
    icon: 'BarChart3'
  }
];

export const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};
