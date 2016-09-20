//router can decide whether users must be logged in to see a certain page

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import { UserAuthWrapper } from 'redux-auth-wrapper'; //if we can wrap this around other components it can manage authentication for each compononent(becomes higher order compononent)
import Dashboard from './components/Dashboard';
import Login from './components/Login';


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth, //used to identify if a user is logged in or not
  predicate: auth => auth.isAuthenticated, //which feild determines whether a user is logged in or not
  redirectAction: history.push, //you can use any router with this - need to be specific (how to move user around)
  failureRedirectPath: '/login',  //login is the default you can set it to something else
  wrapperDisplayName: 'UserIsAuthenticated' //what it looks like in redux dev tools
});


export default (
  <Route>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={UserIsAuthenticated(Dashboard)} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
//you cannot get to dashboard without being logged in
