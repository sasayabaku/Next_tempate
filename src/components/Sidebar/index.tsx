import React from 'react';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import PieChartIcon from '@mui/icons-material/PieChart';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useRouter } from 'next/router';

type Props = {
  href: string;
};

const Link: React.FC<Props> = ({ children, href }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};

const Sidebar = () => {
  return (
    <div className="md:w-2/12 w-6/12 h-full shadow-2xl">
      <div className="border-b py-3 mt-1 flex justify-around">
        <p className="text-xl font-semibold">Next.js Template</p>
      </div>

      <div className="p-6 space-y-14">
        <div className="space-y-4">
          <h1 className="text-gray-600">Menu</h1>

          <div className="">
            <Link href="/">
              <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <DonutLargeIcon className="text-gray-500" />
                <p className=" ">Dashboard</p>
              </div>
            </Link>
          </div>

          <div className="">
            <Link href="/asana">
              <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-red-500 cursor-pointer">
                <LibraryAddCheckIcon className="text-gray-500" />
                <p className=" ">Todo List</p>
              </div>
            </Link>
          </div>

          <div className="">
            <Link href="/gallery">
              <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-yellow-400 cursor-pointer">
                <PieChartIcon className="text-gray-500" />
                <p className=" ">Gallery</p>
              </div>
            </Link>
          </div>

          <div className="">
            <Link href="/slide">
              <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-green-400 cursor-pointer">
                <SlideshowIcon className="text-gray-500" />
                <p className=" ">Slide</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
