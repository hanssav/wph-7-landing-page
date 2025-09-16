import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import DarkModeToggle from '../../ui/DarkModeToggle';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative bg-white text-light dark:text-dark dark:bg-black font-quicksand'>
      <Header />
      {children}
      {/* DarkMode Toggle fixed in bottom-right */}
      <div className='fixed bottom-4 right-4 lg:bottom-10 lg:right-10 z-50'>
        <DarkModeToggle />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
