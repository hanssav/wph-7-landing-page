import React from 'react';
import Image from '../../ui/Image';
import { icons, images, navItems, themeAsConst } from '../../../constants';
import Button from '../../ui/Button';
import clsx from 'clsx';
import type { NavItemsProps } from '../../../types';
import DarkModeToggle from '../../ui/DarkModeToggle';
import { useTheme } from '../../../hooks/useTheme';

const ListMenu: React.FC<NavItemsProps> = ({ link, label }) => {
  return (
    <li className='text-md leading-md font-semibold md:px-4 py-2'>
      <a href={link}>{label}</a>
    </li>
  );
};

const Header: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState<boolean>(false);

  const { theme } = useTheme();
  const darkMode = theme === themeAsConst.dark;

  const logoSrc = darkMode ? images.logoDark : images.logoLight;
  const hamburgerSrc = darkMode ? icons.hamburgerDark : icons.hamburger;

  React.useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // cleanup just in case
    return () => {
      document.body.style.overflow = '';
    };
  }, [isHamburgerOpen]);

  return (
    <header className='sticky top-0 backdrop-blur-2xl z-60 backdrop:blur-2xl py-6 px-4 md:px-[140px]'>
      <div className='flex justify-between items-center '>
        <Image
          src={logoSrc}
          alt='logo-light'
          id='logo-light'
          className='h-[36px] w-[159px]'
        />

        <nav className='hidden md:inline'>
          <ul className='flex gap-3 items-center'>
            {navItems.map((menu) => (
              <ListMenu
                key={menu.id}
                id={menu.id}
                link={menu.link}
                label={menu.label}
              />
            ))}
          </ul>
        </nav>

        {/* DarkMode Toggle for testing */}
        <DarkModeToggle />

        <Button className='w-[197px] hidden md:block'>Let's Talk</Button>
        {/* mobile */}
        <Button
          variant='ghost'
          className='md:hidden'
          onClick={() => setIsHamburgerOpen((prev) => !prev)}
        >
          <Image src={hamburgerSrc} id='hamburger-menu' />
        </Button>
      </div>

      {/* mobile menu */}
      <nav
        id='mobile-menu'
        className={clsx(
          isHamburgerOpen
            ? 'fixed right-0 top-16 z-50 h-screen w-full bg-white dark:bg-black dark:text-white px-4 py-6'
            : 'hidden overflow-y-hidden',
          'md:hidden'
        )}
      >
        <ul className='gap-3 items-center'>
          {navItems.map((menu) => (
            <ListMenu
              key={menu.id}
              id={menu.id}
              link={menu.link}
              label={menu.label}
            />
          ))}

          <li className='py-2'>
            <Button className='w-full'>Let's Talk</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
