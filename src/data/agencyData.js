import horizonLivingImg from '../assets/portfolio/horizon-living.svg'
import greenbiteImg from '../assets/portfolio/greenbite.svg'
import peakfitImg from '../assets/portfolio/peakfit.svg'
import studioVibeImg from '../assets/portfolio/studio-vibe.svg'
import wanderlyImg from '../assets/portfolio/wanderly.svg'
import nextgenTechImg from '../assets/portfolio/nextgen-tech.svg'

import danielImg from '../assets/team/daniel-carter.jpg'
import sophiaImg from '../assets/team/sophia-johnson.jpg'
import jamesImg from '../assets/team/james-miller.jpg'
import sarahImg from '../assets/team/sarah-mitchell.svg'
import marcusImg from '../assets/team/marcus-vance.svg'
import elenaImg from '../assets/team/elena-rostova.svg'

export const brandInfo = {
  name: 'NEXORA TECH',
  tagline: 'Modern Websites. Real Results.',
  headline: 'Custom Websites',
  headlineAccent: 'That Grow Your Business',
  subheadline:
    'We design and develop modern, responsive and SEO-friendly websites that turn visitors into customers.',
  heroCta: "Let's Build Your Website",
}

export const heroBenefits = [
  {
    id: 'performance',
    title: 'Fast Performance',
    icon: 'lightning',
  },
  {
    id: 'responsive',
    title: 'Mobile Responsive',
    icon: 'mobile',
  },
  {
    id: 'seo',
    title: 'SEO Optimized',
    icon: 'search',
  },
  {
    id: 'conversion',
    title: 'Conversion Focused',
    icon: 'trending',
  },
]

export const servicesData = [
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Memorable brands that make an impact.',
    icon: 'palette',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Beautiful, user-friendly and modern designs.',
    icon: 'monitor',
    color: '#6366f1',
    bg: '#eef2ff',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Fast, secure and scalable websites.',
    icon: 'code',
    color: '#06b6d4',
    bg: '#ecfeff',
  },
  {
    id: 'motion-video',
    title: 'Motion & Video',
    description: 'Bring your story to life with stunning visuals.',
    icon: 'play',
    color: '#f43f5e',
    bg: '#fff1f2',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'More visibility. More customers.',
    icon: 'megaphone',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    id: 'ux-ui-strategy',
    title: 'UI/UX Strategy',
    description: 'Better experiences. Higher conversions.',
    icon: 'users',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
]

export const portfolioCategories = ['All', 'Branding', 'Web Design', 'Motion']

export const portfolioProjects = [
  {
    id: 'horizon-living',
    title: 'Horizon Living',
    industry: 'Real Estate',
    category: 'Web Design',
    badge: 'Web',
    image: horizonLivingImg,
    summary: 'Luxury architecture & modern residential living showcase.',
  },
  {
    id: 'greenbite',
    title: 'GreenBite',
    industry: 'Food & Beverage',
    category: 'Web Design',
    badge: 'Web',
    image: greenbiteImg,
    summary: 'Organic food delivery platform with streamlined mobile checkout.',
  },
  {
    id: 'peakfit',
    title: 'PeakFit',
    industry: 'Fitness & Wellness',
    category: 'Branding',
    badge: 'Branding',
    image: peakfitImg,
    summary: 'High-octane fitness brand identity & member portal experience.',
  },
  {
    id: 'studio-vibe',
    title: 'Studio Vibe',
    industry: 'Creative Agency',
    category: 'Web Design',
    badge: 'Web',
    image: studioVibeImg,
    summary: 'Interactive studio showcase featuring fluid micro-animations.',
  },
  {
    id: 'wanderly',
    title: 'Wanderly',
    industry: 'Travel & Tourism',
    category: 'Motion',
    badge: 'Motion',
    image: wanderlyImg,
    summary: 'Cinematic expedition documentary streaming & travel planner.',
  },
  {
    id: 'nextgen-tech',
    title: 'NextGen Tech',
    industry: 'Technology',
    category: 'Branding',
    badge: 'Branding',
    image: nextgenTechImg,
    summary: 'Autonomous AI computing cloud brand identity and design system.',
  },
]

export const impactMetrics = [
  {
    value: '120+',
    label: 'Projects Delivered',
  },
  {
    value: '80+',
    label: 'Happy Clients',
  },
  {
    value: '5+',
    label: 'Years of Experience',
  },
  {
    value: '12',
    label: 'Awards & Recognition',
  },
]

export const teamMembers = [
  {
    id: 'daniel-carter',
    name: 'Daniel Carter',
    role: 'Founder & Creative Director',
    image: danielImg,
    socials: [
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
      { name: 'X', icon: 'twitter', url: 'https://x.com' },
      { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    ],
  },
  {
    id: 'sophia-johnson',
    name: 'Sophia Johnson',
    role: 'Lead Designer',
    image: sophiaImg,
    socials: [
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
      { name: 'X', icon: 'twitter', url: 'https://x.com' },
      { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    ],
  },
  {
    id: 'james-miller',
    name: 'James Miller',
    role: 'Lead Developer',
    image: jamesImg,
    socials: [
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
      { name: 'GitHub', icon: 'github', url: 'https://github.com' },
      { name: 'X', icon: 'twitter', url: 'https://x.com' },
    ],
  },
]

export const testimonials = [
  {
    id: 1,
    quote:
      'NEXORA TECH transformed our online presence. The website is modern, fast, and has already brought us more leads in just a few weeks!',
    author: 'Sarah Mitchell',
    role: 'CEO, Horizon Living',
    avatar: sarahImg,
  },
  {
    id: 2,
    quote:
      'The engineering craftsmanship and visual fidelity blew our leadership team away. Our qualified conversion rate skyrocketed by 140% post-relaunch.',
    author: 'Marcus Vance',
    role: 'CTO, NextGen Tech',
    avatar: marcusImg,
  },
  {
    id: 3,
    quote:
      'Working with Daniel and the team was effortless. They truly understood our brand vision and delivered an exceptional digital flagship on time.',
    author: 'Elena Rostova',
    role: 'Founder, GreenBite',
    avatar: elenaImg,
  },
]

