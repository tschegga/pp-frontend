// React
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import Ranking from './components/ranking/rankingController';
import LoginController from './components/LoginController';

import { Router, Route, Redirect } from 'react-router';

import createHistory from 'history/lib/createHashHistory';
const history = createHistory({queryKey: false});

const router = <Router history={history}>
    <Redirect from="/" to="/ranking"/>
    <Route path="/" component={Layout}>
        <Route path="ranking" component={Ranking}/>
        <Route path="login(/:redirect)" component={LoginController}/>
    </Route>
</Router>;

const mount = document.getElementById('pottpokalAppMountpoint');
ReactDOM.render(router, mount);