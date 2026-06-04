/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, ArrowUpRight, X, Calendar, Ruler, Layers, ShieldCheck } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Wood' | 'Vinyl' | 'Aluminum' | 'Pool'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: Array<'All' | 'Wood' | 'Vinyl' | 'Aluminum' | 'Pool'> = [
    'All',
    'Wood',
    'Vinyl',
    'Aluminum',
    'Pool',
  ];

  // Filter projects list based on chosen material
  const filteredProjects =
    activeTab === 'All' ? PROJECTS : PROJECTS.filter((proj) => proj.type === activeTab);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header and intro details */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div>
            <span className="text-xs font-mono font-bold text-brand-secondary border-l-4 border-brand-secondary pl-3 mb-3 block uppercase tracking-[0.2em]">
              OUR PORTFOLIO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-primary uppercase tracking-tight">
              OUR FEATURED <span className="text-brand-secondary">PROJECTS</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-muted-text">
            Explore our recent fencing projects and see how we deliver unmatched privacy, wind resistance, and street-side beauty for Dallas, Texas families.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-surface-container pb-4" id="project-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-brand-primary text-white'
                  : 'bg-surface-low text-muted-text hover:bg-surface-container hover:text-brand-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Selected Category Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-[2px] h-[360px] md:h-[400px] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={project.imageUrl}
                alt={project.name}
              />
              
              {/* Bottom Scrim Info Drawer */}
              <div className="absolute inset-0 scrim-bottom flex flex-col justify-end p-6 sm:p-8">
                <div className="flex items-center gap-1.5 text-brand-accent mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
                    {project.location}
                  </span>
                </div>
                
                <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight mb-4">
                  {project.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="inline-block border border-white/20 bg-white/10 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wide rounded-[2px]">
                    {project.type} FENCING
                  </span>
                  
                  <div className="w-10 h-10 bg-brand-secondary text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-16 bg-surface-low rounded-[2px]">
              <p className="font-sans text-muted-text">No showcase posts under this category currently. Stay tuned for upcoming case studies!</p>
            </div>
          )}
        </div>

        {/* View All Projects button leads directly to trigger state details */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setActiveTab('All')}
            className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-10 py-4 rounded-[2px] font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Show All Completed Fences
          </button>
        </div>
      </div>

      {/* Lightbox Specification Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative bg-white text-brand-primary w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2px] shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left Side: Massive Image */}
              <div className="md:col-span-7 h-[300px] md:h-full min-h-[350px]">
                <img
                  className="w-full h-full object-cover"
                  src={selectedProject.imageUrl}
                  alt={selectedProject.name}
                />
              </div>

              {/* Right Side: Specifications Details panel */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-brand-secondary mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-brand-secondary">
                      {selectedProject.location}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-brand-primary uppercase tracking-tight mb-4">
                    {selectedProject.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Grid of Key Specifications */}
                <div>
                  <h4 className="font-display font-extrabold text-[11px] font-mono uppercase tracking-widest text-brand-primary border-b border-surface-container pb-2 mb-4">
                    PROJECT TECHNICAL SPECS
                  </h4>
                  
                  <div className="space-y-3.5 mb-6">
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 text-muted-text">
                        <Layers className="h-4 w-4 text-brand-secondary" />
                        <span>Fencing Slabs</span>
                      </div>
                      <span className="font-bold text-brand-primary">{selectedProject.specs.material}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 text-muted-text">
                        <Ruler className="h-4 w-4 text-brand-secondary" />
                        <span>Anchor Height</span>
                      </div>
                      <span className="font-bold text-brand-primary">{selectedProject.specs.height}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 text-muted-text">
                        <Ruler className="h-4 w-4 text-brand-secondary" />
                        <span>Total Span Run</span>
                      </div>
                      <span className="font-bold text-brand-primary">{selectedProject.specs.length}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 text-muted-text">
                        <Calendar className="h-4 w-4 text-brand-secondary" />
                        <span>Crew Install Time</span>
                      </div>
                      <span className="font-bold text-brand-primary">{selectedProject.specs.duration}</span>
                    </div>
                  </div>

                  <div className="bg-surface-low p-3 border-l-4 border-brand-secondary rounded-[2px] flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                    <span className="text-[10px] font-semibold text-neutral-text uppercase tracking-wide leading-tight">
                      3-Year Site Ground Stability Guarantee Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
