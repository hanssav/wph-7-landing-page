import React from 'react';
import { Subtitle, Title } from '../../ui/Typography';
import SectionWrapper from '../SectionWrapper';
import Input, { Checkbox, Label, Textarea } from '../../ui/Input';
import Button from '../../ui/Button';
import { services } from './ContactMe.constants';

const ContactMe: React.FC = () => {
  return (
    <SectionWrapper
      id='contact-me'
      className='flex flex-col py-10 gap-16 lg:py-20 lg:gap-12 lg:justify-center lg:items-center'
    >
      <div className='flex flex-col gap-6 text-center'>
        <Title>Ready to Start? Let’s Talk.</Title>

        <Subtitle className='text-base-500'>
          Tell us what you need, and we’ll get back to you soon.
        </Subtitle>
      </div>

      {/* <!-- INPUT --> */}
      <div className='flex flex-col gap-10 lg:w-2/3'>
        <div className='flex flex-col gap-[6px] w-full'>
          <Label htmlFor='name'>Name</Label>
          <Input type='text' id='name' placeholder='Enter your name' />
        </div>

        <div className='flex flex-col gap-[6px] w-full'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' placeholder='Enter your email' />
        </div>

        {/* <!-- TEXTAREA --> */}
        <div className='flex flex-col justify-start h-full gap-[6px] w-full'>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            name='message'
            id='message'
            placeholder='Enter your message'
            className='h-[134px]'
          />
        </div>

        {/* <!-- CCHECKBOX --> */}
        <div className='input-item flex flex-col gap-[14px] w-full'>
          <label htmlFor='services' className='font-bold text-sm leading-sm'>
            Services
          </label>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[14px]'>
            {services.map((service) => (
              <Checkbox key={service.id} label={service.label} />
            ))}
          </div>
        </div>

        <Button className='font-bold text-sm leading-sm lg:text-md lg:leading-md'>
          Send
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default ContactMe;
