import React from 'react';
import MobileHeader from '../components/MobileHeader/MobileHeader';
// import Header from '../components/Header/Header';

const subHeaderItems = [
  {
    display: 'HOME',
    url: '/',
  },
  {
    display: 'COMPUTERS',
    url: '/',
  },
  {
    display: 'LAPTOPS',
    url: '/',
  },
  {
    display: 'BUILD',
    url: '/',
  },
  {
    display: 'CONTACT',
    url: '/',
  },
];

const HomePage = () => {
  return (
    <div>
      {/* <Header headerItems={subHeaderItems} /> */}
      <MobileHeader headerItems={subHeaderItems} />
      HomePage
    </div>
  );
};

export default HomePage;
