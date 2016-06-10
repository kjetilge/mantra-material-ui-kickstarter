import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ToolbarWeb from '../components/toolbar_web.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ToolbarWeb);
