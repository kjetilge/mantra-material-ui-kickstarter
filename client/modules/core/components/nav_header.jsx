import React from 'react';

import {navHeaderComposer} from '/client/configs/composers.js';

//import NavHeaderBrand from '/client/modules/app/components/Theme/NavHeaderBrand.jsx';
import NavHeaderLeftContent from '/client/modules/app/components/Theme/NavHeaderLeftContent.jsx';
import NavHeaderRightContent from '/client/modules/app/components/Theme/NavHeaderRightContent.jsx';

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

//import ToolbarWeb from '../containers/toolbar_web'

// http://www.gitterforum.com/discussion/callemall-material-ui?page=388
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
    /*
    this.state = {
      mobileView: window.innerWidth < 1024,
    };*/
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.toggleMobileView);
    console.log("this.props.toggleMobileView", this.props.toggleMobileView())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.toggleMobileView);
  }

/*
  handleToggle() {
    console.log("toggle", this.props)
    //this.setState({open: !this.state.open});
    this.props.toggleSideNav
  }

  handleClose() { this.setState({open: false}); }
*/
  render() {
    //console.log("this.props2", this.props)
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

      >
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
  toggleSideNav: React.PropTypes.func
}
NavBar.defaultProps = {

}

export default NavBar;
