import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SideNav from '../components/side_nav.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const sideNavOpen = LocalState.get('SIDE_NAV_STATE') || false
  onData(null, {sideNavOpen});
};

export const depsMapper = (context, actions) => ({
  toggleSideNav: actions.SideNav.toggleSideNav,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SideNav);
