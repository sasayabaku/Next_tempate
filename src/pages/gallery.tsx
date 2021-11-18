import React from 'react';

import Header from '../components/Header';

const Gallery = () => {
  return (
    <div className="">
      <Header />
      <div className="h-screen p-8 flex-y overflow-y-scroll overscroll-contain">
        <div>
          <h1>This is Gallery Page.</h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
