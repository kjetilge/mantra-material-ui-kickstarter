
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class extends React.Component {

  displayUser() {

    const {email} = this.props;

    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle"
            data-toggle="dropdown">{email} <span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/account">Account</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }

  displayGuest() {
    return (
      <div>
        <FlatButton label="register" linkButton={true} href="/register"/>
        <FlatButton label="login" linkButton={true} href="/login"/>
      </div>
    );
  }

  render() {
    const {
      userId
    } = this.props;

    return userId ? this.displayUser() : this.displayGuest();
  }
}
