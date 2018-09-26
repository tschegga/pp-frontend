import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line no-unused-vars
import styles from './loginModal.css';

class LoginModal extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            signUpMode: false
        };

        this.doAction = this.doAction.bind(this);
        this.toggleLoginSignup = this.toggleLoginSignup.bind(this);
        this.getChangeModeLine = this.getChangeModeLine.bind(this);
        this.getButton = this.getButton.bind(this);
    }

    doAction = () => {
        if (this.state.signUpMode) {
            //TODO: implement
            console.log('USER SHOULD BE CREATED NOW');
        } else {
            this.props.doLogin(this.state.username, this.state.password);
        }
        window.location.replace('#/home');
    }

    userInput = (e, stateDescriptor) => {
        let tmpSession = {};
        tmpSession[stateDescriptor] = e.target.value;
        this.setState(tmpSession);
    }

    toggleLoginSignup = () => {
        if (this.state.signUpMode) {
            this.setState({
                signUpMode: false
            });
        } else {
            this.setState({
                signUpMode: true
            });
        }
    }

    getChangeModeLine = () => {
        if (this.state.signUpMode) {
            return (
                <div className="col">
                    Already have an account? <button className="btn btn-link login-modal__mode-change" onClick={this.toggleLoginSignup}>Login</button>
                </div>
            );
        } else {
            return (
                <div className="col">
                    <div>Don't have an account? <button className="btn btn-link login-modal__mode-change" onClick={this.toggleLoginSignup}>Create one</button></div>
                </div>
            );
        }
    }

    getButton = () => {
        if (this.state.signUpMode) {
            return (
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={this.doAction}>Sign Up</button>

            );
        } else {
            return (
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.doAction}>Login</button>
            );
        }
    }

    render() {
        let changeModeLine = this.getChangeModeLine();
        let actionButton = this.getButton();

        return(
            <div className="modal fade" id="loginModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.state.signUpMode ? 'Sign Up' : 'Login'}</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input value={this.state.username} onChange={(event) => this.userInput(event, 'username')} type="text" className="form-control" id="usernameInput" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input value={this.state.password} onChange={(event) => this.userInput(event, 'password')} type="password" className="form-control" id="passwordInput" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {changeModeLine}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {actionButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

import * as Actions from '../../../common/actions/index';

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);