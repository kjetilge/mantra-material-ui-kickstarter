import React from 'react';
// import classNames from 'classnames';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose () {
    this.setState({
      open: false,
    });
  };

  render () {
    const links = this.props.links || []
    const name = this.props.name || 'Empty name'

    return (
      <span>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label={name}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            {
              links.map((link, index) => {
                link.classes = link.classes ? link.classes : {};
                link.url = link.url ? link.url : '';
                link.name = link.name ? link.name : '';
                // let classes = classNames(link.classes);
                let response = '';
                if (link.url) {
                  response = <MenuItem
                    key={index}
                    primaryText={link.name}
                    linkButton href={link.url}
                    onTouchTap={this.handleRequestClose}
                  />

                } else {
                  response = <MenuItem key={index} primaryText={link.name} onTouchTap={this.handleRequestClose}/>
                }
                return response;
              })
            }
          </Menu>
        </Popover>
      </span>
    )
  }

};
