import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Image from '../../ui/Image';
import Typography from '../../ui/Typography';
import type { Brands } from './Brand.types';
import { brands } from './Brand.constants';

const BrandCard: React.FC<Brands> = ({ id, name, src }) => {
  return (
    <React.Fragment>
      <Image
        className='h-[34px] lg:h-12 min-w-[98px] filter grayscale brightness-0 dark:brightness-90 opacity-70'
        src={src}
        id={id}
        alt={name}
      />
    </React.Fragment>
  );
};

const BrandBlurEffect: React.FC = () => {
  return (
    <React.Fragment>
      <div className='absolute left-0 top-7 lg:top-11 h-1/2 w-[100px] lg:w-[300px] bg-white dark:bg-black [mask-image:linear-gradient(to_right,black_10%,transparent_100%)] lg:[mask-image:linear-gradient(to_right,black_30%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%]'></div>

      <div className='absolute right-0 top-7 lg:top-11 h-1/2 w-[100px] lg:w-[300px] bg-white dark:bg-black [mask-image:linear-gradient(to_left,black_10%,transparent_100%)] lg:[mask-image:linear-gradient(to_left,black_30%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%]'></div>
    </React.Fragment>
  );
};

const Brand: React.FC = () => {
  return (
    <SectionWrapper
      id='brand'
      className='relative flex flex-col items-center h-[144px] lg:h-[236px]'
    >
      <Typography
        size={{ base: 'md', lg: 'display-xs' }}
        weight='bold'
        className='tracking-tight'
      >
        Trusted by Global Innovators & Leading Brands
      </Typography>

      <div className='absolute my-6 w-[393px] h-[114px] lg:w-screen lg:h-[200px] isolate flex overflow-hidden gap-12 p-10 justify-center items-center px-2'>
        {brands.map((brand) => (
          <BrandCard
            key={brand.id}
            id={brand.id}
            name={brand.name}
            src={brand.src}
          />
        ))}

        {/* <!-- blur effect --> */}
        <BrandBlurEffect />
      </div>
    </SectionWrapper>
  );
};

export default Brand;
