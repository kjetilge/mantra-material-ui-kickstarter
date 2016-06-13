import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Badges from '../badges';
import WithContext from "react-with-context"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainLayout from '/client/modules/core/components/main_layout'

const prepareStyles = {}

storiesOf('Badges', module)
  .add('Badges', () => {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Badges />
      </MuiThemeProvider>
    );
  })
