import { icons } from '../../../constants';
import type { Service } from './Service.types';

export const services: Service[] = [
  {
    id: 'web',
    icon: icons.web,
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
  },
  {
    id: 'mobile-app',
    icon: icons.mobileApp,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
  },
  {
    id: 'ui',
    icon: icons.ui,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces',
  },
  {
    id: 'cloud',
    icon: icons.cloud,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
  },
  {
    id: 'software',
    icon: icons.software,
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
  },
  {
    id: 'infrastructure',
    icon: icons.infrastructure,
    title: 'IT infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
  },
  {
    id: 'security',
    icon: icons.security,
    title: 'Cyberscurity Services',
    description: 'Stay protected with enterprise-grade security.',
  },
  {
    id: 'qa',
    icon: icons.qa,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
  },
  {
    id: 'it-consulting-support',
    icon: icons.serviceIT,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
  },
];
