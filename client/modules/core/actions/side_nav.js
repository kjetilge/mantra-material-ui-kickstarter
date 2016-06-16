export default {
  toggleSideNav({LocalState}) {
    LocalState.set('SIDE_NAV_STATE', !LocalState.get('SIDE_NAV_STATE'));
  }
}
