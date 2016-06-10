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
    return (
      <AppBar
        title={this.props.title}
        onLeftIconButtonTouchTap={this.props.toggleNav}
        iconElementRight={appBarElements}
        style={{height:72, paddingTop:4}}
      />
    );
  }
}


NavBar.propTypes = {
  title: React.PropTypes.string,
  toggleNav: React.PropTypes.func
}
NavBar.defaultProps = {

}

export default NavBar;
