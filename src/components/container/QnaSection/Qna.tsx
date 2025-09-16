import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Typography, { Subtitle, Title } from '../../ui/Typography';
import { faqs } from './Qna.constants';
import Button from '../../ui/Button';
import Image from '../../ui/Image';
import { images } from '../../../constants';
import type { FaqItemProps } from './Qna.types';

const HorizontalRule: React.FC = () => (
  <hr className='border border-base-border dark:border-base-800 w-full' />
);

const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer }) => (
  <React.Fragment key={id}>
    <details className='cursor-pointer mb-3 text-black group flex flex-col gap-4 lg:gap-7 dark:border-base-800 dark:bg-base-950'>
      <summary className="flex justify-between font-bold text-lg leading-lg lg:text-display-xs lg:leading-display-xs after:content-['+'] group-open:after:content-['−'] dark:text-white">
        {question}
      </summary>
      <Typography
        size={{ base: 'sm', lg: 'xl' }}
        weight='normal'
        className='text-base-500 '
      >
        {answer}
      </Typography>
    </details>
    <HorizontalRule />
  </React.Fragment>
);

const FaqList: React.FC<{ faqs: FaqItemProps[] }> = ({ faqs }) => (
  <React.Fragment>
    {faqs.map((faq) => (
      <FaqItem key={faq.id} {...faq} />
    ))}
  </React.Fragment>
);

const Qna: React.FC = () => {
  return (
    <SectionWrapper
      id='faq'
      className='flex flex-col py-10 gap-10 lg:py-20 lg:gap-16'
    >
      <div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
        <Title className='lg:max-w-[340px]'>Need Help? Start Here.</Title>
        <Subtitle className='lg:max-w-[220px] lg:self-end tracking-tight lg:text-right'>
          Everything you need to know — all in one place.
        </Subtitle>
      </div>

      <HorizontalRule />

      <div className='flex flex-col gap-6 lg:flex-row lg:gap-[73px] lg:items-start'>
        <div className='flex flex-col gap-7 basis-2/3 lg:gap-7'>
          <FaqList faqs={faqs} />
        </div>

        {/* <!-- IMAGE --> */}
        <div className='flex flex-col gap-4 rounded-2xl lg:gap-6 lg:p-7 bg-primary-300 text-white p-4'>
          <div className='flex flex-col gap-1'>
            <Typography
              weight='bold'
              size={{ base: 'display-sm', lg: 'display-lg' }}
            >
              Let’s talk it through
            </Typography>

            <Typography weight='semibold' size={{ base: 'sm', lg: 'lg' }}>
              book a free consultation with our team.
            </Typography>
          </div>

          <Image
            src={images.consultation}
            id='consultation-image'
            className='w-full rounded-2xl'
          />
          <Button
            variant='ghost'
            className='w-full bg-black font-bold text-md leading-md'
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Qna;
