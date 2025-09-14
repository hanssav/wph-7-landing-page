import React from 'react';
import Image from '../../ui/Image';
import { images, navItems } from '../../../constants';
import type { SocialMediaIconProps } from './Footer.types';
import { socialMediaItems } from './Footer.constans';
import Typography from '../../ui/Typography';

const NavListItems: React.FC<{ label: string }> = ({ label }) => {
  return (
    <li>
      <Typography size={{ base: 'sm', lg: 'md' }} weight='medium'>
        {label}
      </Typography>
    </li>
  );
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ src, href, id }) => {
  return (
    <a
      href={href}
      className='border border-base-border dark:border-base-800 h-10 w-10 rounded-full flex justify-center items-center'
    >
      <Image src={src} id={id} />
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className='py-6 px-4 md:px-[140px] flex flex-col gap-2'>
      <div className='flex flex-col gap-6 bg-base-50 dark:bg-base-950 border border-base-border dark:border-base-800 rounded-3xl p-5 lg:p-10 lg:gap-[60px]'>
        <div className='flex flex-col gap-6 justify-start lg:justify-between lg:flex-row-reverse'>
          <Image
            src={images.logoLight}
            id='footer-logo'
            className='h-8 max-w-[140px] lg:h-9 lg:max-w-[159px]'
          />

          <Typography
            size={{ base: 'display-sm', lg: 'display-lg' }}
            weight='bold'
            className='lg:max-w-[281px]'
          >
            LET'S DISCUSS YOUR IDEAS
          </Typography>
        </div>

        <hr className='border border-base-border w-full dark:border-base-800' />

        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6'>
          <ul className='flex flex-col gap-6 lg:flex-row'>
            {navItems.map((item, idx) => (
              <NavListItems key={idx} label={item.label} />
            ))}
          </ul>

          <div className='flex gap-4'>
            {socialMediaItems.map((item, idx) => (
              <SocialMediaIcon
                src={item.src}
                href={item.href}
                id={item.name}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
