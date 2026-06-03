/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
  avatarUrl: string;
}

export interface Project {
  id: string;
  name: string;
  type: 'All' | 'Wood' | 'Vinyl' | 'Aluminum' | 'Pool';
  location: string;
  description: string;
  imageUrl: string;
  specs: {
    height: string;
    length: string;
    material: string;
    duration: string;
  };
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Instructions' | 'Tips & Tricks' | 'Maintenance';
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  serviceType: string;
  fenceMaterial: string;
  fenceLength: number; // in linear feet
  fenceHeight: string;
  message: string;
}
