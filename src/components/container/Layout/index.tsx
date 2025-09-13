import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-white text-light dark:text-dark dark:bg-black font-quicksand'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
