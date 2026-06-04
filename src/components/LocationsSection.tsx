/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Navigation, CheckSquare } from 'lucide-react';
import { SERVICE_LOCATIONS } from '../data';

export default function LocationsSection() {
  const [selectedCity, setSelectedCity] = useState<string>('Dallas');

  const cityMeta: Record<string, { crew: string; response: string }> = {
    'Dallas':       { crew: 'Dallas County Central Crew',      response: 'Within 2 Hours' },
    'Fort Worth':   { crew: 'Tarrant County West Crew',        response: 'Within 4 Hours' },
    'Plano':        { crew: 'Collin County North Crew',        response: 'Same Day' },
    'Garland':      { crew: 'Dallas County East Crew',         response: 'Within 2 Hours' },
    'Irving':       { crew: 'Dallas County West Crew',         response: 'Same Day' },
    'Frisco':       { crew: 'Collin County Crew Alpha',        response: 'Same Day' },
    'McKinney':     { crew: 'Collin County North Team',        response: 'Within 4 Hours' },
    'Arlington':    { crew: 'Tarrant County Central Crew',     response: 'Within 2 Hours' },
    'Grand Prairie':{ crew: 'Dallas–Tarrant Border Crew',      response: 'Same Day' },
    'Mesquite':     { crew: 'Dallas County Southeast Crew',    response: 'Within 2 Hours' },
    'Carrollton':   { crew: 'Denton–Dallas Crew Alpha',        response: 'Same Day' },
    'Richardson':   { crew: 'Collin–Dallas Border Crew',       response: 'Within 2 Hours' },
  };

  const activeMeta = cityMeta[selectedCity] || {
    crew: 'Dallas–Fort Worth Dispatch Team',
    response: 'Within 24 Hours',
  };

  return (
    <section id="locations" className="py-24 bg-white border-y border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12 text-left">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold text-brand-secondary border-l-4 border-brand-secondary pl-3 mb-3 block uppercase tracking-[0.2em]">
              SERVICE COVERS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight">
              OUR SERVICE <span className="text-brand-secondary">LOCATIONS</span>
            </h2>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="font-sans text-sm sm:text-base text-muted-text mb-6">
              We operate across Dallas, Texas and its surrounding cities, bringing durable, certified construction grades to homeowners and commercial yards alike. Select your city below to check local coverage.
            </p>
          </div>
        </div>

        {/* Location Selector Grid & Regional Office Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="locations-tool-box">
          
          {/* Left Grid: Buttons */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5" id="locations-city-grid">
            {SERVICE_LOCATIONS.map((city) => {
              const itemIsActive = selectedCity === city;
              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`group p-4 bg-surface-low border border-brand-primary/5 rounded-[2px] flex justify-between items-center transition-all duration-300 cursor-pointer text-left ${
                    itemIsActive
                      ? 'bg-brand-secondary border-brand-secondary text-brand-accent shadow-md scale-[1.01]'
                      : 'hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  <span className="font-display font-extrabold text-xs uppercase tracking-tight">
                    {city}
                  </span>
                  <Navigation
                    className={`h-3.5 w-3.5 text-brand-secondary group-hover:text-white transition-all transform ${
                      itemIsActive ? 'text-brand-accent rotate-45 translate-x-1' : ''
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Dispatch Status Card */}
          <div className="lg:col-span-4" id="regional-dispatch-panel">
            <div className="bg-brand-primary text-white p-6 sm:p-8 rounded-[2px] shadow-2xl relative overflow-hidden border-b-4 border-brand-secondary">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
                <MapPin className="h-5 w-5 text-brand-accent" />
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-brand-accent">
                  Regional Dispatch: {selectedCity}
                </h3>
              </div>

              {/* Specs parameters list */}
              <div className="space-y-4 text-xs sm:text-sm mb-8">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block mb-1">LOCAL SURVEY CABLE</span>
                  <p className="font-display font-bold uppercase">{activeMeta.crew}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block mb-1">AVERAGE RESPONSE WINDOW</span>
                  <p className="font-display font-bold text-brand-accent uppercase">{activeMeta.response}</p>
                </div>

              </div>

              {/* Checkmark guarantee bullet points */}
              <div className="space-y-2 border-t border-white/10 pt-4 text-[11px]">
                <div className="flex items-start gap-2 text-neutral-300">
                  <CheckSquare className="h-4 w-4 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span>Licensed for Dallas & surrounding counties</span>
                </div>
                <div className="flex items-start gap-2 text-neutral-300">
                  <CheckSquare className="h-4 w-4 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span>Certified 811 marking cleared in 48 hours</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
