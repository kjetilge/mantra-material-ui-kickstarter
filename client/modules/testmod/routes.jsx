/*
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

   FlowRouter.route('', {
     name: '',
     action() {
       mount(MainLayoutCtx, {
         content: () => (< />)
       });
     }
   });
}*/


import React from 'react';
import {mount} from 'react-mounter';

import {Accounts} from 'meteor/accounts-base';

import MyContainer from './containers/my_container.js'
import Badges from './components/badges.jsx'

import {
  AuthCheck,
  LayoutDefault,
  //Simplest,
  //NotFound,
} from '../../configs/components.js';


export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/testmod', {
    name: 'testmod',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<MyContainer />),
      });
    }
  });


  FlowRouter.route('/badges', {
    name: 'badges',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Badges />),
      });
    }
  });
}
