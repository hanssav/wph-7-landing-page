import React from 'react';
import Typography, { Subtitle, Title } from '../../ui/Typography';
import SectionWrapper from '../SectionWrapper';
import { testimonials } from './Testimonial.constants';
import Image from '../../ui/Image';
import clsx from 'clsx';

const BlurWrapper: React.FC<{ align: 'left' | 'right' }> = ({
  align = 'left',
}) => {
  const alignLeft = align === 'left';
  return (
    <div
      className={clsx(
        'hidden lg:block absolute z-20 top-7 lg:top-48 h-2/3 w-[500px] bg-white dark:bg-black',
        // Position horizontally based on alignLeft (either left or right side)
        alignLeft ? 'left-0' : 'right-0',

        // Apply gradient mask that fades out toward the opposite side
        `lg:[mask-image:linear-gradient(to_${
          alignLeft ? 'right' : 'left'
        },black_10%,transparent_100%)]`,

        // Ensure mask covers fully and doesn’t repeat
        '[mask-repeat:no-repeat] [mask-size:100%_100%]'
      )}
    ></div>
  );
};

const Testimonial: React.FC = () => {
  return (
    <SectionWrapper
      id='testimonials'
      className='flex flex-col py-10 gap-10 lg:py-20 lg:gap-16 overflow-hidden relative'
    >
      {/* <!-- BLUR --> */}
      {(['left', 'right'] as const).map((a, i) => (
        <BlurWrapper key={i} align={a} />
      ))}

      <div className='flex flex-col gap-[11px] text-center'>
        <Title>What Partners Say About Working With Us</Title>
        <Subtitle>Trusted voices. Real experiences. Proven results.</Subtitle>
      </div>

      <div id='review-slideshow' className='flex justify-center gap-5'>
        {testimonials.map((t) => (
          <div
            key={t.id}
            className='carousel-slide flex-shrink-0 w-full flex flex-col gap-4 px-4 pt-4 pb-12 rounded-2xl bg-base-50 dark:bg-base-950 border border-base-border dark:border-base-800 overflow-visible text-center relative z-10 lg:max-w-[594px] lg:px-6 lg:pt-6 lg:pb-12'
          >
            <div className='absolute max-w-16 -top-7 z-50'>
              <Image src={t.quoteIconSrc} id='quote-icon' />
            </div>

            <div className='rating-testimoni flex flex-col gap-3 items-center relative lg:gap-4'>
              <Image
                className='max-w-[136px]'
                src={t.ratingSrc}
                id='rating-icon'
              />
              <Typography weight='semibold' size={{ base: 'sm', lg: 'lg' }}>
                {t.quote}
              </Typography>
            </div>

            <div className='user-testimoni'>
              <Typography weight='semibold' size={{ base: 'sm', lg: 'lg' }}>
                {t.name}
              </Typography>
              <Typography
                weight='semibold'
                size={{ base: 'sm', lg: 'lg' }}
                className='text-primary'
              >
                {t.role}
              </Typography>
            </div>

            <div className='absolute z-50 max-w-[60px] -bottom-6 left-1/2 -translate-x-1/2'>
              <Image src={t.userImageSrc} id={t.id} className='w-full' />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonial;
