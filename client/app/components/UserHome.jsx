import React, { PropTypes } from 'react';

import BoughtItems from './BoughtItems';
import SoldItems from './SoldItems';
import RecentNotifications from './RecentNotifications';

function UserHome({ bought, sold, notifications }) {
    // if there are recent notifications, display here
    // otherwise hide
  return (
    <div>
      <RecentNotifications notifications={notifications} />
      <BoughtItems items={bought} />
      <SoldItems items={sold} />
    </div>
  );
}

UserHome.propTypes = {
  bought: PropTypes.array.isRequired,
  sold: PropTypes.array.isRequired,
  notifications: PropTypes.object
};

export default UserHome;
