import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Menu from 'material-ui/Menu';


class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Drawer
        docked={false}
        width={120}
        open={this.props.sideNavOpen}
        onRequestChange={this.props.toggleSideNav}
      >

          <MenuItem primaryText="Testmod" linkButton={true}  onTouchTap={this.props.toggleSideNav} href="/testmod"/>
          <MenuItem primaryText="Blog" linkButton={true} onTouchTap={this.props.toggleSideNav} href="/blog"/>

          <MenuItem
            primaryText="Colors"
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="Colors" onTouchTap={this.props.toggleSideNav} linkButton={true}  href="/colors" />,
              <MenuItem primaryText="Colors/add" onTouchTap={this.props.toggleSideNav} linkButton={true}  href="/colors/add" />,
              <MenuItem primaryText="Colors/rules" onTouchTap={this.props.toggleSideNav} href="/colors/rules" />,
            ]}
          />
          <MenuItem
            primaryText="Accounts"
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="Login" linkButton={true} onTouchTap={this.props.toggleSideNav} href="/login" />,
              <MenuItem primaryText="Forgot password" linkButton={true} onTouchTap={this.props.toggleSideNav} href="/password" />,
            ]}
          />
          <Divider />
          {this.props.userId ? <MenuItem
            primaryText="Admin"
            rightIcon={<ArrowDropRight />}
            menuItems={[
              <MenuItem primaryText="Admin" linkButton={true} onTouchTap={this.props.toggleSideNav} href="/admin" />,
              <MenuItem primaryText="Users" linkButton={true} onTouchTap={this.props.toggleSideNav} href="/users" />,
              <MenuItem primaryText="Users/add" linkButton={true}  href="/users/add" />,
            ]}
          /> : null }

      </Drawer>
    );
  }
}

SideNav.propTypes = {
  userId: React.PropTypes.string,
  userSubReady: React.PropTypes.bool,
  sideNavOpen: React.PropTypes.bool,
  toggleSideNav: React.PropTypes.func
}
SideNav.defaultProps = {
  mobileRightMenuOpen: false,
  sideNavOpen: true,
  userSubReady:false
}
export default SideNav;
