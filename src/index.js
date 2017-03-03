import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Game from './components/Game/GameView.jsx'
import Login from './components/Login/LoginView.jsx'
import Home from './components/Home/HomeView.jsx'
import { IndexRedirect } from 'react-router'

render((
  <Router history={browserHistory}>
      <Route path="/" component={Login} onEnter={checkState}/>
      <Route path="/game/:roomname" component={Game} />
		<Route path="/home" component={Home} onEnter={requireAuth}/>
    <Route path="*" component={Login} />
	</Router>
	), document.getElementById('app'));


function requireAuth(nextState, replaceState) {
  console.log(nextState);
  if ( !window.sessionStorage.getItem('user') ) {
    console.log('Inside if statement in requireAuth');
    replaceState({
      pathname: '/'
    });
  }
};

function checkState(nextState, replaceState) {

  if ( window.sessionStorage.getItem('user') ) {
    console.log('already authenticated');
    replaceState({
      pathname: '/home'
    });
  }
}