/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, ShieldAlert, Award, Radio } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary pt-24 pb-12 text-white overflow-hidden relative">
      {/* Decorative vector grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10" id="footer-body">
        
        {/* Main 4-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3YAMfdBGka5hF3JnHJiumVcGX-nZnb36tCtlj735tLTdzXp1o6Zd3bdFUydxaOfQ9TfJFKE7wWxDA5Docmuj0SGPTbt1bY0XSdjpOCFfp3TVKEs6rlWVciJ9n1l7_4i91OFaFAuEM97Ms8ZoA9MovDEl-4QBSonKhaHlDsQIeAXullz6aaea4cVNBsuaIClI-6zXhHAPathEojT7Ixhn7VWdQZTaJI3yTmA1IHdXLAKFNxJO0h8WmGFHI6FUJN1nb00ssnVmCoDg"
                alt="Pablo Fencing Logo"
                className="h-14 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-display text-lg font-black uppercase tracking-tight text-white leading-none">
                  PABLO FENCING
                </span>
                <span className="font-mono text-[9px] font-bold text-brand-secondary tracking-widest mt-0.5">
                  BUILT TOUGH
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
              Expert fence installation, emergency repair, and automated security gates across Central Florida. Fences built lock-tight, backed by Pablo's personal warranty.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors"
                aria-label="Social Link Share"
              >
                <Radio className="h-4 w-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors"
                aria-label="Social Link Award"
              >
                <Award className="h-4 w-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors"
                aria-label="Social Link Security"
              >
                <ShieldAlert className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 className="font-display font-black text-sm uppercase tracking-widest text-white mb-8 border-l-2 border-brand-secondary pl-3">
              Core Navigation
            </h5>
            <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#home" className="hover:text-brand-secondary transition-colors">Home Landing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-secondary transition-colors">Company Bio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-secondary transition-colors">Installation Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-secondary transition-colors">Completed Portfolios</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-secondary transition-colors">FAQ & Compliance</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-brand-secondary transition-colors">Fencing Blogs</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick/Utility links */}
          <div>
            <h5 className="font-display font-black text-sm uppercase tracking-widest text-white mb-8 border-l-2 border-brand-secondary pl-3">
              Guarantees & Info
            </h5>
            <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy policy statement configured under FL-110 statutes.'); }} className="hover:text-brand-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Standard service agreements.'); }} className="hover:text-brand-secondary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Lifetime material, 3-year labor details.'); }} className="hover:text-brand-secondary transition-colors">
                  Warranty Coverage
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-brand-secondary transition-colors">
                  Service Coverage Map
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('HOA layout application forms templates.'); }} className="hover:text-brand-secondary transition-colors">
                  HOA Helper Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h5 className="font-display font-black text-sm uppercase tracking-widest text-white mb-8 border-l-2 border-brand-secondary pl-3">
              Get In Touch
            </h5>
            <ul className="space-y-5 text-xs sm:text-sm text-neutral-400">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  2100 N Greenville Ave,<br />Richardson, TX 75082, USA
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <a href="tel:+14695876255" className="hover:text-brand-secondary transition-colors font-mono">
                  +1 469-587-6255
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <a href="mailto:info@pablofencing.com" className="hover:text-brand-secondary transition-colors">
                  info@pablofencing.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Oversized background branding mark behind copyright */}
        <div className="relative py-16 text-center">
          <h1 className="text-[14vw] font-display font-black leading-none text-white/5 absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none uppercase tracking-tighter">
            PABLO FENCING
          </h1>
          <p className="text-center text-xs text-neutral-500 font-mono tracking-wider relative z-10">
            © {currentYear} Pablo Fencing. Built Tough. Backed by Pablo. All Rights Reserved. <br />
            Registered Certified Building Contractors. Reg FL BC#456475.
          </p>
        </div>

      </div>
    </footer>
  );
}
