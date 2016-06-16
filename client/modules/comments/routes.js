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

import {
  AuthCheck,
  LayoutDefault,
  //Simplest,
  //NotFound,
} from '../../configs/components.js';

/*
import Register from '/client/modules/app/components/AccountRegister/Wrapper.jsx';
import Login from '/client/modules/app//components/AccountLogin/Wrapper.jsx';
import Password from '/client/modules/app//components/AccountPassword/Wrapper.jsx';
import Profile from '/client/modules/app//components/AccountProfile/Wrapper.jsx';
import Account from '/client/modules/app//components/AccountAccount/Wrapper.jsx';
*/

import CommentList from './components/comment_list.js'
export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/comments', {
    name: 'app.home',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<CommentList />),
        requireUserId: true
      });
    }
  });
}
