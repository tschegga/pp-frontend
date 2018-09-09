import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../common/store/store';

import Layout from './components/Layout';
import Ranking from './components/ranking/rankingController';
import LoginController from './components/LoginController';
import SessionController from './components/sessions/SessionController';
import Home from './components/home/Home';
import NoMatch from './components/NoMatch';

import { Router, Route, Redirect } from 'react-router';

import createHistory from 'history/lib/createHashHistory';
const history = createHistory({queryKey: false});

const router = (
    <Router history={history}>
        <Redirect from="/" to="/home" />
        <Route path="/" component={Layout}>
            <Route path="home" component={Home} />
            <Route path="ranking" component={Ranking} />
            <Route path="login(/:redirect)" component={LoginController} />
            <Route path="sessions" component={SessionController} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
);

const provider = (
    <Provider store={store}>
        {router}
    </Provider>
);
const mount = document.getElementById('pottpokalAppMountpoint');

ReactDOM.render(provider, mount);