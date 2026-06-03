/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, Shield, ArrowRight, CheckCircle2, Calculator } from 'lucide-react';
import { QuoteFormData } from '../types';

interface HeroSectionProps {
  quoteFormId: string;
}

export default function HeroSection({ quoteFormId }: HeroSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    serviceType: 'New Fence Installation',
    fenceMaterial: 'Premium Cedar',
    fenceLength: 120,
    fenceHeight: '6 Feet',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Material cost per linear foot for estimation
  const materialRates: Record<string, { rate: number; durationPer100Ft: number }> = {
    'Premium Cedar': { rate: 32, durationPer100Ft: 2 },
    'Heavy-Duty Vinyl': { rate: 26, durationPer100Ft: 1.5 },
    'Elite Black Aluminum': { rate: 42, durationPer100Ft: 1 },
    'Industrial Chainlink': { rate: 18, durationPer100Ft: 1 },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'fenceLength' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill out your name and email to proceed.');
      return;
    }

    // Persist to local storage to simulate a durable system
    const existingQuotes = JSON.parse(localStorage.getItem('fencing_quotes') || '[]');
    const newQuote = {
      ...formData,
      id: `q_${Date.now()}`,
      timestamp: new Date().toISOString(),
      estimatedCost: calculatedRange.min,
    };
    localStorage.setItem('fencing_quotes', JSON.stringify([newQuote, ...existingQuotes]));

    setIsSubmitted(true);
  };

  // Live estimate calculation
  const getCalculatedPriceRange = () => {
    const selectedRate = materialRates[formData.fenceMaterial] || { rate: 30, durationPer100Ft: 2 };
    const baseCost = formData.fenceLength * selectedRate.rate;
    // Add difficulty offset factor based on height
    const heightMultiplier = formData.fenceHeight === '8 Feet' ? 1.25 : formData.fenceHeight === '6 Feet' ? 1.0 : 0.85;
    
    const minEstimate = Math.round(baseCost * heightMultiplier);
    const maxEstimate = Math.round(baseCost * heightMultiplier * 1.15) + 350; // includes potential permit safety bounds
    
    return {
      min: minEstimate,
      max: maxEstimate,
      estimatedDays: Math.max(1, Math.ceil((formData.fenceLength / 100) * selectedRate.durationPer100Ft)),
    };
  };

  const calculatedRange = getCalculatedPriceRange();

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center py-16 text-surface-lowest overflow-hidden">
      {/* Cinematic Background Imagery with darken scrims */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-primary/55 scrim-hero z-10"></div>
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyW4GZZ4pOrXesS-Sc6uo8_GwD6-bKgudqRvJvHw4UT2iKu13fFAcZEbh3e6ONdD3-7V7UJBETVXF_egXVH6Ow5AAxaAckWhhuQRNsRg042b4gSKrPJ6jBUmJkXSqPcdDNrxDlKd7LInqzZOB0vTWadVS5h-l6ELDpVQf6QBrG85YME41rh-dxVGyzA7bgdrmAhjA2Vk9XLpakRIQuNk6kh3O6pLJAJHrSYxiAPv1D1x0PKlqS9u5KxZ-gPIlIH06d31TXI8S_n20"
          alt="Modern horizontal slat aluminum fencing backdrop"
        />
      </div>

      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Brand Value Proposition & Trust Metrics */}
        <div className="lg:col-span-7 flex flex-col items-start pt-8" id="hero-marketing-col">
          <span className="inline-block bg-brand-secondary text-surface-lowest px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest mb-6 rounded-sm">
            LICENSED & INSURED • REG. FL #BC456475
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase tracking-tight text-white">
            Fences Built Tough. <br />
            Backed by <span className="text-brand-accent">Pablo.</span>
          </h1>
          
          <p className="font-sans text-base sm:text-lg mb-8 max-w-xl opacity-90 text-neutral-50">
            For 20+ years, we have provided Central Florida's land and property owners with structural excellence, clear certified pricing, and fences engineered to withstand category-4 storms.
          </p>

          {/* Core Trust Indicators cards */}
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl mb-8" id="hero-badges">
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

        {/* Right Side: Price Configurator & Lead Submission Form */}
        <div className="lg:col-span-5" id={quoteFormId}>
          <div className="bg-white/95 text-brand-primary p-6 sm:p-8 shadow-2xl backdrop-blur-md rounded-[2px] max-w-lg mx-auto w-full transition-all">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-2 border-b border-surface-container pb-3">
                  <Calculator className="h-5 w-5 text-brand-secondary" />
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                    Instant Cost & Quote Tool
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border-0 border-b border-brand-primary/25 bg-surface-low/60 focus:ring-1 focus:ring-brand-secondary/40 focus:border-brand-secondary p-2.5 font-sans text-sm rounded-[2px]"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-0 border-b border-brand-primary/25 bg-surface-low/60 focus:ring-1 focus:ring-brand-secondary/40 focus:border-brand-secondary p-2.5 font-sans text-sm rounded-[2px]"
                      placeholder="e.g. name@domain.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide mb-1">
                      Service Category
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full border-0 border-b border-brand-primary/25 bg-surface-low/60 focus:ring-1 focus:ring-brand-secondary/40 focus:border-brand-secondary p-2.5 font-sans text-sm rounded-[2px]"
                    >
                      <option>New Fence Installation</option>
                      <option>Fence Repair & Maintenance</option>
                      <option>Custom Gate Installation</option>
                      <option>Commercial Fencing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide mb-1">
                      Select Material
                    </label>
                    <select
                      name="fenceMaterial"
                      value={formData.fenceMaterial}
                      onChange={handleInputChange}
                      className="w-full border-0 border-b border-brand-primary/25 bg-surface-low/60 focus:ring-1 focus:ring-brand-secondary/40 focus:border-brand-secondary p-2.5 font-sans text-sm rounded-[2px]"
                    >
                      <option>Premium Cedar</option>
                      <option>Heavy-Duty Vinyl</option>
                      <option>Elite Black Aluminum</option>
                      <option>Industrial Chainlink</option>
                    </select>
                  </div>
                </div>

                {/* Interactive Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide">
                      Length: <span className="text-sm font-sans font-bold text-brand-secondary">{formData.fenceLength}</span> Linear Ft
                    </label>
                    <span className="text-[10px] text-muted-text">10 - 500 ft</span>
                  </div>
                  <input
                    type="range"
                    name="fenceLength"
                    min="10"
                    max="500"
                    step="5"
                    value={formData.fenceLength}
                    onChange={handleInputChange}
                    className="w-full accent-brand-secondary bg-surface-container h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide mb-1">
                      Fence Height
                    </label>
                    <div className="flex gap-2">
                      {['4 Feet', '6 Feet', '8 Feet'].map((height) => (
                        <button
                          key={height}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, fenceHeight: height }))}
                          className={`flex-1 text-center py-1.5 text-xs font-semibold rounded-[2px] transition-all border ${
                            formData.fenceHeight === height
                              ? 'bg-brand-secondary text-white border-brand-secondary'
                              : 'bg-surface-low text-muted-text border-brand-primary/15 hover:bg-surface-lowest'
                          }`}
                        >
                          {height.split(' ')[0]}ft
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase font-bold text-muted-text tracking-wide mb-1">
                      Project Notes (Optional)
                    </label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-0 border-b border-brand-primary/25 bg-surface-low/60 p-1.5 text-xs rounded-[2px]"
                      placeholder="HOA, gates, terrain issues"
                    />
                  </div>
                </div>

                {/* Cost Estimation Results pane */}
                <div className="bg-brand-secondary/5 border-l-4 border-brand-secondary p-4 rounded-[2px] mt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[11px] font-mono font-bold tracking-wide uppercase text-muted-text block leading-none mb-1">
                        Live Budget Estimate
                      </span>
                      <span className="font-display font-black text-xl sm:text-2xl text-brand-primary tracking-tight">
                        ${calculatedRange.min.toLocaleString()} - ${calculatedRange.max.toLocaleString()}*
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-muted-text block">EST. COMPLETION</span>
                      <span className="font-display font-bold text-xs uppercase text-brand-secondary">
                        ~ {calculatedRange.estimatedDays} {calculatedRange.estimatedDays === 1 ? 'Day' : 'Days'}
                      </span>
                    </div>
                  </div>
                  <p className="text-[9px] text-muted-text mt-1.5 leading-tight">
                    *Estimates include direct materials and certified labor. Strict topography factors, gate counts or HOA clearances evaluated on site inspection.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white font-display text-xs font-bold uppercase tracking-wider py-4 mt-2 rounded-[2px] hover:bg-brand-secondary hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Submit Fencing Request</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12 px-4 animate-fade-in">
                <div className="w-16 h-16 bg-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-black text-brand-primary uppercase tracking-tight mb-3">
                  Inquiry Logged
                </h3>
                <p className="font-sans text-sm text-neutral-text mb-6">
                  Thank you, <strong>{formData.fullName}</strong>. Your estimate of{' '}
                  <span className="font-bold text-brand-secondary font-mono text-base">
                    ${calculatedRange.min.toLocaleString()} - ${calculatedRange.max.toLocaleString()}
                  </span>{' '}
                  and project scope details have been captured under tracking code{' '}
                  <span className="font-mono bg-surface-low px-2 py-0.5 rounded text-xs">
                    PF-{Math.floor(Math.random() * 90000 + 10000)}
                  </span>.
                </p>
                <div className="bg-surface-low p-4 rounded-[2px] mb-8 text-left text-xs">
                  <p className="font-bold text-brand-primary mb-1">What's Next?</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-text">
                    <li>Our lead engineer is looking over your material choice: <strong>{formData.fenceMaterial}</strong>.</li>
                    <li>You will receive a call within 2 business hours at the logged inbox to finalize an on-site post measurement.</li>
                  </ul>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-brand-primary text-white font-mono text-xs font-bold uppercase px-8 py-3 rounded-[2px] hover:bg-brand-secondary hover:text-white transition-colors"
                >
                  Configure Another Project
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
