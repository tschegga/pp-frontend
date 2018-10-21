import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../../common/actions/index';

import styles from './loginModal.css'; // eslint-disable-line no-unused-vars

class LoginModal extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            signUpMode: false,
        };

        this.doAction = this.doAction.bind(this);
        this.toggleLoginSignup = this.toggleLoginSignup.bind(this);
        this.getChangeModeLine = this.getChangeModeLine.bind(this);
        this.getButton = this.getButton.bind(this);
    }

    getChangeModeLine() {
        const { signUpMode } = this.state;
        if (signUpMode) {
            return (
                <div className="col">
                    Already have an account?&bnsp;
                    <button type="button" className="btn btn-link login-modal__mode-change" onClick={this.toggleLoginSignup}>Login</button>
                </div>
            );
        }

        return (
            <div className="col">
                <div>
                    Don&apos;t have an account?&bnsp;
                    <button type="button" className="btn btn-link login-modal__mode-change" onClick={this.toggleLoginSignup}>Create one</button>
                </div>
            </div>
        );
    }

    getButton() {
        const { signUpMode } = this.state;

        if (signUpMode) {
            return (
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={this.doAction}>Sign Up</button>
            );
        }

        // return login button
        return (
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.doAction}>Login</button>
        );
    }

    doAction() {
        const { signUpMode, username, password } = this.state;
        const { doLogin } = this.props;

        if (signUpMode) {
            // TODO: implement
            console.log('USER SHOULD BE CREATED NOW');
        } else {
            doLogin(username, password);
        }
        window.location.replace('#/home');
    }

    userInput(e, stateDescriptor) {
        const tmpSession = {};
        tmpSession[stateDescriptor] = e.target.value;
        this.setState(tmpSession);
    }

    toggleLoginSignup() {
        const { signUpMode } = this.state;

        if (signUpMode) {
            this.setState({
                signUpMode: false,
            });
        } else {
            this.setState({
                signUpMode: true,
            });
        }
    }

    render() {
        const changeModeLine = this.getChangeModeLine();
        const actionButton = this.getButton();
        const { signUpMode, username, password } = this.state;
        return (
            <div>
                <div>
                    <div>
                        <div>
                            <h5>{signUpMode ? 'Sign Up' : 'Login'}</h5>
                        </div>
                        <div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="usernameInput">
                                                Username
                                                <input value={username} onChange={event => this.userInput(event, 'username')} type="text" className="form-control" id="usernameInput" />
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="passwordInput">
                                                Password
                                                <input value={password} onChange={event => this.userInput(event, 'password')} type="password" className="form-control" id="passwordInput" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {changeModeLine}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {actionButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginModal.propTypes = {
    doLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
