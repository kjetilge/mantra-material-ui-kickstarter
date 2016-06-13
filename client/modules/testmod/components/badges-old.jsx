import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const Badges = () => {
  let open = false;
  const handleTouchTap = () => {
    console.log("Touch!")
    open = true
  }
  return (
    <div>
      <Badge
        badgeContent={4}
        primary={true}
      >
        <NotificationsIcon />
      </Badge>
      <Badge
        badgeContent={10}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}
      >
        <IconButton tooltip="Notifications">
          <NotificationsIcon />
        </IconButton>
      </Badge>


      <RaisedButton
        onTouchTap={handleTouchTap}
        label="Click me"
      />
      <Popover
        open={false}
        onRequestClose={() => {return n}}
      >
        <Menu>
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help &amp; feedback" />
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Sign out" />
        </Menu>
      </Popover>
    </div>
  )
}

export default Badges;
