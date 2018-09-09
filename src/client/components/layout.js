import React from 'react';

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
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);