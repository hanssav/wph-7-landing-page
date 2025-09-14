import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Typography, { Subtitle, Title } from '../../ui/Typography';
import Image from '../../ui/Image';
import { icons, themeAsConst } from '../../../constants';
import { useTheme } from '../../../hooks/useTheme';
import clsx from 'clsx';
import type { ProcessStepProps } from './Process.types';
import { processSteps } from './Process.constants';

const ProcessStep: React.FC<ProcessStepProps> = ({
  id,
  title,
  description,
  align,
  basis,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { theme } = useTheme();
  const darkMode = theme === themeAsConst.dark;
  const chveronIcon = darkMode ? icons.chevronDark : icons.chevronUp;

  return (
    <div
      className={clsx(
        'flex gap-4 items-center w-full lg:relative',
        align === 'right' && 'justify-end'
      )}
    >
      {/* Number circle */}
      <div className='z-20 size-10 lg:size-12 lg:max-h-12 flex-none object-number max-h-10 bg-primary rounded-full aspect-[1/1] text-white flex items-center justify-center lg:p-2 lg:absolute lg:left-[calc(100vw/2-140px-24px)]'>
        {id}
      </div>

      {/* Accordion */}
      <div
        className={clsx(
          'relative grow flex w-full rounded-2xl border-base-border bg-base-50 dark:bg-base-950 dark:border-base-800 p-4 lg:p-6 justify-between lg:flex-none',
          `lg:basis-${basis}`
        )}
      >
        <details
          className='cursor-pointer group w-full'
          open={isOpen}
          onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary className='flex justify-between font-bold text-md leading-md lg:text-xl lg:leading-xl'>
            <Typography weight='bold' size={{ base: 'md', lg: 'xl' }}>
              {title}
            </Typography>
            <Image
              id='chevron-up'
              src={chveronIcon}
              className={clsx(
                'w-6 h-6 group-open:block transition-transform duration-300 ease-in-out',
                !isOpen && 'rotate-180'
              )}
            />
          </summary>
          <Typography
            weight='normal'
            size={{ base: 'sm', lg: 'md' }}
            className='text-base-400'
          >
            {description}
          </Typography>
        </details>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <SectionWrapper
      id='service'
      className='flex flex-col gap-6 py-10 lg:py-20 lg:gap-16'
    >
      <div className='flex flex-col gap-[11px] text-center'>
        <Title>Our Process</Title>
        <Subtitle>
          Clear steps. Smart execution. Results you can count on.
        </Subtitle>
      </div>

      <div className='relative flex flex-col gap-4'>
        {/* <!-- Vertical Line --> */}
        <div className='absolute z-0 border-r-[1px] border-base-border dark:border-base-800 h-[calc(100%-94px)] left-[calc(40px/2)] lg:left-[calc(100vw/2-140px)] top-8'></div>

        {processSteps.map((step) => (
          <ProcessStep key={step.id} {...step} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Process;
