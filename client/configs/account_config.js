import {FlowRouter} from 'meteor/kadira:flow-router';
Accounts.onResetPasswordLink( function(token) {
    console.log("onResetPasswordLink token", token)
    FlowRouter.go('/reset-password/'+token)
});
