import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Image from '../../ui/Image';
import { images, themeAsConst } from '../../../constants';
import Button from '../../ui/Button';
import Typography from '../../ui/Typography';
import { useTheme } from '../../../hooks/useTheme';

const ImageBlur: React.FC = () => {
  return (
    <React.Fragment>
      {/* <!-- TRANSPARENT --> */}
      <div className='absolute bottom-0 left-0 w-1/4 lg:1/2 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-30'></div>
      <div className='absolute bottom-0 right-0 w-full h-1/4 lg:h-[200px] bg-gradient-to-t from-white dark:from-black to-transparent z-30'></div>

      {/* <!-- MOBILE VIEW --> */}
      <div className='lg:hidden absolute bottom-0 right-0 w-1/4 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-30'></div>
      <div className='lg:hidden absolute top-0 right-0 h-1/4 w-full bg-gradient-to-b from-white dark:from-black to-transparent z-30'></div>
    </React.Fragment>
  );
};

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const darkMode = theme === themeAsConst.dark;

  const heroSrc = darkMode ? images.heroDark : images.heroLight;

  return (
    <SectionWrapper id='hero-section' className='lg:h-[747px] lg:flex'>
      <div className='flex flex-col gap-10 lg:w-[653px] z-50 self-center'>
        <div className='flex flex-col gap-2'>
          <Typography
            as='h1'
            size={{ base: 'display-lg' }}
            weight='bold'
            className='lg:text-[56px] lg:leading-[68px] tracking-tight'
          >
            Your Tech Partner for{' '}
            <span className='text-primary'>Smarter Growth</span>
          </Typography>

          <Typography size={{ base: 'md', lg: 'xl' }} weight='normal'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </Typography>
        </div>
        <Button className='w-full font-bold text-sm leading-7 lg:w-[200px]'>
          Lets Talk
        </Button>
      </div>

      <div className='relative lg:absolute w-full lg:h-full mt-8 lg:mt-0 right-0 lg:top-0 z-0 lg:w-1/2 overflow-hidden'>
        <div className='relative lg:min-h-[747px] w-full lg:min-w-[747px]'>
          <Image className='w-full lg:h-full' src={heroSrc} id='hero-images' />

          <ImageBlur />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
