import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Game from './components/Game/GameView.jsx'
import Login from './components/Login/LoginView.jsx'
import Home from './components/Home/HomeView.jsx'

render((
  <Router history={hashHistory}>
		<Route path="/" component={Login} />
    <Route path="/game" component={Game} />
		<Route path="/home" component={Home} />
	</Router>
	), document.getElementById('app')
);