/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, Award, Hammer, HardHat, LandPlot } from 'lucide-react';

export default function TrustBadges() {
  const partners = [
    { name: 'ACTIVE YARDS', icon: LandPlot },
    { name: 'MASTER HALCO', icon: Hammer },
    { name: 'AMERISTAR', icon: ShieldAlert },
    { name: 'WOOD-LINK CO', icon: Award },
    { name: 'INTEGRITY METALS', icon: HardHat },
  ];

  return (
    <div className="bg-surface-container py-8 border-y border-outline-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-12 opacity-60">
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={partner.name}
                className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                <IconComponent className="h-5 w-5 text-neutral-text" />
                <span className="font-display text-xs sm:text-xs font-black tracking-[0.25em] text-neutral-text uppercase">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
