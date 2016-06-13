import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NavHeader from '../components/nav_header.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  //const sideNavOpen = LocalState.get('SIDE_NAV_STATE') || false
  const mobileView = LocalState.get('MOBILE_VIEW')
  onData(null, {mobileView});
};

export const depsMapper = (context, actions) => ({
  toggleSideNav: actions.NavHeader.toggleSideNav,
  toggleMobileView: actions.NavHeader.toggleMobileView,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NavHeader);
