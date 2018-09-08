// React
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { auth } from './reducers/login'

import Layout from './components/Layout';
import Ranking from './components/ranking/rankingController';
import LoginController from './components/LoginController';
import SessionController from './components/sessions/SessionController';
import Home from './components/home/Home';
import NoMatch from './components/NoMatch';

import { Router, Route, Redirect } from 'react-router';

import createHistory from 'history/lib/createHashHistory';
const history = createHistory({queryKey: false});

//const store = createStore(auth);
const store = { id: 'me' }

const router = <Router history={history}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={Layout}>
        <Route path="home" render={(props) => <Home {...props} store={store} />} />
        <Route path="ranking" component={Ranking} />
        <Route path="login(/:redirect)" component={LoginController} />
        <Route path="sessions" component={SessionController} />
        <Route path="*" component={NoMatch} />
    </Route>
</Router>;

const mount = document.getElementById('pottpokalAppMountpoint');
ReactDOM.render(router, mount);