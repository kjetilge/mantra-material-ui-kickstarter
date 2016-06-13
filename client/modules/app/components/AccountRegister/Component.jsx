import React from 'react';
// import ReactDOM from 'react-dom';
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
    this.props.submitAction(data.email, data.password1, data.password2);
  },
  // invalidSubmit() {
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
    return {
      layout: 'vertical',
      validatePristine: true,
      disabled: false,
      canSubmit: false
    };
  },

  styles: {
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20,
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  render() {

    let formClassName = 'vertical m-t';
    const {paperStyle, submitStyle } = this.styles;
    
    var sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };

    const {error} = this.props;

    return (
      <Paper style={paperStyle}>
        <Formsy.Form className={formClassName}
          onValidSubmit={this.validSubmit}
          onInvalidSubmit={this.invalidSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onChange={this.onChange}
          ref="form">

            {error ? <p style={{color: 'red'}}>{error}</p> : null}

            <FormsyText
                {...sharedProps}
                name="email"
                value=""
                label="Email"
                type="email"
                placeholder="This is an email input."

                autoComplete="off"

                validations="isEmail"
                validationError="Please provide a valid email address."
            />


            <FormsyText
                {...sharedProps}
                name="password1"
                value=""
                label="Password"
                type="password"

                validations="minLength:8"
                validationError="Your password must be at least 8 characters long."
                placeholder="Choose a password"
            />

            <FormsyText
                {...sharedProps}
                name="password2"
                value=""
                label="Confirm password"
                type="password"


                validations="equalsField:password1"
                validationErrors={{
                  equalsField: 'Passwords must match.'
                }}

                placeholder="Retype password"
            />


            <RaisedButton
              formNoValidate={true}
              disabled={!this.state.canSubmit}
              type="submit"
              label="Register"
            />

        </Formsy.Form>
        </Paper>
    );
  }
});
