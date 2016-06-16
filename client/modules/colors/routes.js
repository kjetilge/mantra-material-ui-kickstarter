import React from 'react';
import {mount} from 'react-mounter';


import {
  AuthCheck,
  LayoutDefault,
  Simplest,
} from '../../configs/components.js';

export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/colors', {
    name: 'colors.list',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Simplest title="Color list"/>)
      });
    }
  });


  FlowRouter.route('/colors/add', {
    name: 'colors.add',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Simplest title="Color add"/>)
      });
    }
  });

  FlowRouter.route('/colors/rules', {
    name: 'colors.rulesd',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Simplest title="Color rules"/>)
      });
    }
  });


}
