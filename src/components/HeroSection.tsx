/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { QuoteFormData } from '../types';

interface HeroSectionProps {
  quoteFormId: string;
}

export default function HeroSection({ quoteFormId }: HeroSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'New Fence Installation',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingQuotes = JSON.parse(localStorage.getItem('fencing_quotes') || '[]');
    const newQuote = {
      ...formData,
      id: `q_${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('fencing_quotes', JSON.stringify([newQuote, ...existingQuotes]));
    setIsSubmitted(true);
  };

  const inputClass =
    'w-full border-0 border-b border-brand-primary/25 bg-surface-low/60 focus:outline-none focus:ring-0 focus:border-brand-secondary p-2.5 font-sans text-sm rounded-[2px] transition-colors placeholder:text-brand-primary/30';

  const labelClass = 'block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide mb-1';

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center py-16 text-surface-lowest overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-primary/55 scrim-hero z-10" />
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyW4GZZ4pOrXesS-Sc6uo8_GwD6-bKgudqRvJvHw4UT2iKu13fFAcZEbh3e6ONdD3-7V7UJBETVXF_egXVH6Ow5AAxaAckWhhuQRNsRg042b4gSKrPJ6jBUmJkXSqPcdDNrxDlKd7LInqzZOB0vTWadVS5h-l6ELDpVQf6QBrG85YME41rh-dxVGyzA7bgdrmAhjA2Vk9XLpakRIQuNk6kh3O6pLJAJHrSYxiAPv1D1x0PKlqS9u5KxZ-gPIlIH06d31TXI8S_n20"
          alt="Modern horizontal slat aluminum fencing backdrop"
        />
      </div>

      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Brand Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start pt-8">
          <span className="inline-block bg-brand-secondary text-surface-lowest px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest mb-6 rounded-sm">
            FREE ESTIMATES • LICENSED & FULLY INSURED
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase tracking-tight text-white">
            Fences Built Tough. <br />
            Backed by <span className="text-brand-accent">Pablo.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg mb-8 max-w-xl opacity-90 text-neutral-50">
            For 20+ years, we have provided Florida property owners with structural excellence,
            clear certified pricing, and fences engineered to withstand category-4 storms.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl mb-8">
            <div className="flex-1 flex items-center gap-4 bg-black/40 backdrop-blur-sm p-4 border-l-4 border-brand-secondary text-surface-lowest rounded-r-[2px]">
              <div className="flex-shrink-0 w-11 h-11 bg-brand-accent rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-brand-primary fill-brand-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-sm tracking-tight leading-none text-brand-accent">PROVEN 4.9/5 STAR RATIO</p>
                <p className="font-sans text-xs text-white/80 mt-1">Over 2,240 Verified Reviews</p>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-4 bg-black/40 backdrop-blur-sm p-4 border-l-4 border-white text-surface-lowest rounded-r-[2px]">
              <div className="flex-shrink-0 w-11 h-11 bg-white rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-sm tracking-tight leading-none text-white">3-YEAR WEAR GUARANTEE</p>
                <p className="font-sans text-xs text-white/80 mt-1">Backed By Strict Site Post Warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div className="lg:col-span-5" id={quoteFormId}>
          <div className="bg-white/95 text-brand-primary p-6 sm:p-8 shadow-2xl backdrop-blur-md rounded-[2px] max-w-lg mx-auto w-full">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-surface-container pb-4 mb-1">
                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-brand-primary">
                    Get a Free Quote
                  </h3>
                  <p className="font-sans text-xs text-muted-text mt-1">
                    We'll respond within 2 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder="(407) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                    placeholder="name@domain.com"
                  />
                </div>

                <div>
                  <label className={labelClass}>Service Needed</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={inputClass}
                  >
                    <option>New Fence Installation</option>
                    <option>Fence Repair & Maintenance</option>
                    <option>Custom Gate Installation</option>
                    <option>Commercial Fencing</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Project Details (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your property, fence length, material preference, HOA requirements, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white font-display text-xs font-bold uppercase tracking-wider py-4 rounded-[2px] hover:bg-brand-secondary transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Request My Free Quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[10px] text-muted-text">
                  No obligation. Free on-site estimate included.
                </p>
              </form>
            ) : (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 bg-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-black text-brand-primary uppercase tracking-tight mb-2">
                  Quote Requested!
                </h3>
                <p className="font-sans text-sm text-neutral-text mb-6">
                  Thanks, <strong>{formData.fullName}</strong>. We'll reach out to{' '}
                  <span className="font-semibold">{formData.phone}</span> within 2 business hours to schedule your free on-site estimate.
                </p>
                <div className="bg-surface-low p-4 rounded-[2px] mb-6 text-left text-xs space-y-1">
                  <p className="font-bold text-brand-primary mb-1">What Happens Next</p>
                  <p className="text-muted-text">1. A project specialist reviews your request.</p>
                  <p className="text-muted-text">2. We call to confirm a convenient site visit.</p>
                  <p className="text-muted-text">3. You receive a detailed written quote — no surprises.</p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-brand-primary text-white font-mono text-xs font-bold uppercase px-8 py-3 rounded-[2px] hover:bg-brand-secondary transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
