import { icons } from '../../../constants';
import type { SocialMediaProps } from './Footer.types';

const socialMediaItems: SocialMediaProps[] = [
  {
    name: 'facebook',
    href: 'https://facebook.com',
    src: icons.facebook,
  },
  {
    name: 'instagram',
    href: 'https://instagram.com',
    src: icons.instagram,
  },
  {
    name: 'linkedin',
    href: 'https://linkedin.com',
    src: icons.linkedin,
  },
  {
    name: 'tiktok',
    href: 'https://tiktok.com',
    src: icons.tiktok,
  },
];

const navListItems = ['About', 'Service', 'Project', 'Testimonial', 'FAQ'];

export { socialMediaItems, navListItems };
