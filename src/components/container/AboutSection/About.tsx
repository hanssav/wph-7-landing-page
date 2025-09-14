import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Typography, { Subtitle, Title } from '../../ui/Typography';
import { stats } from './About.constants';

const About: React.FC = () => {
  return (
    <SectionWrapper
      id='about'
      className='flex flex-col py-20 px-4 gap-6 lg:gap-16'
    >
      <div className='text-center flex flex-col gap-[11px]'>
        <Title>End-to-End IT Solutions That Drive Results</Title>

        <Subtitle>
          From strategy to execution, we deliver solutions that grow your
          business.
        </Subtitle>
      </div>

      {/* <!-- CONTENT --> */}
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5 text-center'>
        {stats.map((stat) => (
          <div
            key={stat.id}
            className='p-4 flex flex-col gap-[6px] items-center justify-center bg-base-50 dark:bg-base-950 border border-base-border dark:border-base-800 rounded-full aspect-[1/1]'
          >
            <Typography
              weight='bold'
              size={{ base: 'display-lg', lg: 'display-2xl' }}
              className='text-primary'
            >
              {stat.value}
            </Typography>
            <Typography weight='semibold' size={{ base: 'sm', lg: 'xl' }}>
              {stat.label}
            </Typography>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
