import React from 'react';
import MobileHeader from '../components/MobileHeader/MobileHeader';
import { useWindowSize } from '../hooks/useWindowSize';
import Header from '../components/Header/Header';

const HomePage = () => {
  const [width] = useWindowSize();

  return (
    <div>
      {width > 768 ? <Header /> : <MobileHeader />}
      HomePage
    </div>
  );
};

export default HomePage;
