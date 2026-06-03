/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Testimonial, Project, ServiceDetail, FAQItem, BlogPost } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mark R.',
    role: 'Home Owner',
    rating: 5,
    content: '"The whole process was smooth and stress-free. They showed up on time, gave us a fair price, and the installation was professional and clean."',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ik2AmNIP8sJ6zRcitf8mR8fZxjkhTWEd6TO6Cp90ELpJS0UhljrxPBGGoQ_pWNXUgcVCB52KTpzJKXmJaY0s1chvyi5HXEpIdrt0lOjDY0JbVhSIRDgGhLc0-VP3Zh4G4GOB0w0W0zTte4OoUHXHBN_bqoKb-XkIPILAkrLkOh1AVkL7ICO2fE8-meYsF9QAFsbn1hJxN1OH_hIW4zhFEOgh1Zl2zLm27rjDPAhvpRuMA_5XzboyoD2B6gnyQTUeXQmuniWrutM',
  },
  {
    id: 't2',
    name: 'Daniel S.',
    role: 'Property Owner',
    rating: 5,
    content: '"Professional, friendly, and fast! The team explained every step and cleaned up after the job. Our new vinyl fence looks amazing and very sturdy."',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgcAmSay6QqKQTwuzHiqVf4GkA0ezyEH6LKC_xV2OGeBMiGrlOAgqL4UPte9R2Mowo1HCEdSQjLBMNsS9n7S3mOWsrgnnK3GxWzLlbg8rpzb0OwcWXEXoAOYoH_kovjmqycFGe5_3tZ8dFi3xBkI6eobpH2p3uWdo-Um5dU2B1ef-B2z1NTMsQ_dPcdbfpQYjGKMAEYb1nxOfI939I5f2xQRDoC2YJ65DKiZG7uxfaTFaktVFy2XxUO4QJHkUDrBWZX-CSVj0Uxjk',
  },
  {
    id: 't3',
    name: 'Sarah L.',
    role: 'Home Owner',
    rating: 5,
    content: '"Exactly what we were hoping for. We needed a custom gate for our driveway and they built it perfectly. Tough materials and great craftsmanship."',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp1FFludzLDILdCyCuRMKlOa6Eb7M01ABGr8eelJC_q5Ai_OI-MuBImgl6S7bd_9WqQgQbiGga6T63nNaWDzx5eOtffYcaMq5ai_USyjRdQ22toPrlqGS6Bml-Z0MDS6PUHYOXZcDUpkAU3yKaOLQaUphe5-zswRNu9KkHxJdQjnlpfeAafu_nT5EZszZRMccsEMC-C3lNk4lU6u-Igx6ZrNwH8bzwMaawtDDiWjMsmqpp3syhCNJ6cRr7VIFkd483DWg_1QYWLQU',
  },
  {
    id: 't4',
    name: 'Michael T.',
    role: 'Commercial Contractor',
    rating: 5,
    content: '"Pablo Fencing handled our commercial lot security fencing. Extremely rigid build, stellar communication, and completed ahead of schedule."',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Premium Backyard Privacy Fence',
    type: 'Wood',
    location: 'Orlando, Florida',
    description: 'A sleek modern cedar privacy fence that creates a safe and cozy outdoor space for family gatherings and relaxation.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5TGjr9P-SCUybPuDFQMxhf1ipNkgkVZnmMKii2ReD_N2xXVxYjd4xSa25uIozyEFsC5G4ko67UsPKrQVuiyYobTu_EtO2AChvIo1Z4dra1fIDmP4D0wAioNCSzlw5DeP-EzYlNzD473RIydI2xlIA86VpIshPLceDBphO2eLfzg89KtCuUfEl3vMqLkn-xW8NZRf-C4-32K3tCHENkXbEOLN5YhuzxprqbKY9vpfIne24y76O7pdGpYywnT85GbKCRKvuxthb_gM',
    specs: {
      height: '6 Feet',
      length: '180 Linear Ft',
      material: 'Western Red Cedar',
      duration: '3 Days',
    },
  },
  {
    id: 'p2',
    name: 'Classic Vinyl Picket Fence',
    type: 'Vinyl',
    location: 'Winter Park, Florida',
    description: 'A white vinyl picket fence surrounding a charming suburban house with a green lawn. Highly weather-resistant and zero maintenance.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9d0IXuwHgM-kc3uj3Jq6ER1ovV4MbmgToHkalHUAmRESYdek-smWptYjOUCt6-oFdR7MjBy7k6e55NwjRcoOmH2CKVxHKe0AhduMNhiI23cymUvU-pxEF71ydixx5IFsozICrpQLBsY_1xjn-7hDON9q0d39o8gne3FcFkvFv_iUhF2nWGO6zW4e-AX5DuvxEh3pN6ABul8J8KG3VwGXRVIPnzXWhy2NmTfo7f_oDKYNFHVR8lDuvzTU1SrTUi9rkfrgkrhSf3Ek',
    specs: {
      height: '4 Feet',
      length: '120 Linear Ft',
      material: 'Premium Weather-Shield Vinyl',
      duration: '2 Days',
    },
  },
  {
    id: 'p3',
    name: 'Modern Pool Safety Fencing',
    type: 'Pool',
    location: 'Kissimmee, Florida',
    description: 'A modern industrial black aluminum pool fence with sleek vertical bars. Safe, beautiful, and fully compliant with state pool codes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABbtVkcm-bYhzN-Lyf7p5cRG3yu6EH2Z8WnQU033BXoKoXiY7dmVwpMzNxxMeAmDS6g_kRtctp3d9SuDiLDgbi27BdKsZJeq2SwOGidLxt3fOcjKK_hV28_YRyHosSMAu0Ctuh0tJR2BGwD7fawhIf9jt3iSJcyPc6-TM5AvhfLhqjIQBotbg_gO8xZDMEo6pgm-vHSuVqqfxmcSRFKcSVsDGohkA-euwwZqBGcBUVLyy78jx23i4CpsNXmQmAw_oSpjhcnAqjigY',
    specs: {
      height: '5 Feet',
      length: '90 Linear Ft',
      material: 'Powder-Coated Aluminum',
      duration: '1.5 Days',
    },
  },
  {
    id: 'p4',
    name: 'Heavy-Duty Industrial Security Fence',
    type: 'Aluminum',
    location: 'Sanford, Florida',
    description: 'Commercial grade black aluminum spikes with reinforced industrial framing. Designed for extreme durability and vehicle perimeter security.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTxctZjL1qBYb69oe8g0f4FLdrHFjUuy3xGA2Ti59dk1ovJ19zz3mUJLYOOolgsR-ZwgwsXWMwE_PWCNjyUxa0xBguKSSAgnS4LNqSCtVL8MLKBEi-EWzdYKeqaYrQ7szOVn74Lp2Sb2xuqFzU1mLUHNPnlYYdGKXboElAyAmRu4NsaFwVL2BcD7r9llXJfLF8hnUw_tj_E3FYsRHkFwgGYzhMfCUSsVMuOW-uzGQWSqHHH1fmcXPf8IKIGhohfY5a8251VUnbnxc',
    specs: {
      height: '8 Feet',
      length: '450 Linear Ft',
      material: 'Industrial Grade Alloy 6005-T5',
      duration: '5 Days',
    },
  },
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 's1',
    number: '01',
    title: 'New Fence Installation',
    description: 'We construct high-quality, permanent boundary fences using top-grade certified pine, cedar, premium zero-chalk vinyl, or structural aluminum.',
    features: ['Custom layout drafting & planning', 'Post holes bored below frost level & concrete-set', 'Premium corrosion-resistant fasteners'],
  },
  {
    id: 's2',
    number: '02',
    title: 'Fence Repair & Maintenance',
    description: 'We restore the structural integrity of your fence by replacing rotting posts, damaged structural rails, storm-blown panels, or loose pickets.',
    features: ['Heavy structural post-reanchoring', 'Slat, picket, & storm-damage replacements', 'Gate hardware alignment & hinge tuning'],
  },
  {
    id: 's3',
    number: '03',
    title: 'Custom Gate Installation',
    description: 'Tailor-made swinging, sliding, or double-entry gates built with sag-free metal reinforcement frames and decorative ironmongery.',
    features: ['Heavy-duty anti-sag steel gate frames', 'Magnetic child-safety safety pool latches', 'Automated keypad or remote openers available'],
  },
  {
    id: 's4',
    number: '04',
    title: 'Commercial Fencing Solutions',
    description: 'Secure perimeters for estates, construction yards, complexes, and industrial sites designed with maximum strength and privacy shields.',
    features: ['High-tensile security pickets', 'Anti-climb designs & barbed headers if requested', 'Meets strict municipality & commercial codes'],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How long does a fence installation typically take?',
    answer: 'Most standard residential installations (100 to 200 linear feet) are completed in just 1 to 3 days, depending on underground obstacles, terrain slopes, and the selected fencing material.',
  },
  {
    id: 'f2',
    question: 'Do you handle the permits and utility clearance?',
    answer: 'Absolutely! We contact 811 to locate and mark underground gas, power, water, and telecom lines before any drilling. We also handle the full municipal permitting process representing your property.',
  },
  {
    id: 'f3',
    question: 'What is the warranty on a new Pablo Fence?',
    answer: 'We provide an industry-leading 3-Year Craftsmanship Warranty on all installations. Furthermore, our premium vinyl and powder-coated aluminum fencing products come with a Lifetime Manufacture Material Warranty against fading, rusting, or cracking.',
  },
  {
    id: 'f4',
    question: 'How deep are the structural fence posts anchored?',
    answer: 'At Pablo Fencing, every structural corner and gate post is placed 24 to 36 inches deep, firmly set with quick-cure structural concrete. This ensures your fence stays stable against Florida’s tropical storms and heavy shifting sands.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Popular Fence Styles To Transform Your Yard',
    category: 'Instructions',
    date: 'March 18, 2026',
    excerpt: 'Explore structural styles from traditional pickets to modern horizontal louvers, comparing privacy metrics and material durability.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW1MAV31LroYVdppgMej8YA1Pxr7EbDcXILGBkpAk4QcKU5KKwuwEhEE58ybVFHpNXGLoAhiXk6o6AAhzCut8b8SQc06udAxFPRgtofXnmo5mWIZ5zSL9elUV_ZaDs9yo6dpwpV2BJxOjz3sPZUX--vhhO8YNZA4K_N1uu7CvYKJ9mqJ6_LoRzBXdUrXKBPsSJehfwCLE8kBPxGqs63KcHu-4lxREpLU5jXNRAr4jxVMneKXkkIZHiGKUr8vSpKPt67RkarCbcBiY',
  },
  {
    id: 'b2',
    title: 'How To Choose The Right Fence For Your Property',
    category: 'Tips & Tricks',
    date: 'March 15, 2026',
    excerpt: 'A comprehensive checklist reviewing property boundary lines, HOA guidelines, weather elements, and defining clear safety boundaries.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy_Dhnls-MJyUsKMyTUQhtqTBOu56owm-v5mwURNFAPPit_1hN6XhDrP4GyZotRJd0VQ4oh4jp1NEyuaPlon0_ukWIr80_31wrGa8HlJHnjszeFmSKuJ-y3HjOdZxtIi15EtoxLjeIt0Y1uNuphmvtsVgfwxM1895uqWwaxHJ4yjgxWeoxKwZLePwNv2py2soygmRhwixc3I0qJsLm0RWNOe1MhAdeJsWzH0E8TgzpYE-qpZ-C96z2roP_kXCZUEQvrZ5sGm5Fwys',
  },
  {
    id: 'b3',
    title: 'Top Maintenance Tips To Keep Your Fence Looking New',
    category: 'Maintenance',
    date: 'March 10, 2026',
    excerpt: 'Detailed cleaning methods for composite materials, seasonal pressure washing benchmarks for wood, and sealing applications.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDErbFuQFcUpplI5MfUelu_zXS77U5KHUDegN7jCGYhhy-L-V6Q-iNLAla8hSNF2fLnGdI6RLFGynmGRqgNU7jgYmFg6wZotsfsfeDjtjqRFpoSPNH-LyKHhKED43v_zDdFkGNHZ8kdLsLoihK9PV5m718Em7o1Tj5AR3ya6-d3s3psELX2wm8DvL9vZSYRdYfjdGG6RhHHhrE0phORNQCE2cFgLkYsco74Gd8MH1gakOWeV8kVMuEm7eXFXRavsgkCUc19Z_gYwkM',
  },
];

export const SERVICE_LOCATIONS = [
  'Orlando',
  'Kissimmee',
  'Miami',
  'Fort Lauderdale',
  'Coral Springs',
  'Boca Raton',
  'West Palm Beach',
  'Hollywood',
  'Winter Park',
  'Sanford',
  'Celebration',
  'Altamonte Springs',
];
