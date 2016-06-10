import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TimePicker from 'material-ui/TimePicker';

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};


const Experiments = () => (
  <div>

  <div>
    <FlatButton label="Choose an Image" labelPosition="before">
      <input type="file" style={styles.exampleImageInput} />
    </FlatButton>

    <FlatButton
      label="Label before"
      labelPosition="before"
      primary={true}
      style={styles.button}
      icon={<ActionAndroid />}
    />

    <FlatButton
      label="GitHub Link"
      linkButton={true}
      href="https://github.com/callemall/material-ui"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
    <FlatButton label="Secondary" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />

  </div>

    <div>
      <TimePicker
        hintText="24hr Format"
      />
      <div>
        <TimePicker
          disabled={true}
          format="24hr"
          hintText="Disabled TimePicker"
        />
      </div>
    </div>


    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <DropDownMenu value={"Hello"} >
          <MenuItem value={1} primaryText="All Broadcasts" />
          <MenuItem value={2} primaryText="All Voice" />
          <MenuItem value={3} primaryText="All Text" />
          <MenuItem value={4} primaryText="Complete Voice" />
          <MenuItem value={5} primaryText="Complete Text" />
          <MenuItem value={6} primaryText="Active Voice" />
          <MenuItem value={7} primaryText="Active Text" />
        </DropDownMenu>
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarTitle text="Options" />
        <FontIcon className="muidocs-icon-custom-sort" />
        <ToolbarSeparator />
        <RaisedButton label="Create Broadcast" primary={true} />
        <IconMenu
          iconButtonElement={
            <IconButton touch={true}>
              <NavigationExpandMoreIcon />
            </IconButton>
          }
        >
          <MenuItem primaryText="Download" />
          <MenuItem primaryText="More Info" />
        </IconMenu>
      </ToolbarGroup>
    </Toolbar>


  </div>
);

export default Experiments;
