
import React from 'react';
import { Brain, Code, Zap, BarChart3 } from 'lucide-react';
import { Pillar } from './types';

export const PILLARS: Pillar[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Strategy',
    focus: 'Market Intelligence and Positioning',
    description: 'We don’t just plan; we build a foundation for success. By studying market dynamics and brand architecture, we create the clarity your business needs to grow.',
    techFlex: 'Deep brand architecture and positioning strategy.',
    icon: 'Brain'
  },
  {
    id: 'tactics',
    number: '02',
    title: 'Tactics',
    focus: 'Omnichannel Growth and Performance',
    description: 'We turn your vision into momentum. Our team executes high-impact growth campaigns across the right channels to build immediate market presence.',
    techFlex: 'Responsive interfaces and performance marketing operations.',
    icon: 'Zap'
  },
  {
    id: 'software',
    number: '03',
    title: 'Software',
    focus: 'Digital Platforms and Custom Experience',
    description: 'We build the digital backbone of your business. Our custom platforms and user experiences are designed to scale alongside your ambitions.',
    techFlex: 'Modern web architectures and seamless system integrations.',
    icon: 'Code'
  },
  {
    id: 'analytics',
    number: '04',
    title: 'Analytics',
    focus: 'Data Science and Attribution',
    description: 'Transparency is our standard. We provide clear attribution models and real-time dashboards so you know exactly how your investment is performing.',
    techFlex: 'Predictive modeling and live performance tracking.',
    icon: 'BarChart3'
  }
];

export const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};