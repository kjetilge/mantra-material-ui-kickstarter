/*
import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MainLayout from '../components/main_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {LocalState} = context();
  //const sideNavState = LocalState.get('SIDENAV_OPEN') || false;
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  toggleSideNav: actions.layout.toggleSideNav,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);
*/
