import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AccountLogin from '../AccountLogin/Wrapper';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Hoe to get this to context ?
import Formsy from 'formsy-react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

storiesOf('app.AccountLogin', module)
  .add('login default', () => {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AccountLogin Formsy={Formsy}/>
      </MuiThemeProvider>
    );
  })
