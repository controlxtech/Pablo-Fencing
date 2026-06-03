/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PhoneCall, ClipboardList, HardHat, BadgeCheck } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      id: '01',
      icon: PhoneCall,
      title: 'Initial Consultation',
      desc: 'We map out your boundary, check setbacks, utility clearances, and provide a binding estimate outline.',
    },
    {
      id: '02',
      icon: ClipboardList,
      title: 'Design & Planning',
      desc: 'We assist with drawing alignment plans, matching strict HOA aesthetics, and selecting raw timbers or metals.',
    },
    {
      id: '03',
      icon: HardHat,
      title: 'Professional Install',
      desc: 'Our crew bores anchor posts, anchors structure below shifting levels, and secures all pickets gracefully.',
    },
    {
      id: '04',
      icon: BadgeCheck,
      title: 'Final Quality Walk',
      desc: 'We review gate swing metrics together, examine secure closures, and hand over your warranty packet.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-surface-low relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-xs font-mono font-bold text-brand-secondary mb-4 block uppercase tracking-[0.2em]">
          HOW WE WORK
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight mb-20">
          A <span className="text-brand-secondary">STRESS-FREE</span> PROCESS START TO FINISH
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative" id="process-steps">
          {/* Connector Line (Desktop Horizontal Line) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-outline-muted pointer-events-none z-0"></div>

          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center group" id={`step-${step.id}`}>
                {/* Stepper Circle */}
                <div className="relative w-24 h-24 bg-white border-4 border-brand-secondary text-brand-secondary rounded-full flex items-center justify-center mb-6 shadow-md transition-all duration-350 group-hover:bg-brand-secondary group-hover:text-white group-hover:scale-105">
                  <IconComponent className="h-9 w-9" />
                  
                  {/* Absolute Badge Count */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white shadow">
                    {step.id}
                  </div>
                </div>

                <h4 className="font-display font-black text-base sm:text-lg text-brand-primary uppercase tracking-tight mb-3">
                  {step.title}
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-muted-text max-w-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
