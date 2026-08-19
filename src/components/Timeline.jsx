import React from 'react';
import { Calendar, CheckCircle, GraduationCap, Award, Compass, Flag } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { PORTFOLIO } from '../data/portfolioData';

export function Timeline() {
  return (
    <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-pink text-white px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <Compass className="w-4 h-4" />
            <span>Academic & Skill Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            THE LEARNING <span className="text-brutal-lime">JOURNEY</span>
          </h2>
        </div>
        <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 max-w-md">
          A chronological timeline documenting Mohammed's technical education from C++ algorithms to Cisco enterprise networking, ALX engineering, and ISTA full-stack mastery.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-4 border-black ml-4 md:ml-32 pl-6 md:pl-10 space-y-10">
        {PORTFOLIO.timeline.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Pin Indicator */}
            <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 bg-brutal-yellow border-3 border-black shadow-brutal-sm flex items-center justify-center font-mono font-black text-xs group-hover:scale-125 transition-transform">
              ✦
            </div>

            {/* Floating Year Pill on Desktop */}
            <div className="md:absolute md:-left-[180px] md:top-1.5 mb-2 md:mb-0">
              <span className="inline-block bg-black text-white font-mono font-black text-xs px-2.5 py-1 border-2 border-black shadow-brutal-sm">
                {step.year}
              </span>
            </div>

            {/* Timeline Card */}
            <Card
              hoverEffect={true}
              header={
                <div className="flex items-center justify-between w-full font-mono text-xs">
                  <span className="font-black text-black">{step.role}</span>
                  <Badge variant={idx % 2 === 0 ? 'yellow' : 'cyan'} size="sm">
                    {step.badge}
                  </Badge>
                </div>
              }
              headerBg={idx % 2 === 0 ? 'bg-yellow-200' : 'bg-cyan-200'}
              shadow="shadow-brutal-md"
            >
              <h3 className="text-xl font-black font-sans uppercase tracking-tight text-black mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs font-mono font-medium text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
