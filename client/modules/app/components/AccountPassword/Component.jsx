import React from 'react';
import ReactDOM from 'react-dom';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';

export default React.createClass({

  resetForm() {
    // console.log('resetForm');
    this.refs.form.reset();
  },

  validSubmit(data) {
    // console.log('validSubmit', data);
    if(this.state.token) {
      this.props.resetAction(data.password1, data.password2, this.state.token);
    } else {
      this.props.submitAction(data.email, data.password1, data.password2);
    }
  },

  // invalidSubmit(data) {
  invalidSubmit() {
    // console.log('invalidSubmit', data);
  },

  enableButton() {
    // console.log('enable button');
    this.setState({ canSubmit: true });
  },

  disableButton() {
    // console.log('disable button');
    this.setState({ canSubmit: false });
  },

  getInitialState() {
    console.log("passw props", this.props)
    return {
      layout: 'vertical',
      validatePristine: true,
      disabled: false,
      canSubmit: false,
      token: this.props.getToken()
    };
  },

  styles: {
    paperStyle: {
      width: 250,
      margin: 'auto',
      padding: 20,
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  render() {
    const {paperStyle, submitStyle } = this.styles;
    let formClassName = 'vertical m-t';

    var sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };
    console.log("this.state.token", this.state.token)
    const {error, token} = this.props;
    var page;

    if(this.state.token) {
      page = <div>
        token: {this.state.token}
        <h2 className="font-bold">Nytt passord</h2>
        <p>
          Lag ett nytt passord
        </p>
      <Paper style={paperStyle}>
        <Formsy.Form
          onValidSubmit={this.validSubmit}
          onInvalidSubmit={this.invalidSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onChange={this.onChange}
          ref="form">

            {error ?
            <div className="alert alert-danger" onClick="">
              <span className="octicon octicon-megaphone" ></span>
              {error}
            </div> : null }

            <FormsyText
                {...sharedProps}
                name="password1"
                value=""
                label="Password"
                type="password"

                validations="minLength:8"
                validationError="Passordet må bestå av minst 8 karakterer"
                placeholder="Velg et passord"
            />
            <FormsyText
                {...sharedProps}
                name="password2"
                value=""
                label="Bekreft passord"
                type="password"


                validations="equalsField:password1"
                validationErrors={{
                  equalsField: 'Passwords must match.'
                }}

                placeholder="Bekreft passord"
            />

              <RaisedButton
                style={submitStyle}
                formNoValidate={true}
                disabled={!this.state.canSubmit}
                type="submit"
                label="Reset"
              />


        </Formsy.Form>
        </Paper>
      </div>
    } else {
      page = <div>
        token: {this.state.token}
        <h2 className="font-bold">Forgot password</h2>
        <p>
          Enter your email address and your password will be reset and emailed to you.
        </p>
        <Formsy.Form className={formClassName}
          onValidSubmit={this.validSubmit}
          onInvalidSubmit={this.invalidSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onChange={this.onChange}
          ref="form">

            {error ?
            <div className="alert alert-danger" onClick="">
              <span className="octicon octicon-megaphone" ></span>
              {error}
            </div> : null }

            <FormsyText
                {...sharedProps}
                name="email"
                value=""
                label="Email"
                type="email"
                placeholder="Din epost"

                autoComplete="off"

                validations="isEmail"
                validationError="Benytt en gyldig epostadresse"

            />

              <RaisedButton
                style={submitStyle}
                formNoValidate={true}
                disabled={!this.state.canSubmit}
                type="submit"
                label="Send reset lenke"
              />

        </Formsy.Form>
      </div>
    }
      return page
  }
});
