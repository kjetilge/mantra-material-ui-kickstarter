import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Avatar from 'material-ui/Avatar';

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';



class ToolbarWeb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSingle: '1',
      valueMenu: 'none'
    };
  }

  render() {
    const toggleProfileMenu = () => {
      console.log("toggleProfileMenu", !this.state.openMenu)
      this.setState({ profileMenuOpen: !this.state.openMenu });
    }

    this.handleChangeSingle = (event, value) => {
      console.log("value", value)
      this.setState({
        valueSingle: value,
      });
    };

    this.handleOpenMenu = () => {
      console.log("opening menu")
      this.setState({
        openMenu: true,
      });
    }

    this.handleOnRequestChange = (value) => {
      console.log("value", event)
      this.setState({
        openMenu: value,
      });
    }

    this.handleProfileSelect = (event) => {
      console.log("handleProfileSelect", event)
    }

    const style = {
      avatar: {
        marginTop:4,
        marginLeft:20
      },
      vertMenu: {
        position: 'absolute',
        right: -32,
      }
    }


    return (
      <Toolbar
        style={{backgroundColor: 'transparent'}}
      >
        <ToolbarGroup>
          <FlatButton label="FINN EN BIL" linkButton={true} href="http://www.vg.no"/>
          <FlatButton label="LEGG TIL MIN BIL" />
          <FlatButton label="HJELP" />

            <div onClick={this.handleOpenMenu}>
              <Avatar
                src="images/kjetil_avatar.jpg"
                size={40}
                style={style.avatar}
              />
            </div>

            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              onChange={this.handleChangeSingle}
              value={this.state.valueSingle}
              style={style.vertMenu}
              open={this.state.openMenu}
              onRequestChange={this.toggleProfileMenu}
            >
              <MenuItem value="profile" primaryText="Endre profil"/>
              <MenuItem value="account_settings" primaryText="Kontoinnstillinger"/>
              <MenuItem value="logout" primaryText="Logg ut"

              />
            </IconMenu>

        </ToolbarGroup>
      </Toolbar>
    );
  }
}

ToolbarWeb.propTypes = {
}
ToolbarWeb.defaultProps = {
}

export default ToolbarWeb;
