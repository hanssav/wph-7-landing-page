import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Typography, { Subtitle, Title } from '../../ui/Typography';
import Image from '../../ui/Image';
import type { TabId } from './Industry.types';
import { tabs } from './Industry.constants';

const Industry: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabId>('tab1');

  return (
    <SectionWrapper
      id='industry'
      className='flex flex-col py-10 gap-10 lg:py-20 lg:gap-16'
    >
      <div className='flex flex-col gap-[11px]'>
        <Title>Built for Your Industry</Title>
        <Subtitle className='text-base-500'>
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </Subtitle>
      </div>

      {/* <!-- CONTENT --> */}
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-16 lg:justify-between'>
        <div className='flex flex-col gap-4 lg:gap-6 basis-1/4'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button text-md leading-md font-bold lg:text-xl lg:leading-xl text-start border-l-5 pl-2 ${
                activeTab === tab.id
                  ? 'text-primary border-primary'
                  : 'text-base-400 border-base-400'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className='tab-content max-w-[840px]'>
                <Typography
                  weight='normal'
                  size={{ base: 'sm', lg: 'lg' }}
                  className='mb-5'
                >
                  {tab.content}
                </Typography>
                <Image
                  id={tab.id}
                  src={tab.image}
                  className='rounded-xl w-full'
                />
              </div>
            )
        )}
      </div>
    </SectionWrapper>
  );
};

export default Industry;
