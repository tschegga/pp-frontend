import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../../common/actions/index';

const LogoutModal = (props) => {
    const doAction = () => {
        props.doLogout();
        window.location.replace('#/ranking');
    };

    const { user: { username } } = props;
    return (
        <div className="modal fade" id="logoutModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Logout</h5>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            {username}
                            &nbsp;do you really want to log out?
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
};

LogoutModal.propTypes = {
    user: PropTypes.element.isRequired,
    doLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);
