/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Hammer, Phone } from 'lucide-react';

interface TopNavBarProps {
  onQuoteClick: () => void;
}

export default function TopNavBar({ onQuoteClick }: TopNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-primary/10 bg-surface-lowest/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo and Brand Name */}
        <a href="#home" className="flex items-center gap-3 transition-transform hover:scale-[1.01]" id="brand-logo-container">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3YAMfdBGka5hF3JnHJiumVcGX-nZnb36tCtlj735tLTdzXp1o6Zd3bdFUydxaOfQ9TfJFKE7wWxDA5Docmuj0SGPTbt1bY0XSdjpOCFfp3TVKEs6rlWVciJ9n1l7_4i91OFaFAuEM97Ms8ZoA9MovDEl-4QBSonKhaHlDsQIeAXullz6aaea4cVNBsuaIClI-6zXhHAPathEojT7Ixhn7VWdQZTaJI3yTmA1IHdXLAKFNxJO0h8WmGFHI6FUJN1nb00ssnVmCoDg"
            alt="Pablo Fencing Logo"
            className="h-14 w-auto object-contain"
            id="nav-logo-img"
          />
          <div className="flex flex-col justify-center">
            <span className="font-display text-xl font-black uppercase tracking-tighter text-brand-primary line-height-none">
              PABLO FENCING
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-secondary">
              BUILT TOUGH GUARANTEE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium tracking-wide text-muted-text hover:text-brand-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Quote Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+1410234456"
            className="hidden lg:flex items-center gap-2 font-mono text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors"
          >
            <Phone className="h-4 w-4 text-brand-secondary" />
            <span>(410) 234-456</span>
          </a>
          <button
            onClick={onQuoteClick}
            className="hidden md:block bg-brand-secondary text-surface-lowest px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:bg-brand-primary transition-all duration-300 active:scale-95"
            id="nav-quote-btn"
          >
            Get Free Quote
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden p-2 text-brand-primary hover:text-brand-secondary focus:outline-none transition-colors"
            aria-label="Toggle Menu"
            id="nav-hamburger-btn"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-primary/10 bg-surface-lowest/98 px-6 py-4 shadow-xl animate-fade-in" id="mobile-nav-panel">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-base font-medium text-neutral-text border-b border-surface-low hover:text-brand-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:+1410234456"
                className="flex items-center gap-2 font-mono text-sm font-bold text-brand-primary"
              >
                <Phone className="h-4 w-4 text-brand-secondary" />
                <span>Call Us: +1 (410) 234-456</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onQuoteClick();
                }}
                className="w-full bg-brand-secondary text-surface-lowest py-3 text-center font-mono text-xs font-bold uppercase tracking-wider rounded-[2px] hover:bg-brand-primary"
                id="mobile-nav-quote-btn"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
