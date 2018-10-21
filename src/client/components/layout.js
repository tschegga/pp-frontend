import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    Switch,
    Route,
    withRouter,
    Redirect,
} from 'react-router-dom';

import LoggedInNavbar from './login/LoggedInNavbar';
import LoginModal from './login/LoginModal';
import LogoutModal from './login/LogoutModal';

import * as Actions from '../../common/actions';
import Ranking from './ranking/rankingController';
import Sessions from './sessions/Sessions';
import AddSession from './sessions/AddSession';
import Home from './home/Home';
import NoMatch from './NoMatch';


function Layout(props) {
    console.log(props);
    const { user } = props;
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg fixed-top bg-light mb-4">
                    <a className="navbar-brand" href="#/home">CoH-Pottpokal</a>

                    <ul className="navbar-nav navbar-expand">
                        {user.loggedIn
                        && (
                            <li className="nav-item active">
                                <a className="nav-link" href="#/home">Home</a>
                            </li>
                        )}
                        {user.loggedIn
                        && (
                            <li className="nav-item">
                                <a className="nav-link" href="#/sessions">Sitzungen</a>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="#/ranking">Ranking</a>
                        </li>
                    </ul>
                    <LoggedInNavbar user={user} />
                </nav>

                <div>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/nomatch" />
                        </Route>
                        <Route path="/home" component={Home} />
                        <Route path="/ranking" component={Ranking} />
                        <Route path="/sessions" component={Sessions} />
                        <Route path="/login" component={LoginModal} />
                        <Route path="/addsession" component={AddSession} />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </div>
            </div>
            <LogoutModal />
        </div>
    );
}

Layout.propTypes = {
    user: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
