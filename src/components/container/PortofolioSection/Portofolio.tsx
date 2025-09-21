import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Typography, { Subtitle, Title } from '../../ui/Typography';
import Image from '../../ui/Image';
import { portfolios } from './Portofolio.constants';

const Portofolio: React.FC = () => {
  return (
    <SectionWrapper
      id='projects'
      className='flex flex-col py-10 gap-10 lg:py-20 lg:gap-16'
    >
      <div className='flex flex-col gap-[11px] text-center'>
        <Title>From Vision to Launch! Projects We’re Proud Of</Title>
        <Subtitle>
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </Subtitle>
      </div>

      {/* <!-- CONTENT --> */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {portfolios.map((item) => (
          <div
            key={item.id}
            className='portofolio-card flex flex-col gap-2 lg:gap-3'
          >
            <Image
              src={item.image}
              id={item.id}
              alt={item.title}
              className='w-full max-h-[361px] rounded-2xl'
            />
            <div>
              <Typography
                size={{ base: 'sm', lg: 'md' }}
                weight='normal'
                className='text-primary'
              >
                {item.category}
              </Typography>
              <Typography weight='bold' size={{ base: 'md', lg: 'xl' }}>
                {item.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Portofolio;
