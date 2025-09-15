import { icons, images } from '../../../constants';
import type { Testimonial } from './Testimonial.types';

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    ratingSrc: icons.rating,
    quoteIconSrc: icons.quote,
    userImageSrc: images.testimonialUser1,
  },
  {
    id: 'testimonial-2',
    quote:
      'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    ratingSrc: icons.rating,
    quoteIconSrc: icons.quote,
    userImageSrc: images.testimonialUser2,
  },
  {
    id: 'testimonial-3',
    quote:
      'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    ratingSrc: icons.rating,
    quoteIconSrc: icons.quote,
    userImageSrc: images.testimonialUser3,
  },
];
