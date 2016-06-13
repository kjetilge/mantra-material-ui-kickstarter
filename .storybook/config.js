import { configure } from '@kadira/storybook';
import { disable } from 'react-komposer';

disable();

function loadStories() {

  //require('../client/modules/core/components/.stories');
  require('../client/modules/app/components/.stories');
  require('../client/modules/testmod/components/.stories');
  // require as many as stories you need.
}

configure(loadStories, module);
