import React from 'react';

import { motion } from 'framer-motion';

import Header from '../components/Header';

type Props = {
  title: string;
  sentence: string;
};

const Card: React.FC<Props> = ({ title, sentence }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-400 hover:border-opacity-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-700">{sentence}</p>
    </div>
  );
};

const Contents = () => {
  return (
    <div className="h-screen p-8 flex-y overflow-y-scroll overscroll-contain">
      <section className="container px-5 py-2 mx-auto mb-40 lg:pt-12 lg:px-32">
        <div className="flex flex-wrap m-1 md:m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <div className="bg-white p-6 rounded-lg border border-gray-400 hover:border-opacity-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Card Object
                </h2>
                <p className="text-gray-700">This is my cool new card</p>
              </div>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Card title="Child Object" sentence="This sentence from child." />
            </div>
            <div className="w-full p-1 md:p-2">
              <Card
                title="Large Project"
                sentence="This is Large Card Sentece"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <div className="bg-white p-6 rounded-lg border border-gray-400 hover:border-opacity-0 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Card Object
                </h2>
                <p className="text-gray-700">This is my cool new card</p>
              </div>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Card title="Child Object" sentence="This sentence from child." />
            </div>
            <div className="w-full p-1 md:p-2">
              <Card
                title="Large Project"
                sentence="This is Large Card Sentece"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/600x360/F3F4F7/8693ac"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/500x300/F3F4F7/8693ac"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/500x300/F3F4F7/8693ac"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/500x300/F3F4F7/8693ac"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/500x300/F3F4F7/8693ac"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://dummyimage.com/600x360/F3F4F7/8693ac"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Gallery = () => {
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

export default Gallery;
