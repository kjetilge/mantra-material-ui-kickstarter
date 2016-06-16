export default {
  toggleMobileRightMenu({LocalState}) {
    console.log("user contr toggleMobileRightMenu")
    LocalState.set('MOBILE_RIGHT_MENU_OPEN', !LocalState.get('MOBILE_RIGHT_MENU_OPEN') || false); //initialize to false
  }
}
