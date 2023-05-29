import React from 'react';
import MobileHeader from '../components/MobileHeader/MobileHeader';
// import Header from '../components/Header/Header';

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
  return (
    <div>
      {/* <Header headerItems={subHeaderItems} /> */}
      <MobileHeader headerItems={headerItems} />
      HomePage
    </div>
  );
};

export default HomePage;
