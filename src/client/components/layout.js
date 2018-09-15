import React from 'react';

<<<<<<< HEAD
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
=======
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function UserGreeting(name) {
  return <p>Hello {name}</p>;
}

function GuestGreeting() {
  return <p>Please sign in</p>;
}

function Greeting(props) {
  const login = props.login;
  console.log(login);
  if (login.isLoggedIn) {
    return UserGreeting(login.name);
  } else {
    return GuestGreeting();
  }
}

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg fixed-top bg-light mb-4">
            <a className="navbar-brand" href="#">CoH-Pottpokal</a>
  
            <ul className="navbar-nav navbar-expand">
              <li className="nav-item active">
                <a className="nav-link" href="#/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/sessions">Sitzungen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/ranking">Ranking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/login">Login</a>
              </li>
            </ul>
            <Greeting login={this.props.login} />
          </nav>
        
          <div>
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import * as Actions from '../../common/actions';

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
>>>>>>> 8f9e86a117c724d53dceba07c7534028c02970c8
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);