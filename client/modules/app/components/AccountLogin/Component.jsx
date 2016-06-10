import React from 'react';
import ReactDOM from 'react-dom';
//import getMuiTheme from 'material-ui/styles/getMuiTheme'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';

import {
  // Checkbox,
  // CheckboxGroup,
  Input,
  // RadioGroup,
  Row,
  // Select,
  // File,
  // Textarea

} from 'formsy-react-components';

export default React.createClass({
  //mixins: [Formsy.Mixin],
  componentDidMount() {
    console.log("mounted")
  },
  resetForm() {
    this.refs.form.reset();
  },

  validSubmit(data) {
    console.log('validSubmit', data);
    //console.log("this.refs['email']", this.refs.email)
    //fieldVal = this.refs.email.getDOMNode().value;
    this.props.submitAction(data.email, data.password);
  },
  onChange() {
    //console.log("a change")
  },
  // invalidSubmit(data) {
  invalidSubmit() {
     console.log('invalidSubmit', data);
  },
  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  },
  enableButton() {
    // console.log('enable button');
    this.setState({ canSubmit: true });
  },

  disableButton() {
    // console.log('disable button');
    this.setState({ canSubmit: false });
  },
  onFocus() {
    const email = $("input")[0]
    email.removeAttribute('readonly')
    console.log("Focus")
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
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  render() {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let formClassName = 'vertical m-t';

    var sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };

    const hideAutoFillColorStyle = {
      WebkitBoxShadow: '0 0 0 1000px white inset'
    };
    const hintStyle = { zIndex: '1' };

    const {error} = this.props;

    return (

         <Paper style={paperStyle}>
           <Formsy.Form
            className={formClassName}
             onValidSubmit={this.validSubmit}
             onInvalidSubmit={this.invalidSubmit}
             onValid={this.enableButton}
             onInvalid={this.disableButton}
             onChange={this.onChange}
             ref="form"
             autoComplete = "off"
             autoCorrect="off"
             underlineFocusStyle={{borderColor: "white"}}
             autoCapitalize="off"
             >
              {error ? <p style={{color: 'red'}}>{error}</p> : null}

              <FormsyText
                {...sharedProps}
                name="email"
                ref="email"
                value=""
                label="Email"
                type="search"
                placeholder="This is an email input."
                autocomplete="false"
                readOnly
                onFocus={this.onFocus}
                validations="isEmail"
                validationError="Vennligs benytt en gyldig epostadresse."
              />

              <FormsyText
                  {...sharedProps}
                  name="password"
                  value=""
                  label="Password"
                  type="password"
                  placeholder="Type in your password"
                  validations="minLength:4"
                  validationError="Passordet ser litt kort ut, prøv med noe lengre"
              />

              <Row layout={this.state.layout}>
                  <RaisedButton
                    formNoValidate={true}
                    disabled={!this.state.canSubmit}
                    type="submit"
                    label="Login"
                  />
              </Row>
            </Formsy.Form>
         </Paper>

    );
  }
});
