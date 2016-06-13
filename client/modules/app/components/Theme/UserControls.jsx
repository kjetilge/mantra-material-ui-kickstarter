
import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  displayUser() {
    const {email} = this.props;

    return (
      <div>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label={this.props.userSubReady ? email : "..unlocking"}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Profile" linkButton href="/profile" onTouchTap={this.handleRequestClose}/>
            <MenuItem primaryText="Account" linkButton href="/account" onTouchTap={this.handleRequestClose}/>
            <MenuItem primaryText="Logout" linkButton href="/logout" onTouchTap={this.handleRequestClose}/>
          </Menu>
        </Popover>
      </div>
    );
  }

  displayGuest() {
    return (
      <div>
        <FlatButton label="register" linkButton={true} href="/register"/>
        <FlatButton label="login" linkButton={true} href="/login"/>
      </div>
    );
  }
  mobileDisplayUser() {
    return (
      <div>
        <MenuItem primaryText="Profile" linkButton href="/profile" onTouchTap={this.handleRequestClose}/>
        <MenuItem primaryText="Account" linkButton href="/account" onTouchTap={this.handleRequestClose}/>
        <MenuItem primaryText="Logout" linkButton href="/logout" onTouchTap={this.handleRequestClose}/>
      </div>
    )
  }

  mobileDisplayGuest() {
    return (
      <div>
        <MenuItem primaryText="Register" linkButton href="/register" />
        <MenuItem primaryText="Login" linkButton href="/login" onTouchTap={this.handleRequestClose}/>
      </div>
    );
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose () {
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      userId,
      mobileView
    } = this.props;
    //console.log("Mobile ?", mobileView)
    if(mobileView)
      return userId ? this.mobileDisplayUser() : this.mobileDisplayGuest();
    return userId ? this.displayUser() : this.displayGuest();
  }
}
