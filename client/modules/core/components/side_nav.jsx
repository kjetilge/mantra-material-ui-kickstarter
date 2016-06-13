import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.setState = this.setState.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    console.log("this", this)
    this.setState({open: !this.state.open})
  }

  handleClose () { this.setState({open: false}) }

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.props.sideNavOpen}
        onRequestChange={this.props.toggleSideNav}
      >
      <MenuItem primaryText="Testmod" linkButton={true} href="/testmod"/>
      <MenuItem primaryText="Blog" linkButton={true} href="/blog"/>

      <MenuItem
        primaryText="Colors"
        rightIcon={<ArrowDropRight />}
        menuItems={[
          <MenuItem primaryText="Colors" linkButton={true} href="/colors" />,
          <MenuItem primaryText="Colors/add" checked={true} href="/colors/add" />,
          <MenuItem primaryText="Rules" checked={true} />,
        ]}
      />
      <MenuItem
        primaryText="Accounts"
        rightIcon={<ArrowDropRight />}
        menuItems={[
          <MenuItem primaryText="Login" linkButton={true} href="/login" />,
          <MenuItem primaryText="Forgot password"  linkButton={true} href="/password" />,

        ]}
      />
      <Divider />
      <MenuItem
        primaryText="Admin"
        rightIcon={<ArrowDropRight />}
        menuItems={[
          <MenuItem primaryText="Admin" linkButton={true} href="/admin" />,
          <MenuItem primaryText="Users" linkButton={true} href="/uers" />,
          <MenuItem primaryText="Users/add" linkButton={true} href="/users/add" />,
        ]}
      />
      </Drawer>
    );
  }
}

export default SideNav;
