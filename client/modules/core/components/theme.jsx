/*
import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'; //baseTheme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MyTheme} from './my_theme.jsx'; // my own theme :-)

const muiTheme = getMuiTheme({
  palette: {
    //textColor: cyan500,
  },
  appBar: {
    //height: 50,
  },
});


class Theme extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      //muiTheme: getMuiTheme(MyTheme)
      muiTheme: getMuiTheme(muiTheme)
    };
  },

  render() {
    console.log(this.props)
    return (
      <p>Hello</p>
    );
  }
}

MainLayout.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default Theme;*/
