import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
import Game from 'Game/GameView.jsx'
import Login from 'Login/LoginView'
import Home from 'Home/HomeView'

render(
    <Router>
        <Route path="/" component={Game}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
    </Router>,
    document.getElementById('app')
);
