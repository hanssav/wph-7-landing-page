import { images } from '../../../constants';
import type { Tabs } from './Industry.types';

const tabs: Tabs[] = [
  {
    id: 'tab1',
    label: 'Fintech',
    content:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: images.industry1,
  },
  {
    id: 'tab2',
    label: 'E-Commerce',
    content:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: images.industry2,
  },
  {
    id: 'tab3',
    label: 'Healthcare',
    content:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: images.industry3,
  },
] as const;

export { tabs };
