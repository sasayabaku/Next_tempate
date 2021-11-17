import React from 'react';

import AppsIcon from '@material-ui/icons/Apps';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = () => {
  return (
    <div className="flex shadow-sm bg-gray-50 p-6 justify-between">
      <div className="flex space-x-3">
        <p>My Name</p>
        <CropLandscapeIcon className="text-gray-400 hover:text-blue-600" />
        <DashboardIcon className="text-gray-400 hover:text-blue-600" />
      </div>
      <div className="flex space-x-4 text-gray-400 mr-3">
        <AppsIcon />
        <ExitToAppIcon />
      </div>
    </div>
  );
};

export default Header;
