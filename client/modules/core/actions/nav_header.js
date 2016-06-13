export default {
  toggleSideNav({LocalState}) {
    LocalState.set('SIDE_NAV_STATE', !LocalState.get('SIDE_NAV_STATE'));
  },
  toggleMobileView({LocalState}) {
    LocalState.set('MOBILE_VIEW', window.innerWidth < 1024);
  },

}
