import React from 'react';

import {navHeaderComposer} from '../../../configs/composers.js';

//import NavHeaderBrand from '/client/modules/app/components/Theme/NavHeaderBrand.jsx';
import NavHeaderLeftContent from './Theme/NavHeaderLeftContent.jsx';
import NavHeaderRightContent from './Theme/NavHeaderRightContent.jsx';

const NavHeaderLeftContentCtx = navHeaderComposer(NavHeaderLeftContent);
const NavHeaderRightContentCtx = navHeaderComposer(NavHeaderRightContent);


import AppBar from 'material-ui/AppBar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {IconMenu} from 'material-ui';
import {Tabs, Tab} from 'material-ui/Tabs';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  appBarElements: {
    marginTop:8,
    left: {
      position:'absolute',
      left: 420
    }
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.toggleMobileView);
    this.props.toggleMobileView()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.toggleMobileView);
  }

  render() {
    const appBarElements = (
      <div style={styles.appBarElements}>
        <div style={styles.appBarElements.left}>
          <NavHeaderLeftContentCtx />
        </div>
          <NavHeaderRightContentCtx />
      </div>
    )

    const mobileRightMenu = (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        open={this.props.mobileRightMenuOpen}
        onRequestChange={this.props.toggleMobileRightMenu}
      >
      <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <NavHeaderRightContentCtx />
      </IconMenu>
      )

    return (
      <AppBar
        title={this.props.title}
        showMenuIconButton={this.props.mobileView}
        onLeftIconButtonTouchTap={this.props.toggleSideNav}
        iconElementRight={this.props.mobileView ? mobileRightMenu : appBarElements}
        style={{height:72, paddingTop:4}}
      />
    );
  }
}


NavBar.propTypes = {
  title: React.PropTypes.string,
  toggleSideNav: React.PropTypes.func,
  mobileRightMenuOpen: React.PropTypes.bool
}
NavBar.defaultProps = {
  mobileRightMenuOpen: false
}

export default NavBar;
