type Service = {
  id: string;
  label: string;
};

const services: Service[] = [
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'cloud', label: 'Cloud Solutions' },
  { id: 'software', label: 'Software Development' },
  { id: 'others', label: 'Others' },
] as const;

export { services };
