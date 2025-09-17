import React from 'react';
import Image from '../../ui/Image';
import { icons, images, navItems, themeAsConst } from '../../../constants';
import Button from '../../ui/Button';
import clsx from 'clsx';
import type { NavItemsProps } from '../../../types';
import { useTheme } from '../../../context/ThemeContext';

const ListMenu: React.FC<NavItemsProps> = ({ link, label, handleClick }) => {
  return (
    <li className='text-md leading-md font-semibold md:px-4 py-2'>
      <a href={link} onClick={(e) => handleClick?.(e, link)}>
        {label}
      </a>
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

  const scrollToSection = (link: string, headerOffset = 80) => {
    if (link.startsWith('#')) {
      const target = document.querySelector(link);
      if (target) {
        const elementPosition =
          target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      scrollToSection(link, 80); // pass header height
    }

    setIsHamburgerOpen(false);
  };

  return (
    <header
      className={clsx(
        'sticky top-0 z-60 py-6 px-4 md:px-[140px] backdrop-blur-2xl transition-colors duration-300',
        isHamburgerOpen ? 'bg-white dark:bg-black' : 'bg-transparent'
      )}
    >
      <div className='flex justify-between items-center '>
        <Image
          src={logoSrc}
          alt='logo-light'
          id='logo-light'
          className='h-[36px] w-[159px] cursor-pointer'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsHamburgerOpen(false);
          }}
        />

        <nav className='hidden md:inline'>
          <ul className='flex gap-3 items-center'>
            {navItems.map((menu) => (
              <ListMenu
                key={menu.id}
                id={menu.id}
                link={menu.link}
                label={menu.label}
                handleClick={(e) => handleClick(e, menu.link)}
              />
            ))}
          </ul>
        </nav>

        <Button
          className='w-[197px] hidden md:block'
          onClick={(e) => handleClick(e, '#contact-me')}
        >
          Let's Talk
        </Button>
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
            ? 'fixed right-0 top-20 z-50 h-screen w-full bg-white dark:bg-black dark:text-white px-4 py-6'
            : 'hidden overflow-y-hidden',
          'md:hidden'
        )}
      >
        <ul className='gap-3'>
          {navItems.map((menu) => (
            <ListMenu
              key={menu.id}
              id={menu.id}
              link={menu.link}
              label={menu.label}
              handleClick={(e) => handleClick(e, menu.link)}
            />
          ))}

          <li className='py-2'>
            <Button
              className='w-full'
              onClick={(e) => handleClick(e, '#contact-me')}
            >
              Let's Talk
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
