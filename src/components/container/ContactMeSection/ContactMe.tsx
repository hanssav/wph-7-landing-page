import React from 'react';
import Typography, { Subtitle, Title } from '../../ui/Typography';
import SectionWrapper from '../SectionWrapper';
import Input, { Checkbox, Label, Textarea } from '../../ui/Input';
import Button from '../../ui/Button';
import { services } from './ContactMe.constants';
import Modal from '../Popup';
import Image from '../../ui/Image';
import { images } from '../../../constants';
import type { NotificationProps } from './ContactMe.types';

const modalVariants = {
  success: {
    title: 'Message Received!',
    sub: 'Thanks for reaching out — we’ll get back to you as soon as possible.',
    src: images.successMessage,
    id: 'message-success',
  },
  error: {
    title: 'Oops! Something went wrong.',
    sub: 'We couldn’t send your message. Please try again or check your connection.',
    src: images.failedMessage,
    id: 'message-failed',
  },
};

const Notification: React.FC<NotificationProps> = ({
  open,
  setOpen,
  isSuccess,
}) => {
  const { title, sub, src, id } = isSuccess
    ? modalVariants.success
    : modalVariants.error;

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <div className='w-full flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-950 p-6 lg:p-2 mt-5'>
        <Image id={id} src={src} />
      </div>

      <div className='w-full flex flex-col items-center justify-center p-6 gap-4'>
        <Typography weight='bold' size={{ base: 'lg', lg: 'xl' }}>
          {title}
        </Typography>
        <Typography
          weight='normal'
          size={{ base: 'sm', lg: 'md' }}
          className='text-center text-neutral-400'
        >
          {sub}
        </Typography>
        <Button
          className='w-full text-sm leading-sm font-bold lg:max-w-[361px] lg:text-md lg:leading-md'
          onClick={() => setOpen(false)}
        >
          Back to Home
        </Button>
      </div>
    </Modal>
  );
};

const ContactMe: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [isSuccess, setIsSucces] = React.useState<boolean>(false);

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
          <Typography weight='bold' size='sm'>
            Services
          </Typography>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[14px]'>
            {services.map((service) => (
              <Checkbox
                key={service.id}
                id={service.id}
                label={service.label}
              />
            ))}
          </div>
        </div>

        <Button
          className='font-bold text-sm leading-sm lg:text-md lg:leading-md '
          onClick={() => {
            setIsSucces(Math.random() > 0.5); // random true / false
            setOpen(true);
          }}
        >
          Send
        </Button>

        <Notification isSuccess={isSuccess} open={open} setOpen={setOpen} />
      </div>
    </SectionWrapper>
  );
};

export default ContactMe;
