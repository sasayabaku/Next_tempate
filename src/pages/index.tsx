import React from 'react';

import Header from '../components/Header';

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="h-screen p-8 flex-y overflow-y-scroll overscroll-contain"></div>
    </div>
  );
};

export default Home;
