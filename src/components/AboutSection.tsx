/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Play, ArrowRight, X, PlayCircle, ShieldCheck, Heart } from 'lucide-react';

export default function AboutSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Story & Expansion */}
          <div className="order-2 lg:order-1" id="about-story-col">
            <span className="text-xs font-mono font-bold text-brand-secondary mb-4 block uppercase tracking-[0.2em]">
              OUR HISTORY & ethos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight mb-8 leading-tight">
              ESTABLISHING SAFETY <br />
              & BEAUTY FOR <span className="text-brand-secondary">20+ YEARS</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-text mb-6 leading-relaxed">
              For Pablo Fencing, anchoring raw posts isn't simply about boundary lines—it is about carving secure, durable, and breathtaking sanctuaries for Dallas, Texas families. We utilize premium, sustainably sourced wood timbers and weather-tested metals to ensure years of zero-maintenance structural safety.
            </p>
            <p className="font-sans text-sm sm:text-base text-muted-text mb-8 leading-relaxed">
              We operate across residential backyards and commercial compounds alike, guaranteeing absolute customer service and honest local estimates from day one.
            </p>

            {/* Expanded Detailed Background */}
            {isExpanded && (
              <div className="bg-surface-low p-6 rounded-[2px] border-l-4 border-brand-secondary mb-8 animate-fade-in text-xs sm:text-sm">
                <h4 className="font-display font-black text-xs text-brand-secondary uppercase tracking-wider mb-2">Our Certified Pledges:</h4>
                <ul className="space-y-2 text-neutral-text list-disc pl-4">
                  <li><strong className="text-brand-primary">Hurricane Tie Sizing:</strong> Every wooden slat incorporates triple-coat zinc galvanized rings for increased wind tolerances.</li>
                  <li><strong className="text-brand-primary">HOA Compliance Navigation:</strong> We verify setback rules and layout diagrams directly with your committee boards to guarantee compliance.</li>
                  <li><strong className="text-brand-primary">Active Site Sourcing:</strong> Safe structural timber cut in native sustainable farms, processed to prevent rot and termites.</li>
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-brand-primary text-white hover:bg-brand-secondary hover:text-white px-8 py-4 rounded-[2px] font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isExpanded ? 'Show Less Info' : 'Explore Our Story'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-3.5 px-4 py-2 group cursor-pointer"
                id="watch-video-trigger"
              >
                <div className="w-12 h-12 rounded-full border-2 border-brand-secondary flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all transform group-hover:scale-105 shadow-md">
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-brand-primary group-hover:text-brand-secondary transition-colors">
                  Watch Construction Demo
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Office Blueprint Blueprint graphics */}
          <div className="order-1 lg:order-2" id="about-image-col">
            <div className="relative rounded-[2px] overflow-hidden shadow-2xl">
              <img
                className="w-full h-auto object-cover border-4 border-surface-container"
                src="https://d1qpm27e29dlmy.cloudfront.net/wp-content/uploads/2025/09/13102346/sarasota-fence-company-1920x1280-1.webp"
                alt="Pablo Fencing professional installation in Dallas Texas"
              />
              {/* Backed overlay indicator */}
              <div className="absolute inset-0 bg-brand-primary/10 hover:bg-transparent transition-all pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative bg-brand-primary text-white w-full max-w-3xl rounded-[2px] shadow-2xl overflow-hidden">
            {/* Close */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors cursor-pointer"
              aria-label="Close Video Modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video container representation */}
            <div className="aspect-video bg-black flex flex-col justify-center items-center p-8 text-center relative border-b-4 border-brand-secondary">
              {/* Fake playback scene elements */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
                  alt="Backyard background"
                  className="w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <PlayCircle className="h-20 w-20 text-brand-secondary animate-pulse mb-4 cursor-pointer hover:scale-105 transition-transform" />
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight mb-2 text-white">
                  Built Tough: The Pablo Assembly Process
                </h3>
                <p className="font-sans text-xs text-neutral-300 max-w-md mx-auto mb-6">
                  Learn how we sink posts, mix custom 4000-PSI strength concrete, and align vertical brackets for wind tolerance in Dallas's expansive clay soils.
                </p>

                <div className="flex gap-4 text-[10px] font-mono font-bold uppercase tracking-wide">
                  <span className="bg-white/10 px-3 py-1.5 rounded-sm flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-accent" />
                    Licensed Craft
                  </span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-sm flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 text-brand-accent" />
                    Texas Local
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
