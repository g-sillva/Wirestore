import React from 'react';
import MobileHeader from '../components/MobileHeader/MobileHeader';
import { useWindowSize } from '../hooks/useWindowSize';
import Header from '../components/Header/Header';

const headerItems = [
  {
    display: 'HOME',
    url: '/',
  },
  {
    display: 'COMPUTERS',
    url: '/computers',
  },
  {
    display: 'LAPTOPS',
    url: '/laptops',
  },
  {
    display: 'BUILD',
    url: '/build',
  },
  {
    display: 'CONTACT',
    url: '/contact',
  },
];

const HomePage = () => {
  const [width] = useWindowSize();

  return (
    <div>
      {width > 768 ? (
        <Header headerItems={headerItems} />
      ) : (
        <MobileHeader headerItems={headerItems} />
      )}
      HomePage
    </div>
  );
};

export default HomePage;
