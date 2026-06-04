/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('f1'); // Keep first open by default

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Short intro */}
          <div className="lg:col-span-5" id="faq-intro-sidebar">
            <span className="text-xs font-mono font-bold text-brand-secondary mb-3 block uppercase tracking-[0.2em]">
              COMMONLY ASKED
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight mb-6 leading-tight">
              YOUR FENCING <br />
              QUESTIONS <span className="text-brand-secondary">ANSWERED</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-text mb-8">
              Cannot find the technical clearances you require? Reach out to our Richardson, TX office or call us directly—we’re always happy to assist with state land laws or site calculations.
            </p>

            <div className="bg-brand-secondary/5 p-5 border-l-4 border-brand-secondary rounded-[2px] space-y-3">
              <div className="flex gap-2.5 items-center text-xs font-bold uppercase text-brand-primary">
                <CheckCircle className="h-4.5 w-4.5 text-brand-secondary" />
                <span>811 Call-Before-You-Dig Scened</span>
              </div>
              <p className="text-xs text-muted-text leading-tight leading-relaxed">
                We handle the utility clearance logs and log requests representing your property boundaries 5 days before starting.
              </p>
            </div>
          </div>

          {/* Right Column: FAQ Accordion items */}
          <div className="lg:col-span-7 space-y-4" id="faq-accordion-box">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-brand-primary/10 rounded-[2px] overflow-hidden bg-surface-low/50"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex justify-between items-center p-5 text-left font-display font-bold text-sm sm:text-base text-brand-primary uppercase tracking-tight hover:bg-surface-low transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                      <span>{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-brand-secondary transition-transform duration-300 ${
                        isOpen ? 'rotate-180 font-bold' : ''
                      }`}
                    />
                  </button>

                  {/* Collapsible Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-brand-primary/5 bg-white text-xs sm:text-sm text-muted-text leading-relaxed animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
