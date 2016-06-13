/*
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const _registerComposer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('FORGOT_PASSWORD_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const _registerDepsMapper = (context, actions) => ({
  submitAction: actions.Account.forgotPassword,
  resetAction: actions.Account.resetPassword,
  getToken: actions.Account.getToken,
  clearErrors: actions.Account.registerErrorClear,
  context: () => context,
});

export default (component) => composeAll(
    composeWithTracker(_registerComposer),
    useDeps(_registerDepsMapper)
  )(component);
  */
