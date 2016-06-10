import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'; //baseTheme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MyTheme} from './my_theme.jsx'; // my own theme :-)

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavHeader from './NavHeader.jsx'
import {cyan500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    //textColor: cyan500,
  },
  appBar: {
    //height: 50,
  },
});

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    //injectTapEventPlugin();
  }

  getChildContext() {
    return {
      //muiTheme: getMuiTheme(MyTheme)
      muiTheme: getMuiTheme(muiTheme)
    };
  }

  render() {
    const {content} = this.props
    return (
        <div>
          <NavHeader title="Mantra Kickstarter 2"/>
          {content()}
      </div>
    )
  }
}

MainLayout.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

const styles = {
  appBar: {
    position: 'fixed',
    // Needed to overlap the examples
    //zIndex: getMuiTheme.zIndex.appBar + 1,
    top: 0,
  }
}

export default MainLayout;
