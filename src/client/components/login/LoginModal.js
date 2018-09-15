import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginModal extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.doAction = this.doAction.bind(this);
    }

    doAction = () => {
        this.props.doLogin(this.state.username, this.state.password);
        window.location.replace('#/home');
    }

    userInput = (e, stateDescriptor) => {
        let tmpSession = {};
        tmpSession[stateDescriptor] = e.target.value;
        this.setState(tmpSession);
    }

    render() {
        return(
            <div className="modal fade" id="loginModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
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
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.doAction}>Login</button>
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