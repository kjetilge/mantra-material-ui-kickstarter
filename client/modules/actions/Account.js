
export default {

  login({Meteor, LocalState, FlowRouter, Accounts}, email, password) {
    console.log("email",email)
    console.log("password",password)

    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Login & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      FlowRouter.go('/account');
    });

  },

  loginErrorClear({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },

  register({Meteor, LocalState, FlowRouter, Accounts}, email, password1, password2) {

    if (!email || !password1 || !password2) {
      return LocalState.set('REGISTER_ERROR', 'Please fill out all the required fileds!');
    }

    if (password1 !== password2 ) {
      return LocalState.set('REGISTER_ERROR', 'Passwords do not match!');
    }

    Accounts.createUser({email, password: password1}, (err) => {
      if (err && err.reason) {
        return LocalState.set('REGISTER_ERROR', err.reason);
      }
      FlowRouter.go('/account');
    });
  },

  forgotPassword({Meteor, LocalState, FlowRouter, Accounts}, email) {
    if (!email) {
      return LocalState.set('FORGOT_PASSWORD_ERROR', 'Vennligs fyll ut epostfeltet');
    }
    const options = {}
    options.email = email

    Accounts.forgotPassword(options, (err) => {
      if(err && err.reaseon) {
        return LocalState.set('FORGOT_PASSWORD_ERROR', err.reaseon);
      }
      console.log("reset email was sent")
    })
  },

  resetPassword({Meteor, LocalState, FlowRouter, Accounts}, password1, password2, token) {
    if (!password1 || !password2) {
      return LocalState.set('FORGOT_PASSWORD_ERROR', 'Vi trenger to passord!');
    }

    if (password1 !== password2 ) {
      return LocalState.set('FORGOT_PASSWORD_ERROR', 'Passordene er ikke like!');
    }

    Accounts.resetPassword(token, password1, (err) => {
      if(err && err.reaseon) {
        return LocalState.set('FORGOT_PASSWORD_ERROR', err.reaseon);
      } else {
        FlowRouter.go('/account');
      }
    })

  },

  registerErrorClear({LocalState}) {
    return LocalState.set('REGISTER_ERROR', null);
  },
  getToken({LocalState, FlowRouter}) {
    console.log("FlowRouter.getParam('token')", FlowRouter.getParam('token'))
    const token = FlowRouter.getParam('token')
    if(!!token) {
      return FlowRouter.getParam('token')
    } else {
      return false;
    }

  }

};
