import React from 'react';
import AppBar from 'material-ui/AppBar'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {IconMenu} from 'material-ui';
import {Tabs, Tab} from 'material-ui/Tabs';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import ToolbarWeb from '../containers/toolbar_web'

// http://www.gitterforum.com/discussion/callemall-material-ui?page=388
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("this.props",this.props)
    return (
      <AppBar
        title={this.props.title}
        onLeftIconButtonTouchTap={this.props.toggleNav}
        iconElementRight={<ToolbarWeb />}
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
