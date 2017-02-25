import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Game from './components/Game/GameView.jsx'
import Login from './components/Login/LoginView.jsx'
import Home from './components/Home/HomeView.jsx'

render((
  <Router history={browserHistory}>
		<Route path="/" component={Login} onEnter={requireAuth} />
    <Route path="/game" component={Game} />
		<Route path="/home" component={Home} />
	</Router>
	), document.getElementById('app')
);

function requireAuth(nextState, replaceState) {
  console.log('outside if statement');
  if ( !!window.sessionStorage.getItem('user') ) {
    console.log('Inside if statement in requireAuth');
    // replaceState({
    //   nextPathName: nextState.location.pathName
    // }, '/game');
  }
};