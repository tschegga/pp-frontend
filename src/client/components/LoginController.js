import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }

  onChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  login() {
    this.props.doLogin(this.state.name);
  }

  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <h3>Login</h3>
        <input value={this.state.name} onChange={this.onChange} />
        <button type="button" className="btn btn-primary" onClick={this.login} >Login</button>
      </div>
    );
  }
}

import * as Actions from '../../common/actions';

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginController);