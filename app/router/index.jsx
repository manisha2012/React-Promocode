import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Wall from 'Wall';
import Login from 'Login';
import Promo from 'Promo';
import firebase from 'app/firebase/';

//Middleware - if u are not logged in & manually try to enter in app, it will redirect to login page
var requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser) {
		alert("You need to login first!!");
		replace('/login');
	}
	next();
};

//Middleware that kicks u out of login page if u're already logged in
var redirectIfLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser) {
		replace('/promo');
	}
	next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
			<IndexRoute component={Wall}/>  //path is default
      <Route path="login" component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
		<Route path="promo" component={Promo} onEnter={requireLogin}/>
  </Router>
)
