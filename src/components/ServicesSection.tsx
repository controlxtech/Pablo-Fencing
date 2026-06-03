/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICES_LIST } from '../data';

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>('s2'); // Default to Repair for illustration

  return (
    <section id="services" className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Services List Accordion */}
        <div className="lg:col-span-7 flex flex-col justify-center" id="services-grid-left">
          <span className="text-xs font-mono font-bold text-brand-accent mb-4 block uppercase tracking-[0.2em]">
            OUR SPECIALTY EXPERTISE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-8 leading-tight">
            EXPERT INSTALLATION & <br />REPAIR SOLUTIONS
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-300 mb-10 max-w-xl">
            We provide full-scope design, structural boring, post setting, and hardware tuning. We use only selected Florida weather-resistant materials to ensure absolute peace of mind.
          </p>

          {/* Interactive List */}
          <div className="space-y-4 border-t border-white/10" id="services-accordion">
            {SERVICES_LIST.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`border-b border-white/10 py-5 px-4 cursor-pointer transition-all duration-300 rounded-[2px] ${
                    isActive ? 'bg-white/5' : 'hover:bg-white/2'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <span className="font-display font-black text-xl text-brand-accent">
                        {service.number}
                      </span>
                      <span className="font-display font-black text-base sm:text-lg tracking-tight uppercase">
                        {service.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-brand-accent transition-transform duration-300 ${
                        isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>

                  {/* Expanded block with transition */}
                  {isActive && (
                    <div className="mt-4 ml-12 animate-fade-in pl-1">
                      <p className="font-sans text-sm text-neutral-300 mb-4 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-brand-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Professional Oversight image block */}
        <div className="lg:col-span-5 relative" id="services-grid-right">
          <div className="relative rounded-[2px] overflow-hidden h-[450px] sm:h-[520px] border-4 border-white/15">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTxctZjL1qBYb69oe8g0f4FLdrHFjUuy3xGA2Ti59dk1ovJ19zz3mUJLYOOolgsR-ZwgwsXWMwE_PWCNjyUxa0xBguKSSAgnS4LNqSCtVL8MLKBEi-EWzdYKeqaYrQ7szOVn74Lp2Sb2xuqFzU1mLUHNPnlYYdGKXboElAyAmRu4NsaFwVL2BcD7r9llXJfLF8hnUw_tj_E3FYsRHkFwgGYzhMfCUSsVMuOW-uzGQWSqHHH1fmcXPf8IKIGhohfY5a8251VUnbnxc"
              alt="Quality safety supervisor inspecting fencing perimeters"
            />
            
            {/* Float badge */}
            <div className="absolute top-6 left-6 bg-brand-secondary p-4 rounded-sm shadow-xl flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-accent fill-brand-accent text-neutral-text" />
              <div className="text-left font-mono">
                <p className="text-[9px] font-bold text-white/80 leading-none">BUILD CODE APPROVED</p>
                <p className="text-xs font-black text-white mt-0.5 tracking-wide">ZERO INCIDENT HISTORY</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
