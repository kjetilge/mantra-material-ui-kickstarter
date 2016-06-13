import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const _authComposer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('PASSWORD_ERROR');
  onData(null, {error});
  // onData(null, null);

  // clearErrors when unmounting the component
  return clearErrors;
};


export const _authDepsMapper = (context, actions) => ({
  submitAction: actions.Account.forgotPassword,
  resetAction: actions.Account.resetPassword,
  getToken: actions.Account.getToken,
  clearErrors: actions.Account.registerErrorClear,
  context: () => context,
});

export default (component) => composeAll(
    composeWithTracker(_authComposer),
    useDeps(_authDepsMapper)
  )(component);
