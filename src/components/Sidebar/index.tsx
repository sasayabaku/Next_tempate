import React from 'react';

import ClearAllIcon from '@mui/icons-material/ClearAll';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

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
            <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              <DonutLargeIcon className="text-gray-400" />
              <p className=" ">Dashboard</p>
            </div>
          </div>

          <div className="">
            <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-red-500 cursor-pointer">
              <ClearAllIcon className="text-gray-400" />
              <p className=" ">Transaction</p>
            </div>
          </div>

          <div className="">
            <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-yellow-400 cursor-pointer">
              <ClearAllIcon className="text-gray-400" />
              <p className=" ">Send</p>
            </div>
          </div>

          <div className="">
            <div className="flex p-3 text-gray-700 space-x-4 0 hover:bg-gray-50 hover:text-green-400 cursor-pointer">
              <ClearAllIcon className="text-gray-400" />
              <p className=" ">Transaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
