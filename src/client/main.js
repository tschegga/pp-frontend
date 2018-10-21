import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../common/store/store';

import Layout from './components/Layout';

// All routes for the application
const router = (
    <HashRouter>
        <Layout />
    </HashRouter>
);

// Provider for redux store
const provider = (
    <Provider store={store}>
        {router}
    </Provider>
);

// Mount point for the application
const mount = document.getElementById('pottpokalAppMountpoint');

ReactDOM.render(provider, mount);
