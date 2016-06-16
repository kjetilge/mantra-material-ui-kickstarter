
/*
import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import UserControls from '../components/Theme/UserControls.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  toggleMobileRightMenu: actions.user_controls.toggleMobileRightMenu,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UserControls);
*/
