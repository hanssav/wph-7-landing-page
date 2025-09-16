type NavItemsProps = {
  id: number;
  link: string;
  label: string;
  handleClick?: (e: React.MouseEvent<HTMLAnchorElement>, link: string) => void;
};

export type { NavItemsProps };
