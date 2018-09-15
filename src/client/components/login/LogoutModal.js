import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const LogoutModal = (props) => {
    const doAction = () => {
        props.doLogout();
        window.location.replace('#/ranking');
    }

    return(
        <div className="modal fade" id="logoutModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Logout</h5>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            {props.user.username} do you really want to log out?
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={doAction}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);