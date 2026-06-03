/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Get current active indices to display (3 items on desktop, 2 on tablet, 1 on mobile)
  const getVisibleTestimonials = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      list.push(TESTIMONIALS[(startIndex + i) % TESTIMONIALS.length]);
    }
    return list;
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <section id="reviews" className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-brand-secondary border-l-4 border-brand-secondary pl-3 mb-3 block uppercase tracking-[0.2em]">
              TESTIMONIALS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight">
              HEAR IT STRAIGHT FROM OUR <span className="text-brand-secondary">CUSTOMERS</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all bg-brand-primary text-white active:scale-95 cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Reviews Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
          {visibleItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`bg-white p-8 border-b-4 border-brand-secondary shadow-sm hover:shadow-xl transition-all duration-300 relative rounded-sm flex flex-col justify-between h-full group ${
                index === 1 ? 'md:block' : index === 2 ? 'lg:block hidden' : 'block'
              }`}
            >
              <Quote className="absolute top-4 right-6 h-8 w-8 text-brand-secondary/10" />
              
              <div>
                {/* Real-time star representations */}
                <div className="flex text-brand-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4.5 w-4.5 ${
                        i < item.rating ? 'fill-brand-secondary text-brand-secondary' : 'text-outline-muted'
                      }`}
                    />
                  ))}
                </div>

                <p className="font-sans text-muted-text text-sm italic leading-relaxed mb-6">
                  {item.content}
                </p>
              </div>

              {/* Author meta line */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-surface-container">
                <div className="w-11 h-11 bg-surface-container rounded-full overflow-hidden border border-brand-secondary/20">
                  <img
                    className="w-full h-full object-cover"
                    src={item.avatarUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-display font-extrabold text-sm text-brand-primary tracking-tight">
                    {item.name}
                  </p>
                  <p className="font-mono text-[10px] font-bold text-muted-text uppercase tracking-wide">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
