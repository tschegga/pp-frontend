import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../common/store/store';

import Layout from './components/Layout';
import Ranking from './components/ranking/rankingController';
import Sessions from './components/sessions/Sessions';
import Home from './components/home/Home';
import NoMatch from './components/NoMatch';

import { Router, Route, Redirect } from 'react-router';

import createHistory from 'history/lib/createHashHistory';
const history = createHistory({queryKey: false});

// All routes for the application
const router = <Router history={history}>
    <Redirect from="/" to="/ranking" />
    <Route path="/" component={Layout}>
        <Route path="home" component={Home} />
        <Route path="ranking" component={Ranking} />
        <Route path="sessions" component={Sessions} />
        <Route path="*" component={NoMatch} />
    </Route>
</Router>;

// Provider for redux store
const provider = (
    <Provider store={store}>
        {router}
    </Provider>
);

// Mount point for the application
const mount = document.getElementById('pottpokalAppMountpoint');

ReactDOM.render(provider, mount);