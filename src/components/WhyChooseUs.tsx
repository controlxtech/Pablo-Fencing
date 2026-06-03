/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, ShieldCheck, DollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      id: 1,
      icon: Clock,
      title: '20+ Years Of Experience',
      desc: "We've been designing and anchoring fences across the state for decades, delivering consistent engineering benchmarks and customer-first compliance.",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: 'Flawless Installation Standards',
      desc: 'Our certified crews drill to exact municipality standard depths and set all load posts in reinforced quick-cure structural concrete. Zero sagging guaranteed.',
    },
    {
      id: 3,
      icon: DollarSign,
      title: 'Honest & Transparent pricing',
      desc: 'No sudden structural additions or permit spikes. You receive a fully itemized blueprint estimate explaining exactly what is included.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-surface-low relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Editorial stats image panel */}
          <div className="relative group" id="why-choose-image-box">
            <div className="relative overflow-hidden rounded-[2px] border-8 border-white shadow-2xl">
              <img
                className="w-full h-auto object-cover transform duration-500 group-hover:scale-[1.01]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmRAZrY6id7a2y_KW-Ol_ibdr0JApQLZ84ln6yZ2qncPuc3hnOwj7Xhppk9qiTTvQlH-Yk9-2HQy8nmrTjBpO3sTRKulw4ysuY2fIO0teZYZgObq2Z5qpRgnez1VGHQA-wTpNmovOMBBzsjuwhKfHlsVBiJ3EqIScX--peys3_VL4HkMgqc5GY5i4ZZhJEbxP26YoFtbI14kyKbLRieMzbiDZH82ChVbGWR-zNxrC_-Os33Yip4K4DDeFsaoDUxlliwTB8WQJfmF4"
                alt="Fencing carpenter aligning wooden posts with precision tools"
              />
              <div className="absolute bottom-6 right-6 bg-brand-secondary p-6 text-white rounded-sm shadow-2xl">
                <p className="font-display font-black text-4xl sm:text-5xl leading-none">20+</p>
                <p className="font-mono text-[10px] font-bold tracking-widest uppercase mt-2">
                  YEARS FL EXPERIENCE
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Key Values List */}
          <div id="why-choose-content-box">
            <span className="text-xs font-mono font-bold text-brand-secondary mb-4 block uppercase tracking-[0.2em]">
              THE PABLO STANDARDS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight mb-8 leading-tight">
              A FENCE COMPANY YOU CAN <span className="text-brand-secondary">RELY ON</span>
            </h2>

            <div className="space-y-8">
              {points.map((point) => {
                const IconComponent = point.icon;
                return (
                  <div key={point.id} className="flex gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white text-brand-secondary border border-brand-secondary/20 rounded-full flex items-center justify-center transition-colors group-hover:bg-brand-secondary group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-base sm:text-lg text-brand-primary uppercase tracking-tight mb-2">
                        {point.title}
                      </h4>
                      <p className="font-sans text-sm text-muted-text leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
