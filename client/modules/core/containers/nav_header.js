import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NavHeader from '../components/nav_header.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const {authCommon} = context();

  const {
    userSubReady,
    userId,
    user,
    email,
    profile
  } = authCommon();


  const mobileView = LocalState.get('MOBILE_VIEW')
  const mobileRightMenuOpen = LocalState.get('MOBILE_RIGHT_MENU_OPEN')
  onData(null, {mobileView, mobileRightMenuOpen,userSubReady,
        userId,
        user,
        email,
        profile,
        });
};

export const depsMapper = (context, actions) => ({
  toggleSideNav: actions.NavHeader.toggleSideNav,
  toggleMobileView: actions.NavHeader.toggleMobileView,
  toggleMobileRightMenu: actions.NavHeader.toggleMobileRightMenu,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NavHeader);
