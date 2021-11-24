import React from 'react';

import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';

import Header from '../components/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Contents = () => {
  return (
    <div className="h-screen p-8 flex-y overflow-y-scroll overscroll-contain">
      <div>
        <h1>This is Slide Page.</h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="carousel-wrapper w-1/2">
          <Carousel useKeyboardArrows showStatus>
            <div>
              <img src="../../static/slide-0.jpeg" />
            </div>
            <div>
              <img src="../../static/slide-1.jpeg" />
            </div>
            <div>
              <img src="../../static/slide-2.jpeg" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const Slide = () => {
  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <Contents />
      </motion.div>
    </div>
  );
};

export default Slide;
