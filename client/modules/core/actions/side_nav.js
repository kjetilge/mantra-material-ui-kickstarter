export default {
  toggleSideNav({LocalState}) {
    console.log("toggleNav",!LocalState.get('NAVSTATE'))
    LocalState.set('SIDE_NAV_STATE', !LocalState.get('SIDE_NAV_STATE'));
  }
}
