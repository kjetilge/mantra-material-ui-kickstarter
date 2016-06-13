import {FlowRouter} from 'meteor/kadira:flow-router';

Accounts.onResetPasswordLink( function(token) {
    console.log("onResetPasswordLink token", token)
    FlowRouter.go('/reset-password/'+token)
});

Accounts.onEmailVerificationLink((token, done) => {
  console.log("verifying email")
  Accounts.verifyEmail(token, (error) => {
    if (!error) {
      console.log("EmailVerificationLink OK, token:", token)
    } else {
      console.log("EmailVerificationLink error", error)
    }
    console.log("EmailVerificationLink done",)
    done();
  });
})
