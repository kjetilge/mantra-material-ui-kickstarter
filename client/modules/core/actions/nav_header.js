export default {
  toggleSideNav({LocalState}) {
    console.log("toggleSideNav")
    LocalState.set('SIDE_NAV_STATE', !LocalState.get('SIDE_NAV_STATE') || false);
  },
  toggleMobileView({LocalState}) {
    console.log("toggleMobileView")
    LocalState.set('MOBILE_VIEW', window.innerWidth < 1024);
  },
  toggleMobileRightMenu({LocalState}) {
    console.log("toggleMobileRightMenu")
    LocalState.set('MOBILE_RIGHT_MENU_OPEN', !LocalState.get('MOBILE_RIGHT_MENU_OPEN') || false); //initialize to false
  }

}
