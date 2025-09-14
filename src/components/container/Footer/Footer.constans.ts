import { icons } from '../../../constants';
import type { SocialMediaProps } from './Footer.types';

const socialMediaItems: SocialMediaProps[] = [
  {
    name: 'facebook',
    href: 'https://facebook.com',
    imgSrcLight: icons.facebook,
    imgSrcDark: icons.facebookDark,
  },
  {
    name: 'instagram',
    href: 'https://instagram.com',
    imgSrcLight: icons.instagram,
    imgSrcDark: icons.instagramDark,
  },
  {
    name: 'linkedin',
    href: 'https://linkedin.com',
    imgSrcLight: icons.linkedin,
    imgSrcDark: icons.linkedinDark,
  },
  {
    name: 'tiktok',
    href: 'https://tiktok.com',
    imgSrcLight: icons.tiktok,
    imgSrcDark: icons.tiktokDark,
  },
];

const navListItems = ['About', 'Service', 'Project', 'Testimonial', 'FAQ'];

export { socialMediaItems, navListItems };
