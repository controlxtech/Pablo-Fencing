/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, Calendar, User, X, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-surface-low border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-brand-secondary mb-3 block uppercase tracking-[0.2em]">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight mb-4">
            DISCOVER <span className="text-brand-secondary">FENCING GUIDES</span> & TRENDS
          </h2>
          <p className="font-sans text-sm text-muted-text max-w-xl mx-auto">
            Practical breakdowns of Texas municipal building codes, timber lifespan analysis, and preventative maintenance tips to double your fence's longevity.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-muted/30 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="h-60 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={post.imageUrl}
                  alt={post.title}
                />
                <span className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  {post.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-muted-text mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      By Pablo S.
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base sm:text-lg text-brand-primary uppercase tracking-tight mb-3 group-hover:text-brand-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-muted-text leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-2 font-mono text-xs font-bold text-brand-primary hover:text-brand-secondary hover:gap-3 transition-all uppercase tracking-wide cursor-pointer w-fit"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 text-brand-secondary" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => alert('Search and filter tags mapped. Subscribe to newsletters below for periodic construction updates!')}
            className="bg-brand-primary text-white hover:bg-brand-secondary hover:text-white px-10 py-4 rounded-[2px] font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Load Older Publications
          </button>
        </div>
      </div>

      {/* Slide / Immersive Article Modal Reader */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-sm animate-fade-in p-4 sm:p-0">
          <div className="bg-white text-brand-primary w-full sm:max-w-xl h-full sm:h-[100vh] sm:overflow-y-auto shadow-2xl p-6 sm:p-10 flex flex-col justify-between animation-slide-left relative rounded-[2px]">
            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-surface-low text-brand-primary rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors cursor-pointer"
              aria-label="Close Article Reader"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              {/* Category */}
              <span className="inline-block bg-brand-secondary/15 text-brand-secondary px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-wider mb-6 rounded-sm mt-8">
                {selectedPost.category}
              </span>

              <h3 className="font-display font-black text-xl sm:text-2xl text-brand-primary uppercase tracking-tight mb-4 leading-tight">
                {selectedPost.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-mono text-muted-text mb-6 pb-4 border-b border-surface-container">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  5 Min Read
                </span>
              </div>

              {/* Render fictional article detailed text based on category */}
              <div className="font-sans text-xs sm:text-sm text-muted-text space-y-4 leading-relaxed">
                <p>
                  Building structural items like perimeters, perches, or privacy structures isn’t as straightforward as dropping picket lines on dirt. In the Dallas area’s expansive clay soils and high-wind corridors, soil compositions challenge post alignments.
                </p>
                <div className="bg-surface-low p-4 border-l-4 border-brand-secondary rounded-[2px]">
                  <p className="font-bold text-brand-primary mb-1">Key Local Regulations:</p>
                  <p className="text-xs">Most Dallas-area counties prohibit privacy fencing taller than 8 feet on residential rear yards, and 4 feet on front yards, to preserve sightlines for emergency vehicles and comply with local ordinances.</p>
                </div>
                <p>
                  When selecting wood, always verify that the pine is chemically standard-treated to prevent termite degradation. For aluminum and composite steel lines, request certified powder-coating bounds to preserve the metal layout against heavy UV and thermal rays.
                </p>
                <h4 className="font-display font-extrabold text-sm text-brand-primary uppercase tracking-tight pt-4">Recommended Care Schedule:</h4>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-secondary mt-0.5 flex-shrink-0" />
                    <span><strong>Pressure wash wood:</strong> Use a flat 40-degree nozzle once per year. High-pressure narrow settings can gouge active grain fiber.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-secondary mt-0.5 flex-shrink-0" />
                    <span><strong>Vinyl gate spraydown:</strong> Wash down hinges once a season with mild soapy liquid. Avoid oil-lubes that attract Texas dust and debris particles.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-surface-container">
              <button
                onClick={() => setSelectedPost(null)}
                className="w-full bg-brand-primary text-white font-mono text-xs font-bold uppercase tracking-wider py-4 rounded-[2px] hover:bg-brand-secondary transition-all"
              >
                Close Publication
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
