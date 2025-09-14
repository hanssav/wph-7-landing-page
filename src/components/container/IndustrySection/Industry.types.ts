import type { tabs } from './Industry.constants';

type Tabs = {
  id: string;
  label: string;
  content: string;
  image: string;
};

type TabId = (typeof tabs)[number]['id'];

export type { Tabs, TabId };
