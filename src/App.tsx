/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import LocationsSection from './components/LocationsSection';
import ReviewsSection from './components/ReviewsSection';
import BlogSection from './components/BlogSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const quoteFormId = 'quote-configurator-tool';

  // Back-to-top sensor
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToQuoteForm = () => {
    const formElement = document.getElementById(quoteFormId);
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-base text-neutral-text font-sans antialiased overflow-x-hidden selection:bg-brand-secondary/35 selection:text-brand-primary" id="app-root">
      
      {/* Top Header section */}
      <TopNavBar onQuoteClick={handleScrollToQuoteForm} />

      {/* Main Blocks Assembled in logical vertical rhythm */}
      <main>
        {/* Hero Section containing instant price configuration */}
        <HeroSection quoteFormId={quoteFormId} />

        {/* Gray suppliers row banner */}
        <TrustBadges />

        {/* Why choose us values overview */}
        <WhyChooseUs />

        {/* Customer reviews & testimonials */}
        <ReviewsSection />

        {/* Services interactive selector */}
        <ServicesSection />

        {/* Immersive Projects filtered catalog and specs Lightbox */}
        <ProjectsSection />

        {/* Dashed connector process roadmaps */}
        <ProcessSection />

        {/* Brand narrative, watch construction tutorial */}
        <AboutSection />

        {/* Collapsible permittings, utility clears and FAQs */}
        <FAQSection />

        {/* Selected regional dispatch and zip guides */}
        <LocationsSection />

        {/* Educational publication guides and slideshow — temporarily hidden */}
        {/* <BlogSection /> */}

        {/* Call-to-Action Segment */}
        <section className="py-24 bg-brand-primary relative overflow-hidden" id="cta-block">
          {/* Subtle details background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 p-10 sm:p-16 border border-white/10 rounded-sm backdrop-blur-sm">
              <div className="max-w-2xl text-left">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase mb-2 block">
                  FAST-TRACK SCHEDULING
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight mb-4 uppercase tracking-tight">
                  LET'S BUILD YOUR <span className="text-brand-accent">PERFECT</span> FENCE
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Booking your on-site measurement and HOA consultation is fast and fluid. Configure your desired metrics directly in our instant estimator of choice and our dispatch crew will call shortly.
                </p>
              </div>

              <button
                onClick={handleScrollToQuoteForm}
                className="bg-brand-secondary text-white hover:bg-brand-accent hover:text-brand-primary px-10 py-5 rounded-[2px] font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-3 active:scale-95 cursor-pointer flex-shrink-0"
              >
                <span>Launch Quick Estimate</span>
                <ArrowUp className="h-4 w-4 rotate-45" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Structural footer */}
      <FooterSection />

      {/* Dynamic Back-to-Top widget */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 bg-brand-secondary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-brand-primary shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
