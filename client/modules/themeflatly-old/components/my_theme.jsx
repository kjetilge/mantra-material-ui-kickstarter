import {
cyan500, cyan700,
grey100, grey300, grey400, grey500,
pinkA200,
white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import {Colors} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import * as Spacing from 'material-ui/styles/spacing';


export const MyTheme = Object.freeze({
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    /*
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
    */

    primary1Color: '#FF5722', //default-primary-color -> App bar, icons, primary buttons
    primary2Color: '#FFCCBC', //light-primary-color
    primary3Color:  '#E64A19', //dark-primary-color
    accent1Color: '#455A64', //#455A64
    accent2Color: '#78909C', //toolbar
    accent3Color: '#607D8B',

    textColor: '#FFFFFF',
    alternateTextColor: '#212121', //text-primary-color
    canvasColor: '#607D8B', //drop down / paper etc..
    borderColor: '#B6B6B6',
    disabledColor: '#727272', //secondary-text-color
    pickerHeaderColor: '#E64A19', //clock top and text
    clockCircleColor: '#607D8B', //clock background
    shadowColor: fullBlack,

  },
});
/*
.dark-primary-color    { background: #E64A19; }
.default-primary-color { background: #FF5722; }
.light-primary-color   { background: #FFCCBC; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #607D8B; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #727272; }
.divider-color         { border-color: #B6B6B6; }
*/
