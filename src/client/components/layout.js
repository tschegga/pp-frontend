import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoggedInNavbar from './login/LoggedInNavbar';
import LoginModal from './login/LoginModal';
import LogoutModal from './login/LogoutModal';

function Layout(props) {
    console.log(props);
    const user = props.user;
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg fixed-top bg-light mb-4">
                    <a className="navbar-brand" href="#">CoH-Pottpokal</a>

                    <ul className="navbar-nav navbar-expand">
                        {user.loggedIn &&
                        <li className="nav-item active">
                            <a className="nav-link" href="#/home">Home</a>
                        </li>
                        }
                        {user.loggedIn &&
                        <li className="nav-item">
                            <a className="nav-link" href="#/sessions">Sitzungen</a>
                        </li>
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="#/ranking">Ranking</a>
                        </li>
                    </ul>
                    <LoggedInNavbar user={props.user} />
                </nav>
            
                <div>
                    <div>
                        {props.children}
                    </div>    
                </div>
            </div>
            <LoginModal />
            <LogoutModal />
        </div>
    );
}
Layout.propTypes = {
    children: React.PropTypes.element.isRequired
};

import * as Actions from '../../common/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);