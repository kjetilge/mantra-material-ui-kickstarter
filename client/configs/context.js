import * as Collections from '../../lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {Accounts} from 'meteor/accounts-base';
import _ from 'lodash';

import injectTapEventPlugin from 'react-tap-event-plugin';
//run injectTapEventPlugin only once
injectTapEventPlugin({});

const authCommon = function () {

  let userSubReady = Meteor.subscribe('users.current').ready();

  const userId = Meteor.userId() || null;
  const user = Meteor.user();
  const profile = _.get(Meteor.user(), 'profile', {} );
  const email = _.get(Meteor.user(), 'emails[0].address', {});

  return {
    userSubReady,
    userId,
    user,
    email,
    profile,
  };

};

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    Accounts,
    authCommon
  };
}
